"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Lock, User, Wifi, Shield } from "lucide-react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

export function LoginForm() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Aquí iría la llamada a la API de autenticación
      // const response = await fetch('/api/auth/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ username, password }),
      // })

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
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
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
              <Input
                type="text"
                placeholder="Usuario"
                className="pl-10 border-gray-300 focus:border-[#5E3583] focus:ring-[#5E3583]"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-[#5E3583]">
                <Lock size={18} />
              </div>
              <Input
                type="password"
                placeholder="Contraseña"
                className="pl-10 border-gray-300 focus:border-[#5E3583] focus:ring-[#5E3583]"
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

          <Button
            type="submit"
            className="w-full bg-[#5E3583] hover:bg-[#4c2a6a] text-white py-2 px-4 rounded-md"
            disabled={isLoading}
          >
            {isLoading ? "Iniciando sesión..." : "Iniciar sesión"}
          </Button>
        </form>
      </div>
    </div>
  )
}

