'use client'

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { actualizarUsuario } from "@/app/admin/usuarios/actions";

const usuarioSchema = z.object({
  nombreUsuario: z.string().min(3).max(30),
  apellidoUsuario: z.string().min(3).max(40),
  dni: z.number().int().min(1).max(99999999),
  email: z.string().min(5).max(60).regex(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/),
  password: z.string().min(8), // opcional: podrías omitirlo en edición
  role: z.enum(["admin", "profesor", "alumno"]),
  estado: z.number()
});

type UsuarioFormEditarData = z.infer<typeof usuarioSchema>;

interface UsuarioFormEditarProps {
  usuario: UsuarioFormEditarData & { _id: string };
}

const UsuarioFormEditar = ({ usuario }: UsuarioFormEditarProps) => {
  const router = useRouter();
  const [mensaje, setMensaje] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<UsuarioFormEditarData>({
    resolver: zodResolver(usuarioSchema),
    defaultValues: usuario,
  });

  const onSubmit = async (data: UsuarioFormEditarData) => {
    setMensaje(null);
    try {
      const res = await actualizarUsuario(usuario._id, data);
      setMensaje(`Usuario "${res.nombre}" actualizado correctamente`);
      router.push("/admin/usuarios");
    } catch (error: any) {
      setMensaje(error.message || "Error al actualizar el usuario");
    }
  };

  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md max-w-3xl mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label>Nombre:</label>
          <input {...register("nombreUsuario")} className="block w-full p-3 bg-gray-100" />
          {errors.nombreUsuario && <p className="text-red-500">{errors.nombreUsuario.message}</p>}
        </div>

        <div>
          <label>Apellido:</label>
          <input {...register("apellidoUsuario")} className="block w-full p-3 bg-gray-100" />
          {errors.apellidoUsuario && <p className="text-red-500">{errors.apellidoUsuario.message}</p>}
        </div>

        <div>
          <label>DNI:</label>
          <input type="number" {...register("dni", { valueAsNumber: true })} className="block w-full p-3 bg-gray-100" />
          {errors.dni && <p className="text-red-500">{errors.dni.message}</p>}
        </div>

        <div>
          <label>Email:</label>
          <input type="email" {...register("email")} className="block w-full p-3 bg-gray-100" />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>

        <div>
          <label>Contraseña (opcional):</label>
          <input type="password" {...register("password")} className="block w-full p-3 bg-gray-100" />
          {errors.password && <p className="text-red-500">{errors.password.message}</p>}
        </div>

        <div>
          <label>Rol:</label>
           <select
                id="role"
                {...register("role")}
                className="block w-full p-3 bg-gray-100 mt-3"
                defaultValue={usuario?.role} // 👈 en edición marca el rol actual
            >
            <option value="admin">Admin</option>
            <option value="profesor">Profesor</option>
            <option value="alumno">Alumno</option>
          </select>
          {errors.role && <p className="text-red-500">{errors.role.message}</p>}
        </div>

        <div>
          <label>Estado:</label>
          <select {...register("estado", { valueAsNumber: true })} className="block w-full p-3 bg-gray-100">
            <option value={1}>Activo</option>
            <option value={0}>Inactivo</option>
          </select>
        </div>

        <button type="submit" disabled={isSubmitting} className="bg-yellow-500 text-white p-2 rounded">
          {isSubmitting ? "Actualizando..." : "Actualizar Usuario"}
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

export default UsuarioFormEditar;
