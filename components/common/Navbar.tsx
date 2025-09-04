import Link from "next/link"

export const Navbar = () => {
  return (
    <header className="bg-gray-800 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-white hover:text-gray-300">
              Aula Link
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8"></nav>

          <div className="flex items-center space-x-4">
            <Link href="/login" className="px-4 py-2 border border-gray-700 text-gray-200 hover:bg-gray-700 bg-transparent rounded-md transition-colors">
              Iniciar Sesión
            </Link>
            <Link href="/register" className="px-4 py-2 border border-gray-700 text-gray-200 hover:bg-gray-700 bg-transparent rounded-md transition-colors">
              Registrarse
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
