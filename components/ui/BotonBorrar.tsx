"use client";

import { useRouter } from "next/navigation";
import { confirmDelete, showSuccess, showError } from "@/lib/sweetalert";

type BotonBorrarProps = {
  nombreItem: string;
  action: () => Promise<{ ok: boolean; mensaje?: string; data?: any }>;
  className?: string;
};

const BotonBorrar = ({ nombreItem, action, className }: BotonBorrarProps) => {
  const router = useRouter();
  const handleDelete = async () => {
    const result = await confirmDelete(nombreItem);

    if (result.isConfirmed) {
      try {
        const respuesta = await action();
        if (!respuesta.ok) {
          await showError("Error al eliminar", respuesta.mensaje);
          return;
        }
        await showSuccess("¡Eliminado!", `${nombreItem} ha sido eliminado correctamente`);
        router.refresh();
      } catch (error: unknown) {
        await showError("Error al eliminar", error instanceof Error ? error.message : "No se pudo eliminar el elemento");
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
