
import { ArrowRight, MessageCircle } from "lucide-react";

export default function CallToAction() {
  return (
    <section id="contato" className="bg-brand-50 px-6 py-24 transition-colors dark:bg-slate-900">
      <div className="mx-auto max-w-3xl text-center">

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-emerald-300 bg-brand-600 text-white shadow-lg shadow-emerald-900/10">
          <MessageCircle size={30} />
        </div>

        <h2 className="mt-8 text-3xl font-extrabold leading-tight text-slate-900 dark:text-white sm:text-4xl">
          Mais organização para sua rotina. Mais autonomia para você.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
          Conheça o Vai De Zap e descubra como simplificar o gerenciamento das suas corridas particulares.
        </p>

        <a
          href="https://vaidezap.digimais.tech/login"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 inline-flex items-center justify-center gap-3 rounded-xl border-2 border-brand-700 bg-brand-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-brand-600/20 transition duration-300 hover:-translate-y-1 hover:bg-brand-700 hover:shadow-xl"
        >
          Entre em contato
          <ArrowRight size={19} />
        </a>

      </div>
    </section>
  );
}
