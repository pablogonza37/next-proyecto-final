"use client"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export const Navbar = () => {
  const slideInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
  }
  return (
    <motion.header
      className="bg-gray-800 border-b border-gray-700"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div className="flex items-center" {...slideInLeft}>
            <h1 className="text-2xl font-bold text-white">Aula Link</h1>
          </motion.div>

          <nav className="hidden md:flex space-x-8"></nav>

          <motion.div
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Button variant="outline" className="border-gray-700 text-gray-200 hover:bg-gray-700 bg-transparent">
              Iniciar Sesión
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Registrarse</Button>
          </motion.div>
        </div>
      </div>
    </motion.header>
  )
}
