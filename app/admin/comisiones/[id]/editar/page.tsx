import { obtenerUsuarios } from "@/app/admin/usuarios/actions";
import Heading from "@/components/ui/Heading";
import Link from "next/link";
import { obtenerComision } from "../../actions";
import ComisionFormEditar from "@/components/admin/comisiones/ComisionFormEditar";
import { obtenerMaterias } from "@/app/admin/materias/actions";

interface PageProps {
  params: { id: string } | Promise<{ id: string }>; 
}

const EditarComisionPage = async ({ params }: PageProps) => {
  const resolvedParams = await params; 
  const id = resolvedParams.id;
  const comision = await obtenerComision(id);

  const materias = await obtenerMaterias();
  
 
  const usuarios = await obtenerUsuarios();
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  const profesores = usuarios.filter((u: any) => u.role === "profesor" || u.role.nombreRol === "profesor");

  if (!comision) return <p>Comisión no encontrada</p>;

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <Heading>Editar comisión</Heading>
        <Link
          href="/admin/comisiones"
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded"
        >
          Volver
        </Link>
      </div>

      <ComisionFormEditar comision={comision} materias={materias} usuarios={profesores}  />
    </>
  );
};

export default EditarComisionPage;