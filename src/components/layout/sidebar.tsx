"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Users, Settings, Map, BarChart2, Ticket, ChevronDown } from "lucide-react"
import { motion } from "framer-motion"

export function Sidebar() {
  const pathname = usePathname()
  const [clientesOpen, setClientesOpen] = useState(true)

  const isActive = (path: string) => {
    return pathname === path || pathname?.startsWith(path + "/")
  }

  // Animaciones
  const sidebarVariants = {
    hidden: { x: -300 },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
  }

  return (
    <motion.aside
      className="w-64 bg-[#5E3583] text-white"
      initial="hidden"
      animate="visible"
      variants={sidebarVariants}
    >
      <motion.div className="p-4 flex items-center space-x-2" variants={itemVariants}>
        <span className="text-2xl font-bold">Hemmy</span>
      </motion.div>

      <nav className="mt-6">
        <ul className="space-y-1">
          <motion.li variants={itemVariants}>
            <Link
              href="/dashboard"
              className={`flex items-center px-4 py-3 text-sm ${
                isActive("/dashboard") && !isActive("/dashboard/clientes") && !isActive("/dashboard/pagos")
                  ? "bg-white/10 border-l-4 border-white"
                  : "hover:bg-white/5"
              } transition-colors duration-200`}
            >
              <Home className="h-5 w-5 mr-3" />
              Panel Principal
            </Link>
          </motion.li>

          <motion.li variants={itemVariants}>
            <Link
              href="/dashboard/tickets"
              className={`flex items-center px-4 py-3 text-sm ${
                isActive("/dashboard/tickets") ? "bg-white/10 border-l-4 border-white" : "hover:bg-white/5"
              } transition-colors duration-200`}
            >
              <Ticket className="h-5 w-5 mr-3" />
              Gestión de Tickets
            </Link>
          </motion.li>

          <motion.li variants={itemVariants}>
            <Link
              href="/dashboard/empleados"
              className={`flex items-center px-4 py-3 text-sm ${
                isActive("/dashboard/empleados") ? "bg-white/10 border-l-4 border-white" : "hover:bg-white/5"
              } transition-colors duration-200`}
            >
              <Users className="h-5 w-5 mr-3" />
              Empleados
            </Link>
          </motion.li>

          <motion.li variants={itemVariants}>
            <Link
              href="/dashboard/servicios"
              className={`flex items-center px-4 py-3 text-sm ${
                isActive("/dashboard/servicios") ? "bg-white/10 border-l-4 border-white" : "hover:bg-white/5"
              } transition-colors duration-200`}
            >
              <Map className="h-5 w-5 mr-3" />
              Mapa de Servicios
            </Link>
          </motion.li>

          <motion.li variants={itemVariants}>
            <Link
              href="/dashboard/reportes"
              className={`flex items-center px-4 py-3 text-sm ${
                isActive("/dashboard/reportes") ? "bg-white/10 border-l-4 border-white" : "hover:bg-white/5"
              } transition-colors duration-200`}
            >
              <BarChart2 className="h-5 w-5 mr-3" />
              Reportes
            </Link>
          </motion.li>

          <motion.li variants={itemVariants}>
            <button
              onClick={() => setClientesOpen(!clientesOpen)}
              className={`flex items-center justify-between w-full px-4 py-3 text-sm ${
                isActive("/dashboard/clientes") || isActive("/dashboard/pagos")
                  ? "bg-white/10 border-l-4 border-white"
                  : "hover:bg-white/5"
              } transition-colors duration-200`}
            >
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-3" />
                Clientes
              </div>
              <motion.div animate={{ rotate: clientesOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                <ChevronDown className="h-4 w-4" />
              </motion.div>
            </button>

            <motion.ul
              className="pl-12 space-y-1 bg-white/5 overflow-hidden"
              animate={{
                height: clientesOpen ? "auto" : 0,
                opacity: clientesOpen ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <li>
                <Link
                  href="/dashboard/clientes"
                  className={`block py-2 text-sm ${
                    pathname === "/dashboard/clientes" ? "text-white font-medium" : "text-white/80 hover:text-white"
                  } transition-colors duration-200`}
                >
                  Registro de Clientes
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/pagos"
                  className={`block py-2 text-sm ${
                    pathname === "/dashboard/pagos" ? "text-white font-medium" : "text-white/80 hover:text-white"
                  } transition-colors duration-200`}
                >
                  Registro de Pagos
                </Link>
              </li>
            </motion.ul>
          </motion.li>

          <motion.li variants={itemVariants}>
            <Link
              href="/dashboard/configuracion"
              className={`flex items-center px-4 py-3 text-sm ${
                isActive("/dashboard/configuracion") ? "bg-white/10 border-l-4 border-white" : "hover:bg-white/5"
              } transition-colors duration-200`}
            >
              <Settings className="h-5 w-5 mr-3" />
              Configuración
            </Link>
          </motion.li>
        </ul>
      </nav>

      <motion.div className="absolute bottom-0 w-64 p-4 bg-[#4c2a6a]" variants={itemVariants}>
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white">A</div>
          <div>
            <div className="text-sm font-medium">Administrador</div>
            <div className="text-xs text-white/70">admin@grupohemmy.com</div>
          </div>
        </div>
      </motion.div>
    </motion.aside>
  )
}

