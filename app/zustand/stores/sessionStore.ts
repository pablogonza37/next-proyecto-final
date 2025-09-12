import { create } from "zustand"

interface SessionState {
  nombreUsuario: string
  rol: string
  backendToken: string
  setSession: (nombreUsuario: string, rol: string, backendToken: string) => void
  clearSession: () => void
}

export const useSessionStore = create<SessionState>((set) => ({
  nombreUsuario: "",
  rol: "",
  backendToken: "",
  setSession: (nombreUsuario, rol, backendToken) =>
    set({ nombreUsuario, rol, backendToken }),
  clearSession: () =>
    set({ nombreUsuario: "", rol: "", backendToken: "" }),
}))
