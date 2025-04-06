"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Lock, User, Shield, Wifi } from "lucide-react"
import { motion } from "framer-motion"

export default function LoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Simulamos una autenticación exitosa
      await new Promise((resolve) => setTimeout(resolve, 1000))
      router.push("/dashboard")
    } catch (error) {
      console.error("Error de autenticación:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#5E3583] relative overflow-hidden">
      {/* Patrón de fondo */}
      <div className="absolute inset-0 bg-[url('/images/circuit-pattern.svg')] bg-repeat opacity-10"></div>

      {/* Círculos decorativos */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#8A5DC0] rounded-tl-full opacity-20"></div>
      <div className="absolute top-0 left-0 w-60 h-60 bg-[#8A5DC0] rounded-br-full opacity-20"></div>

      {/* Logo o título */}
      <div className="text-white text-3xl font-bold mb-8 z-10">Grupo HEMMY</div>

      {/* Tarjeta de login */}
      <motion.div
        className="w-full max-w-md bg-white rounded-xl shadow-xl overflow-hidden z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-[#5E3583] p-6 text-white">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-2xl font-bold">Bienvenido</h1>
            <div className="flex space-x-2">
              <Shield size={18} />
              <Wifi size={18} />
            </div>
          </div>
          <p className="text-sm opacity-90">Inicia sesión para acceder al panel administrativo de Grupo HEMMY</p>
        </div>

        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-[#5E3583]">
                  <User size={18} />
                </div>
                <input
                  type="text"
                  placeholder="Usuario"
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-white pl-10 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#5E3583] focus:border-transparent"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-[#5E3583]">
                  <Lock size={18} />
                </div>
                <input
                  type="password"
                  placeholder="Contraseña"
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-white pl-10 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#5E3583] focus:border-transparent"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-[#5E3583] focus:ring-[#5E3583] border-gray-300 rounded"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-600">
                  Recordar usuario
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="text-[#5E3583] hover:underline">
                  Olvidé mi contraseña
                </a>
              </div>
            </div>

            <motion.button
              type="submit"
              className="w-full h-10 bg-[#5E3583] hover:bg-[#4c2a6a] text-white rounded-md font-medium transition-colors duration-200"
              disabled={isLoading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Iniciando sesión...
                </div>
              ) : (
                "Iniciar sesión"
              )}
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  )
}

