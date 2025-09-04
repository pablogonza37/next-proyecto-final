import { obtenerRoles } from "./actions";

import Heading from "@/components/ui/Heading";
import Link from "next/link";
import TablaRoles from "@/components/roles/TablaRoles";

const RolesPage = async () => {

  const roles = await obtenerRoles();

  return (
   <>
    <Heading>Administración de Roles</Heading>

    <div className="flex flex-col md:flex-row md:justify-end gap-5">
      <Link href={'/admin/roles/nuevo'} className="bg-blue-600 hover:bg-blue-800 font-bold text-xl text-white py-3 px-5 rounded transition-all cursor-pointer">Crear Rol</Link>

    </div>

    <TablaRoles roles={roles} />
   </>
  )
}

export default RolesPage;