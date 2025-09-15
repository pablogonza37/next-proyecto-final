import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const backendUrl = process.env.NEXT_PUBLIC_API_URL

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
  const res = await fetch(`${backendUrl}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: credentials?.email,
      password: credentials?.password,
    }),
  })

  if (!res.ok) return null

  const data = await res.json()
  return data
},

    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      //eslint-disable-next-line @typescript-eslint/no-explicit-any
      const u: any = user
      if (u) {
        token.backendToken = u.token
        token.nombreUsuario = u.nombreUsuario
        token.email = u.email
        token.rol = u.rol?.nombreRol
      }
      return token
    },
    async session({ session, token }) {
      //eslint-disable-next-line @typescript-eslint/no-explicit-any
      const s: any = session
      //eslint-disable-next-line @typescript-eslint/no-explicit-any
      const t: any = token
      s.user.email = t.email
      s.user.nombreUsuario = t.nombreUsuario
      s.backendToken = t.backendToken
      s.user.nombreRol = t.rol
      return s
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
})

export { handler as GET, handler as POST }
