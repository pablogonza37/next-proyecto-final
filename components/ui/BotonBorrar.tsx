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
<<<<<<< HEAD
        await action(); // ejecuta la función de borrado (axios)
        await showSuccess("¡Eliminado!", `${nombreItem} ha sido eliminado correctamente`);
        router.refresh(); // 🔹 Esto recarga los datos del server component
      } catch (error: any) {
        await showError("Error al eliminar", error.message || "No se pudo eliminar el elemento");
=======
        await action(); 
        Swal.fire("Borrado", `${nombreItem} ha sido eliminado`, "success");
        router.refresh(); 
      } catch (error: unknown) {
        Swal.fire("Error", error instanceof Error ? error.message : "No se pudo eliminar el elemento", "error");
>>>>>>> 5f4f1fdf439ad7e80e563514012ababdc9787174
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
