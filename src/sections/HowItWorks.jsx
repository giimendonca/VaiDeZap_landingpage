
import { MessageCircle, Bell, Car } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "O cliente chama",
    description: "O passageiro entra em contato pelo WhatsApp e informa os detalhes da viagem.",
    cardColor: "border-emerald-300 bg-emerald-50 dark:border-emerald-800 dark:bg-slate-800",
    iconColor: "bg-emerald-500 text-white",
    numberColor: "text-emerald-300"
  },
  {
    number: "02",
    icon: Bell,
    title: "Você recebe a solicitação",
    description: "O sistema organiza as informações e apresenta a solicitação no painel do motorista.",
    cardColor: "border-blue-300 bg-blue-50 dark:border-blue-800 dark:bg-slate-800",
    iconColor: "bg-blue-500 text-white",
    numberColor: "text-blue-300"
  },
  {
    number: "03",
    icon: Car,
    title: "Você gerencia a corrida",
    description: "Consulte as informações, avalie a solicitação e gerencie seu atendimento.",
    cardColor: "border-violet-300 bg-violet-50 dark:border-violet-800 dark:bg-slate-800",
    iconColor: "bg-violet-500 text-white",
    numberColor: "text-violet-300"
  }
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-white px-6 py-24 transition-colors dark:bg-slate-900">
      <div className="mx-auto max-w-7xl">

        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-brand-600">
            Como funciona
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
            Organizar suas corridas pode ser simples.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            O Vai De Zap conecta o atendimento pelo WhatsApp ao gerenciamento das suas solicitações.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map(step => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className={`group rounded-2xl border-2 ${step.cardColor} p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-900/10`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-4xl font-extrabold ${step.numberColor}`}>
                    {step.number}
                  </span>
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${step.iconColor} shadow-sm transition duration-300 group-hover:scale-105`}>
                    <Icon size={26} strokeWidth={2.2} />
                  </div>
                </div>

                <h3 className="mt-7 text-xl font-bold text-slate-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-4 leading-relaxed text-slate-700 dark:text-slate-300">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
