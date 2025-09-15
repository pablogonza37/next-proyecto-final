"use client"

import React, { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Loader from "@/components/ui/Loader"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { ArrowLeft, Clock, BookOpen, GraduationCap, Users, Calendar, Award, Star, AlertCircle } from "lucide-react"
import { obtenerMateriaPorId, nuevaInscripcionCompleta, obtenerMateriasConComisiones, obtenerUsuarioPorEmail, verificarInscripcion } from "@/app/admin/inscripciones/actions"
import { useSession } from "next-auth/react"
import Image from "next/image"
import Swal from "sweetalert2"
import "sweetalert2/dist/sweetalert2.min.css"

interface Subject {
  _id: string
  nombreMateria: string
  descripcion: string
  nivel: string
  estado: number
}

interface Comision {
  _id: string
  nombreComision: string
  fechaInicio: string
  fechaFin: string
  horaInicio: string
  horaFin: string
  diasDictado: string
  cupo: number
  nombreMateria: string
  emailUsuario: string
}

const SubjectDetailPage: React.FC = () => {
  const params = useParams()
  const router = useRouter()
  const { data: session, status } = useSession()
  const [subject, setSubject] = useState<Subject | null>(null)
  const [comisiones, setComisiones] = useState<Comision[] | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [inscribing, setInscribing] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [inscriptionSuccess, setInscriptionSuccess] = useState<boolean>(false)
  const [selectedComision, setSelectedComision] = useState<string | null>(null)
  const [canEnroll, setCanEnroll] = useState<boolean>(true)
  const [enrollmentMessage, setEnrollmentMessage] = useState<string | null>(null)
  const [checkingEnrollment, setCheckingEnrollment] = useState<boolean>(false)

  const id = params?.id as string

  useEffect(() => {
    const cargarMateria = async () => {
      if (!id) return
      
      try {
        setLoading(true)
        const materiaData = await obtenerMateriaPorId(id)
        const comisionesData = await obtenerMateriasConComisiones(id)
        setSubject(materiaData)
        setComisiones(comisionesData)
        
        // Manejo mejorado de comisiones disponibles
        if (comisionesData && comisionesData.length > 0) {
          setSelectedComision(comisionesData[0]._id)
        } else {
          // Mostrar alerta informativa sobre comisiones no disponibles
          setTimeout(() => {
            Swal.fire({
              icon: "info",
              title: "Comisiones no disponibles",
              html: `
                <div class="text-left">
                  <p class="mb-3">Actualmente no hay comisiones disponibles para <strong>${materiaData.nombreMateria}</strong>.</p>
                  <p class="mb-2">Esto puede ocurrir por:</p>
                  <ul class="list-disc list-inside text-sm text-gray-600 space-y-1">
                    <li>Las comisiones aún no han sido programadas</li>
                    <li>Todas las comisiones están completas</li>
                    <li>El período de inscripciones ha finalizado</li>
                  </ul>
                  <p class="mt-3 text-sm">Te recomendamos contactar con la administración o volver más tarde.</p>
                </div>
              `,
              showCloseButton: true,
              showCancelButton: true,
              confirmButtonText: "Contactar Administración",
              cancelButtonText: "Entendido",
              confirmButtonColor: "#3b82f6",
              cancelButtonColor: "#6b7280",
            }).then((result) => {
              if (result.isConfirmed) {
                // Redirigir a página de contacto
                router.push('/contactanos')
              }
            })
          }, 1000)
        }
      } catch (err: unknown) {
        const error = err as Error
        console.error("Error cargando materia:", error)
        let errorMessage = "No se pudo cargar la información de la materia"
        
        if (error.message?.includes("network") || error.message?.includes("Network")) {
          errorMessage = "Error de conexión. Verifica tu conexión a internet."
        } else if (error.message?.includes("404") || error.message?.includes("not found")) {
          errorMessage = "La materia solicitada no existe."
        } else if (error.message?.includes("500")) {
          errorMessage = "Error interno del servidor. Intenta nuevamente más tarde."
        } else if (error.message) {
          errorMessage = error.message
        }
        
        setError(errorMessage)
        
        Swal.fire({
          icon: "error",
          title: "Error al cargar la materia",
          text: errorMessage,
          footer: '<a href="/contactanos">¿Necesitas ayuda? Contáctanos</a>',
          showConfirmButton: true,
          confirmButtonText: "Reintentar",
          showCancelButton: true,
          cancelButtonText: "Volver",
          confirmButtonColor: "#3b82f6",
          cancelButtonColor: "#6b7280",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.reload()
          } else if (result.isDismissed) {
            router.back()
          }
        })
      } finally {
        setLoading(false)
      }
    }

    cargarMateria()
  }, [id, router])

  useEffect(() => {
    const verificarPosibilidadInscripcion = async () => {
      if (status === "authenticated" && session?.user?.email && session?.backendToken && subject?._id) {
        try {
          setCheckingEnrollment(true)
          const usuario = await obtenerUsuarioPorEmail(session.user.email, session.backendToken)
          const verificacion = await verificarInscripcion(usuario._id, subject._id, session.backendToken)
          
          if (verificacion.inscripto === false) {
            setCanEnroll(true)
            setEnrollmentMessage(null)
          } else if (verificacion.inscripto === true) {
            setCanEnroll(false)
            setEnrollmentMessage(verificacion.mensaje || "Ya estás inscrito en esta materia")
          } else {
            setCanEnroll(verificacion.puedeInscribirse || false)
            if (!verificacion.puedeInscribirse) {
              setEnrollmentMessage(verificacion.mensaje || verificacion.razon || "No es posible inscribirse")
            } else {
              setEnrollmentMessage(null)
            }
          }
        } catch (err: unknown) {
          setCanEnroll(true)
          setEnrollmentMessage(err instanceof Error ? err.message : "No se pudo verificar la inscripción")
        } finally {
          setCheckingEnrollment(false)
        }
      } else {
        setCanEnroll(true)
        setEnrollmentMessage(null)
      }
    }

    verificarPosibilidadInscripcion()
  }, [status, session, subject])

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

  const getSubjectImage = (): string => {
    return 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop&crop=entropy'
  }


  const handleInscripcion = async () => {
    if (status !== "authenticated" || !session?.user?.email || !subject || !session?.backendToken) {
      router.push('/login')
      return
    }

    if (subject.estado !== 1) {
      setError("Esta materia no está disponible para inscripción")
      return
    }

    if (!selectedComision || !comisiones || comisiones.length === 0) {
      Swal.fire({
        icon: "warning",
        title: "Comisión requerida",
        text: "Por favor, selecciona una comisión para inscribirte.",
        confirmButtonText: "Entendido",
        confirmButtonColor: "#3b82f6",
      })
      return
    }

    try {
      setInscribing(true)
      setError(null)
      
      const fechaActual = new Date().toISOString().split('T')[0]
      
      await nuevaInscripcionCompleta(
        subject._id,
        session.user.email,
        fechaActual,
        selectedComision,
        session.backendToken
      )
      
      setInscriptionSuccess(true)
      
      setTimeout(() => {
        setInscriptionSuccess(false)
      }, 5000)

    } catch (err: unknown) {
      const mensajeError = err instanceof Error ? err.message : "No se pudo completar la inscripción"      
      setError(mensajeError)
      
      setTimeout(() => {
        setError(null)
      }, 7000)
      
    } finally {
      setInscribing(false)
      router.push("/plandeestudios")
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
    <div className="min-h-screen lg:min-h-fit bg-gray-900">
      <div className="relative h-80 sm:h-96 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={getSubjectImage()}
            alt={subject.nombreMateria}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-800/80 to-gray-900/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
        </div>
        
        <div className="relative z-10 flex flex-col justify-center h-72 sm:h-64 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 sm:pt-16 md:pt-20 lg:pt-24">
          <div className="max-w-4xl mx-auto w-full mt-4 sm:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Button 
                onClick={() => router.back()}
                className="mb-4 sm:mb-6 bg-gray-800/80 border border-gray-700 text-white hover:bg-gray-700 hover:border-gray-600 backdrop-blur-sm transition-all duration-200 px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base"
              >
                <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">Volver</span>
                <span className="sm:hidden">Atrás</span>
              </Button>
              
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="flex items-center gap-1.5 sm:gap-2 text-gray-200 bg-gray-800/60 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border border-gray-700">
                  <GraduationCap className="h-3 w-3 sm:h-4 sm:w-4 text-blue-500 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium whitespace-nowrap">{getLevelName(subject.nivel)}</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 text-gray-200 bg-gray-800/60 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border border-gray-700">
                  <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-blue-500 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium whitespace-nowrap">{getDurationByLevel(subject.nivel)}</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 text-gray-200 bg-gray-800/60 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border border-gray-700">
                  <Star className="h-3 w-3 sm:h-4 sm:w-4 text-blue-500 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium whitespace-nowrap">Destacada</span>
                </div>
              </div>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight sm:leading-tight md:leading-tight">
                {subject.nombreMateria}
              </h1>
              
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-2xl leading-relaxed">
                {subject.descripcion}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="relative -mt-24 sm:-mt-20 z-20">
        <div className="w-full max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 xl:pt-10">
            <div className="flex flex-col lg:flex-col-reverse gap-8 pt-8 sm:pt-0">
            {/* Cards Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8 lg:order-2"
            >
              <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-2xl">
              <CardContent className="p-8 xl:px-12 xl:py-6">
                <div className="flex flex-col md:flex-row xl:flex-row items-center justify-between gap-6 xl:gap-12">
                  <div className="text-center md:text-left xl:max-w-lg">
                    <h3 className="text-2xl xl:text-3xl font-bold text-white mb-2 xl:mb-3">¿Listo para comenzar?</h3>
                    <p className="text-gray-400 xl:text-lg">Únete a miles de estudiantes que ya forman parte de esta materia</p>
                    {status !== "authenticated" && (
                      <p className="text-sm text-blue-400 mt-2">
                        💡 Inicia sesión para inscribirte
                      </p>
                    )}
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    {comisiones && comisiones.length > 0 && (
                      <Select onValueChange={setSelectedComision} defaultValue={selectedComision || undefined}>
                        <SelectTrigger className="w-[220px] xl:w-[280px] bg-gray-700 text-white border-gray-600 focus:ring-blue-500 xl:text-lg xl:py-3">
                          <SelectValue placeholder="Selecciona una comisión" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700 text-white">
                          {comisiones.map((comision) => (
                            <SelectItem key={comision._id} value={comision._id}>
                              {comision.nombreComision}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}

                    {(!comisiones || comisiones.length === 0) && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-yellow-900/30 border border-yellow-600/50 rounded-lg p-4 mt-3"
                      >
                        <div className="flex items-center gap-3 text-yellow-400">
                          <AlertCircle className="h-5 w-5 flex-shrink-0" />
                          <div className="text-sm">
                            <p className="font-medium mb-1">No hay comisiones disponibles</p>
                            <p className="text-yellow-300/80 text-xs">
                              Contacta con la administración o vuelve más tarde
                            </p>
                          </div>
                        </div>
                        <Button
                          onClick={() => router.push('/contactanos')}
                          className="mt-3 w-full bg-yellow-600 hover:bg-yellow-700 text-white text-sm py-2"
                        >
                          <Users className="h-4 w-4 mr-2" />
                          Contactar Administración
                        </Button>
                      </motion.div>
                    )}

                    {enrollmentMessage && !canEnroll && status === "authenticated" && (
                      <p className="text-sm text-red-400 mt-2 text-center md:text-right">
                        ⚠️ {enrollmentMessage}
                      </p>
                    )}

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
                        disabled={inscribing || checkingEnrollment || status !== "authenticated" || subject.estado !== 1 || !selectedComision || !comisiones || comisiones.length === 0 || !canEnroll}
                        className={`${
                          !canEnroll && status === "authenticated"
                            ? "bg-orange-600 cursor-not-allowed opacity-80"
                            : status !== "authenticated" || subject.estado !== 1 || !selectedComision || !comisiones || comisiones.length === 0
                            ? "bg-gray-600 cursor-not-allowed opacity-50" 
                            : "bg-blue-600 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/25"
                        } transform transition-all duration-200 text-white px-10 py-4 text-lg font-medium rounded-lg min-w-[220px]`}
                      >
                        {status === "loading" || checkingEnrollment ? (
                          <>
                            <Loader size="sm" />
                            <span className="ml-2">{checkingEnrollment ? "Verificando..." : "Cargando..."}</span>
                          </>
                        ) : inscribing ? (
                          <>
                            <Loader size="sm" />
                            <span className="ml-2">Inscribiendo...</span>
                          </>
                        ) : status !== "authenticated" ? (
                          <>
                            <BookOpen className="h-5 w-5 mr-2" />
                            Inicia Sesión para Inscribirte
                          </>
                        ) : subject.estado !== 1 ? (
                          <>
                            <BookOpen className="h-5 w-5 mr-2" />
                            Materia No Disponible
                          </>
                        ) : !canEnroll ? (
                          <>
                            <BookOpen className="h-5 w-5 mr-2" />
                            Ya Inscripto
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
                <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 h-full">
                  <CardContent className="p-6 xl:py-0">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-lg bg-blue-600">
                        <GraduationCap className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="text-lg xl:text-xl font-semibold text-white">Información Académica</h4>
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
                        <span className={`font-medium ${subject.estado === 1 ? 'text-green-400' : 'text-red-400'}`}>
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
                  <CardContent className="p-6 xl:py-0">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-lg bg-blue-600">
                        <Calendar className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="text-lg xl:text-xl font-semibold text-white">Detalles del Curso</h4>
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
                  <CardContent className="p-6 xl:py-0">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-lg bg-blue-600">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="text-lg xl:text-xl font-semibold text-white">Comunidad</h4>
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

              {/* Main Content Section - appears first in desktop due to flex-col-reverse */}
              <div className="lg:order-1">
                {/* This section can be used for additional main content if needed */}
              </div>
            </motion.div>
          </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-600/20 border border-red-600/50 rounded-lg p-6 shadow-lg"
              >
                <div className="flex items-center justify-center gap-3">
                  <div className="p-2 rounded-full bg-red-600/30">
                    <svg className="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-red-400 text-center font-medium">{error}</p>
                </div>
              </motion.div>
            )}
        </div>
        {/* Espaciado adicional en móviles antes del footer */}
      </div>
    </div>
  )
}

export default SubjectDetailPage
