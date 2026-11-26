
import { CheckCircle2, Clock, SlidersHorizontal, BriefcaseBusiness } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Mais organização",
    description: "Centralize suas solicitações e tenha uma visão mais clara dos atendimentos."
  },
  {
    icon: SlidersHorizontal,
    title: "Mais autonomia",
    description: "Configure suas tarifas e gerencie suas condições de atendimento."
  },
  {
    icon: BriefcaseBusiness,
    title: "Mais praticidade",
    description: "Reúna ferramentas importantes da sua rotina em um único painel."
  }
];

export default function Benefits() {
  return (
    <section id="beneficios" className="bg-white px-6 py-24 transition-colors dark:bg-slate-950">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

        <div>
          <span className="text-sm font-bold uppercase tracking-widest text-brand-600">
            Pensado para você
          </span>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 dark:text-white sm:text-4xl">
            Você cuida das corridas. O Vai De Zap ajuda com a organização.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            Trabalhar por conta própria exige planejamento e organização. Tenha ferramentas que acompanham sua rotina e ajudam a simplificar seu atendimento.
          </p>

          <div className="mt-8 space-y-4">
            {[
              "Solicitações organizadas em um só lugar.",
              "Controle sobre os valores das corridas.",
              "Atendimento integrado ao WhatsApp.",
              "Painel pensado para uso no celular."
            ].map(item => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 size={22} className="mt-0.5 shrink-0 text-brand-600" strokeWidth={2.5} />
                <span className="font-medium text-slate-700 dark:text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-5">
          {benefits.map(benefit => {
            const Icon = benefit.icon;

            return (
              <article
                key={benefit.title}
                className="flex gap-5 rounded-2xl border-2 border-emerald-200 bg-emerald-50/70 p-6 dark:border-emerald-800 dark:bg-slate-900 transition duration-300 hover:-translate-y-1 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-900/10"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-sm">
                  <Icon size={25} strokeWidth={2.2} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{benefit.title}</h3>
                  <p className="mt-2 leading-relaxed text-slate-700 dark:text-slate-300">{benefit.description}</p>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
