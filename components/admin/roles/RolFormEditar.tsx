'use client'

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { actualizarRol } from "@/app/admin/roles/actions"; // función de API para actualizar
import { useState, useEffect } from "react";

// Esquema igual al de crear
const rolSchema = z.object({
  nombreRol: z
    .string()
    .min(3, "El nombre del rol debe tener al menos 3 caracteres")
    .max(30, "El nombre del rol debe tener como máximo 30 caracteres")
    .refine(val => ["admin", "alumno", "profesor"].includes(val), {
      message: "El rol debe ser admin, alumno o profesor"
    }),
  estado: z.enum(["0", "1"])
});

type RolFormData = z.infer<typeof rolSchema>;

interface RolFormProps {
  rolId: string;
  rolData?: RolFormData; // opcional, se puede pasar desde la página
}

const RolFormEditar = ({ rolId, rolData }: RolFormProps) => {
  const router = useRouter();
  const [mensaje, setMensaje] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset, setValue } = useForm<RolFormData>({
    resolver: zodResolver(rolSchema),
    defaultValues: rolData || { nombreRol: "", estado: "1" }
  });

  // Si no pasamos rolData por props, podemos traerlo desde API
  useEffect(() => {
    if (!rolData) {
      const fetchRol = async () => {
        try {
          const res = await fetch(`/api/roles/${rolId}`);
          const data = await res.json();
          // Asignamos los valores al form
          setValue("nombreRol", data.nombreRol);
          setValue("estado", data.estado);
        } catch (error) {
          console.error("Error al cargar rol:", error);
        }
      };
      fetchRol();
    }
  }, [rolId, rolData, setValue]);

  const onSubmit = async (data: RolFormData) => {
    setMensaje(null);
    try {
      const payload = { ...data, estado: parseInt(data.estado) };
      const res = await actualizarRol(rolId, payload);
      setMensaje(`Rol "${res.nombreRol}" actualizado correctamente`);
      // Redireccionar a roles
      router.push('/admin/roles');
    } catch (error: any) {
      setMensaje(error.message || "Error al actualizar el rol");
    }
  };

  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md max-w-3xl mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="space-y-2">
          <label className="text-gray-800" htmlFor="name">Nombre Rol:</label>
          <input
            id="name"
            type="text"
            {...register("nombreRol")}
            className="block w-full p-3 bg-gray-100 mt-3"
          />
          {errors.nombreRol && <p className="text-red-500">{errors.nombreRol.message}</p>}
        </div>

        <div className="space-y-2">
          <label className="text-gray-800" htmlFor="selectionType">Tipo de Estado:</label>
          <select id="selectionType" {...register("estado")} className="block w-full p-3 bg-gray-100 mt-3">
            <option value="1">Activo</option>
            <option value="0">Inactivo</option>
          </select>
          {errors.estado && <p className="text-red-500">{errors.estado.message}</p>}
        </div>

        <button type="submit" disabled={isSubmitting} className="bg-blue-500 text-white p-2 rounded disabled:opacity-50">
          {isSubmitting ? "Actualizando..." : "Actualizar Rol"}
        </button>

        {mensaje && (
          <p className={`mt-2 ${mensaje.includes("actualizado") ? "text-green-500" : "text-red-500"}`}>
            {mensaje}
          </p>
        )}
      </form>
    </div>
  );
};

export default RolFormEditar;
