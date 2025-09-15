import axios, { AxiosError } from "axios"

export interface RegisterPayload {
  nombreUsuario: string
  apellidoUsuario: string
  dni: string
  email: string
  password: string
  role: string
}

export const registerUser = async (data: RegisterPayload) => {
  try {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/registro`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    })

    return res.data
  } catch (error: unknown) {
    if (error instanceof AxiosError && error.response && error.response.data) {
      throw new Error(error.response.data.mensaje || "Error al registrar usuario")
    }
    throw new Error(error instanceof Error ? error.message : "Error al registrar usuario")
  }
}
