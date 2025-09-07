'use client'

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { nuevaComision } from "@/app/admin/comisiones/actions"; // acción al backend

// Validaciones con Zod
const comisionSchema = z.object({
  nombreComision: z.string()
    .min(2, "El nombre de la comisión debe tener al menos 2 caracteres")
    .max(150, "El nombre de la comisión debe tener como máximo 150 caracteres"),
  fechaInicio: z.string().min(1, "La fecha de inicio es obligatoria"),
  fechaFin: z.string().min(1, "La fecha de fin es obligatoria"),
  horaInicio: z.string().min(1, "La hora de inicio es obligatoria"),
  horaFin: z.string().min(1, "La hora de fin es obligatoria"),
  diasDictado: z.string()
    .min(2, "Debe especificar los días de dictado")
    .max(40, "Los días de dictado no pueden superar 40 caracteres"),
  cupo: z.string().min(1, "El cupo es obligatorio"), 
  estado: z.enum(["0", "1"]),
  materia: z.string().min(1, "Debe seleccionar una materia"),
  usuario: z.string().min(1, "Debe seleccionar un usuario"),
});

type ComisionFormNuevoData = z.infer<typeof comisionSchema>;

const ComisionFormNuevo = ({ materias, usuarios }: { materias: any[]; usuarios: any[] }) => {
  const router = useRouter();
  const [mensaje, setMensaje] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ComisionFormNuevoData>({
    resolver: zodResolver(comisionSchema),
  });

  const onSubmit = async (data: ComisionFormNuevoData) => {
    setMensaje(null);
    try {
      const payload = {
        ...data,
        fechaInicio: new Date(data.fechaInicio), // convertir a Date
        fechaFin: new Date(data.fechaFin),
        cupo: parseInt(data.cupo),
        estado: parseInt(data.estado)
      };
      const res = await nuevaComision(payload);
      setMensaje(res.mensaje);
      reset();
      router.push("/admin/comisiones");
    } catch (error: any) {
      setMensaje(error.message || "Error al crear la comisión");
    }
  };

  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md max-w-3xl mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Nombre Comisión */}
        <div className="space-y-2">
          <label htmlFor="nombreComision" className="text-gray-800">
            Nombre de la Comisión:
          </label>
          <input
            id="nombreComision"
            type="text"
            {...register("nombreComision")}
            className="block w-full p-3 bg-gray-100 mt-3"
          />
          {errors.nombreComision && <p className="text-red-500">{errors.nombreComision.message}</p>}
        </div>

        {/* Fechas */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="fechaInicio" className="text-gray-800">Fecha Inicio:</label>
            <input
              id="fechaInicio"
              type="date"
              {...register("fechaInicio")}
              className="block w-full p-3 bg-gray-100 mt-3"
            />
            {errors.fechaInicio && <p className="text-red-500">{errors.fechaInicio.message}</p>}
          </div>

          <div>
            <label htmlFor="fechaFin" className="text-gray-800">Fecha Fin:</label>
            <input
              id="fechaFin"
              type="date"
              {...register("fechaFin")}
              className="block w-full p-3 bg-gray-100 mt-3"
            />
            {errors.fechaFin && <p className="text-red-500">{errors.fechaFin.message}</p>}
          </div>
        </div>

        {/* Horarios */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="horaInicio" className="text-gray-800">Hora Inicio:</label>
            <input
              id="horaInicio"
              type="time"
              {...register("horaInicio")}
              className="block w-full p-3 bg-gray-100 mt-3"
            />
            {errors.horaInicio && <p className="text-red-500">{errors.horaInicio.message}</p>}
          </div>

          <div>
            <label htmlFor="horaFin" className="text-gray-800">Hora Fin:</label>
            <input
              id="horaFin"
              type="time"
              {...register("horaFin")}
              className="block w-full p-3 bg-gray-100 mt-3"
            />
            {errors.horaFin && <p className="text-red-500">{errors.horaFin.message}</p>}
          </div>
        </div>

        {/* Días de dictado */}
        <div className="space-y-2">
          <label htmlFor="diasDictado" className="text-gray-800">
            Días de Dictado:
          </label>
          <input
            id="diasDictado"
            type="text"
            {...register("diasDictado")}
            className="block w-full p-3 bg-gray-100 mt-3"
          />
          {errors.diasDictado && <p className="text-red-500">{errors.diasDictado.message}</p>}
        </div>

        {/* Cupo */}
        <div className="space-y-2">
          <label htmlFor="cupo" className="text-gray-800">
            Cupo:
          </label>
          <input
            id="cupo"
            type="number"
            {...register("cupo")}
            className="block w-full p-3 bg-gray-100 mt-3"
          />
          {errors.cupo && <p className="text-red-500">{errors.cupo.message}</p>}
        </div>

        {/* Materia */}
        <div className="space-y-2">
          <label htmlFor="materia" className="text-gray-800">
            Materia:
          </label>
          <select
            id="materia"
            {...register("materia")}
            className="block w-full p-3 bg-gray-100 mt-3"
          >
            <option value="">Seleccione una materia</option>
            {materias.map((m) => (
              <option key={m._id} value={m._id}>
                {m.nombreMateria}
              </option>
            ))}
          </select>
          {errors.materia && <p className="text-red-500">{errors.materia.message}</p>}
        </div>

        {/* Usuario */}
        <div className="space-y-2">
          <label htmlFor="usuario" className="text-gray-800">
            Usuario:
          </label>
          <select
            id="usuario"
            {...register("usuario")}
            className="block w-full p-3 bg-gray-100 mt-3"
          >
            <option value="">Seleccione un usuario</option>
            {usuarios.map((u) => (
              <option key={u._id} value={u._id}>
                {u.nombreUsuario}
              </option>
            ))}
          </select>
          {errors.usuario && <p className="text-red-500">{errors.usuario.message}</p>}
        </div>

        {/* Estado */}
        <div className="space-y-2">
          <label htmlFor="estado" className="text-gray-800">Estado:</label>
          <select
            id="estado"
            {...register("estado")}
            className="block w-full p-3 bg-gray-100 mt-3"
          >
            <option value="1">Activa</option>
            <option value="0">Inactiva</option>
          </select>
          {errors.estado && <p className="text-red-500">{errors.estado.message}</p>}
        </div>

        {/* Botón */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-500 text-white p-2 rounded disabled:opacity-50"
        >
          {isSubmitting ? "Creando..." : "Crear Comisión"}
        </button>

        {mensaje && (
          <p
            className={`mt-2 ${
              mensaje.includes("exitosamente") ? "text-green-500" : "text-red-500"
            }`}
          >
            {mensaje}
          </p>
        )}
      </form>
    </div>
  );
};

export default ComisionFormNuevo;
