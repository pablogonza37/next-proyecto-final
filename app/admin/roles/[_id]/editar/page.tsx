import Heading from '@/components/ui/Heading';
import Link from 'next/link';
import RolFormEditar from '@/components/admin/roles/RolFormEditar'; // el formulario de editar

interface EditarRolPageProps {
  params: { id: string }; // Next 13 App Router, obtenemos el id de la URL
}

const EditarRolPage = ({ params }: EditarRolPageProps) => {
  const { id } = params;

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <Heading>Editar Rol</Heading>
        <Link
          href="/admin/roles"
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded"
        >
          Volver
        </Link>
      </div>

      <RolFormEditar rolId={id} />
    </>
  );
};

export default EditarRolPage;