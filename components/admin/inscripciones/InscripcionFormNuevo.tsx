'use client'
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { nuevaInscripcion } from "@/app/admin/inscripciones/actions"; // acción al backend

// Validaciones con Zod
const inscripcionSchema = z.object({
  materia: z.string().min(1, "Debe seleccionar una materia"),
  comision: z.string().min(1, "Debe seleccionar una comisión"),
  usuario: z.string().min(1, "Debe seleccionar un usuario"),
  fechaInscripcion: z.string().min(1, "La fecha de inscripción es obligatoria"),
  estado: z.enum(["0", "1"]),
});

type InscripcionFormData = z.infer<typeof inscripcionSchema>;

interface InscripcionFormNuevoProps {
  materias: any[];
  comisiones: any[];
  usuarios: any[];
}

const InscripcionFormNuevo = ({ comisiones, materias, usuarios }: InscripcionFormNuevoProps) => {
  const router = useRouter();
  const [mensaje, setMensaje] = useState<string | null>(null);
  const [materiaSeleccionada, setMateriaSeleccionada] = useState<string>("");

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset, setValue } = useForm<InscripcionFormData>({
    resolver: zodResolver(inscripcionSchema),
    defaultValues: {
      materia: "",
      comision: "",
      usuario: "",
      fechaInscripcion: "",
      estado: "1", // por defecto activa
    },
  });

  const onSubmit = async (data: InscripcionFormData) => {
    setMensaje(null);
    try {
      const payload = {
        ...data,
        fechaInscripcion: new Date(data.fechaInscripcion),
        estado: parseInt(data.estado),
      };
      const res = await nuevaInscripcion(payload);
      setMensaje(res.mensaje);
      reset(); // limpia el formulario
      router.push("/admin/inscripciones");
    } catch (error: any) {
      console.log(error)
      setMensaje(error.message || "Error al crear la inscripción");
    }
  };


   // Filtrar comisiones
   const comisionesFiltradas = comisiones.filter(
     (c) => c.materia?._id === materiaSeleccionada
   );
  

  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md max-w-3xl mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

        {/* Materia */}
        <div className="space-y-2">
          <label htmlFor="materia" className="text-gray-800">Materia:</label>
          <select
            id="materia"
            {...register("materia")}
            className="block w-full p-3 bg-gray-100 mt-3"
            onChange={(e) => {
              const value = e.target.value;
              setMateriaSeleccionada(value);
              setValue("comision", ""); // 🔑 limpia la comisión al cambiar materia
            }}
          >
            <option value="">Seleccione una materia</option>
            {materias.map((m) => (
              <option key={m._id} value={m._id}>{m.nombreMateria}</option>
            ))}
          </select>
          {errors.materia && <p className="text-red-500">{errors.materia.message}</p>}
        </div>

        {/* Comisión */}
        <div className="space-y-2">
          <label htmlFor="comision" className="text-gray-800">Comisión:</label>
          <select
            id="comision"
            {...register("comision")}
            className="block w-full p-3 bg-gray-100 mt-3 disabled:opacity-50"
            disabled={!materiaSeleccionada} // 🔑 deshabilitado si no hay materia
          >
            <option value="">Seleccione una comisión</option>
            {comisionesFiltradas.map((c) => (
              <option key={c._id} value={c._id}>{c.nombreComision}</option>
            ))}
          </select>
          {errors.comision && <p className="text-red-500">{errors.comision.message}</p>}
        </div>

        {/* Usuario */}
        <div className="space-y-2">
          <label htmlFor="usuario" className="text-gray-800">Usuario:</label>
          <select id="usuario" {...register("usuario")} className="block w-full p-3 bg-gray-100 mt-3">
            <option value="">Seleccione un usuario</option>
            {usuarios.map((u) => (
              <option key={u._id} value={u._id}>{u.nombreUsuario}</option>
            ))}
          </select>
          {errors.usuario && <p className="text-red-500">{errors.usuario.message}</p>}
        </div>

        {/* Fecha de inscripción */}
        <div className="space-y-2">
          <label htmlFor="fechaInscripcion" className="text-gray-800">Fecha de inscripción:</label>
          <input id="fechaInscripcion" type="date" {...register("fechaInscripcion")} className="block w-full p-3 bg-gray-100 mt-3" />
          {errors.fechaInscripcion && <p className="text-red-500">{errors.fechaInscripcion.message}</p>}
        </div>

        {/* Estado */}
        <div className="space-y-2">
          <label htmlFor="estado" className="text-gray-800">Estado:</label>
          <select id="estado" {...register("estado")} className="block w-full p-3 bg-gray-100 mt-3">
            <option value="1">Activa</option>
            <option value="0">Inactiva</option>
          </select>
          {errors.estado && <p className="text-red-500">{errors.estado.message}</p>}
        </div>

        <button type="submit" disabled={isSubmitting} className="bg-green-500 text-white p-2 rounded disabled:opacity-50">
          {isSubmitting ? "Creando..." : "Crear Inscripción"}
        </button>

        {mensaje && (
          <p className={`mt-2 ${mensaje.includes("correctamente") ? "text-green-500" : "text-red-500"}`}>
            {mensaje}
          </p>
        )}
      </form>
    </div>
  );
};

export default InscripcionFormNuevo;
