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
          <motion.div
            className="mb-8 sm:mb-12"
            variants={fadeInUp}
          >
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Aceptación de Términos</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                Al acceder y utilizar la plataforma <strong className="text-blue-400">Aula Link</strong>, 
                usted acepta cumplir con estos términos y condiciones. Esta plataforma educativa está 
                destinada exclusivamente para estudiantes, docentes y personal administrativo autorizado 
                de la institución educativa.
              </p>
              <p>
                El uso de este sistema implica el conocimiento y aceptación plena de todas las 
                condiciones establecidas en este documento. Estos términos constituyen un acuerdo 
                vinculante entre el usuario y la institución, y su cumplimiento es obligatorio 
                para mantener el acceso a los servicios educativos.
              </p>
              <p>
                Si no está de acuerdo con alguno de estos términos, por favor no utilice nuestros servicios. 
                La institución se reserva el derecho de suspender o cancelar el acceso a usuarios 
                que no cumplan con las condiciones establecidas.
              </p>
            </div>
          </motion.div>

          {/* Sección 2 */}
          <motion.div
            className="mb-8 sm:mb-12"
            variants={fadeInUp}
          >
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Uso de la Plataforma Educativa</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                La plataforma Aula Link ha sido diseñada para facilitar la gestión académica 
                y mejorar la experiencia educativa de todos los usuarios. Su uso apropiado 
                garantiza un ambiente de aprendizaje seguro y eficiente.
              </p>
              
              <h3 className="text-base sm:text-lg font-semibold text-blue-400">Inscripciones Académicas</h3>
              <p>
                El proceso de inscripción a materias es fundamental para el correcto funcionamiento 
                del sistema educativo. Los siguientes lineamientos deben ser observados:
              </p>
              <ol className="space-y-2 ml-4">
                <li>1. Las inscripciones a materias están sujetas a disponibilidad de cupos y horarios</li>
                <li>2. Los estudiantes deben cumplir con los requisitos académicos previos y correlatividades</li>
                <li>3. Las fechas de inscripción son establecidas por el calendario académico institucional</li>
                <li>4. La información personal debe ser veraz, actualizada y verificable</li>
              </ol>
              
              <h3 className="text-base sm:text-lg font-semibold text-blue-400 mt-4 sm:mt-6">Responsabilidades del Usuario</h3>
              <p>
                Todo usuario de la plataforma asume responsabilidades específicas que contribuyen 
                al funcionamiento óptimo del sistema educativo:
              </p>
              <ol className="space-y-2 ml-4" start={5}>
                <li>5. Mantener la confidencialidad absoluta de sus credenciales de acceso</li>
                <li>6. Utilizar la plataforma únicamente para fines académicos y educativos</li>
                <li>7. Respetar los derechos de propiedad intelectual y autoría de contenidos</li>
                <li>8. No interferir con el funcionamiento normal del sistema o afectar a otros usuarios</li>
              </ol>
            </div>
          </motion.div>

          {/* Sección 3 */}
          <motion.div
            className="mb-8 sm:mb-12"
            variants={fadeInUp}
          >
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Protección de Datos</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                La protección de datos personales es una prioridad fundamental para Aula Link. 
                Nos comprometemos a proteger su información personal de acuerdo con las leyes vigentes 
                de protección de datos, incluyendo la Ley 25.326 de Protección de Datos Personales 
                y normativas internacionales aplicables.
              </p>
              <p>
                La información recopilada a través de la plataforma es tratada con los más altos 
                estándares de seguridad y confidencialidad. Implementamos medidas técnicas y 
                organizativas apropiadas para prevenir el acceso no autorizado, la alteración, 
                divulgación o destrucción de datos personales.
              </p>
              <p>Los datos recopilados serán utilizados exclusivamente para:</p>
              <ol className="space-y-2 ml-4" start={9}>
                <li>9. Gestión integral de inscripciones y mantenimiento de expedientes académicos</li>
                <li>10. Comunicaciones institucionales relevantes y notificaciones académicas</li>
                <li>11. Mejora continua de nuestros servicios educativos y experiencia de usuario</li>
                <li>12. Cumplimiento de obligaciones legales, reglamentarias y de auditoría</li>
              </ol>
            </div>
          </motion.div>

          {/* Sección 4 */}
          <motion.div
            className="mb-8 sm:mb-12"
            variants={fadeInUp}
          >
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Limitaciones y Disponibilidad</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                Aula Link se esfuerza por mantener la plataforma disponible 24/7 durante todo el 
                año académico. Sin embargo, ocasionalmente pueden existir interrupciones programadas 
                para mantenimiento, actualizaciones de seguridad, o mejoras del sistema.
              </p>
              <p>
                La institución hará sus mejores esfuerzos para notificar con anticipación cualquier 
                interrupción planificada y minimizar el impacto en las actividades académicas. 
                No obstante, existen limitaciones en nuestro control que deben ser consideradas.
              </p>
              <p>No nos hacemos responsables por situaciones fuera de nuestro control, incluyendo:</p>
              <ol className="space-y-2 ml-4" start={13}>
                <li>13. Interrupciones del servicio por causas técnicas externas o de fuerza mayor</li>
                <li>14. Pérdida de datos debido a errores del usuario o uso inadecuado de la plataforma</li>
                <li>15. Incompatibilidades con navegadores desactualizados o configuraciones no soportadas</li>
                <li>16. Problemas de conectividad de terceros, proveedores de internet o redes externas</li>
                <li>17. Daños indirectos o consecuenciales derivados del uso de la plataforma</li>
                <li>18. Interrupciones por mantenimiento de emergencia necesario para la seguridad del sistema</li>
              </ol>
            </div>
          </motion.div>

          {/* Sección 5 */}
          <motion.div
            className="mb-8 sm:mb-12"
            variants={fadeInUp}
          >
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Modificaciones y Contacto</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                La institución se reserva el derecho de modificar estos términos y condiciones 
                en cualquier momento, según considere necesario para mejorar los servicios, 
                cumplir con nuevas regulaciones, o adaptarse a cambios tecnológicos.
              </p>
              <p>
                Las modificaciones serán notificadas a todos los usuarios a través de la plataforma, 
                correo electrónico institucional, y publicación en el sitio web oficial. 
                Las modificaciones entrarán en vigor inmediatamente después de su publicación, 
                a menos que se especifique una fecha posterior.
              </p>
              <p>
                El uso continuado de la plataforma después de la publicación de modificaciones 
                constituirá la aceptación de los nuevos términos. Si no está de acuerdo con 
                las modificaciones, debe discontinuar el uso de la plataforma.
              </p>
              
              <div className="mt-4 sm:mt-6">
                <h3 className="text-base sm:text-lg font-semibold text-blue-400 mb-2">Contacto Institucional</h3>
                <p>
                  Para consultas, dudas, o solicitudes relacionadas con estos términos y condiciones, 
                  puede contactar a la institución a través de los siguientes medios:
                </p>
                <ol className="mt-3 space-y-1" start={19}>
                  <li>19. Correo electrónico: legal@aulalink.edu.ar</li>
                  <li>20. Teléfono institucional: +54 381 000-0000</li>
                  <li>21. Secretaría Académica: Lunes a Viernes 9:00-17:00hs</li>
                  <li>22. Mesa de ayuda técnica: soporte@aulalink.edu.ar</li>
                  <li>23. Dirección física: Av. Educación 1234, San Miguel de Tucumán</li>
                </ol>
                
                <div className="mt-4 p-3 bg-blue-900/20 rounded-lg border border-blue-800">
                  <p className="text-sm text-blue-200">
                    <strong>Tiempo de Respuesta:</strong> Las consultas serán atendidas en un 
                    plazo máximo de 72 horas hábiles. Para asuntos urgentes relacionados con el 
                    acceso a la plataforma, contactar directamente la mesa de ayuda técnica.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sección adicional */}
          <motion.div
            className="mb-8 sm:mb-12"
            variants={fadeInUp}
          >
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Disposiciones Generales</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                Estas disposiciones complementarias establecen el marco normativo completo 
                para el uso de la plataforma Aula Link y definen aspectos importantes 
                para la relación entre la institución y los usuarios.
              </p>
              
              <h3 className="text-base sm:text-lg font-semibold text-blue-400">Jurisdicción y Ley Aplicable</h3>
              <p>
                Estos términos y condiciones se rigen por las leyes de la República Argentina. 
                Cualquier controversia que surja del uso de la plataforma será sometida a la 
                jurisdicción exclusiva de los tribunales competentes de San Miguel de Tucumán, 
                renunciando las partes a cualquier otro fuero que pudiera corresponderles.
              </p>
              
              <ol className="space-y-2 ml-4" start={24}>
                <li>24. Validez y vigencia de los términos durante todo el período académico</li>
                <li>25. Independencia de las cláusulas: nulidad parcial no afecta la validez del conjunto</li>
                <li>26. Prevalencia de la versión en español en caso de traducciones</li>
                <li>27. Obligación de notificar cambios en la información personal del usuario</li>
                <li>28. Derecho de la institución a requerir verificación de identidad</li>
                <li>29. Prohibición de cesión de derechos de uso sin autorización expresa</li>
                <li>30. Conservación de registros académicos según normativas educativas vigentes</li>
              </ol>
              
              <div className="mt-6 p-4 bg-gray-700/30 rounded-lg border border-gray-600">
                <h4 className="font-semibold text-blue-400 mb-2">Nota Importante</h4>
                <p className="text-sm">
                  Al utilizar la plataforma Aula Link, usted confirma que ha leído, comprendido 
                  y acepta estar vinculado por todos estos términos y condiciones. Si tiene 
                  preguntas sobre cualquier aspecto de estos términos, le recomendamos 
                  contactar con el departamento legal antes de continuar usando los servicios.
                </p>
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
                  Estos términos y condiciones fueron actualizados por última vez el{' '}
                  {new Date().toLocaleDateString('es-AR', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })} y están en conformidad con la legislación argentina vigente.
                </p>
                <p className="mt-2">
                  La plataforma Aula Link está registrada y opera bajo la jurisdicción 
                  de la República Argentina. Cualquier disputa será resuelta bajo las 
                  leyes argentinas en los tribunales competentes de la provincia de Tucumán.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}