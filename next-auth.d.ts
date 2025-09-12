
import NextAuth, { DefaultSession, DefaultUser } from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      nombreUsuario?: string
      rol?: string
    } & DefaultSession["user"]
    backendToken?: string
  }

  interface User extends DefaultUser {
    nombreUsuario?: string
    rol?: string
    backendToken?: string
  }
}
