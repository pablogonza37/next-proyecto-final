"use client"

import { motion } from "framer-motion"

export default function TerminosPage() {
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Header */}
        <motion.div
          className="text-center mb-8 sm:mb-10 lg:mb-12"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center items-center mb-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Términos y Condiciones
            </h1>
          </div>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-2">
            Plataforma Educativa Aula Link - Condiciones de Uso y Políticas Institucionales
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          className="space-y-6 sm:space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Sección 1 */}
          <motion.section
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-700"
            variants={fadeInUp}
          >
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">1. Aceptación de Términos</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                Al acceder y utilizar la plataforma <strong className="text-blue-400">Aula Link</strong>, 
                usted acepta cumplir con estos términos y condiciones. Esta plataforma educativa está 
                destinada exclusivamente para estudiantes, docentes y personal administrativo autorizado.
              </p>
              <p>
                Si no está de acuerdo con alguno de estos términos, por favor no utilice nuestros servicios.
              </p>
            </div>
          </motion.section>

          {/* Sección 2 */}
          <motion.section
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-700"
            variants={fadeInUp}
          >
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">2. Uso de la Plataforma Educativa</h2>
            <div className="text-gray-300 space-y-4">
              <h3 className="text-base sm:text-lg font-semibold text-blue-400">2.1 Inscripciones Académicas</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Las inscripciones a materias están sujetas a disponibilidad de cupos</li>
                <li>Los estudiantes deben cumplir con los requisitos académicos previos</li>
                <li>Las fechas de inscripción son establecidas por la institución</li>
                <li>La información personal debe ser veraz y actualizada</li>
              </ul>
              
              <h3 className="text-base sm:text-lg font-semibold text-blue-400 mt-4 sm:mt-6">2.2 Responsabilidades del Usuario</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Mantener la confidencialidad de sus credenciales de acceso</li>
                <li>Utilizar la plataforma únicamente para fines académicos</li>
                <li>Respetar los derechos de propiedad intelectual</li>
                <li>No interferir con el funcionamiento normal del sistema</li>
              </ul>
            </div>
          </motion.section>

          {/* Sección 3 */}
          <motion.section
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-700"
            variants={fadeInUp}
          >
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">3. Protección de Datos</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                Nos comprometemos a proteger su información personal de acuerdo con las leyes vigentes 
                de protección de datos. Los datos recopilados serán utilizados exclusivamente para:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Gestión de inscripciones y expedientes académicos</li>
                <li>Comunicaciones institucionales relevantes</li>
                <li>Mejora de nuestros servicios educativos</li>
                <li>Cumplimiento de obligaciones legales y reglamentarias</li>
              </ul>
            </div>
          </motion.section>

          {/* Sección 4 */}
          <motion.section
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-700"
            variants={fadeInUp}
          >
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">4. Limitaciones y Disponibilidad</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                La plataforma está disponible 24/7, sin embargo, pueden existir interrupciones 
                programadas para mantenimiento. No nos hacemos responsables por:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Interrupciones del servicio por causas técnicas o de fuerza mayor</li>
                <li>Pérdida de datos debido a errores del usuario</li>
                <li>Incompatibilidades con navegadores desactualizados</li>
                <li>Problemas de conectividad de terceros</li>
              </ul>
            </div>
          </motion.section>

          {/* Sección 5 */}
          <motion.section
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-700"
            variants={fadeInUp}
          >
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">5. Modificaciones y Contacto</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                Nos reservamos el derecho de modificar estos términos en cualquier momento. 
                Las modificaciones serán notificadas a través de la plataforma y entrarán 
                en vigor inmediatamente después de su publicación.
              </p>
              <div className="bg-gray-700/50 rounded-lg p-3 sm:p-4 mt-3 sm:mt-4">
                <h3 className="text-base sm:text-lg font-semibold text-blue-400 mb-2">Contacto Institucional</h3>
                <p>Para consultas sobre estos términos:</p>
                <ul className="mt-2 space-y-1">
                  <li>• Email: legal@aulalink.edu.ar</li>
                  <li>• Teléfono: +54 381 000-0000</li>
                  <li>• Secretaría Académica: Lunes a Viernes 9:00-17:00hs</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Footer */}
          <motion.div
            className="text-center pt-6 sm:pt-8 border-t border-gray-700"
            variants={fadeInUp}
          >
            <p className="text-gray-400">
              © {new Date().getFullYear()} Aula Link - 
              Plataforma Educativa Institucional
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Todos los derechos reservados | Institución de Educación Superior
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}