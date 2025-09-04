"use client"

import React from 'react'
import { motion } from "framer-motion"
import { SubjectCard } from "./SubjectCard"

interface Subject {
  id: number
  title: string
  description: string
  duration: string
}

const mockSubjects: Subject[] = [
  {
    id: 1,
    title: "Matemática Superior",
    description: "Materia fundamental de cálculo diferencial e integral, álgebra lineal y matemática discreta para el desarrollo de pensamiento lógico-matemático",
    duration: "Cuatrimestral"
  },
  {
    id: 2,
    title: "Ing. de Software",
    description: "Materia de desarrollo backend con Node.js, bases de datos relacionales y no relacionales, arquitectura de microservicios y patrones de diseño",
    duration: "Cuatrimestral"
  },
  {
    id: 3,
    title: "Algoritmos y Estructura de Datos",
    description: "Materia fundamental sobre algoritmos de ordenamiento, búsqueda, estructuras de datos complejas y análisis de complejidad computacional",
    duration: "Anual"
  },
]

function SubjectsSection() {
  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <motion.section
      className="py-16 bg-gradient-to-b from-gray-900 to-gray-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h3
          className="text-3xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Materias Destacadas
        </motion.h3>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {mockSubjects.map((subject) => (
            <SubjectCard
              key={subject.id}
              title={subject.title}
              description={subject.description}
              duration={subject.duration}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default SubjectsSection
