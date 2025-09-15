'use client'
import { borrarMateria } from "@/app/admin/materias/actions";
import BotonBorrar from "@/components/ui/BotonBorrar";
import Link from "next/link"

interface Materia {
  _id: string;
  nombreMateria: string;
  nivel: string;
  estado: number;
}

interface TablaMateriasProps {
  materias: Materia[]; 
}


const TablaMaterias = ({materias}: TablaMateriasProps) => {

  return (
       <div className="px-4 mt-8 flex justify-center">
            <div className="mt-2 flow-root ">
                <div className="overflow-x-auto max-w-5xl w-full">
                    <div className="inline-block min-w-full py-2 align-middle bg-white p-5">
                        <table className="min-w-full divide-y divide-gray-500">
                            <thead>
                                <tr>
                                    <th scope="col" className="py-3 pl-4 pr-3 text-left text-sm font-semibold text-gray-700 sm:pl-0">
                                        Nombre Materia
                                    </th>
                                    <th scope="col" className="py-3 pl-4 pr-3 text-left text-sm font-semibold text-gray-700 sm:pl-0">
                                        Nivel
                                    </th>
                                    <th scope="col" className="py-3 pl-4 pr-3 text-left text-sm font-semibold text-gray-700 sm:pl-0">
                                        Estado
                                    </th>
                                    <th scope="col" className="py-3 pr-5 text-center text-sm font-semibold text-gray-700 sm:pr-0">
                                        <span className="justify-end pr-5">Acciones</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                            {
                                materias && materias.length > 0 ? (
                                    materias.map((materia : Materia) => (
                                    <tr key={materia._id}>
                                        <td className="whitespace-nowrap py-4 pl-5 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                            {materia.nombreMateria}
                                        </td>

                                        <td className="whitespace-nowrap py-4 pl-5 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                            {materia.nivel}
                                        </td>

                                        <td className="whitespace-nowrap py-4 pl-5 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                            <span
                                                className={`px-2 py-1 rounded-full text-xs font-semibold 
                                                ${materia.estado === 1 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
                                            >
                                                {materia.estado === 1 ? "Activo" : "Inactivo"}
                                            </span>
                                        </td>
                                    
                                        <td className="whitespace-nowrap py-4 pl-4 pr-5 text-sm font-medium sm:pr-0">
                                            <Link href={`/admin/materias/${materia._id}/editar`} className="bg-yellow-200 hover:bg-yellow-300 font-bold text-xl text-black py-3 px-5 rounded transition-all cursor-pointer">Editar</Link>
                                        </td>

                                          <td className="whitespace-nowrap py-4 pl-4 pr-5 text-sm font-medium sm:pr-0">
                                            <BotonBorrar nombreItem={materia.nombreMateria} action={() => borrarMateria(materia._id)}
                                            />
                                        </td>
                                    </tr>
                                ))
                                ) : (
                                    <tr>
                                        <td
                                        colSpan={2}
                                        className="text-center py-4 text-gray-500 text-sm"
                                        >
                                        No hay materias disponibles.
                                        </td>
                                    </tr>
                                    )
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default TablaMaterias