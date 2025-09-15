
import NextAuth, { DefaultSession, DefaultUser } from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      nombreUsuario?: string
      nombreRol?: string
    } & DefaultSession["user"]
    backendToken?: string
  }

  interface User extends DefaultUser {
    nombreUsuario?: string
    nombreRol?: string
    backendToken?: string
  }
}
