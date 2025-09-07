

import Heading from "@/components/ui/Heading";
import Link from "next/link";
import { obtenerComisiones } from "./actions";
import TablaComisiones from "@/components/admin/comisiones/TablaComisiones";


const ComisionesPage = async () => {

  const comisiones = await obtenerComisiones();
  //console.log(comisiones)

  return (
   <>
    <Heading>Administración de Comisiones</Heading>

    <div className="flex flex-col md:flex-row md:justify-end gap-5">
      <Link href={'/admin/comisiones/nuevo'} className="bg-blue-600 hover:bg-blue-800 font-bold text-xl text-white py-3 px-5 rounded transition-all cursor-pointer">Crear Comisión</Link>

    </div>

    <TablaComisiones comisiones={comisiones} /> 
   </>
  )
}

export default ComisionesPage;