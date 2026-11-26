export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-100 px-6 py-10 text-slate-700 transition-colors dark:border-slate-800 dark:bg-slate-950 dark:text-white">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 sm:flex-row sm:items-center">
        <div>
          <a href="#" className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="Vai De Zap"
              className="h-10 w-auto object-contain"
            />
            <span className="text-xl font-extrabold text-slate-900 dark:text-white">
              Vai De <span className="text-brand-600 dark:text-brand-500">Zap</span>
            </span>
          </a>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
            Mais autonomia para quem dirige.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 text-sm text-slate-600 dark:text-slate-400">
          <a href="#como-funciona" className="transition hover:text-brand-700 dark:hover:text-emerald-300">
            Como funciona
          </a>
          <a href="#funcionalidades" className="transition hover:text-brand-700 dark:hover:text-emerald-300">
            Funcionalidades
          </a>
          <a href="#beneficios" className="transition hover:text-brand-700 dark:hover:text-emerald-300">
            Benefícios
          </a>
        </div>

        <p className="text-sm text-slate-500 dark:text-slate-500">
          © {new Date().getFullYear()} Vai De Zap.
        </p>
      </div>
    </footer>
  );
}
