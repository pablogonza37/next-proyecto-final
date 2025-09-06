import { obtenerUsuarios } from "./actions";

import Heading from "@/components/ui/Heading";
import Link from "next/link";
import TablaUsuarios from "@/components/usuarios/TablaUsuarios";

const UsuariosPage = async () => {

  const usuarios = await obtenerUsuarios();
  //console.log(usuarios)

  return (
   <>
    <Heading>Administración de Usuarios</Heading>

    <div className="flex flex-col md:flex-row md:justify-end gap-5">
      <Link href={'/admin/usuarios/nuevo'} className="bg-blue-600 hover:bg-blue-800 font-bold text-xl text-white py-3 px-5 rounded transition-all cursor-pointer">Crear Usuario</Link>

    </div>

    <TablaUsuarios usuarios={usuarios} />
   </>
  )
}

export default UsuariosPage;