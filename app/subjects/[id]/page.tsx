"use client"

import React, { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Loader from "@/components/ui/Loader"
import { ArrowLeft, Clock, BookOpen, GraduationCap, Users, Calendar, Award, Star } from "lucide-react"
import { obtenerMateriaPorId, nuevaInscripcionCompleta } from "@/app/admin/inscripciones/actions"
import { dataMateriaInterface } from "@/components/types/actions"
import { useSession } from "next-auth/react"
import { useRouter as useNextRouter } from "next/navigation"
import Image from "next/image"

interface Subject {
  _id: string
  nombreMateria: string
  descripcion: string
  nivel: string
  estado: number
}

const SubjectDetailPage: React.FC = () => {
  const params = useParams()
  const router = useRouter()
  const nextRouter = useNextRouter()
  const { data: session, status } = useSession()
  const [subject, setSubject] = useState<Subject | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [inscribing, setInscribing] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [inscriptionSuccess, setInscriptionSuccess] = useState<boolean>(false)

  const id = params?.id as string

  useEffect(() => {
    const cargarMateria = async () => {
      if (!id) return
      
      try {
        setLoading(true)
        const materiaData = await obtenerMateriaPorId(id)
        console.log(materiaData)
        setSubject(materiaData)
      } catch (err) {
        console.error("Error al cargar materia:", err)
        setError("No se pudo cargar la información de la materia")
      } finally {
        setLoading(false)
      }
    }

    cargarMateria()
  }, [id])

  const getDurationByLevel = (nivel: string): string => {
    const nivelNum = parseInt(nivel)
    if (nivelNum <= 2) return "Cuatrimestral"
    if (nivelNum <= 4) return "Anual"
    return "Avanzado"
  }

  const getLevelName = (nivel: string): string => {
    const nivelNum = parseInt(nivel)
    return `Nivel ${nivelNum}`
  }

  const getSubjectImage = (nombreMateria: string): string => {
    const materia = nombreMateria.toLowerCase()
    
    if (materia.includes('matemática') || materia.includes('algebra') || materia.includes('cálculo') || materia.includes('geometría')) {
      return 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600&fit=crop&crop=entropy'
    }
    if (materia.includes('física') || materia.includes('mecánica')) {
      return 'https://images.unsplash.com/photo-1636953056323-9c09fdd74fa6?w=800&h=600&fit=crop&crop=entropy'
    }
    if (materia.includes('química') || materia.includes('laboratorio')) {
      return 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=600&fit=crop&crop=entropy'
    }
    if (materia.includes('programación') || materia.includes('software') || materia.includes('informática') || materia.includes('sistemas')) {
      return 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop&crop=entropy'
    }
    if (materia.includes('economía') || materia.includes('administración') || materia.includes('contabilidad') || materia.includes('finanzas')) {
      return 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&crop=entropy'
    }
    if (materia.includes('historia') || materia.includes('filosofía') || materia.includes('literatura')) {
      return 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop&crop=entropy'
    }
    if (materia.includes('inglés') || materia.includes('idioma') || materia.includes('lengua')) {
      return 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=600&fit=crop&crop=entropy'
    }
    if (materia.includes('biología') || materia.includes('medicina') || materia.includes('anatomía')) {
      return 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&crop=entropy'
    }
    if (materia.includes('derecho') || materia.includes('legal') || materia.includes('jurídico')) {
      return 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop&crop=entropy'
    }
    if (materia.includes('psicología') || materia.includes('sociología')) {
      return 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=600&fit=crop&crop=entropy'
    }
    
    return 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop&crop=entropy'
  }


  const handleInscripcion = async () => {
    if (status !== "authenticated" || !session?.user?.email || !subject) {
      nextRouter.push('/login')
      return
    }

    try {
      setInscribing(true)
      
      const fechaActual = new Date().toISOString().split('T')[0]
      const nombreComision = `Comisión ${subject.nombreMateria} - ${new Date().getFullYear()}`
      
      await nuevaInscripcionCompleta(
        nombreComision,
        subject.nombreMateria,
        session.user.email,
        fechaActual
      )
      
      setInscriptionSuccess(true)
      
      setTimeout(() => {
        setInscriptionSuccess(false)
      }, 3000)

    } catch (err: any) {
      console.error("Error al inscribirse:", err)
      setError(err.message || "No se pudo completar la inscripción")
    } finally {
      setInscribing(false)
    }
  }

  if (loading) {
    return <Loader fullScreen={true} size="lg" />
  }

  if (error && !subject) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-400 mb-4">Error</h1>
          <p className="text-gray-400 mb-6">{error}</p>
          <Button 
            onClick={() => router.back()}
            className="bg-blue-600 hover:bg-blue-700"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver
          </Button>
        </div>
      </div>
    )
  }

  if (!subject) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-400 mb-4">Materia no encontrada</h1>
          <Button 
            onClick={() => router.back()}
            className="bg-blue-600 hover:bg-blue-700"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section with Background Image */}
      <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={getSubjectImage(subject.nombreMateria)}
            alt={subject.nombreMateria}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-800/80 to-gray-900/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
        </div>
        
        <div className="relative z-10 flex flex-col justify-center h-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Button 
                onClick={() => router.back()}
                className="mb-6 bg-gray-800/80 border border-gray-700 text-white hover:bg-gray-700 hover:border-gray-600 backdrop-blur-sm transition-all duration-200"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Volver
              </Button>
              
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-2 text-gray-200 bg-gray-800/60 backdrop-blur-sm px-3 py-1 rounded-full border border-gray-700">
                  <GraduationCap className="h-4 w-4 text-blue-500" />
                  <span className="text-sm font-medium">{getLevelName(subject.nivel)}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-200 bg-gray-800/60 backdrop-blur-sm px-3 py-1 rounded-full border border-gray-700">
                  <Clock className="h-4 w-4 text-blue-500" />
                  <span className="text-sm font-medium">{getDurationByLevel(subject.nivel)}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-200 bg-gray-800/60 backdrop-blur-sm px-3 py-1 rounded-full border border-gray-700">
                  <Star className="h-4 w-4 text-blue-500" />
                  <span className="text-sm font-medium">Destacada</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                {subject.nombreMateria}
              </h1>
              
              <p className="text-xl text-gray-200 max-w-2xl leading-relaxed">
                {subject.descripcion}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative -mt-20 z-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Inscription Card */}
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-2xl">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold text-white mb-2">¿Listo para comenzar?</h3>
                    <p className="text-gray-400">Únete a miles de estudiantes que ya forman parte de esta materia</p>
                    {status !== "authenticated" && (
                      <p className="text-sm text-blue-400 mt-2">
                        💡 Inicia sesión para inscribirte
                      </p>
                    )}
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    {inscriptionSuccess ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-green-600 text-white px-8 py-4 rounded-lg text-center font-medium shadow-lg"
                      >
                        <div className="flex items-center gap-2">
                          <Award className="h-5 w-5" />
                          ¡Inscripción exitosa!
                        </div>
                      </motion.div>
                    ) : (
                      <Button
                        onClick={handleInscripcion}
                        disabled={inscribing}
                        className="bg-blue-600 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/25 transform transition-all duration-200 text-white px-10 py-4 text-lg font-medium rounded-lg min-w-[220px]"
                      >
                        {inscribing ? (
                          <>
                            <Loader size="sm" />
                            <span className="ml-2">Inscribiendo...</span>
                          </>
                        ) : (
                          <>
                            <BookOpen className="h-5 w-5 mr-2" />
                            Inscribirme Ahora
                          </>
                        )}
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-lg bg-blue-600">
                        <GraduationCap className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-white">Información Académica</h4>
                    </div>
                    <div className="space-y-3 text-gray-400">
                      <div className="flex justify-between">
                        <span>Nivel:</span>
                        <span className="font-medium text-white">{getLevelName(subject.nivel)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Duración:</span>
                        <span className="font-medium text-white">{getDurationByLevel(subject.nivel)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Estado:</span>
                        <span className="font-medium text-green-400">
                          {subject.estado === 1 ? 'Activa' : 'Inactiva'}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-lg bg-blue-600">
                        <Calendar className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-white">Detalles del Curso</h4>
                    </div>
                    <div className="space-y-3 text-gray-400">
                      <div className="flex justify-between">
                        <span>Modalidad:</span>
                        <span className="font-medium text-white">Presencial</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Inscripciones:</span>
                        <span className="font-medium text-green-400">Abiertas</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Requisitos:</span>
                        <span className="font-medium text-white">Según nivel</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-lg bg-blue-600">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-white">Comunidad</h4>
                    </div>
                    <div className="space-y-3 text-gray-400">
                      <div className="flex justify-between">
                        <span>Estudiantes:</span>
                        <span className="font-medium text-white">+1,200</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Satisfacción:</span>
                        <span className="font-medium text-blue-400">★★★★★</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Certificación:</span>
                        <span className="font-medium text-green-400">Incluida</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-600/20 border border-red-600/50 rounded-lg p-6"
              >
                <p className="text-red-400 text-center font-medium">{error}</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default SubjectDetailPage
