import {  } from "@/app/admin/usuarios/actions";
import MateriaFormEditar from "@/components/admin/materias/MateriaFormEditar";
import Heading from "@/components/ui/Heading";
import Link from "next/link";
import { obtenerMateria } from "../../actions";

interface PageProps {
  params: { id: string } | Promise<{ id: string }>; 
}

const EditarMateriaPage = async ({ params }: PageProps) => {
  const resolvedParams = await params; 
  const id = resolvedParams.id;
  const materia = await obtenerMateria(id);

   if (!materia) return <p>Materia no encontrada</p>;

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <Heading>Editar Materia</Heading>
        <Link
          href="/admin/materias"
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded"
        >
          Volver
        </Link>
      </div>

      <MateriaFormEditar materia={materia} />
    </>
  );
};

export default EditarMateriaPage;