'use client'
import { borrarComision } from "@/app/admin/comisiones/actions";
import BotonBorrar from "@/components/ui/BotonBorrar";
import Link from "next/link"

interface Comision {
  _id: string;
  nombreComision: string;
  fechaInicio: string;
  fechaFin: string;
  horaInicio: string;
  horaFin: string;
  diasDictado: string;
  cupo: number;
  estado: number;
  materia?: {
    _id: string;
    nombreMateria: string;
  };
  usuario?: {
    _id: string;
    nombreUsuario: string;
  };
}

interface TablaComisionesProps {
  comisiones: Comision[]; 
}

const TablaComisiones = ({ comisiones }: TablaComisionesProps) => {
  return (
    <div className="px-4 mt-8 flex justify-center">
      <div className="mt-2 flow-root ">
        <div className="overflow-x-auto w-full">
          <div className="inline-block min-w-full py-2 align-middle bg-white p-5">
            <table className="min-w-full divide-y divide-gray-500">
              <thead>
                <tr>
                  <th className="py-3 text-left text-sm font-semibold text-gray-700">Nombre Comisión</th>
                  <th className="py-3 text-left text-sm font-semibold text-gray-700">Materia</th>
                  <th className="py-3 text-left text-sm font-semibold text-gray-700">Usuario</th>
                  <th className="py-3 text-left text-sm font-semibold text-gray-700">Fechas</th>
                  <th className="py-3 text-left text-sm font-semibold text-gray-700">Horarios</th>
                  <th className="py-3 text-left text-sm font-semibold text-gray-700">Días Dictado</th>
                  <th className="py-3 text-left text-sm font-semibold text-gray-700">Cupo</th>
                  <th className="py-3 text-left text-sm font-semibold text-gray-700">Estado</th>
                  <th className="py-3 pr-5 text-right text-sm font-semibold text-gray-700">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {comisiones && comisiones.length > 0 ? (
                  comisiones.map((comision: Comision) => (
                    <tr key={comision._id}>
                      <td className="whitespace-nowrap py-4 pl-3 text-sm font-medium text-gray-900">
                        {comision.nombreComision}
                      </td>

                      <td className="whitespace-nowrap py-4 pl-3 text-sm">
                        {comision.materia?.nombreMateria || "Sin materia"}
                      </td>

                      <td className="whitespace-nowrap py-4 pl-3 text-sm">
                        {comision.usuario?.nombreUsuario || "Sin usuario"}
                      </td>

                      <td className="whitespace-nowrap py-4 pl-3 text-sm">
                        {new Date(comision.fechaInicio).toLocaleDateString()} -{" "}
                        {new Date(comision.fechaFin).toLocaleDateString()}
                      </td>

                      <td className="whitespace-nowrap py-4 pl-3 text-sm">
                        {comision.horaInicio} - {comision.horaFin}
                      </td>

                      <td className="whitespace-nowrap py-4 pl-3 text-sm">
                        {comision.diasDictado}
                      </td>

                      <td className="whitespace-nowrap py-4 pl-3 text-sm">
                        {comision.cupo}
                      </td>

                      <td className="whitespace-nowrap py-4 pl-3 text-sm">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-semibold 
                          ${comision.estado === 1 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
                        >
                          {comision.estado === 1 ? "Activa" : "Inactiva"}
                        </span>
                      </td>

                      <td className="whitespace-nowrap py-4 pl-4 pr-5 text-sm font-medium sm:pr-0 ">
                        <Link href={`/admin/comisiones/${comision._id}/editar`} className="bg-yellow-200 test-sm hover:bg-yellow-300 font-bold text-xl text-black py-3 px-5 rounded transition-all cursor-pointer">Editar</Link>

                          <BotonBorrar
                          nombreItem={comision.nombreComision} action={() => borrarComision(comision._id)}
                        />
                      </td>
                      
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={9}
                      className="text-center py-4 text-gray-500 text-sm"
                    >
                      No hay comisiones disponibles.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TablaComisiones;
