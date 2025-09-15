"use client"

import Link from "next/link"
import { useSession, signOut } from "next-auth/react"
import Swal from "sweetalert2"
import "sweetalert2/dist/sweetalert2.min.css"

export const Navbar = () => {
  const { data: session } = useSession()
  const nombreUsuario = session?.user?.nombreUsuario

  const handleLogout = () => {
    signOut({ callbackUrl: "/" })
    Swal.fire({
      icon: "success",
      title: "Has cerrado sesión correctamente",
      timer: 2000,
      showConfirmButton: false,
      timerProgressBar: true,
      position: "top-end",
    })
  }

  return (
    <header className="bg-gray-800 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold text-white hover:text-gray-300"
            >
              Aula Link
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href="/plandeestudios"
              className="px-4 py-2 text-gray-200 hover:bg-gray-700 bg-transparent rounded-md transition-colors"
            >
              Plan de Estudio
            </Link>
            
            {nombreUsuario ? (
              <>
                <span className="text-gray-200 px-4 py-2">
                  Hola, {nombreUsuario}
                </span>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 border border-gray-700 text-gray-200 hover:bg-gray-700 bg-transparent rounded-md transition-colors"
                >
                  Cerrar Sesión
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="px-4 py-2 border border-gray-700 text-gray-200 hover:bg-gray-700 bg-transparent rounded-md transition-colors"
                >
                  Iniciar Sesión
                </Link>
                <Link
                  href="/register"
                  className="px-4 py-2 border border-gray-700 text-gray-200 hover:bg-gray-700 bg-transparent rounded-md transition-colors"
                >
                  Registrarse
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
