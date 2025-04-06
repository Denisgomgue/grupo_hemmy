"use client"

import { useState } from "react"
import { Bell, ChevronDown, RefreshCw, Users, AlertCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
  const [showNotifications, setShowNotifications] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-4 md:px-6">
      <motion.div
        className="flex items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-xl font-semibold text-gray-800">Gestión de Clientes</h1>
      </motion.div>

      <motion.div
        className="flex items-center space-x-2 md:space-x-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <motion.button
          className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <RefreshCw className="h-5 w-5 text-gray-500" />
        </motion.button>

        <div className="relative">
          <motion.button
            className="p-2 rounded-full hover:bg-gray-100 relative transition-colors duration-200"
            onClick={() => setShowNotifications(!showNotifications)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Bell className="h-5 w-5 text-gray-500" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </motion.button>

          <AnimatePresence>
            {showNotifications && (
              <motion.div
                className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg z-10 border border-gray-200"
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-3 border-b border-gray-200">
                  <h3 className="text-sm font-semibold">Notificaciones</h3>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  <motion.div
                    className="p-3 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200"
                    whileHover={{ backgroundColor: "rgba(243, 244, 246, 1)" }}
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-blue-100 rounded-full p-2">
                        <Users className="h-4 w-4 text-blue-600" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium">Nuevo cliente registrado</p>
                        <p className="text-xs text-gray-500">Hace 5 minutos</p>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    className="p-3 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200"
                    whileHover={{ backgroundColor: "rgba(243, 244, 246, 1)" }}
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-red-100 rounded-full p-2">
                        <AlertCircle className="h-4 w-4 text-red-600" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium">Pago vencido</p>
                        <p className="text-xs text-gray-500">Hace 1 hora</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
                <div className="p-2 border-t border-gray-200">
                  <button className="w-full text-center text-sm text-[#5E3583] hover:underline transition-colors duration-200">
                    Ver todas las notificaciones
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="relative">
          <motion.button
            className="flex items-center space-x-2"
            onClick={() => setShowUserMenu(!showUserMenu)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">A</div>
            <div className="hidden md:block text-sm text-right">
              <div className="font-medium">Admin</div>
              <div className="text-xs text-gray-500">Administrador</div>
            </div>
            <motion.div animate={{ rotate: showUserMenu ? 180 : 0 }} transition={{ duration: 0.3 }}>
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </motion.div>
          </motion.button>

          <AnimatePresence>
            {showUserMenu && (
              <motion.div
                className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200"
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                  >
                    Mi perfil
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                  >
                    Configuración
                  </a>
                  <a
                    href="/login"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                  >
                    Cerrar sesión
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </header>
  )
}

