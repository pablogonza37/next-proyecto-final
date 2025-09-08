"use client"

import { motion } from "framer-motion"

export default function PoliticasPage() {
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
              Políticas de Privacidad
            </h1>
          </div>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-2">
            Plataforma Educativa Aula Link - Protección y Manejo de Datos Personales
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
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Información que Recopilamos</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                En <strong className="text-blue-400">Aula Link</strong>, recopilamos únicamente la información necesaria 
                para brindar nuestros servicios educativos de manera eficiente, segura y en cumplimiento 
                con las normativas de protección de datos vigentes en Argentina e internacionalmente.
              </p>
              <p>
                La recolección de datos se realiza bajo los principios de licitud, lealtad, transparencia, 
                limitación de la finalidad, minimización de datos, exactitud, limitación del plazo de 
                conservación, integridad y confidencialidad.
              </p>
              
              <h3 className="text-base sm:text-lg font-semibold text-blue-400">Información Personal</h3>
              <p>
                Los siguientes datos personales son recopilados durante el proceso de registro 
                y utilización de la plataforma educativa:
              </p>
              <ol className="space-y-2 ml-4">
                <li>1. Nombre completo y apellido según documento oficial</li>
                <li>2. Documento Nacional de Identidad (DNI) y número de trámite</li>
                <li>3. Dirección de correo electrónico institucional verificada</li>
                <li>4. Información académica completa (materias, comisiones, calificaciones, historial)</li>
                <li>5. Datos de contacto actualizados (teléfono, dirección física)</li>
                <li>6. Fotografía para identificación institucional cuando sea requerida</li>
              </ol>

              <h3 className="text-base sm:text-lg font-semibold text-blue-400 mt-4 sm:mt-6">Información Técnica</h3>
              <p>
                Para garantizar la seguridad y optimizar la experiencia de usuario, 
                recopilamos automáticamente la siguiente información técnica:
              </p>
              <ol className="space-y-2 ml-4" start={7}>
                <li>7. Dirección IP y datos de geolocalización aproximada</li>
                <li>8. Información detallada del navegador, sistema operativo y dispositivo</li>
                <li>9. Cookies esenciales y de funcionalidad</li>
                <li>10. Logs detallados de actividad y patrones de uso de la plataforma</li>
                <li>11. Tiempos de sesión y frecuencia de acceso</li>
                <li>12. Interacciones con contenidos educativos y recursos</li>
              </ol>
            </div>
          </motion.div>

          {/* Sección 2 */}
          <motion.div
            className="mb-8 sm:mb-12"
            variants={fadeInUp}
          >
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Uso de la Información</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                Los datos personales recopilados se utilizan exclusivamente para fines educativos 
                y administrativos dentro del marco de nuestra institución, respetando siempre 
                los principios de proporcionalidad y finalidad determinada.
              </p>
              <p>
                Todo tratamiento de datos se realiza bajo bases jurídicas legítimas, incluyendo 
                el cumplimiento de obligaciones legales, el interés público en el ámbito educativo, 
                y el consentimiento informado del titular cuando sea requerido.
              </p>
              
              <h3 className="text-base sm:text-lg font-semibold text-blue-400">Servicios Educativos</h3>
              <p>
                La información personal es utilizada para brindar servicios educativos 
                de calidad y garantizar una experiencia académica completa:
              </p>
              <ol className="space-y-2 ml-4" start={13}>
                <li>13. Gestión integral de inscripciones a materias, comisiones y actividades</li>
                <li>14. Seguimiento personalizado del progreso y rendimiento académico</li>
                <li>15. Comunicación oportuna de actividades, evaluaciones y eventos institucionales</li>
                <li>16. Emisión de certificados, constancias y documentación académica oficial</li>
                <li>17. Provision de soporte técnico y académico personalizado y especializado</li>
                <li>18. Facilitación de procesos de tutoreo y acompañamiento estudiantil</li>
              </ol>
              
              <h3 className="text-base sm:text-lg font-semibold text-blue-400 mt-4 sm:mt-6">Administración Institucional</h3>
              <p>
                Para el correcto funcionamiento institucional y el cumplimiento de obligaciones 
                regulatorias, utilizamos la información para:
              </p>
              <ol className="space-y-2 ml-4" start={19}>
                <li>19. Mantenimiento de registros académicos históricos y actualizados</li>
                <li>20. Análisis estadístico agregado para mejora continua de servicios</li>
                <li>21. Cumplimiento de obligaciones legales y reglamentarias educativas</li>
                <li>22. Implementación de medidas de seguridad y prevención de fraudes</li>
                <li>23. Generación de reportes institucionales para organismos de control</li>
                <li>24. Evaluación y acreditación de programas académicos</li>
              </ol>
            </div>
          </motion.div>

          {/* Sección 3 */}
          <motion.div
            className="mb-8 sm:mb-12"
            variants={fadeInUp}
          >
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Protección y Seguridad</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                La seguridad de la información es fundamental en Aula Link. Implementamos 
                medidas técnicas y organizativas robustas, apropiadas para garantizar un nivel 
                de seguridad adecuado al riesgo, cumpliendo con estándares internacionales 
                como ISO 27001 y mejores prácticas de ciberseguridad.
              </p>
              <p>
                Nuestro enfoque de seguridad es integral y contempla la protección en todas 
                las etapas del ciclo de vida de los datos: recolección, procesamiento, 
                almacenamiento, transmisión y eliminación segura.
              </p>
              
              <h3 className="text-base sm:text-lg font-semibold text-blue-400">Medidas Técnicas</h3>
              <p>
                Utilizamos tecnologías de vanguardia para proteger la información 
                contra amenazas internas y externas:
              </p>
              <ol className="space-y-2 ml-4" start={25}>
                <li>25. Encriptación SSL/TLS de grado militar para toda transmisión de datos</li>
                <li>26. Servidores seguros con acceso restringido y autenticación multifactor</li>
                <li>27. Copias de seguridad automáticas, encriptadas y distribuidas geográficamente</li>
                <li>28. Monitoreo continuo de seguridad 24/7 con alertas en tiempo real</li>
                <li>29. Autenticación de dos factores obligatoria para roles administrativos</li>
                <li>30. Firewalls avanzados y sistemas de detección de intrusiones</li>
                <li>31. Segmentación de redes y principio de menor privilegio</li>
              </ol>
              
              <h3 className="text-base sm:text-lg font-semibold text-blue-400 mt-4 sm:mt-6">Medidas Organizativas</h3>
              <p>
                Complementamos la seguridad técnica con políticas organizativas 
                rigurosas y capacitación continua del personal:
              </p>
              <ol className="space-y-2 ml-4" start={32}>
                <li>32. Acceso estrictamente limitado al personal autorizado con necesidad de acceso</li>
                <li>33. Capacitación regular y certificación en protección de datos y ciberseguridad</li>
                <li>34. Políticas internas detalladas de manejo y clasificación de información</li>
                <li>35. Auditorías de seguridad periódicas internas y externas</li>
                <li>36. Acuerdos de confidencialidad con todo el personal y proveedores</li>
                <li>37. Plan de respuesta a incidentes y continuidad del negocio</li>
              </ol>
            </div>
          </motion.div>

          {/* Sección 4 */}
          <motion.div
            className="mb-8 sm:mb-12"
            variants={fadeInUp}
          >
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Sus Derechos</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                Como titular de los datos, usted posee derechos fundamentales establecidos por la 
                Ley 25.326 de Protección de Datos Personales y normativas complementarias. 
                Garantizamos el ejercicio pleno de estos derechos de manera gratuita y sin demoras injustificadas.
              </p>
              <p>
                El ejercicio de estos derechos puede realizarse en cualquier momento y será 
                procesado con la mayor celeridad posible, respetando los plazos legales establecidos.
              </p>
              
              <h3 className="text-base sm:text-lg font-semibold text-blue-400">Derechos del Titular de Datos</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-gray-700/30 rounded-lg p-3 sm:p-4">
                  <h4 className="font-semibold text-blue-400 mb-2">Derecho de Acceso</h4>
                  <p className="text-sm">Consultar qué datos personales tenemos sobre usted, con qué finalidad y durante cuánto tiempo</p>
                </div>
                <div className="bg-gray-700/30 rounded-lg p-3 sm:p-4">
                  <h4 className="font-semibold text-blue-400 mb-2">Derecho de Rectificación</h4>
                  <p className="text-sm">Solicitar la corrección inmediata de datos inexactos, incompletos o desactualizados</p>
                </div>
                <div className="bg-gray-700/30 rounded-lg p-3 sm:p-4">
                  <h4 className="font-semibold text-blue-400 mb-2">Derecho de Supresión</h4>
                  <p className="text-sm">Solicitar la eliminación de sus datos cuando ya no sean necesarios o el tratamiento sea ilícito</p>
                </div>
                <div className="bg-gray-700/30 rounded-lg p-3 sm:p-4">
                  <h4 className="font-semibold text-blue-400 mb-2">Derecho de Portabilidad</h4>
                  <p className="text-sm">Obtener una copia de sus datos en formato estructurado y transferible a otra institución</p>
                </div>
                <div className="bg-gray-700/30 rounded-lg p-3 sm:p-4">
                  <h4 className="font-semibold text-blue-400 mb-2">Derecho de Oposición</h4>
                  <p className="text-sm">Oponerse al tratamiento de sus datos por motivos relacionados con su situación particular</p>
                </div>
                <div className="bg-gray-700/30 rounded-lg p-3 sm:p-4">
                  <h4 className="font-semibold text-blue-400 mb-2">Derecho de Limitación</h4>
                  <p className="text-sm">Solicitar la restricción del tratamiento mientras se verifica la exactitud de los datos</p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-900/20 rounded-lg border border-blue-800">
                <h4 className="font-semibold text-blue-400 mb-2">Cómo Ejercer Sus Derechos</h4>
                <ol className="text-sm space-y-1" start={38}>
                  <li>38. Envíe su solicitud por escrito a privacidad@aulalink.edu.ar</li>
                  <li>39. Incluya copia de su documento de identidad para verificación</li>
                  <li>40. Especifique claramente qué derecho desea ejercer</li>
                  <li>41. Proporcione información suficiente para localizar sus datos</li>
                  <li>42. Responderemos en un plazo máximo de 10 días hábiles</li>
                </ol>
              </div>
            </div>
          </motion.div>

          {/* Sección 5 */}
          <motion.div
            className="mb-8 sm:mb-12"
            variants={fadeInUp}
          >
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Cookies y Tecnologías Similares</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                Aula Link utiliza cookies y tecnologías similares de manera responsable para 
                mejorar su experiencia educativa, garantizar la funcionalidad de la plataforma 
                y proporcionar servicios personalizados. Respetamos su privacidad y le damos 
                control total sobre estas tecnologías.
              </p>
              <p>
                Las cookies son pequeños archivos de texto que se almacenan en su dispositivo 
                cuando visita nuestra plataforma. Utilizamos únicamente las cookies estrictamente 
                necesarias para el funcionamiento y aquellas que mejoran la experiencia educativa.
              </p>
              
              <h3 className="text-base sm:text-lg font-semibold text-blue-400">Tipos de Cookies que Utilizamos</h3>
              
              <div className="space-y-4">
                <div className="bg-gray-700/50 rounded-lg p-3 sm:p-4">
                  <h4 className="font-semibold text-blue-400 mb-2">Cookies Esenciales</h4>
                  <p className="text-sm mb-2">Indispensables para el funcionamiento básico de la plataforma educativa:</p>
                  <ol className="text-sm space-y-1 ml-4" start={43}>
                    <li>43. Autenticación y mantenimiento de sesiones seguras</li>
                    <li>44. Navegación entre páginas y seccióones del sistema</li>
                    <li>45. Seguridad y protección contra ataques CSRF</li>
                  </ol>
                </div>
                
                <div className="bg-gray-700/50 rounded-lg p-3 sm:p-4">
                  <h4 className="font-semibold text-blue-400 mb-2">Cookies de Funcionalidad</h4>
                  <p className="text-sm mb-2">Para recordar preferencias y personalizar la experiencia:</p>
                  <ol className="text-sm space-y-1 ml-4" start={46}>
                    <li>46. Idioma y configuraciones regionales</li>
                    <li>47. Preferencias de visualización y accesibilidad</li>
                    <li>48. Últimas acciones y progreso en actividades</li>
                  </ol>
                </div>
                
                <div className="bg-gray-700/50 rounded-lg p-3 sm:p-4">
                  <h4 className="font-semibold text-blue-400 mb-2">Cookies de Análisis</h4>
                  <p className="text-sm mb-2">Para entender patrones de uso y mejorar la plataforma:</p>
                  <ol className="text-sm space-y-1 ml-4" start={49}>
                    <li>49. Estadísticas de uso agregadas y anónimas</li>
                    <li>50. Identificación de áreas de mejora en la interfaz</li>
                    <li>51. Optimización del rendimiento del sistema</li>
                  </ol>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-green-900/20 rounded-lg border border-green-800">
                <p className="text-sm text-green-200">
                  <strong>Control de Cookies:</strong> Puede gestionar y deshabilitar cookies 
                  no esenciales a través de la configuración de su navegador o nuestro panel 
                  de preferencias. Sin embargo, deshabilitar cookies esenciales puede afectar 
                  la funcionalidad de la plataforma.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Sección 6 */}
          <motion.div
            className="mb-8 sm:mb-12"
            variants={fadeInUp}
          >
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Contacto y Consultas</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                Para cualquier consulta, reclamo o solicitud relacionada con el tratamiento de sus 
                datos personales, puede contactar directamente a nuestro Oficial de Protección de Datos, 
                quien está certificado y capacitado para brindar asistencia especializada en temas de privacidad.
              </p>
              <p>
                Además, puede presentar consultas ante la Agencia de Acceso a la Información Pública (AAIP), 
                autoridad de aplicación de la Ley de Protección de Datos Personales en Argentina, 
                en caso de considerar que sus derechos no han sido adecuadamente atendidos.
              </p>
              
              <h3 className="text-base sm:text-lg font-semibold text-blue-400">Canales de Contacto Institucional</h3>
              
              <div className="bg-gray-700/50 rounded-lg p-3 sm:p-4 mt-3 sm:mt-4">
                <h4 className="text-base sm:text-lg font-semibold text-blue-400 mb-2">Oficial de Protección de Datos</h4>
                <ol className="mt-2 space-y-1" start={52}>
                  <li>52. Email prioritario: privacidad@aulalink.edu.ar</li>
                  <li>53. Teléfono directo: +54 381 000-0000 (Int. 4455)</li>
                  <li>54. Atención presencial: Lunes a Viernes 9:00-17:00hs</li>
                  <li>55. Dirección física: Av. Educación 1234, San Miguel de Tucumán</li>
                  <li>56. WhatsApp institucional: +54 381 000-0001 (consultas urgentes)</li>
                </ol>
                
                <div className="mt-4 space-y-3">
                  <div className="p-3 bg-blue-900/30 rounded border border-blue-700">
                    <p className="text-sm text-blue-200">
                      <strong>Tiempo de Respuesta:</strong> Consultas generales serán atendidas en 
                      máximo 10 días hábiles. Solicitudes de ejercicio de derechos en máximo 15 días hábiles 
                      según normativa vigente.
                    </p>
                  </div>
                  
                  <div className="p-3 bg-orange-900/30 rounded border border-orange-700">
                    <p className="text-sm text-orange-200">
                      <strong>Emergencias de Seguridad:</strong> Para reportar posibles brechas de datos 
                      o incidentes de seguridad, contactar inmediatamente al teléfono directo o email prioritario. 
                      Respuesta garantizada en menos de 24 horas.
                    </p>
                  </div>
                  
                  <div className="p-3 bg-green-900/30 rounded border border-green-700">
                    <h5 className="font-semibold text-green-400 mb-1">Documentación Requerida para Solicitudes</h5>
                    <ol className="text-sm space-y-1" start={57}>
                      <li>57. Documento de identidad válido (DNI o pasaporte)</li>
                      <li>58. Formulario de solicitud completo (disponible en el sitio web)</li>
                      <li>59. Descripción detallada de la consulta o solicitud</li>
                      <li>60. En caso de representación: poder legal debidamente certificado</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sección adicional */}
          <motion.div
            className="mb-8 sm:mb-12"
            variants={fadeInUp}
          >
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Cumplimiento Legal y Normativo</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                Aula Link opera en estricto cumplimiento con la legislación argentina e internacional 
                de protección de datos, incluyendo disposiciones específicas para instituciones educativas 
                y organismos públicos. Mantenemos un compromiso permanente con la actualización normativa.
              </p>
              
              <h3 className="text-base sm:text-lg font-semibold text-blue-400">Marco Legal Aplicable</h3>
              <p>
                Esta política de privacidad se fundamenta en las siguientes normativas y principios legales:
              </p>
              
              <ol className="space-y-2 ml-4" start={61}>
                <li>61. Ley 25.326 de Protección de Datos Personales de la República Argentina</li>
                <li>62. Decreto Reglamentario 1558/2001 y modificatorias</li>
                <li>63. Disposiciones de la Agencia de Acceso a la Información Pública (AAIP)</li>
                <li>64. Reglamento General de Protección de Datos (GDPR) para estudiantes internacionales</li>
                <li>65. Ley 27.275 de Acceso a la Información Pública</li>
                <li>66. Normativas específicas del sector educativo argentino</li>
                <li>67. Estándares ISO 27001 e ISO 27002 de seguridad de la información</li>
              </ol>
              
              <h3 className="text-base sm:text-lg font-semibold text-blue-400 mt-4 sm:mt-6">Compromiso con la Mejora Continua</h3>
              <p>
                Nos comprometemos a revisar y actualizar periódicamente nuestras prácticas de 
                protección de datos para mantener los más altos estándares de privacidad:
              </p>
              
              <ol className="space-y-2 ml-4" start={68}>
                <li>68. Evaluaciones de impacto en la protección de datos (EIPD) regulares</li>
                <li>69. Auditorías externas anuales de cumplimiento normativo</li>
                <li>70. Actualización de políticas según cambios legislativos</li>
                <li>71. Capacitación continua del personal en mejores prácticas</li>
                <li>72. Implementación de tecnologías de privacidad por diseño (Privacy by Design)</li>
                <li>73. Participación en foros y grupos de trabajo sobre protección de datos educativos</li>
              </ol>
              
              <div className="mt-6 p-4 bg-gray-700/30 rounded-lg border border-gray-600">
                <h4 className="font-semibold text-blue-400 mb-2">Certificaciones y Acreditaciones</h4>
                <p className="text-sm">
                  Aula Link mantiene certificaciones vigentes en seguridad de la información y 
                  protección de datos. Nuestros procesos son auditados regularmente por organismos 
                  independientes para garantizar el cumplimiento con los estándares más exigentes 
                  de la industria educativa y tecnológica.
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
                  Esta política de privacidad fue actualizada por última vez el{' '}
                  {new Date().toLocaleDateString('es-AR', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })} y cumple con la Ley 25.326 de Protección de Datos Personales de Argentina.
                </p>
                <p className="mt-2">
                  La plataforma Aula Link está registrada ante la Agencia de Acceso a la Información 
                  Pública (AAIP) y opera bajo la jurisdicción de la República Argentina. El tratamiento 
                  de datos se realiza conforme a los principios de licitud, lealtad y transparencia.
                </p>
                <p className="mt-2">
                  Para consultas sobre esta política: privacidad@aulalink.edu.ar | 
                  AAIP: www.argentina.gob.ar/aaip | Denuncias: dnpdp@aaip.gob.ar
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
