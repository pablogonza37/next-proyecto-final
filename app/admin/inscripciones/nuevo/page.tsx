import Link from 'next/link';

import Heading from '@/components/ui/Heading';
import { obtenerMaterias } from '../../materias/actions';
import { obtenerComisiones } from '../../comisiones/actions';
import { obtenerUsuarios } from '../../usuarios/actions';
import InscripcionFormNuevo from '@/components/admin/inscripciones/InscripcionFormNuevo';

const NuevaInscripcionPage = async () => {

      const materias = await obtenerMaterias();
      const comisiones = await obtenerComisiones();

      //Filtrar usuarios por rol "alumno"
      const usuarios = await obtenerUsuarios();
      const alumnos = usuarios.filter((u:any) => u.role === "alumno" || u.role.nombreRol === "alumno");

  return (
      <>
          <div className="flex justify-between items-center mb-4">
              <Heading>Nueva Inscripción</Heading>
              <Link
                  href="/admin/comisiones"
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded"
              >
                  Volver
              </Link>
          </div>

          <InscripcionFormNuevo materias={materias} comisiones={comisiones} usuarios={alumnos} />

      </>
  )
}

export default NuevaInscripcionPage;