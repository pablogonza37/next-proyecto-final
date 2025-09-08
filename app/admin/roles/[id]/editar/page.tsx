import Heading from '@/components/ui/Heading';
import Link from 'next/link';
import RolFormEditar from '@/components/admin/roles/RolFormEditar'; // el formulario de editar
import { obtenerRol } from '../../actions';

interface EditarRolPageProps {
  params: { id: string } | Promise<{ id: string }>; 
}


const EditarRolPage = async ({ params }: EditarRolPageProps) => {
    const resolvedParams = await params; 
    const id = resolvedParams.id;
    const rol = await obtenerRol(id);
  
     if (!rol) return <p>Rol no encontrado</p>;

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

      <RolFormEditar rolId={id} rolData={rol}/>
    </>
  );
};

export default EditarRolPage;