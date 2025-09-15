'use client'

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { nuevaMateria } from "@/app/admin/materias/actions"; 

const materiaSchema = z.object({
    nombreMateria: z
        .string()
        .min(3, "El nombre de la materia debe contener al menos 3 caracteres")
        .max(150, "El nombre de la materia debe contener como máximo 150 caracteres"),
    descripcion: z
        .string()
        .min(3, "El nombre de la materia debe contener al menos 3 caracteres")
        .max(255, "El nombre de la materia debe contener como máximo 255 caracteres"),
    nivel: z.enum(["1", "2", "3", "4", "5"], {
        message: "El nivel debe ser un número entre 1 y 5",
    }),
    estado: z.enum(["0", "1"])
});

type MateriaFormNuevoData = z.infer<typeof materiaSchema>;

const MateriaFormNuevo = () => {
    const router = useRouter();
    const [mensaje, setMensaje] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<MateriaFormNuevoData>({
        resolver: zodResolver(materiaSchema),
    });

    const onSubmit = async (data: MateriaFormNuevoData) => {
        setMensaje(null);
        try {
            const payload = { ...data, estado: parseInt(data.estado) };
            const res = await nuevaMateria(payload); 
            setMensaje(res.mensaje);
            reset();
            router.push("/admin/materias");
        } catch (error: unknown) {
            setMensaje(error instanceof Error ? error.message : "Error al crear la materia");
        }
    };

    return (
        <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md max-w-3xl mx-auto">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="space-y-2">
                    <label className="text-gray-800" htmlFor="nombreMateria">
                        Nombre de la Materia:
                    </label>
                    <input
                        id="nombreMateria"
                        type="text"
                        {...register("nombreMateria")}
                        className="block w-full p-3 bg-gray-100 mt-3"
                    />
                    {errors.nombreMateria && (
                        <p className="text-red-500">{errors.nombreMateria.message}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <label className="text-gray-800" htmlFor="descripcion">
                        Descripcion de la Materia:
                    </label>
                    <input
                        id="descripcion"
                        type="text"
                        {...register("descripcion")}
                        className="block w-full p-3 bg-gray-100 mt-3"
                    />
                    {errors.descripcion && (
                        <p className="text-red-500">{errors.descripcion.message}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <label className="text-gray-800" htmlFor="nivel">
                        Nivel:
                    </label>
                    <select
                        id="nivel"
                        {...register("nivel")}
                        className="block w-full p-3 bg-gray-100 mt-3"
                    >
                        {[1, 2, 3, 4, 5].map((n) => (
                            <option key={n} value={n.toString()}>
                                {n}
                            </option>
                        ))}
                    </select>
                    {errors.nivel && (
                        <p className="text-red-500">{errors.nivel.message}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <label className="text-gray-800" htmlFor="selectionType">
                        Tipo de Estado:
                    </label>
                    <select
                        id="selectionType"
                        {...register("estado")}
                        className="block w-full p-3 bg-gray-100 mt-3"
                    >
                        <option value="1">Activo</option>
                        <option value="0">Inactivo</option>
                    </select>
                    {errors.estado && <p className="text-red-500">{errors.estado.message}</p>}
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-blue-500 text-white p-2 rounded disabled:opacity-50"
                >
                    {isSubmitting ? "Creando..." : "Crear Materia"}
                </button>

                {mensaje && (
                    <p
                        className={`mt-2 ${mensaje.includes("correctamente")
                                ? "text-green-500"
                                : "text-red-500"
                            }`}
                    >
                        {mensaje}
                    </p>
                )}
            </form>
        </div>
    );
};

export default MateriaFormNuevo;
