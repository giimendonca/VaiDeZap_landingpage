import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import Button from "./Button";

const links = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "Benefícios", href: "#beneficios" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md transition-colors dark:border-slate-800 dark:bg-slate-950/95">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" onClick={closeMenu} className="flex items-center gap-2">
          <img src="/logo.png" alt="Vai De Zap" className="h-10 w-auto object-contain"/>
          <span className="text-xl font-extrabold tracking-tight text-slate-900 transition-colors dark:text-white sm:text-2xl">
            Vai De <span className="text-brand-600">Zap</span>
          </span>
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-medium text-slate-600 transition hover:text-brand-600 dark:text-slate-300 dark:hover:text-emerald-400"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Button href="#contato">Conheça o sistema</Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          className="rounded-lg p-2 text-slate-700 transition hover:bg-brand-50 dark:text-slate-200 dark:hover:bg-slate-800"
        >
          {menuOpen ? <X size={27} /> : <Menu size={27} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-6 dark:border-slate-800 dark:bg-slate-950 md:hidden">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="py-1 font-semibold text-slate-700 transition hover:text-brand-600 dark:text-slate-200 dark:hover:text-emerald-400"
              >
                {link.label}
              </a>
            ))}
            <Button href="#contato">Conheça o sistema</Button>
          </div>
        </div>
      )}
    </header>
  );
}
