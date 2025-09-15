import Link from 'next/link';

import Heading from '@/components/ui/Heading';
import ComisionFormNuevo from '@/components/admin/comisiones/ComisionFormNuevo';
import { obtenerMaterias } from '../../materias/actions';
import { obtenerUsuarios } from '../../usuarios/actions';

const NuevComisionPage = async () => {

      const materias = await obtenerMaterias();

      const usuarios = await obtenerUsuarios();
      //eslint-disable-next-line @typescript-eslint/no-explicit-any
      const profesores = usuarios.filter((u:any) => u.role === "profesor" || u.role.nombreRol === "profesor");

  return (
      <>
          <div className="flex justify-between items-center mb-4">
              <Heading>Nueva Comisión</Heading>
              <Link
                  href="/admin/comisiones"
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded"
              >
                  Volver
              </Link>
          </div>

          <ComisionFormNuevo materias={materias} usuarios={profesores} />

      </>
  )
}

export default NuevComisionPage;