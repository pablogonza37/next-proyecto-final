import { Button } from "@/components/ui/button"

export const Navbar = () => {
  return (
    <header className="bg-gray-800 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white">Aula Link</h1>
          </div>

          <nav className="hidden md:flex space-x-8"></nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" className="border-gray-700 text-gray-200 hover:bg-gray-700 bg-transparent">
              Iniciar Sesión
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Registrarse</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
