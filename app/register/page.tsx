"use client"

import React from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { motion } from "framer-motion"

type RegisterFormInputs = {
  fullName: string
  dni: string
  birthDate: string
  age: number
  email: string
  password: string
  confirmPassword: string
}

const RegisterPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormInputs>()

  const onSubmit: SubmitHandler<RegisterFormInputs> = (data) => {
    console.log("Datos del registro:", data)
   
  }

  
  const password = watch("password")

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-2xl bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-gray-700"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">Crear Cuenta</h1>
          <p className="text-gray-400 text-sm mt-2">
            Regístrate para acceder al portal de inscripción
          </p>
        </div>

        {/* 🔹 Formulario con react-hook-form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Nombre completo */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Nombre completo
            </label>
            <input
              type="text"
              placeholder="Juan Pérez"
              {...register("fullName", {
                required: "El nombre es obligatorio",
                minLength: { value: 3, message: "Mínimo 3 caracteres" },
              })}
              className="w-full px-4 py-3 rounded-xl bg-gray-800 text-gray-200 border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
            )}
          </div>

          {/* DNI, Fecha nacimiento, Edad */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                DNI
              </label>
              <input
                type="text"
                placeholder="12345678"
                {...register("dni", {
                  required: "El DNI es obligatorio",
                  pattern: {
                    value: /^[0-9]{7,9}$/,
                    message: "DNI inválido (7-9 dígitos)",
                  },
                })}
                className="w-full px-4 py-3 rounded-xl bg-gray-800 text-gray-200 border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition"
              />
              {errors.dni && (
                <p className="text-red-500 text-sm mt-1">{errors.dni.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Fecha de nacimiento
              </label>
              <input
                type="date"
                {...register("birthDate", { required: "La fecha es obligatoria" })}
                className="w-full px-4 py-3 rounded-xl bg-gray-800 text-gray-200 border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition"
              />
              {errors.birthDate && (
                <p className="text-red-500 text-sm mt-1">{errors.birthDate.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Edad
              </label>
              <input
                type="number"
                placeholder="18"
                {...register("age", {
                  required: "La edad es obligatoria",
                  min: { value: 18, message: "Debes ser mayor de 18" },
                })}
                className="w-full px-4 py-3 rounded-xl bg-gray-800 text-gray-200 border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition"
              />
              {errors.age && (
                <p className="text-red-500 text-sm mt-1">{errors.age.message}</p>
              )}
            </div>
          </div>

          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Correo electrónico
            </label>
            <input
              type="email"
              placeholder="ejemplo@instituto.edu"
              {...register("email", {
                required: "El email es obligatorio",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Formato de email inválido",
                },
              })}
              className="w-full px-4 py-3 rounded-xl bg-gray-800 text-gray-200 border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

         
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Contraseña
              </label>
              <input
                type="password"
                placeholder="••••••••"
                {...register("password", {
                  required: "La contraseña es obligatoria",
                  minLength: { value: 6, message: "Mínimo 6 caracteres" },
                })}
                className="w-full px-4 py-3 rounded-xl bg-gray-800 text-gray-200 border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Confirmar contraseña
              </label>
              <input
                type="password"
                placeholder="••••••••"
                {...register("confirmPassword", {
                  required: "Debes confirmar la contraseña",
                  validate: (value) =>
                    value === password || "Las contraseñas no coinciden",
                })}
                className="w-full px-4 py-3 rounded-xl bg-gray-800 text-gray-200 border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          </div>

          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transition"
          >
            Registrarse
          </motion.button>
        </form>

       
        <p className="text-gray-400 text-xs text-center mt-6">
          ¿Ya tienes una cuenta?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Inicia sesión aquí
          </a>
        </p>
      </motion.div>
    </div>
  )
}

export default RegisterPage
