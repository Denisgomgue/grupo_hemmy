"use client"

import { motion } from "framer-motion"
import { ClientTable } from "../../../components/clients/client-table"

export default function ClientesPage() {
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
        Gestión de Clientes
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
              <p className="text-sm text-gray-500">Próximos a Vencer</p>
              <p className="text-2xl font-bold">18</p>
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
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
          <p className="text-xs text-amber-600 mt-2">Vencen en los próximos 7 días</p>
        </motion.div>

        <motion.div
          className="bg-white p-4 rounded-lg border-l-4 border-red-500 shadow hover:shadow-md transition-shadow duration-300"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500">En Mora</p>
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
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
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
              <p className="text-sm text-gray-500">Realizaron Abono</p>
              <p className="text-2xl font-bold">35</p>
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
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
          <p className="text-xs text-green-600 mt-2">Este mes</p>
        </motion.div>
      </motion.div>

      <motion.div className="bg-white rounded-lg shadow" variants={itemVariants}>
        <div className="flex border-b overflow-x-auto">
          <button className="px-4 py-2 text-sm font-medium text-[#5E3583] border-b-2 border-[#5E3583] whitespace-nowrap">
            Todos
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-[#5E3583] whitespace-nowrap">
            Activos
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-[#5E3583] whitespace-nowrap">
            Suspendidos
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-[#5E3583] whitespace-nowrap">
            Cortados
          </button>
        </div>

        <div className="p-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0 mb-4">
            <div className="relative w-full md:w-auto md:min-w-[300px]">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="search"
                className="block w-full p-2 pl-10 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#5E3583] focus:border-[#5E3583]"
                placeholder="Buscar cliente..."
              />
            </div>

            <div className="flex flex-wrap gap-2">
              <motion.button
                className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Importar
              </motion.button>
              <motion.button
                className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Filtrar
              </motion.button>
              <motion.button
                className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ordenar
              </motion.button>
            </div>
          </div>

          <ClientTable />
        </div>
      </motion.div>
    </motion.div>
  )
}

