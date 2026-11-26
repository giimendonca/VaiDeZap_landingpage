import { ArrowRight } from "lucide-react";

export default function Button({ children, href = "#contato", variant = "primary" }) {
  const styles = {
    primary: "border-2 border-brand-700 bg-brand-600 text-white shadow-lg shadow-brand-600/15 hover:bg-brand-700",
    secondary: "border-2 border-slate-200 bg-white text-brand-700 hover:border-brand-500 dark:border-slate-600 dark:bg-slate-800 dark:text-emerald-300 dark:hover:border-emerald-500 dark:hover:bg-slate-700"
  };

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-4 text-base font-bold transition duration-300 hover:-translate-y-1 ${styles[variant]}`}
    >
      {children}
      <ArrowRight size={19} />
    </a>
  );
}
