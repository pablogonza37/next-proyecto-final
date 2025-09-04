import AdminSidebar from "@/components/admin/AdminSidebar";


export default async function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div className="md:flex">
                <aside className="md:w-64 md:h-screen bg-white">
                    <AdminSidebar />
                </aside>

                <main className="md:flex-1 md:h-screen md:overflow-y-scroll p-4 bg-gray-100">
                    {children}
                </main>
            </div>

        </>
    )
}