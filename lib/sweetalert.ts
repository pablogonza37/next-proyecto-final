import Swal, { SweetAlertIcon, SweetAlertResult } from 'sweetalert2'

// ========================================
// SWEETALERT UTILITY - AULA LINK THEME
// ========================================

/**
 * Configuración base para todos los SweetAlerts
 * Mantiene consistencia con el tema de la página
 */
const baseConfig = {
  // Configuraciones globales por defecto
  allowOutsideClick: false,
  allowEscapeKey: true,
  buttonsStyling: false, // Usamos nuestros estilos CSS personalizados
  reverseButtons: true, // Botón confirmar a la derecha
  focusConfirm: true,
  showClass: {
    popup: 'animate__animated animate__fadeInDown animate__faster'
  },
  hideClass: {
    popup: 'animate__animated animate__fadeOutUp animate__faster'
  }
}

/**
 * Configuraciones específicas por tipo de alerta
 */
const typeConfigs = {
  success: {
    iconColor: '#10b981', // emerald-500
    timer: 3000,
    timerProgressBar: true,
    showConfirmButton: false,
  },
  error: {
    iconColor: '#ef4444', // red-500
    confirmButtonText: 'Entendido',
    showConfirmButton: true,
  },
  warning: {
    iconColor: '#f59e0b', // amber-500
    confirmButtonText: 'Confirmar',
    cancelButtonText: 'Cancelar',
    showCancelButton: true,
  },
  info: {
    iconColor: '#3b82f6', // blue-500
    confirmButtonText: 'Ok',
    showConfirmButton: true,
  },
  question: {
    iconColor: '#8b5cf6', // violet-500
    confirmButtonText: 'Sí',
    cancelButtonText: 'No',
    showCancelButton: true,
  }
}

// ========================================
// FUNCIONES DE ALERTAS TIPADAS
// ========================================

/**
 * Alerta de éxito - Auto-cerrable
 */
export const showSuccess = (title: string, text?: string, timer?: number): Promise<SweetAlertResult> => {
  return Swal.fire({
    ...baseConfig,
    ...typeConfigs.success,
    icon: 'success' as SweetAlertIcon,
    title,
    text,
    ...(timer && { timer })
  })
}

/**
 * Alerta de error - Requiere confirmación
 */
export const showError = (title: string, text?: string): Promise<SweetAlertResult> => {
  return Swal.fire({
    ...baseConfig,
    ...typeConfigs.error,
    icon: 'error' as SweetAlertIcon,
    title,
    text
  })
}

/**
 * Alerta de advertencia - Con opción de cancelar
 */
export const showWarning = (title: string, text?: string): Promise<SweetAlertResult> => {
  return Swal.fire({
    ...baseConfig,
    ...typeConfigs.warning,
    icon: 'warning' as SweetAlertIcon,
    title,
    text
  })
}

/**
 * Alerta de información
 */
export const showInfo = (title: string, text?: string): Promise<SweetAlertResult> => {
  return Swal.fire({
    ...baseConfig,
    ...typeConfigs.info,
    icon: 'info' as SweetAlertIcon,
    title,
    text
  })
}

/**
 * Alerta de pregunta/confirmación
 */
export const showQuestion = (title: string, text?: string): Promise<SweetAlertResult> => {
  return Swal.fire({
    ...baseConfig,
    ...typeConfigs.question,
    icon: 'question' as SweetAlertIcon,
    title,
    text
  })
}

// ========================================
// FUNCIONES ESPECÍFICAS DEL NEGOCIO
// ========================================

/**
 * Confirmación de eliminación - Para BotonBorrar
 */
export const confirmDelete = (itemName: string): Promise<SweetAlertResult> => {
  return Swal.fire({
    ...baseConfig,
    icon: 'warning' as SweetAlertIcon,
    title: '¿Estás seguro?',
    text: `Esta acción eliminará "${itemName}" de forma permanente.`,
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'Cancelar',
    showCancelButton: true,
    confirmButtonColor: '#ef4444', // red-500 - override para eliminación
  })
}

/**
 * Toast de éxito en esquina superior derecha
 */
export const showToastSuccess = (title: string, text?: string): void => {
  Swal.fire({
    ...baseConfig,
    icon: 'success' as SweetAlertIcon,
    title,
    text,
    toast: true,
    position: 'top-end',
    timer: 3000,
    timerProgressBar: true,
    showConfirmButton: false,
    showClass: {
      popup: 'animate__animated animate__slideInRight animate__faster'
    },
    hideClass: {
      popup: 'animate__animated animate__slideOutRight animate__faster'
    }
  })
}

/**
 * Toast de error en esquina superior derecha
 */
export const showToastError = (title: string, text?: string): void => {
  Swal.fire({
    ...baseConfig,
    icon: 'error' as SweetAlertIcon,
    title,
    text,
    toast: true,
    position: 'top-end',
    timer: 4000,
    timerProgressBar: true,
    showConfirmButton: false,
    showClass: {
      popup: 'animate__animated animate__slideInRight animate__faster'
    },
    hideClass: {
      popup: 'animate__animated animate__slideOutRight animate__faster'
    }
  })
}

/**
 * Confirmación de logout
 */
export const confirmLogout = (): Promise<SweetAlertResult> => {
  return Swal.fire({
    ...baseConfig,
    icon: 'question' as SweetAlertIcon,
    title: '¿Cerrar sesión?',
    text: 'Tu sesión actual se cerrará y deberás iniciar sesión nuevamente.',
    confirmButtonText: 'Sí, cerrar sesión',
    cancelButtonText: 'Cancelar',
    showCancelButton: true,
  })
}

/**
 * Alerta para credenciales inválidas
 */
export const showInvalidCredentials = (): Promise<SweetAlertResult> => {
  return showError(
    'Credenciales inválidas',
    'Por favor verifica tu email y contraseña'
  )
}

/**
 * Alerta de login exitoso
 */
export const showLoginSuccess = (): void => {
  showToastSuccess('¡Bienvenido!', 'Has iniciado sesión correctamente')
}

/**
 * Alerta de logout exitoso  
 */
export const showLogoutSuccess = (): void => {
  showToastSuccess('Sesión cerrada', 'Has cerrado sesión correctamente')
}

/**
 * Alerta de error del servidor
 */
export const showServerError = (message?: string): Promise<SweetAlertResult> => {
  return showError(
    'Error del servidor',
    message || 'Ha ocurrido un error inesperado. Por favor intenta nuevamente.'
  )
}

/**
 * Confirmación de inscripción a materia
 */
export const confirmSubjectEnrollment = (subjectName: string): Promise<SweetAlertResult> => {
  return Swal.fire({
    ...baseConfig,
    icon: 'question' as SweetAlertIcon,
    title: '¿Inscribirse a la materia?',
    text: `¿Estás seguro que deseas inscribirte a "${subjectName}"?`,
    confirmButtonText: 'Sí, inscribirme',
    cancelButtonText: 'Cancelar',
    showCancelButton: true,
  })
}

/**
 * Alerta de inscripción exitosa
 */
export const showEnrollmentSuccess = (subjectName: string): void => {
  showToastSuccess('¡Inscripción exitosa!', `Te has inscrito a "${subjectName}"`)
}

/**
 * Alerta de error de inscripción
 */
export const showEnrollmentError = (message: string): Promise<SweetAlertResult> => {
  return showError('Error de inscripción', message)
}

// ========================================
// EXPORTACIÓN POR DEFECTO
// ========================================

const sweetAlert = {
  success: showSuccess,
  error: showError,
  warning: showWarning,
  info: showInfo,
  question: showQuestion,
  confirmDelete,
  confirmLogout,
  confirmSubjectEnrollment,
  toast: {
    success: showToastSuccess,
    error: showToastError
  },
  auth: {
    invalidCredentials: showInvalidCredentials,
    loginSuccess: showLoginSuccess,
    logoutSuccess: showLogoutSuccess,
    serverError: showServerError
  },
  enrollment: {
    confirm: confirmSubjectEnrollment,
    success: showEnrollmentSuccess,
    error: showEnrollmentError
  }
}

export default sweetAlert
