"use client"

import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import { SubjectCard } from "./SubjectCard"
import { obtenerMaterias } from "@/app/admin/inscripciones/actions"
import { dataMateriaInterface } from "@/components/types/actions"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface Subject {
  id: string
  title: string
  description: string
  duration: string
}

const SkeletonCard: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  return (
    <motion.div variants={fadeInUp}>
      <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 h-96 flex flex-col overflow-hidden">
        <CardHeader className="flex-1 p-6">
          <div className="space-y-3">
            <div className="h-6 bg-gray-700 rounded animate-pulse"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-700 rounded animate-pulse"></div>
              <div className="h-4 bg-gray-700 rounded animate-pulse w-4/5"></div>
              <div className="h-4 bg-gray-700 rounded animate-pulse w-3/5"></div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="mt-auto p-6 pt-0">
          <div className="flex items-center justify-between mb-8">
            <div className="h-4 bg-gray-700 rounded animate-pulse w-24"></div>
          </div>
          <div className="h-10 bg-gray-700 rounded animate-pulse"></div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function SubjectsSection() {
  const [subjects, setSubjects] = useState<Subject[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const cargarMaterias = async () => {
      try {
        setLoading(true)
        const materiasData = await obtenerMaterias()
        
        const materiasFormateadas: Subject[] = materiasData
          .filter((materia: dataMateriaInterface) => materia.estado === 1)
          .slice(0, 3)
          .map((materia: dataMateriaInterface) => ({
            id: materia._id,
            title: materia.nombreMateria,
            description: materia.descripcion,
            duration: getDurationByLevel(materia.nivel)
          }))
        
        setSubjects(materiasFormateadas)
      } catch (err) {
        console.error("Error al cargar materias:", err)
        setError("No se pudieron cargar las materias destacadas")
      } finally {
        setLoading(false)
      }
    }

    cargarMaterias()
  }, [])

  const getDurationByLevel = (nivel: string): string => {
    const nivelNum = parseInt(nivel)
    if (nivelNum <= 2) return "Cuatrimestral"
    if (nivelNum <= 4) return "Anual"
    return "Avanzado"
  }

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

        {loading ? (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {Array.from({ length: 3 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </motion.div>
        ) : error ? (
          <div className="flex justify-center items-center py-12">
            <div className="text-red-400 text-lg">{error}</div>
          </div>
        ) : subjects.length === 0 ? (
          <div className="flex justify-center items-center py-12">
            <div className="text-gray-400 text-lg">No hay materias destacadas disponibles</div>
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {subjects.map((subject) => (
              <SubjectCard
                key={subject.id}
                id={subject.id}
                title={subject.title}
                description={subject.description}
                duration={subject.duration}
              />
            ))}
          </motion.div>
        )}
      </div>
    </motion.section>
  )
}

export default SubjectsSection
