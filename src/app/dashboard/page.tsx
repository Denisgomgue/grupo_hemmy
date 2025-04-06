"use client"

import { motion } from "framer-motion"

export default function DashboardPage() {
  // Animaciones
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  }

  return (
    <motion.div className="p-4 md:p-6" initial="hidden" animate="visible" variants={containerVariants}>
      <motion.h1 className="text-2xl font-bold mb-6" variants={itemVariants}>
        Panel Principal
      </motion.h1>

      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8" variants={containerVariants}>
        <motion.div
          className="bg-white p-4 rounded-lg border-l-4 border-[#5E3583] shadow hover:shadow-md transition-shadow duration-300"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500">Total Clientes</p>
              <p className="text-2xl font-bold">125</p>
            </div>
            <div className="bg-[#5E3583]/10 p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#5E3583]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
          </div>
          <p className="text-xs text-green-600 mt-2">+3 desde el mes pasado</p>
        </motion.div>

        <motion.div
          className="bg-white p-4 rounded-lg border-l-4 border-amber-500 shadow hover:shadow-md transition-shadow duration-300"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500">Tickets Abiertos</p>
              <p className="text-2xl font-bold">24</p>
            </div>
            <div className="bg-amber-500/10 p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-amber-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                />
              </svg>
            </div>
          </div>
          <p className="text-xs text-amber-600 mt-2">5 nuevos hoy</p>
        </motion.div>

        <motion.div
          className="bg-white p-4 rounded-lg border-l-4 border-red-500 shadow hover:shadow-md transition-shadow duration-300"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500">Pagos Pendientes</p>
              <p className="text-2xl font-bold">12</p>
            </div>
            <div className="bg-red-500/10 p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
          <p className="text-xs text-red-600 mt-2">+2 desde la semana pasada</p>
        </motion.div>

        <motion.div
          className="bg-white p-4 rounded-lg border-l-4 border-green-500 shadow hover:shadow-md transition-shadow duration-300"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500">Ingresos Mensuales</p>
              <p className="text-2xl font-bold">$8,540</p>
            </div>
            <div className="bg-green-500/10 p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
          </div>
          <p className="text-xs text-green-600 mt-2">+12% este mes</p>
        </motion.div>
      </motion.div>

      <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-6" variants={containerVariants}>
        <motion.div
          className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow duration-300"
          variants={itemVariants}
        >
          <h2 className="text-lg font-semibold mb-4">Actividad Reciente</h2>
          <div className="space-y-4">
            <motion.div
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ x: 5 }}
            >
              <div className="bg-blue-100 p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium">Nuevo cliente registrado</p>
                <p className="text-xs text-gray-500">Hace 10 minutos</p>
              </div>
            </motion.div>
            <motion.div
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ x: 5 }}
            >
              <div className="bg-green-100 p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium">Pago recibido</p>
                <p className="text-xs text-gray-500">Hace 1 hora</p>
              </div>
            </motion.div>
            <motion.div
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ x: 5 }}
            >
              <div className="bg-amber-100 p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-amber-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium">Nuevo ticket creado</p>
                <p className="text-xs text-gray-500">Hace 3 horas</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow duration-300"
          variants={itemVariants}
        >
          <h2 className="text-lg font-semibold mb-4">Próximos Vencimientos</h2>
          <div className="space-y-3">
            <motion.div
              className="flex justify-between items-center p-2 hover:bg-gray-50 rounded cursor-pointer transition-colors duration-200"
              whileHover={{ backgroundColor: "rgba(243, 244, 246, 1)", x: 5 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 mr-3">
                  G
                </div>
                <div>
                  <p className="text-sm font-medium">González, María</p>
                  <p className="text-xs text-gray-500">Premium - $69.99</p>
                </div>
              </div>
              <div className="text-sm text-amber-600 font-medium">En 2 días</div>
            </motion.div>
            <motion.div
              className="flex justify-between items-center p-2 hover:bg-gray-50 rounded cursor-pointer transition-colors duration-200"
              whileHover={{ backgroundColor: "rgba(243, 244, 246, 1)", x: 5 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 mr-3">
                  P
                </div>
                <div>
                  <p className="text-sm font-medium">Pérez, Juan</p>
                  <p className="text-xs text-gray-500">Estándar - $49.99</p>
                </div>
              </div>
              <div className="text-sm text-amber-600 font-medium">En 3 días</div>
            </motion.div>
            <motion.div
              className="flex justify-between items-center p-2 hover:bg-gray-50 rounded cursor-pointer transition-colors duration-200"
              whileHover={{ backgroundColor: "rgba(243, 244, 246, 1)", x: 5 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 mr-3">
                  M
                </div>
                <div>
                  <p className="text-sm font-medium">Martínez, Laura</p>
                  <p className="text-xs text-gray-500">Ultra - $99.99</p>
                </div>
              </div>
              <div className="text-sm text-amber-600 font-medium">En 5 días</div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

