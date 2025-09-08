import { obtenerUsuario } from "@/app/admin/usuarios/actions";
import UsuarioFormEditar from "@/components/admin/usuarios/UsuarioFormEditar";
import Heading from "@/components/ui/Heading";
import Link from "next/link";

interface PageProps {
  params: { id: string } | Promise<{ id: string }>; 
}

const EditarUsuarioPage = async ({ params }: PageProps) => {
  const resolvedParams = await params; 
  const id = resolvedParams.id;
  const usuario = await obtenerUsuario(id);

   if (!usuario) return <p>Usuario no encontrado</p>;

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <Heading>Editar Usuario</Heading>
        <Link
          href="/admin/usuarios"
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded"
        >
          Volver
        </Link>
      </div>

      <UsuarioFormEditar usuario={usuario} />
    </>
  );
};

export default EditarUsuarioPage;