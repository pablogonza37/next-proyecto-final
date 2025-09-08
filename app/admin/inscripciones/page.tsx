

import Heading from "@/components/ui/Heading";
import Link from "next/link";
import { obtenerInscripciones } from "./actions";
import TablaInscripciones from "@/components/admin/inscripciones/TablaInscripciones";


const InscripcionesPage = async () => {

  const inscripciones = await obtenerInscripciones();

  return (
   <>
    <Heading>Administración de Inscripciones</Heading>

    <div className="flex flex-col md:flex-row md:justify-end gap-5">
      {/* <Link href={'/admin/inscripciones/nuevo'} className="bg-blue-600 hover:bg-blue-800 font-bold text-xl text-white py-3 px-5 rounded transition-all cursor-pointer">Crear Inscripción</Link> */}

    </div>

    <TablaInscripciones inscripciones={inscripciones} />
   </>
  )
}

export default InscripcionesPage;