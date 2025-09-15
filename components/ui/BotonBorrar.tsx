"use client";

import { useRouter } from "next/navigation";
import { confirmDelete, showSuccess, showError } from "@/lib/sweetalert";

interface BotonBorrarProps {
  nombreItem: string;                
  action: () => Promise<unknown>;        
  className?: string;                
}

const BotonBorrar = ({ nombreItem, action, className }: BotonBorrarProps) => {
  const router = useRouter();
  const handleDelete = async () => {
    const result = await confirmDelete(nombreItem);

    if (result.isConfirmed) {
      try {
        await action();
        await showSuccess("¡Eliminado!", `${nombreItem} ha sido eliminado correctamente`);
        router.refresh();
      } catch (error: unknown) {
        await showError("Error al eliminar", error instanceof Error ? error.message : "No se pudo eliminar el elemento");
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
