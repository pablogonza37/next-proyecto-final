import Heading from '@/components/ui/Heading';
import RolForm from '@/components/admin/roles/RolForm';
import Link from 'next/link';

const NuevoRolPage = () => {
  return (
      <>
          <div className="flex justify-between items-center mb-4">
              <Heading>Nuevo Rol</Heading>
              <Link
                  href="/admin/roles"
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded"
              >
                  Volver
              </Link>
          </div>

          <RolForm />

      </>
  )
}

export default NuevoRolPage;