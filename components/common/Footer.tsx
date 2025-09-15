"use cliente"

import Link from "next/link"
import {
  Twitter,
  Youtube,
  Linkedin,
  MessageCircle,
  Facebook,
  Instagram,
} from "lucide-react"

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-8 mb-6">
          <Link href="/terminos" className="text-gray-200 hover:text-blue-500 transition-colors">
            Términos y condiciones
          </Link>
          <Link href="/politicas" className="text-gray-200 hover:text-blue-500 transition-colors">
            Políticas de privacidad
          </Link>
          <Link href="/faq" className="text-gray-200 hover:text-blue-500 transition-colors">
            FAQ
          </Link>
          <Link href="/contactanos" className="text-gray-200 hover:text-blue-500 transition-colors">
            Contactanos
          </Link>
        </div>

        <div className="flex justify-center gap-4 mb-6">
          <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
            <Twitter className="h-5 w-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
            <Youtube className="h-5 w-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
            <MessageCircle className="h-5 w-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
            <Facebook className="h-5 w-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
            <Instagram className="h-5 w-5" />
          </a>
        </div>

        <div className="text-center">
          <p className="text-gray-400">Copyright © 2025 Aula Link todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  )
}
