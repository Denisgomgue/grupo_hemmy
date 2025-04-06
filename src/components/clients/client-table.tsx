"use client"

import { motion } from "framer-motion"

export function ClientTable() {
  const clients = [
    {
      id: 1,
      name: "González, María",
      sector: "Centro",
      plan: "Premium",
      price: 69.99,
      service: "Fibra óptica",
      speed: "50 Mbps",
      nextPayment: "31/05/2023",
      status: "Pendiente",
      state: "Activo",
      paymentStatus: "Al día",
    },
    {
      id: 2,
      name: "Pérez, Juan",
      sector: "Norte",
      plan: "Estándar",
      price: 49.99,
      service: "Inalámbrico",
      speed: "25 Mbps",
      nextPayment: "02/06/2023",
      status: "Adelantado",
      state: "Activo",
      paymentStatus: "Por vencer",
    },
    {
      id: 3,
      name: "Díaz, Roberto",
      sector: "Sur",
      plan: "Ultra",
      price: 99.99,
      service: "Fibra óptica",
      speed: "100 Mbps",
      nextPayment: "09/05/2023",
      status: "Pendiente",
      state: "Cortado",
      paymentStatus: "En mora",
    },
    {
      id: 4,
      name: "Martínez, Laura",
      sector: "Este",
      plan: "Ultra",
      price: 99.99,
      service: "Fibra óptica",
      speed: "200 Mbps",
      nextPayment: "21/06/2023",
      status: "Adelantado",
      state: "Activo",
      paymentStatus: "Al día",
    },
  ]

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-all"
                  type="checkbox"
                  className="w-4 h-4 text-[#5E3583] bg-gray-100 border-gray-300 rounded focus:ring-[#5E3583]"
                />
                <label htmlFor="checkbox-all" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              Cliente
            </th>
            <th scope="col" className="px-6 py-3">
              Plan
            </th>
            <th scope="col" className="px-6 py-3">
              Servicio
            </th>
            <th scope="col" className="px-6 py-3">
              Próximo Pago
            </th>
            <th scope="col" className="px-6 py-3">
              Estado
            </th>
            <th scope="col" className="px-6 py-3">
              Opciones
            </th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client, index) => (
            <motion.tr
              key={client.id}
              className="bg-white border-b hover:bg-gray-50 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ backgroundColor: "rgba(243, 244, 246, 1)" }}
            >
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id={`checkbox-${client.id}`}
                    type="checkbox"
                    className="w-4 h-4 text-[#5E3583] bg-gray-100 border-gray-300 rounded focus:ring-[#5E3583]"
                  />
                  <label htmlFor={`checkbox-${client.id}`} className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 mr-3">
                    {client.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{client.name}</div>
                    <div className="text-xs text-gray-500">Sector: {client.sector}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="font-medium">{client.plan}</div>
                <div className="text-xs text-gray-500">${client.price}/mes</div>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  {client.service === "Fibra óptica" ? (
                    <svg
                      className="w-4 h-4 text-[#5E3583] mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-4 h-4 text-blue-500 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                      />
                    </svg>
                  )}
                  <div>
                    <div>{client.service}</div>
                    <div className="text-xs text-gray-500">{client.speed}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div>{client.nextPayment}</div>
                <div className="text-xs text-gray-500">{client.status}</div>
              </td>
              <td className="px-6 py-4">
                <div className="flex flex-col">
                  <motion.div
                    className={`text-xs font-medium rounded-full px-2 py-1 text-center ${
                      client.state === "Activo"
                        ? "bg-green-100 text-green-800"
                        : client.state === "Cortado"
                          ? "bg-red-100 text-red-800"
                          : "bg-amber-100 text-amber-800"
                    }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {client.state}
                  </motion.div>
                  <motion.div
                    className={`mt-1 text-xs font-medium rounded-full px-2 py-1 text-center ${
                      client.paymentStatus === "Al día"
                        ? "bg-green-50 text-green-600 border border-green-200"
                        : client.paymentStatus === "En mora"
                          ? "bg-red-50 text-red-600 border border-red-200"
                          : "bg-amber-50 text-amber-600 border border-amber-200"
                    }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {client.paymentStatus}
                  </motion.div>
                </div>
              </td>
              <td className="px-6 py-4">
                <motion.button
                  className="text-gray-500 hover:text-[#5E3583] transition-colors duration-200"
                  whileHover={{ scale: 1.2, rotate: 180 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                  </svg>
                </motion.button>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

