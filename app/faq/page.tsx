"use client"

import { motion } from "framer-motion"
import * as Accordion from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

export default function FAQPage() {
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

  const faqData = [
    {
      category: "Acceso y Registro",
      questions: [
        {
          id: "registro-primera-vez",
          question: "¿Cómo me registro por primera vez en Aula Link?",
          answer: (
            <div className="space-y-3">
              <p>Para crear tu cuenta en Aula Link, sigue estos pasos:</p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                <li>Dirígete a la página principal y haz clic en &quot;Registrarse&quot;</li>
                <li>Completa el formulario con tu información personal verificable</li>
                <li>Usa tu correo electrónico institucional (@estudiante.aulalink.edu.ar)</li>
                <li>Verifica tu cuenta a través del email de confirmación</li>
                <li>Completa tu perfil con información académica adicional</li>
                <li>Aguarda la aprobación administrativa (máximo 24 horas hábiles)</li>
              </ul>
            </div>
          )
        },
        {
          id: "olvide-contraseña",
          question: "¿Qué hago si olvidé mi contraseña?",
          answer: (
            <div className="space-y-3">
              <p>Recuperar tu contraseña es un proceso seguro y rápido:</p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                <li>Haz clic en &quot;¿Olvidaste tu contraseña?&quot; en la página de login</li>
                <li>Ingresa tu correo electrónico institucional registrado</li>
                <li>Revisa tu bandeja de entrada y spam por el email de recuperación</li>
                <li>Haz clic en el enlace seguro (válido por 30 minutos)</li>
                <li>Crea una nueva contraseña que cumpla los requisitos de seguridad</li>
                <li>Confirma el cambio e inicia sesión con la nueva contraseña</li>
              </ul>
            </div>
          )
        },
        {
          id: "no-puedo-acceder",
          question: "¿Por qué no puedo acceder a mi cuenta?",
          answer: (
            <div className="space-y-3">
              <p>Si experimentas problemas de acceso, verifica:</p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                <li>Que estés utilizando el correo electrónico correcto (institucional)</li>
                <li>Que tu contraseña no contenga errores de mayúsculas/minúsculas</li>
                <li>Que tu cuenta haya sido activada por el administrador</li>
                <li>Que no hayas excedido el límite de intentos fallidos (5 intentos)</li>
                <li>Que tu navegador tenga cookies habilitadas</li>
                <li>Que estés accediendo desde una red autorizada</li>
              </ul>
            </div>
          )
        }
      ]
    },
    {
      category: "Inscripciones Académicas",
      questions: [
        {
          id: "cuando-inscripciones",
          question: "¿Cuándo abren las inscripciones?",
          answer: (
            <div className="space-y-3">
              <p>El calendario de inscripciones sigue estos períodos establecidos:</p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                <li>Inscripciones primer cuatrimestre: Del 15 al 31 de enero</li>
                <li>Inscripciones segundo cuatrimestre: Del 15 al 31 de julio</li>
                <li>Inscripciones materias anuales: Del 1 al 15 de febrero</li>
                <li>Período de ajustes y cambios: Primera semana de cada cuatrimestre</li>
                <li>Inscripciones tardías (con justificación): Hasta 15 días después del inicio</li>
                <li>Consulta el calendario académico oficial para fechas exactas actualizadas</li>
              </ul>
            </div>
          )
        },
        {
          id: "verificar-correlatividades",
          question: "¿Cómo verifico las correlatividades?",
          answer: (
            <div className="space-y-3">
              <p>Para asegurar que puedas inscribirte sin problemas:</p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                <li>Ve a &quot;Mi Perfil Académico&quot; → &quot;Plan de Estudios&quot;</li>
                <li>Consulta la matriz de correlatividades interactiva</li>
                <li>Verifica materias aprobadas, regulares y pendientes</li>
                <li>Las materias no disponibles aparecerán en gris con explicación</li>
                <li>Contacta a tu coordinador académico ante dudas específicas</li>
                <li>Revisa los equivalencias por cambios de plan de estudios</li>
              </ul>
            </div>
          )
        },
        {
          id: "sin-cupos",
          question: "¿Qué hago si no hay cupos disponibles?",
          answer: (
            <div className="space-y-3">
              <p>Cuando una materia está completa, tienes estas opciones:</p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                <li>Inscríbete en la lista de espera (automática y gratuita)</li>
                <li>Configura notificaciones para recibir alertas de cupos liberados</li>
                <li>Considera comisiones en horarios alternativos</li>
                <li>Consulta sobre apertura de nuevas comisiones si hay demanda suficiente</li>
                <li>Evalúa cursar la materia en el siguiente período académico</li>
                <li>Solicita autorización especial si es tu última materia para graduarte</li>
              </ul>
            </div>
          )
        }
      ]
    },
    {
      category: "Problemas Técnicos",
      questions: [
        {
          id: "plataforma-lenta",
          question: "La plataforma carga muy lento ¿Qué puedo hacer?",
          answer: (
            <div className="space-y-3">
              <p>Para optimizar la velocidad de carga, intenta estas soluciones:</p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                <li>Verifica tu conexión a internet (mínimo recomendado: 5 Mbps)</li>
                <li>Cierra otras pestañas del navegador que consuman recursos</li>
                <li>Limpia la caché y cookies de tu navegador</li>
                <li>Actualiza tu navegador a la versión más reciente</li>
                <li>Desactiva temporalmente extensiones que puedan interferir</li>
                <li>Prueba acceder desde navegación privada/incógnita</li>
                <li>Considera cambiar de navegador (Chrome, Firefox, Edge soportados)</li>
              </ul>
            </div>
          )
        },
        {
          id: "navegadores-compatibles",
          question: "¿Qué navegadores son compatibles con Aula Link?",
          answer: (
            <div className="space-y-3">
              <p>Aula Link está optimizado para funcionar en:</p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                <li>Google Chrome 90+ (recomendado para mejor rendimiento)</li>
                <li>Mozilla Firefox 88+ (segunda opción recomendada)</li>
                <li>Microsoft Edge 90+ (excelente integración con Windows)</li>
                <li>Safari 14+ para usuarios de macOS e iOS</li>
                <li>Opera 76+ (basado en Chromium, buena compatibilidad)</li>
                <li>Navegadores móviles: Chrome Mobile, Safari Mobile, Samsung Internet</li>
                <li>Internet Explorer NO es compatible (descontinuado oficialmente)</li>
              </ul>
            </div>
          )
        },
        {
          id: "reportar-error",
          question: "¿Cómo reporto un error o bug en la plataforma?",
          answer: (
            <div className="space-y-3">
              <p>Para ayudarnos a resolver problemas técnicos eficientemente:</p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                <li>Ve a &quot;Ayuda&quot; → &quot;Reportar Problema&quot; en el menú principal</li>
                <li>Completa el formulario detallando el error específico</li>
                <li>Incluye capturas de pantalla del problema cuando sea posible</li>
                <li>Especifica tu navegador, versión y sistema operativo</li>
                <li>Describe los pasos exactos que llevaron al error</li>
                <li>Proporciona la hora aproximada cuando ocurrió el problema</li>
                <li>Recibirás un ticket de seguimiento por email en 24-48 horas</li>
              </ul>
            </div>
          )
        }
      ]
    },
    {
      category: "Calificaciones y Documentos",
      questions: [
        {
          id: "cuando-calificaciones",
          question: "¿Cuándo aparecen las calificaciones en el sistema?",
          answer: (
            <div className="space-y-3">
              <p>Los tiempos de publicación de notas siguen estos plazos institucionales:</p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                <li>Evaluaciones parciales: Dentro de 7 días hábiles posteriores</li>
                <li>Trabajos prácticos: Entre 3-5 días hábiles según complejidad</li>
                <li>Exámenes finales: Máximo 10 días hábiles después del examen</li>
                <li>Calificaciones definitivas: Después del período de revisión (15 días)</li>
                <li>Notificación automática por email cuando se publiquen</li>
                <li>Las notas aparecen primero como &quot;provisionales&quot; antes de confirmarse</li>
              </ul>
            </div>
          )
        },
        {
          id: "descargar-certificados",
          question: "¿Cómo descargo certificados y constancias?",
          answer: (
            <div className="space-y-3">
              <p>Para obtener documentación oficial desde la plataforma:</p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                <li>Accede a &quot;Mi Perfil Académico&quot; → &quot;Documentos&quot;</li>
                <li>Selecciona el tipo de documento necesario</li>
                <li>Constancia de alumno regular: Disponible inmediatamente</li>
                <li>Certificado de materias aprobadas: Procesamiento 24-48 horas</li>
                <li>Analítico parcial: Requiere al menos 24 horas de procesamiento</li>
                <li>Todos los documentos incluyen código QR para verificación de autenticidad</li>
                <li>Los PDF generados tienen firma digital institucional válida</li>
              </ul>
            </div>
          )
        },
        {
          id: "impugnar-calificacion",
          question: "¿Puedo impugnar una calificación?",
          answer: (
            <div className="space-y-3">
              <p>El proceso de revisión de calificaciones permite:</p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                <li>Solicitar revisión dentro de 48 horas de publicada la nota</li>
                <li>Completar formulario de impugnación con fundamentos específicos</li>
                <li>Adjuntar evidencia documental que respalde tu solicitud</li>
                <li>La revisión es realizada por una comisión académica independiente</li>
                <li>Respuesta definitiva en máximo 10 días hábiles</li>
                <li>Si procede la impugnación, la calificación se actualiza automáticamente</li>
                <li>Mantienes derecho de apelación ante instancia superior si es necesario</li>
              </ul>
            </div>
          )
        }
      ]
    },
    {
      category: "Soporte y Contacto",
      questions: [
        {
          id: "canales-soporte",
          question: "¿Cuáles son los canales de soporte disponibles?",
          answer: (
            <div className="space-y-4">
              <p>Aula Link cuenta con múltiples canales de soporte especializados:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-700/30 rounded-lg p-3">
                  <h4 className="font-semibold text-blue-400 mb-2">Soporte Técnico</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Email: soporte@aulalink.edu.ar</li>
                    <li>Chat en vivo: 9:00-18:00 hs</li>
                    <li>WhatsApp: +54 381 000-0002</li>
                    <li>Ticket system integrado</li>
                  </ul>
                </div>
                
                <div className="bg-gray-700/30 rounded-lg p-3">
                  <h4 className="font-semibold text-blue-400 mb-2">Consultas Académicas</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Coordinación académica presencial</li>
                    <li>Tutoría virtual programada</li>
                    <li>Foros de consulta por materia</li>
                    <li>Oficina de alumnos: +54 381 000-0003</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        },
        {
          id: "horarios-atencion",
          question: "¿Cuáles son los horarios de atención?",
          answer: (
            <div className="space-y-3">
              <div className="bg-green-900/20 rounded-lg p-4 border border-green-800">
                <h4 className="font-semibold text-green-400 mb-2">Horarios de Atención</h4>
                <ul className="list-disc list-inside text-sm text-green-200 space-y-1">
                  <li>Lunes a viernes: 8:00 - 20:00 hs (soporte general)</li>
                  <li>Sábados: 9:00 - 15:00 hs (consultas académicas)</li>
                  <li>Domingo: Sistema automatizado + emergencias</li>
                  <li>Feriados: Soporte técnico limitado disponible</li>
                  <li>Período de exámenes: Horario extendido hasta 22:00 hs</li>
                </ul>
              </div>
            </div>
          )
        },
        {
          id: "emergencias",
          question: "¿Cómo contactar en caso de emergencias?",
          answer: (
            <div className="space-y-3">
              <div className="bg-red-900/20 rounded-lg p-4 border border-red-800">
                <h4 className="font-semibold text-red-400 mb-2">Contacto de Emergencia</h4>
                <ul className="list-disc list-inside text-sm text-red-200 space-y-1">
                  <li>Línea directa: +54 381 000-0000</li>
                  <li>Email prioritario: urgente@aulalink.edu.ar</li>
                  <li>Disponible 24/7 durante períodos de examen</li>
                  <li>Respuesta garantizada en menos de 2 horas</li>
                </ul>
              </div>
            </div>
          )
        }
      ]
    },
    {
      category: "Seguridad y Privacidad",
      questions: [
        {
          id: "seguridad-cuenta",
          question: "¿Cómo mantengo mi cuenta segura?",
          answer: (
            <div className="space-y-3">
              <p>Mantén tu cuenta segura siguiendo estas recomendaciones esenciales:</p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                <li>Utiliza una contraseña fuerte con mínimo 8 caracteres combinando letras, números y símbolos</li>
                <li>Nunca compartas tus credenciales con otros estudiantes o terceros</li>
                <li>Activa la autenticación de dos factores cuando esté disponible</li>
                <li>Cierra sesión siempre al usar computadoras públicas o compartidas</li>
                <li>Revisa regularmente la actividad de tu cuenta en &quot;Configuración de Seguridad&quot;</li>
                <li>Reporta inmediatamente cualquier actividad sospechosa o no autorizada</li>
                <li>Mantén actualizado tu email de recuperación y número de teléfono</li>
              </ul>
            </div>
          )
        },
        {
          id: "uso-responsable",
          question: "¿Cuáles son las normas de uso responsable?",
          answer: (
            <div className="space-y-3">
              <p>Para mantener un ambiente educativo positivo y seguro para toda la comunidad:</p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                <li>Respeta la propiedad intelectual: no copies ni distribuyas contenidos sin autorización</li>
                <li>Utiliza un lenguaje apropiado y respetuoso en foros y comunicaciones</li>
                <li>No intentes acceder a información que no te corresponde</li>
                <li>Reporta contenido inapropiado o comportamiento inadecuado</li>
                <li>Cumple con los plazos académicos y compromisos asumidos</li>
                <li>Mantén actualizada tu información personal y académica</li>
                <li>Utiliza las herramientas de comunicación únicamente para fines educativos</li>
              </ul>
              
              <div className="bg-red-900/20 rounded-lg p-3 border border-red-800 mt-4">
                <p className="text-sm text-red-200">
                  <strong>Importante:</strong> El uso indebido de la plataforma puede resultar en la suspensión 
                  temporal o permanente de tu cuenta. Ante dudas, consulta siempre con el equipo de soporte.
                </p>
              </div>
            </div>
          )
        }
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
              Preguntas Frecuentes
            </h1>
          </div>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-2">
            Encuentra respuestas rápidas a las consultas más comunes sobre Aula Link
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          className="space-y-6 sm:space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {faqData.map((category) => (
            <motion.div key={category.category} className="mb-8 sm:mb-12" variants={fadeInUp}>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                {category.category}
              </h2>
              
              <Accordion.Root type="single" collapsible className="w-full space-y-3">
                {category.questions.map((faq) => (
                  <Accordion.Item
                    key={faq.id}
                    value={faq.id}
                    className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden"
                  >
                    <Accordion.Trigger className="flex justify-between items-center w-full p-4 sm:p-6 text-left hover:bg-gray-700/30 transition-colors group">
                      <span className="text-base sm:text-lg font-medium text-white pr-4">
                        {faq.question}
                      </span>
                      <ChevronDown className="h-5 w-5 text-blue-400 transition-transform duration-300 group-data-[state=open]:rotate-180 flex-shrink-0" />
                    </Accordion.Trigger>
                    
                    <Accordion.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                      <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-gray-300 text-sm sm:text-base">
                        {faq.answer}
                      </div>
                    </Accordion.Content>
                  </Accordion.Item>
                ))}
              </Accordion.Root>
            </motion.div>
          ))}

          {/* Footer */}
          <motion.div
            className="text-center pt-6 sm:pt-8 border-t border-gray-700 mt-12"
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
                  ¿No encuentras la respuesta que buscas? Contacta a nuestro equipo de soporte 
                  a través de los canales oficiales. Estamos aquí para ayudarte.
                </p>
                <p className="mt-2">
                  Mesa de ayuda: soporte@aulalink.edu.ar | Teléfono: +54 381 000-0000 | 
                  Chat disponible de 9:00 a 18:00 hs, lunes a viernes
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}