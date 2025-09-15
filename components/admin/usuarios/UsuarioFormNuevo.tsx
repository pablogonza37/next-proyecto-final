'use client'

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { nuevoUsuario } from "@/app/admin/usuarios/actions";

const usuarioSchema = z.object({
  nombreUsuario: z
    .string()
    .min(3, "El nombre del usuario debe contener al menos 3 caracteres")
    .max(30, "El nombre del usuario debe contener como máximo 30 caracteres"),
  apellidoUsuario: z
    .string()
    .min(3, "El apellido del usuario debe contener al menos 3 caracteres")
    .max(40, "El apellido del usuario debe contener como máximo 40 caracteres"),
    dni: z
    .number()
    .int("El DNI debe ser un número entero")
    .min(1, "El DNI debe ser al menos 1")
    .max(99999999, "El DNI no puede ser mayor a 99999999"), 
  email: z
    .string()
    .min(5, "El e-mail debe contener al menos 5 caracteres")
    .max(60, "El e-mail debe contener como máximo 60 caracteres")
    .regex(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/, "El e-mail debe cumplir con el formato juan@correo.com"),
  password: z
    .string()
    .min(8, "La contraseña debe contener 8 o más caracteres")
    .regex(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,}$/, "La contraseña debe tener al menos un número, una minúscula, una mayúscula y no contener caracteres especiales"),
  role: z.enum(["admin", "profesor", "alumno"], {message: "El rol debe ser uno de los valores válidos"})
});

type UsuarioFormNuevoData = z.infer<typeof usuarioSchema>;

const UsuarioFormNuevo = () => {
  const router = useRouter();
  const [mensaje, setMensaje] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<UsuarioFormNuevoData>({
    resolver: zodResolver(usuarioSchema),
  });

  const onSubmit = async (data: UsuarioFormNuevoData) => {
    setMensaje(null);
    try {
      const payload = { ...data };
      const res = await nuevoUsuario(payload); 
      setMensaje(`Usuario "${res.nombre}" creado correctamente`);
      reset();
      router.push('/admin/usuarios');
    } catch (error: unknown) {
      setMensaje(error instanceof Error ? error.message : "Error al crear el usuario");
    }
  };

  const labelsMap: Record<string, string> = {
    nombreUsuario: "Nombre",
    apellidoUsuario: "Apellido",
    dni: "DNI",
    email: "Correo electrónico",
    password: "Contraseña",
    };


  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md max-w-3xl mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
       {["nombreUsuario", "apellidoUsuario", "email", "password"].map((field) => (
        <div key={field} className="space-y-2">
            <label className="text-gray-800" htmlFor={field}>
            {labelsMap[field]}:
            </label>
            <input
            id={field}
            type={field === "password" ? "password" : "text"}
            {...register(field as keyof UsuarioFormNuevoData)}
            className="block w-full p-3 bg-gray-100 mt-3"
            />
            {errors[field as keyof UsuarioFormNuevoData] && (
            <p className="text-red-500">
                {errors[field as keyof UsuarioFormNuevoData]?.message}
            </p>
            )}
        </div>
        ))}

        <div className="space-y-2">
        <label className="text-gray-800" htmlFor="dni">{labelsMap["dni"]}:</label>
        
            <input
                {...register("dni", { valueAsNumber: true })}
                type="number"
                className="block w-full p-3 bg-gray-100 mt-3"
            />
         
        {errors.dni && <p className="text-red-500">{errors.dni.message}</p>}
        </div>

        <div className="space-y-2">
          <label className="text-gray-800" htmlFor="role">Rol:</label>
          <select
            id="role"
            {...register("role")}
            className="block w-full p-3 bg-gray-100 mt-3"
          >
            <option value="admin">Admin</option>
            <option value="profesor">Profesor</option>
            <option value="alumno">Alumno</option>
          </select>
          {errors.role && <p className="text-red-500">{errors.role.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-500 text-white p-2 rounded disabled:opacity-50"
        >
          {isSubmitting ? "Creando..." : "Crear Usuario"}
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

export default UsuarioFormNuevo;
