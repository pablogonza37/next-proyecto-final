import Link from 'next/link';
import MateriaFormNuevo from '@/components/admin/materias/MateriaFormNuevo';
import Heading from '@/components/ui/Heading';

const NuevaMateriaPage = () => {
  return (
      <>
          <div className="flex justify-between items-center mb-4">
              <Heading>Nueva Materia</Heading>
              <Link
                  href="/admin/materias"
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded"
              >
                  Volver
              </Link>
          </div>

          <MateriaFormNuevo />

      </>
  )
}

export default NuevaMateriaPage;