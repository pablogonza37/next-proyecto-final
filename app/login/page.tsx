'use client'

import React from 'react'
import { motion } from 'framer-motion'

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-md bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-gray-700"
      >
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">Portal de Inscripción</h1>
          <p className="text-gray-400 text-sm mt-2">Accede con tu cuenta institucional</p>
        </div>

        
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="ejemplo@instituto.edu.ar"
              className="w-full px-4 py-3 rounded-xl bg-gray-800 text-gray-200 placeholder-gray-500 border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Contraseña
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl bg-gray-800 text-gray-200 placeholder-gray-500 border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center text-gray-400">
              <input type="checkbox" className="mr-2 accent-blue-500" />
              Recordarme
            </label>
            <a href="#" className="text-blue-500 hover:underline">
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transition"
          >
            Ingresar
          </motion.button>
        </form>
 <p className="text-gray-400 text-xs text-center mt-6">
          ¿No tenes una cuenta?{' '}
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
