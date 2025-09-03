"use client"

import React from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { motion } from "framer-motion"

type LoginFormInputs = {
  email: string
  password: string
  remember: boolean
}

const LoginPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>()

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    console.log("Datos del login:", data)
    
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-gray-700"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">Portal de Inscripción</h1>
          <p className="text-gray-400 text-sm mt-2">
            Accede con tu cuenta institucional
          </p>
        </div>

        {/* 🔹 Formulario con react-hook-form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="ejemplo@instituto.edu.ar"
              {...register("email", {
                required: "El email es obligatorio",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Formato de email inválido",
                },
              })}
              className="w-full px-4 py-3 rounded-xl bg-gray-800 text-gray-200 placeholder-gray-500 border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Contraseña */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Contraseña
            </label>
            <input
              type="password"
              placeholder="••••••••"
              {...register("password", {
                required: "La contraseña es obligatoria",
                minLength: {
                  value: 6,
                  message: "Debe tener al menos 6 caracteres",
                },
              })}
              className="w-full px-4 py-3 rounded-xl bg-gray-800 text-gray-200 placeholder-gray-500 border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Recordarme + link */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center text-gray-400">
              <input
                type="checkbox"
                {...register("remember")}
                className="mr-2 accent-blue-500"
              />
              Recordarme
            </label>
            <a href="#" className="text-blue-500 hover:underline">
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          {/* Botón submit */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transition"
          >
            Ingresar
          </motion.button>
        </form>

        {/* Footer */}
        <p className="text-gray-400 text-xs text-center mt-6">
          ¿No tenes una cuenta?{" "}
          <a href="/register" className="text-blue-500 hover:underline">
            Registrarte aqui
          </a>
        </p>
        <p className="text-gray-400 text-xs text-center mt-6">
          © {new Date().getFullYear()} Aula link. Todos los derechos reservados.
        </p>
      </motion.div>
    </div>
  )
}

export default LoginPage
