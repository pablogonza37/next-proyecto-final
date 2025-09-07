'use client'

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { actualizarMateria } from "@/app/admin/materias/actions";

// 🔹 Validaciones
const materiaSchema = z.object({
  nombreMateria: z
    .string()
    .min(3, "El nombre de la materia debe contener al menos 3 caracteres")
    .max(150, "El nombre de la materia debe contener como máximo 150 caracteres"),
  descripcion: z
    .string()
    .min(3, "La descripción debe contener al menos 3 caracteres")
    .max(255, "La descripción debe contener como máximo 255 caracteres"),
  nivel: z.enum(["1", "2", "3", "4", "5"], {
    message: "El nivel debe ser un número entre 1 y 5",
  }),
  estado: z.number()
});

type MateriaFormEditarData = z.infer<typeof materiaSchema>;

interface MateriaFormEditarProps {
  materia: MateriaFormEditarData & { _id: string };
}

const MateriaFormEditar = ({ materia }: MateriaFormEditarProps) => {
  const router = useRouter();
  const [mensaje, setMensaje] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<MateriaFormEditarData>({
    resolver: zodResolver(materiaSchema),
    defaultValues: materia,
  });

  const onSubmit = async (data: MateriaFormEditarData) => {
    setMensaje(null);
    try {
      const payload = {
        ...data,
      };
      const res = await actualizarMateria(materia._id, payload);
      setMensaje(res.mensaje);
      router.push("/admin/materias");
    } catch (error: any) {
      setMensaje(error.message || "Error al actualizar la materia");
    }
  };

  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md max-w-3xl mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

        {/* Nombre */}
        <div>
          <label>Nombre de la Materia:</label>
          <input {...register("nombreMateria")} className="block w-full p-3 bg-gray-100" />
          {errors.nombreMateria && <p className="text-red-500">{errors.nombreMateria.message}</p>}
        </div>

        {/* Descripción */}
        <div>
          <label>Descripción:</label>
          <input {...register("descripcion")} className="block w-full p-3 bg-gray-100" />
          {errors.descripcion && <p className="text-red-500">{errors.descripcion.message}</p>}
        </div>

        {/* Nivel */}
        <div>
          <label>Nivel:</label>
          <select {...register("nivel")} className="block w-full p-3 bg-gray-100 mt-3" defaultValue={materia.nivel}>
            {[1, 2, 3, 4, 5].map((n) => (
              <option key={n} value={n.toString()}>{n}</option>
            ))}
          </select>
          {errors.nivel && <p className="text-red-500">{errors.nivel.message}</p>}
        </div>

        {/* Estado */}
       <div>
          <label>Estado:</label>
          <select {...register("estado", { valueAsNumber: true })} className="block w-full p-3 bg-gray-100">
            <option value={1}>Activo</option>
            <option value={0}>Inactivo</option>
          </select>
          {errors.estado && <p className="text-red-500">{errors.estado.message}</p>}
        </div>

        <button type="submit" disabled={isSubmitting} className="bg-yellow-500 text-white p-2 rounded">
          {isSubmitting ? "Actualizando..." : "Actualizar Materia"}
        </button>

        {mensaje && (
          <p className={`mt-2 ${mensaje.includes("exitosamente") ? "text-green-500" : "text-red-500"}`}>
            {mensaje}
          </p>
        )}
      </form>
    </div>
  );
};

export default MateriaFormEditar;
