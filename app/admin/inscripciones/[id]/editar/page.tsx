import { obtenerUsuarios } from "@/app/admin/usuarios/actions";
import { obtenerMaterias } from "@/app/admin/materias/actions";
import { obtenerComisiones } from "@/app/admin/comisiones/actions";
import { obtenerInscripcion } from "../../actions";

import Heading from "@/components/ui/Heading";
import Link from "next/link";
import InscripcionFormEditar from "@/components/admin/inscripciones/InscripcionFormEditar";

interface PageProps {
  params: { id: string } | Promise<{ id: string }>;
}

const EditarInscripcionPage = async ({ params }: PageProps) => {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  const inscripcion = await obtenerInscripcion(id);

  const comisiones = await obtenerComisiones();
  const materias = await obtenerMaterias();
  const usuarios = await obtenerUsuarios();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const alumnos = usuarios.filter((u:any) => u.role === "alumno" || u.role.nombreRol === "alumno");

  if (!inscripcion) return <p>Inscripción no encontrada</p>;

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <Heading>Editar inscripción</Heading>
        <Link
          href="/admin/inscripciones"
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded"
        >
          Volver
        </Link>
      </div>

      <InscripcionFormEditar
        inscripcion={inscripcion}
        comisiones={comisiones}
        materias={materias}
        usuarios={alumnos}
      />
    </>
  );
};

export default EditarInscripcionPage;