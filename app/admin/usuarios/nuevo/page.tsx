import Heading from '@/components/ui/Heading';
import UsuarioFormNuevo from '@/components/usuarios/UsuarioFormNuevo';

import Link from 'next/link';

const NuevoUsuarioPage = () => {
  return (
      <>
          <div className="flex justify-between items-center mb-4">
              <Heading>Nuevo Usuario</Heading>
              <Link
                  href="/admin/usuarios"
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded"
              >
                  Volver
              </Link>
          </div>

          <UsuarioFormNuevo />

      </>
  )
}

export default NuevoUsuarioPage;