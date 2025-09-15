"use client";

import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

interface BotonBorrarProps {
  nombreItem: string;                // Nombre del usuario o ítem a borrar
  action: () => Promise<any>;        // Función que ejecuta el borrado (como tu action con axios)
  className?: string;                // Opcional: clases de Tailwind u otras
}

const BotonBorrar = ({ nombreItem, action, className }: BotonBorrarProps) => {
  const router = useRouter();
  const handleDelete = async () => {
    const result = await Swal.fire({
      title: `¿Estás seguro que deseas borrar a ${nombreItem}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#e53e3e",
      cancelButtonColor: "#a0aec0",
      confirmButtonText: "Sí, borrar",
      cancelButtonText: "Cancelar",
    });

    if (result.isConfirmed) {
      try {
        await action(); // ejecuta la función de borrado (axios)
        Swal.fire("Borrado", `${nombreItem} ha sido eliminado`, "success");
        router.refresh(); // 🔹 Esto recarga los datos del server component
      } catch (error: any) {
        Swal.fire("Error", error.message || "No se pudo eliminar el elemento", "error");
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
