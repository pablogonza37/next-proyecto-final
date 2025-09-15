"use client"

import { motion } from "framer-motion"
import {
  Star,
  Users,
  BookOpen,
} from "lucide-react"
import StaffSection from "@/components/homepage/Staff/StaffSection"
import SubjectsSection from "@/components/homepage/Subjects/SubjectsSection"
import MateriaSearcher from "@/components/homepage/MateriaSearcher"

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
      {/* Contenido principal */}
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

          <MateriaSearcher className="mb-12" />

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
      <StaffSection />
    </div>
  )
}
