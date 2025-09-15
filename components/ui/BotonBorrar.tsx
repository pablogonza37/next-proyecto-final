"use client";

import { useRouter } from "next/navigation";
import { confirmDelete, showSuccess, showError } from "@/lib/sweetalert";

interface BotonBorrarProps {
  nombreItem: string;                // Nombre del usuario o ítem a borrar
  action: () => Promise<any>;        // Función que ejecuta el borrado (como tu action con axios)
  className?: string;                // Opcional: clases de Tailwind u otras
}

const BotonBorrar = ({ nombreItem, action, className }: BotonBorrarProps) => {
  const router = useRouter();
  const handleDelete = async () => {
    const result = await confirmDelete(nombreItem);

    if (result.isConfirmed) {
      try {
        await action(); // ejecuta la función de borrado (axios)
        await showSuccess("¡Eliminado!", `${nombreItem} ha sido eliminado correctamente`);
        router.refresh(); // 🔹 Esto recarga los datos del server component
      } catch (error: any) {
        await showError("Error al eliminar", error.message || "No se pudo eliminar el elemento");
        console.error(error);
      }
    }
  };

  return (
    <button
      onClick={handleDelete}
      className={className || "bg-red-200 hover:bg-red-300 font-bold text-xl text-black mx-2 py-2 px-5 rounded transition-all cursor-pointer"}
    >
      Borrar
    </button>
  );
};

export default BotonBorrar;
