export interface RegisterPayload {
  nombreUsuario: string
  apellidoUsuario: string
  dni: string
  email: string
  password: string
  role: string
}

export const registerUser = async (data: RegisterPayload) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/registro`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })

  const result = await res.json()

  if (!res.ok) {
    throw new Error(result.mensaje || "Error al registrar usuario")
  }

  return result
}