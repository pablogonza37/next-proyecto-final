import { create } from "zustand";

interface SessionState {
  nombreUsuario: string | null;
  rol: string | null;
  token: string | null;
  setSession: (nombreUsuario: string, rol: string, token: string) => void;
  clearSession: () => void;
}

export const useSessionStore = create<SessionState>((set) => ({
  nombreUsuario: null,
  rol: null,
  token: null,
  setSession: (nombreUsuario, rol, token) =>
    set({ nombreUsuario, rol, token }),
  clearSession: () => set({ nombreUsuario: null, rol: null, token: null }),
}));
