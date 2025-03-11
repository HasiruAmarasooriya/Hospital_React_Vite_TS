import { useState } from "react";
import { Home, CreditCard, FolderOpen, Settings, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState<string | null>(null);

  const toggleSubmenu = (menu: string) => {
    setSubmenuOpen(submenuOpen === menu ? null : menu);
  };

  return (
    <div
      className={cn(
        "h-screen bg-white dark:bg-gray-900 shadow-lg transition-all duration-300",
        open ? "w-64" : "w-20"
      )}
    >
      {/* Sidebar Header */}
      <div className="p-5 flex justify-between items-center">
        <h2 className={cn("text-xl font-bold text-gray-900 dark:text-white", !open && "hidden")}>
          Hospital
        </h2>
        <button onClick={() => setOpen(!open)} className="text-gray-600 dark:text-gray-400">
          ☰
        </button>
      </div>

      {/* Sidebar Menu */}
      <nav className="mt-4">
        <ul className="space-y-2">
          {/* Dashboard */}
          <li>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md"
            >
              <Home size={20} />
              <span className={cn("text-md", !open && "hidden")}>Dashboard</span>
            </a>
          </li>

          {/* Cashier */}
          <li>
            <button
              onClick={() => toggleSubmenu("cashier")}
              className="flex items-center justify-between w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md"
            >
              <div className="flex items-center gap-3">
                <CreditCard size={20} />
                <span className={cn("text-md", !open && "hidden")}>Cashier</span>
              </div>
              <ChevronDown size={18} className={cn("transition-transform", submenuOpen === "cashier" && "rotate-180")} />
            </button>
            <ul className={cn("pl-10 mt-1 space-y-1", submenuOpen !== "cashier" && "hidden")}>
              <li><a href="#" className="block py-1 text-sm">Cashier</a></li>
              <li><a href="#" className="block py-1 text-sm">Other Income</a></li>
              <li><a href="#" className="block py-1 text-sm">Cashier Sessions</a></li>
              <li><a href="#" className="block py-1 text-sm">Reports</a></li>
              <li><a href="#" className="block py-1 text-sm">Claim Bill</a></li>
            </ul>
          </li>

          {/* Operations */}
          <li>
            <button
              onClick={() => toggleSubmenu("operations")}
              className="flex items-center justify-between w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md"
            >
              <div className="flex items-center gap-3">
                <FolderOpen size={20} />
                <span className={cn("text-md", !open && "hidden")}>Operations</span>
              </div>
              <ChevronDown size={18} className={cn("transition-transform", submenuOpen === "operations" && "rotate-180")} />
            </button>
            <ul className={cn("pl-10 mt-1 space-y-1", submenuOpen !== "operations" && "hidden")}>
              <li><a href="#" className="block py-1 text-sm">Channeling</a></li>
              <li><a href="#" className="block py-1 text-sm">OPD</a></li>
              <li><a href="#" className="block py-1 text-sm">X-Ray</a></li>
            </ul>
          </li>

          {/* Master Data */}
          <li>
            <button
              onClick={() => toggleSubmenu("masterData")}
              className="flex items-center justify-between w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md"
            >
              <div className="flex items-center gap-3">
                <Settings size={20} />
                <span className={cn("text-md", !open && "hidden")}>Master Data</span>
              </div>
              <ChevronDown size={18} className={cn("transition-transform", submenuOpen === "masterData" && "rotate-180")} />
            </button>
            <ul className={cn("pl-10 mt-1 space-y-1", submenuOpen !== "masterData" && "hidden")}>
              <li><a href="#" className="block py-1 text-sm">Register Patient</a></li>
              <li><a href="#" className="block py-1 text-sm">OPD Scheduler</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
