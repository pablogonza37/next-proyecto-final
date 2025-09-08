'use client'
import { borrarInscripcion } from "@/app/admin/inscripciones/actions";
//import { borrarInscripcion } from "@/app/admin/inscripciones/actions";
import BotonBorrar from "@/components/ui/BotonBorrar";
import Link from "next/link";

interface Inscripcion {
  _id: string;
  comision?: {
    _id: string;
    nombreComision: string;
  };
  materia?: {
    _id: string;
    nombreMateria: string;
  };
  usuario?: {
    _id: string;
    nombreUsuario: string;
    email: string;
  };
  fechaInscripcion: string;
  estado: number;
}

interface TablaInscripcionesProps {
  inscripciones: Inscripcion[];
}

const TablaInscripciones = ({ inscripciones }: TablaInscripcionesProps) => {
  return (
    <div className="px-4 mt-8 flex justify-center">
      <div className="mt-2 flow-root">
        <div className="overflow-x-auto ">
          <div className="inline-block min-w-full py-2 align-middle bg-white p-5">
            <table className="min-w-full divide-y divide-gray-500">
              <thead>
                <tr>
                  <th className="py-3 text-left text-sm font-semibold text-gray-700">Comisión</th>
                  <th className="py-3 text-left text-sm font-semibold text-gray-700">Materia</th>
                  <th className="py-3 text-left text-sm font-semibold text-gray-700">Usuario</th>
                  <th className="py-3 text-left text-sm font-semibold text-gray-700">Fecha Inscripción</th>
                  <th className="py-3 text-left text-sm font-semibold text-gray-700">Estado</th>
                  <th className="py-3 pr-5 text-right text-sm font-semibold text-gray-700">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {inscripciones && inscripciones.length > 0 ? (
                  inscripciones.map((inscripcion: Inscripcion) => (
                    <tr key={inscripcion._id}>
                      <td className="whitespace-nowrap py-4 pl-3 text-sm font-medium text-gray-900">
                        {inscripcion.comision?.nombreComision || "Sin comisión"}
                      </td>

                      <td className="whitespace-nowrap py-4 pl-3 text-sm">
                        {inscripcion.materia?.nombreMateria || "Sin materia"}
                      </td>

                      <td className="whitespace-nowrap py-4 pl-3 text-sm">
                        {inscripcion.usuario?.email || "Sin usuario"}
                      </td>

                      <td className="whitespace-nowrap py-4 pl-3 text-sm">
                         {(() => {
                            const [anio, mes, dia] = inscripcion.fechaInscripcion.split("T")[0].split("-");
                            return `${dia}-${mes}-${anio}`;
                          })()}
                      </td>

                      <td className="whitespace-nowrap py-4 pl-3 text-sm">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-semibold 
                          ${inscripcion.estado === 1 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
                        >
                          {inscripcion.estado === 1 ? "Activa" : "Inactiva"}
                        </span>
                      </td>

                      <td className="whitespace-nowrap py-4 pl-4 pr-5 text-sm font-medium sm:pr-0">
                        <Link
                          href={`/admin/inscripciones/${inscripcion._id}/editar`}
                          className="bg-yellow-200 test-sm hover:bg-yellow-300 font-bold text-xl text-black py-3 px-5 rounded transition-all cursor-pointer"
                        >
                          Editar
                        </Link>

                        <BotonBorrar
                          nombreItem={`Inscripción de ${inscripcion.usuario?.nombreUsuario || "usuario"}`}
                          action={() => borrarInscripcion(inscripcion._id)}
                        />
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={6}
                      className="text-center py-4 text-gray-500 text-sm"
                    >
                      No hay inscripciones disponibles.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TablaInscripciones;