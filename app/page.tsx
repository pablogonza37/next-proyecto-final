"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import {
  Search,
  Star,
  Users,
  BookOpen,
} from "lucide-react"
import StaffSection from "@/components/homepage/Staff/StaffSection"
import SubjectsSection from "@/components/homepage/Subjects/SubjectsSection"

export default function HomePage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8 },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <motion.section className="bg-gradient-to-b from-gray-800 to-black py-20" {...fadeIn}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 className="text-5xl font-bold text-white mb-6" {...fadeInUp}>
            Inscríbete a tus Materias
          </motion.h2>
          <motion.p
            className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Materias académicas de programación y desarrollo. Inscríbete y avanza en tu carrera profesional con
            contenido de calidad universitaria.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 z-10" />
              <Input
                placeholder="Buscar materias..."
                className="pl-10 bg-gray-800/80 border-gray-700 text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-11 rounded-lg backdrop-blur-sm"
              />
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 h-11 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25">Buscar</Button>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-8 text-gray-200"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div className="flex items-center gap-2" variants={fadeInUp}>
              <Users className="h-5 w-5 text-blue-500" />
              <span>+50,000 estudiantes inscritos</span>
            </motion.div>
            <motion.div className="flex items-center gap-2" variants={fadeInUp}>
              <BookOpen className="h-5 w-5 text-blue-500" />
              <span>+100 materias</span>
            </motion.div>
            <motion.div className="flex items-center gap-2" variants={fadeInUp}>
              <Star className="h-5 w-5 text-blue-500" />
              <span>4.8/5 valoración</span>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <SubjectsSection />

      <motion.section
        className="py-16 bg-gradient-to-br from-gray-800 via-gray-900 to-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h3
            className="text-4xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Inscribite a las materias
          </motion.h3>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:shadow-white/20 font-semibold px-8 py-3 rounded-lg"
              >
                Ver todas las materias
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <StaffSection />
    </div>
  )
}
