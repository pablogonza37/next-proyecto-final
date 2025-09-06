import { obtenerUsuario } from "@/app/admin/usuarios/actions";
import UsuarioFormEditar from "@/components/usuarios/UsuarioFormEditar";
import Heading from "@/components/ui/Heading";
import Link from "next/link";

interface PageProps {
  params: { id: string };
}

const EditarUsuarioPage = async ({ params }: PageProps) => {
  const usuario = await obtenerUsuario(params.id);
  //console.log(usuario)

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