import Sidebar from "@/components/Sidebar";


export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen  w-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
        <header className="p-4 flex justify-between items-center bg-white dark:bg-gray-800 shadow-md">
          <h1 className="text-2xl font-bold">Hospital Dashboard</h1>
          
        </header>
        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
