"use client"

import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Users, 
  GraduationCap,
  Shield,
  Headphones,
  Send
} from "lucide-react"

interface ContactFormData {
  nombre: string
  email: string
  telefono?: string
  asunto: string
  departamento: string
  mensaje: string
  acepta_terminos: boolean
}

export default function ContactanosPage() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>()

  const onSubmit = (data: ContactFormData) => {
    console.log("Datos del formulario:", data)
    // Aquí iría la lógica para enviar el formulario
    alert("Mensaje enviado correctamente. Te contactaremos pronto.")
    reset()
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const departamentos = [
    {
      nombre: "Soporte Técnico",
      icon: <Headphones className="h-6 w-6 text-blue-500" />,
      descripcion: "Problemas con la plataforma, errores técnicos, configuración de cuenta",
      contactos: [
        { tipo: "Email", valor: "soporte@aulalink.edu.ar" },
        { tipo: "WhatsApp", valor: "+54 381 000-0002" },
        { tipo: "Chat en vivo", valor: "9:00-18:00 hs" }
      ]
    },
    {
      nombre: "Secretaría Académica",
      icon: <GraduationCap className="h-6 w-6 text-green-500" />,
      descripcion: "Inscripciones, correlatividades, certificados, documentación académica",
      contactos: [
        { tipo: "Email", valor: "academica@aulalink.edu.ar" },
        { tipo: "Teléfono", valor: "+54 381 000-0003" },
        { tipo: "Presencial", valor: "Lun-Vie 8:00-16:00 hs" }
      ]
    },
    {
      nombre: "Administración",
      icon: <Users className="h-6 w-6 text-purple-500" />,
      descripcion: "Pagos, becas, información general, trámites administrativos",
      contactos: [
        { tipo: "Email", valor: "admin@aulalink.edu.ar" },
        { tipo: "Teléfono", valor: "+54 381 000-0004" },
        { tipo: "Presencial", valor: "Lun-Vie 8:00-17:00 hs" }
      ]
    },
    {
      nombre: "Privacidad y Seguridad",
      icon: <Shield className="h-6 w-6 text-red-500" />,
      descripcion: "Consultas sobre datos personales, seguridad, incidentes",
      contactos: [
        { tipo: "Email", valor: "privacidad@aulalink.edu.ar" },
        { tipo: "Teléfono", valor: "+54 381 000-0000 (Int. 4455)" },
        { tipo: "Urgencias", valor: "24/7 disponible" }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      <div className="max-w-4xl xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-4 py-8 sm:py-12 lg:py-16">
        {/* Header */}
        <motion.div
          className="text-center mb-8 sm:mb-10 lg:mb-12"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center items-center mb-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Contáctanos
            </h1>
          </div>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-2">
            Estamos aquí para ayudarte. Elige el canal que mejor se adapte a tu consulta
          </p>
        </motion.div>

        <motion.div
          className="space-y-6 sm:space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Información de Contacto Principal */}
          <motion.div className="mb-8 sm:mb-12" variants={fadeInUp}>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Información General</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-700">
                <div className="flex items-center mb-3">
                  <Phone className="h-6 w-6 text-blue-500 mr-3" />
                  <h3 className="text-lg font-semibold text-white">Teléfono Principal</h3>
                </div>
                <p className="text-gray-300 text-sm mb-2">Línea principal de la institución</p>
                <p className="text-blue-400 font-medium">+54 381 000-0000</p>
                <p className="text-gray-400 text-xs">Lunes a viernes 8:00-20:00 hs</p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-700">
                <div className="flex items-center mb-3">
                  <Mail className="h-6 w-6 text-green-500 mr-3" />
                  <h3 className="text-lg font-semibold text-white">Email Institucional</h3>
                </div>
                <p className="text-gray-300 text-sm mb-2">Para consultas generales</p>
                <p className="text-green-400 font-medium">info@aulalink.edu.ar</p>
                <p className="text-gray-400 text-xs">Respuesta en 24-48 horas</p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-700">
                <div className="flex items-center mb-3">
                  <MessageCircle className="h-6 w-6 text-purple-500 mr-3" />
                  <h3 className="text-lg font-semibold text-white">Chat en Vivo</h3>
                </div>
                <p className="text-gray-300 text-sm mb-2">Atención inmediata</p>
                <p className="text-purple-400 font-medium">Disponible en la plataforma</p>
                <p className="text-gray-400 text-xs">Lunes a viernes 9:00-18:00 hs</p>
              </div>
            </div>
          </motion.div>

          {/* Formulario de Contacto */}
          <motion.div className="mb-8 sm:mb-12" variants={fadeInUp}>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Envíanos un Mensaje</h2>
            
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-gray-700">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Nombre */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      {...register("nombre", { required: "El nombre es obligatorio" })}
                      className="w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-200 placeholder-gray-400 border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                      placeholder="Tu nombre y apellido"
                    />
                    {errors.nombre && (
                      <p className="text-red-500 text-sm mt-1">{errors.nombre.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      {...register("email", { 
                        required: "El email es obligatorio",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Formato de email inválido"
                        }
                      })}
                      className="w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-200 placeholder-gray-400 border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                      placeholder="tu@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Teléfono */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Teléfono (Opcional)
                    </label>
                    <input
                      type="tel"
                      {...register("telefono")}
                      className="w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-200 placeholder-gray-400 border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                      placeholder="+54 381 000-0000"
                    />
                  </div>

                  {/* Departamento */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Departamento *
                    </label>
                    <select
                      {...register("departamento", { required: "Selecciona un departamento" })}
                      className="w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-200 border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    >
                      <option value="">Selecciona un departamento</option>
                      <option value="soporte">Soporte Técnico</option>
                      <option value="academica">Secretaría Académica</option>
                      <option value="administracion">Administración</option>
                      <option value="privacidad">Privacidad y Seguridad</option>
                      <option value="general">Consulta General</option>
                    </select>
                    {errors.departamento && (
                      <p className="text-red-500 text-sm mt-1">{errors.departamento.message}</p>
                    )}
                  </div>
                </div>

                {/* Asunto */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Asunto *
                  </label>
                  <input
                    type="text"
                    {...register("asunto", { required: "El asunto es obligatorio" })}
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-200 placeholder-gray-400 border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    placeholder="Resumen de tu consulta"
                  />
                  {errors.asunto && (
                    <p className="text-red-500 text-sm mt-1">{errors.asunto.message}</p>
                  )}
                </div>

                {/* Mensaje */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    {...register("mensaje", { required: "El mensaje es obligatorio" })}
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-200 placeholder-gray-400 border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none"
                    placeholder="Describe tu consulta o problema de manera detallada..."
                  />
                  {errors.mensaje && (
                    <p className="text-red-500 text-sm mt-1">{errors.mensaje.message}</p>
                  )}
                </div>

                {/* Checkbox términos */}
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    {...register("acepta_terminos", { required: "Debes aceptar los términos" })}
                    className="mt-1 mr-3 accent-blue-500"
                  />
                  <div>
                    <label className="text-sm text-gray-300">
                      Acepto que mis datos sean procesados según la{" "}
                      <a href="/politicas" className="text-blue-400 hover:underline">
                        Política de Privacidad
                      </a>{" "}
                      y los{" "}
                      <a href="/terminos" className="text-blue-400 hover:underline">
                        Términos y Condiciones
                      </a>
                      .
                    </label>
                    {errors.acepta_terminos && (
                      <p className="text-red-500 text-sm mt-1">{errors.acepta_terminos.message}</p>
                    )}
                  </div>
                </div>

                {/* Botón enviar */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full md:w-auto flex items-center justify-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Enviar Mensaje
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Departamentos Especializados */}
          <motion.div className="mb-8 sm:mb-12" variants={fadeInUp}>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Departamentos Especializados</h2>
            <p className="text-gray-300 mb-6">
              Contacta directamente con el departamento que mejor pueda atender tu consulta para obtener 
              una respuesta más rápida y especializada.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {departamentos.map((dept) => (
                <div key={dept.nombre} className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                  <div className="flex items-center mb-4">
                    {dept.icon}
                    <h3 className="text-lg font-semibold text-white ml-3">{dept.nombre}</h3>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4">{dept.descripcion}</p>
                  
                  <div className="space-y-2">
                    {dept.contactos.map((contacto, index) => (
                      <div key={index} className="flex justify-between items-center text-sm">
                        <span className="text-gray-400">{contacto.tipo}:</span>
                        <span className="text-blue-400 font-medium">{contacto.valor}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Ubicación y Horarios */}
          <motion.div className="mb-8 sm:mb-12" variants={fadeInUp}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Ubicación */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Nuestra Ubicación</h2>
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                  <div className="flex items-start mb-4">
                    <MapPin className="h-6 w-6 text-red-500 mr-3 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Campus Principal</h3>
                      <p className="text-gray-300 text-sm">
                        Av. Educación 1234<br />
                        San Miguel de Tucumán<br />
                        Tucumán, Argentina (T4000)<br />
                        CP: 4000
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-700/50 rounded-lg p-4 mt-4">
                    <h4 className="text-white font-semibold mb-2">Cómo llegar:</h4>
                    <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                      <li>Líneas de colectivo: 102, 115, 121, 130</li>
                      <li>Estación de taxi más cercana: Plaza Independencia</li>
                      <li>Estacionamiento disponible para estudiantes</li>
                      <li>Acceso para personas con movilidad reducida</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Horarios */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Horarios de Atención</h2>
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                  <div className="flex items-start mb-4">
                    <Clock className="h-6 w-6 text-yellow-500 mr-3 mt-1" />
                    <div className="w-full">
                      <h3 className="text-lg font-semibold text-white mb-4">Atención Presencial</h3>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">Lunes a Viernes:</span>
                          <span className="text-yellow-400 font-medium">8:00 - 20:00 hs</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">Sábados:</span>
                          <span className="text-yellow-400 font-medium">9:00 - 15:00 hs</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">Domingos:</span>
                          <span className="text-gray-500">Cerrado</span>
                        </div>
                      </div>
                      
                      <div className="border-t border-gray-600 pt-4 mt-4">
                        <h4 className="text-white font-semibold mb-2">Horarios Especiales:</h4>
                        <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                          <li>Período de exámenes: Hasta 22:00 hs</li>
                          <li>Feriados: Atención limitada</li>
                          <li>Vacaciones de verano: Horario reducido</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Información Adicional */}
          <motion.div className="mb-8 sm:mb-12" variants={fadeInUp}>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Información Adicional</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-900/20 rounded-lg p-4 border border-green-800">
                <h3 className="font-semibold text-green-400 mb-2">Tiempos de Respuesta</h3>
                <ul className="list-disc list-inside text-sm text-green-200 space-y-1">
                  <li>Chat en vivo: Respuesta inmediata</li>
                  <li>WhatsApp: Dentro de 1-2 horas hábiles</li>
                  <li>Email: 24-48 horas hábiles</li>
                  <li>Teléfono: Atención inmediata en horarios</li>
                </ul>
              </div>
              
              <div className="bg-blue-900/20 rounded-lg p-4 border border-blue-800">
                <h3 className="font-semibold text-blue-400 mb-2">Consejos para Contactarnos</h3>
                <ul className="list-disc list-inside text-sm text-blue-200 space-y-1">
                  <li>Incluye tu número de estudiante si aplica</li>
                  <li>Sé específico con tu consulta o problema</li>
                  <li>Adjunta capturas de pantalla si es necesario</li>
                  <li>Verifica tu información de contacto</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div
            className="text-center pt-6 sm:pt-8 border-t border-gray-700 mt-8 sm:mt-12"
            variants={fadeInUp}
          >
            <div className="space-y-4">
              <div className="text-gray-400">
                <p className="text-base font-semibold">
                  © {new Date().getFullYear()} Aula Link - Plataforma Educativa Institucional
                </p>
                <p className="text-sm mt-1">
                  Todos los derechos reservados | Institución de Educación Superior
                </p>
              </div>
              
              <div className="text-xs text-gray-500 max-w-3xl mx-auto">
                <p>
                  Nuestro equipo está comprometido con brindar el mejor soporte posible a nuestra 
                  comunidad educativa. No dudes en contactarnos, estamos aquí para ayudarte a 
                  tener la mejor experiencia en Aula Link.
                </p>
                <p className="mt-2">
                  Para emergencias fuera del horario de atención, utiliza nuestros canales de 
                  contacto prioritarios o el sistema de tickets integrado en la plataforma.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
