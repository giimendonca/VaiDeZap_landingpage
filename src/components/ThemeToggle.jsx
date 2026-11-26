import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    return document.documentElement.classList.contains("dark");
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch (error) {
      // A alternância de tema continua funcionando sem persistência.
    }
  }, [dark]);

  return (
    <button
      type="button"
      onClick={() => setDark(current => !current)}
      aria-label={dark ? "Ativar tema claro" : "Ativar tema escuro"}
      aria-pressed={dark}
      title={dark ? "Ativar tema claro" : "Ativar tema escuro"}
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border-2 border-amber-300 bg-amber-50 text-amber-600 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-amber-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 dark:border-indigo-400 dark:bg-indigo-950 dark:text-amber-300 dark:hover:bg-indigo-900"
    >
      {dark ? <Sun size={21} strokeWidth={2.3} /> : <Moon size={21} strokeWidth={2.3} />}
    </button>
  );
}
