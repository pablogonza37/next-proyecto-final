"use client"

import { useState } from "react"
import Link from "next/link"
import { useSession, signOut } from "next-auth/react"
import { showLogoutSuccess } from "@/lib/sweetalert"
import Loader from "../ui/Loader"

export const Navbar = () => {
  const { data: session, status } = useSession()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  if (status === "loading") {
    return <Loader />
  }

  const nombreUsuario = session?.user?.nombreUsuario
  const nombreRol = session?.user?.nombreRol

  const handleLogout = () => {
    signOut({ callbackUrl: "/" })
    showLogoutSuccess()
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="bg-gray-800 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop and Mobile Header */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link
              href="/"
              className="text-xl sm:text-2xl font-bold text-white hover:text-gray-300 transition-colors"
              onClick={closeMobileMenu}
            >
              Aula Link
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/plandeestudios"
              className="px-3 xl:px-4 py-2 text-sm xl:text-base text-gray-200 hover:bg-gray-700 bg-transparent rounded-md transition-colors"
            >
              Plan de Estudio
            </Link>
            
            {nombreUsuario ? (
              <>
                <span className="text-gray-200 px-2 xl:px-4 py-2 text-sm xl:text-base">
                  Hola, <span className="font-medium">{nombreUsuario}</span>
                </span>
                
                {nombreRol === 'admin' && (
                  <Link 
                    href="/admin/roles" 
                    className="px-3 xl:px-4 py-2 text-sm xl:text-base border border-gray-700 text-gray-200 hover:bg-gray-700 bg-transparent rounded-md transition-colors"
                  >
                    <span className="hidden xl:inline">Panel de </span>Administración
                  </Link>
                )}
                  
                <button
                  onClick={handleLogout}
                  className="px-3 xl:px-4 py-2 text-sm xl:text-base border border-red-600 text-red-400 hover:bg-red-600 hover:text-white bg-transparent rounded-md transition-colors"
                >
                  Cerrar Sesión
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="px-3 xl:px-4 py-2 text-sm xl:text-base border border-gray-700 text-gray-200 hover:bg-gray-700 bg-transparent rounded-md transition-colors"
                >
                  Iniciar Sesión
                </Link>
                <Link
                  href="/register"
                  className="px-3 xl:px-4 py-2 text-sm xl:text-base border border-gray-700 text-gray-200 hover:bg-gray-700 bg-transparent rounded-md transition-colors"
                >
                  Registrarse
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            {nombreUsuario && (
              <span className="text-gray-200 text-sm mr-3 hidden sm:block">
                Hola, {nombreUsuario}
              </span>
            )}
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menú principal</span>
              {!isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* Mobile User Greeting */}
            {nombreUsuario && (
              <div className="px-3 py-2 text-gray-200 text-sm sm:hidden">
                Hola, <span className="font-medium">{nombreUsuario}</span>
              </div>
            )}

            {/* Plan de Estudio Link */}
            <Link
              href="/plandeestudios"
              className="text-gray-200 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
              onClick={closeMobileMenu}
            >
              Plan de Estudio
            </Link>

            {nombreUsuario ? (
              <>
                {nombreRol === 'admin' && (
                  <Link 
                    href="/admin/roles" 
                    className="text-gray-200 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Panel de Administración
                  </Link>
                )}
                
                <button
                  onClick={() => {
                    handleLogout()
                    closeMobileMenu()
                  }}
                  className="text-red-400 hover:bg-red-600 hover:text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors"
                >
                  Cerrar Sesión
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-gray-200 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
                  onClick={closeMobileMenu}
                >
                  Iniciar Sesión
                </Link>
                <Link
                  href="/register"
                  className="text-gray-200 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
                  onClick={closeMobileMenu}
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
