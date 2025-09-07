

import Heading from "@/components/ui/Heading";
import Link from "next/link";
import { obtenerMaterias } from "./actions";
import TablaMaterias from "@/components/admin/materias/TablaMaterias";


const MateriasPage = async () => {

  const materias = await obtenerMaterias();

  return (
   <>
    <Heading>Administración de Materias</Heading>

    <div className="flex flex-col md:flex-row md:justify-end gap-5">
      <Link href={'/admin/materias/nuevo'} className="bg-blue-600 hover:bg-blue-800 font-bold text-xl text-white py-3 px-5 rounded transition-all cursor-pointer">Crear Materia</Link>

    </div>

    <TablaMaterias materias={materias} />
   </>
  )
}

export default MateriasPage;