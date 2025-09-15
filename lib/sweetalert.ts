import Swal, { SweetAlertIcon, SweetAlertResult } from 'sweetalert2'

const baseConfig = {
  allowOutsideClick: false,
  allowEscapeKey: true,
  buttonsStyling: false,
  reverseButtons: true,
  focusConfirm: true,
  showClass: {
    popup: 'animate__animated animate__fadeInDown animate__faster'
  },
  hideClass: {
    popup: 'animate__animated animate__fadeOutUp animate__faster'
  }
}

const typeConfigs = {
  success: {
    iconColor: '#10b981',
    timer: 3000,
    timerProgressBar: true,
    showConfirmButton: false,
  },
  error: {
    iconColor: '#ef4444',
    confirmButtonText: 'Entendido',
    showConfirmButton: true,
  },
  warning: {
    iconColor: '#f59e0b',
    confirmButtonText: 'Confirmar',
    cancelButtonText: 'Cancelar',
    showCancelButton: true,
  },
  info: {
    iconColor: '#3b82f6',
    confirmButtonText: 'Ok',
    showConfirmButton: true,
  },
  question: {
    iconColor: '#8b5cf6',
    confirmButtonText: 'Sí',
    cancelButtonText: 'No',
    showCancelButton: true,
  }
}

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

export const showError = (title: string, text?: string): Promise<SweetAlertResult> => {
  return Swal.fire({
    ...baseConfig,
    ...typeConfigs.error,
    icon: 'error' as SweetAlertIcon,
    title,
    text
  })
}

export const showWarning = (title: string, text?: string): Promise<SweetAlertResult> => {
  return Swal.fire({
    ...baseConfig,
    ...typeConfigs.warning,
    icon: 'warning' as SweetAlertIcon,
    title,
    text
  })
}

export const showInfo = (title: string, text?: string): Promise<SweetAlertResult> => {
  return Swal.fire({
    ...baseConfig,
    ...typeConfigs.info,
    icon: 'info' as SweetAlertIcon,
    title,
    text
  })
}

export const showQuestion = (title: string, text?: string): Promise<SweetAlertResult> => {
  return Swal.fire({
    ...baseConfig,
    ...typeConfigs.question,
    icon: 'question' as SweetAlertIcon,
    title,
    text
  })
}

export const confirmDelete = (itemName: string): Promise<SweetAlertResult> => {
  return Swal.fire({
    ...baseConfig,
    icon: 'warning' as SweetAlertIcon,
    title: '¿Estás seguro?',
    text: `Esta acción eliminará "${itemName}" de forma permanente.`,
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'Cancelar',
    showCancelButton: true,
    confirmButtonColor: '#ef4444',
  })
}

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

export const showInvalidCredentials = (): Promise<SweetAlertResult> => {
  return showError(
    'Credenciales inválidas',
    'Por favor verifica tu email y contraseña'
  )
}

export const showLoginSuccess = (): void => {
  showToastSuccess('¡Bienvenido!', 'Has iniciado sesión correctamente')
}

export const showLogoutSuccess = (): void => {
  showToastSuccess('Sesión cerrada', 'Has cerrado sesión correctamente')
}

export const showServerError = (message?: string): Promise<SweetAlertResult> => {
  return showError(
    'Error del servidor',
    message || 'Ha ocurrido un error inesperado. Por favor intenta nuevamente.'
  )
}

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

export const showEnrollmentSuccess = (subjectName: string): void => {
  showToastSuccess('¡Inscripción exitosa!', `Te has inscrito a "${subjectName}"`)
}

export const showEnrollmentError = (message: string): Promise<SweetAlertResult> => {
  return showError('Error de inscripción', message)
}

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
