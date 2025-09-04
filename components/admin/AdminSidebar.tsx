import AdminRoute from "@/components/admin/AdminRoute";

const adminNavigation = [
    {url: '/admin/roles', text: 'Roles', blank: false},
    {url: '/admin/materias', text: 'Materias', blank: false},
    {url: '/admin/comisiones', text: 'Comisiones', blank: false},
    {url: '/admin/inscripciones', text: 'Inscripciones', blank: false},
]

const AdminSidebar = () => {

    return (
        <>

            <div className="space-y-3 ">
                <p className="mt-10 uppercase font-bold text-sm text-gray-600 text-center">Navegación</p>
                <nav className="flex flex-col">
                    {adminNavigation.map(link => (
                        <AdminRoute key={link.url} link={link}/>
                    ))}
                </nav>
            </div>
        </>

    )
}

export default AdminSidebar