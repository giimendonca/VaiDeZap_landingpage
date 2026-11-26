
import {
  MessageCircle, Calculator, MapPin,
  Bell, Wallet, Smartphone
} from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "Atendimento pelo WhatsApp",
    description: "Receba solicitações dos clientes por meio de um atendimento automatizado.",
    cardColor: "border-emerald-300 bg-emerald-50 dark:border-emerald-800 dark:bg-slate-900",
    iconColor: "bg-emerald-500 text-white"
  },
  {
    icon: Calculator,
    title: "Cotação de corridas",
    description: "Apresente valores calculados de acordo com as tarifas configuradas.",
    cardColor: "border-blue-300 bg-blue-50 dark:border-blue-800 dark:bg-slate-900",
    iconColor: "bg-blue-500 text-white"
  },
  {
    icon: MapPin,
    title: "Localização em tempo real",
    description: "Utilize recursos de geolocalização para acompanhar as informações das corridas.",
    cardColor: "border-violet-300 bg-violet-50 dark:border-violet-800 dark:bg-slate-900",
    iconColor: "bg-violet-500 text-white"
  },
  {
    icon: Bell,
    title: "Painel de solicitações",
    description: "Visualize as corridas recebidas e acompanhe as solicitações com notificações sonoras.",
    cardColor: "border-amber-300 bg-amber-50 dark:border-amber-800 dark:bg-slate-900",
    iconColor: "bg-amber-500 text-white"
  },
  {
    icon: Wallet,
    title: "Gestão de tarifas",
    description: "Configure e administre os valores utilizados na precificação dos seus serviços.",
    cardColor: "border-emerald-300 bg-emerald-50 dark:border-emerald-800 dark:bg-slate-900",
    iconColor: "bg-emerald-500 text-white"
  },
  {
    icon: Smartphone,
    title: "Acesso pelo celular",
    description: "Utilize o painel em uma interface adaptada para dispositivos móveis.",
    cardColor: "border-blue-300 bg-blue-50 dark:border-blue-800 dark:bg-slate-900",
    iconColor: "bg-blue-500 text-white"
  }
];

export default function Features() {
  return (
    <section id="funcionalidades" className="bg-slate-50 px-6 py-24 transition-colors dark:bg-slate-950">
      <div className="mx-auto max-w-7xl">

        <div className="max-w-2xl">
          <span className="text-sm font-bold uppercase tracking-widest text-brand-600">
            Funcionalidades
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
            Tudo o que você precisa para organizar seu atendimento.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            Ferramentas pensadas para facilitar a rotina de quem trabalha com transporte particular.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(feature => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className={`rounded-2xl border-2 ${feature.cardColor} p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10`}
              >
                <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${feature.iconColor} shadow-sm`}>
                  <Icon size={26} strokeWidth={2.2} />
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 leading-relaxed text-slate-700 dark:text-slate-300">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
