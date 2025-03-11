import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";


export default function DarkModeToggle() {
  const theme = useContext(ThemeContext);
  if (!theme) return null;

  return (
    <div className="relative">
      <select
        value={theme.theme}
        onChange={(e) => theme.setTheme(e.target.value as "light" | "dark" | "system")}
        className="p-2 bg-gray-200 dark:bg-gray-800 rounded-md shadow-md text-black dark:text-white"
      >
        <option value="light">🌞 Light</option>
        <option value="dark">🌙 Dark</option>
        <option value="system">💻 System</option>
      </select>
    </div>
  );
}
