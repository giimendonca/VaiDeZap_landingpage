
import { MapPin, Navigation, Clock, CheckCircle2, Car } from "lucide-react";
import Button from "../components/Button";

export default function Hero() {
  return (
    <section className="overflow-hidden bg-gradient-to-br from-brand-50 via-white to-white transition-colors dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:py-28">

        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-2 text-sm font-bold text-brand-700">
            <Navigation size={16} />
            Para motoristas particulares
          </span>

          <h1 className="mt-7 max-w-xl text-4xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
            Suas corridas.
            <span className="block text-brand-600">Seu controle.</span>
            Tudo pelo Zap!
          </h1>

          <p className="mt-7 max-w-lg text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            Receba solicitações pelo WhatsApp, organize seus atendimentos e gerencie suas tarifas em um só lugar.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button href="#como-funciona">Descubra como funciona</Button>
            <Button href="#funcionalidades" variant="secondary">Conheça os recursos</Button>
          </div>

          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-slate-600 dark:text-slate-300">
            <span className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-brand-600" />
              Fácil de utilizar
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-brand-600" />
              Feito para você
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md animate-fade-up delay-200">
          <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-brand-100 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 h-64 w-64 rounded-full bg-emerald-100 blur-3xl" />

          <div className="relative rounded-3xl border-2 border-emerald-200 bg-white p-6 dark:border-emerald-800 dark:bg-slate-800 shadow-2xl shadow-brand-900/10">

            <div className="flex items-center justify-between border-b-2 border-slate-100 pb-5 dark:border-slate-700">
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">Painel do motorista</p>
                <h3 className="mt-1 text-xl font-bold text-slate-900 dark:text-white">Solicitações</h3>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500 text-white">
                <Car size={25} />
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between rounded-xl border-2 border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-800 dark:bg-emerald-950/60">
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-300">Status de demonstração</p>
                <p className="mt-1 font-bold text-emerald-700">Disponível</p>
              </div>
              <span className="h-3 w-3 rounded-full bg-emerald-500 ring-4 ring-emerald-100 dark:ring-emerald-900" />
            </div>

            <div className="mt-7">
              <div className="mb-4 flex items-center justify-between">
                <h4 className="font-bold text-slate-800 dark:text-slate-100">Nova corrida</h4>
                <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">Exemplo</span>
              </div>

              <div className="rounded-2xl border-2 border-blue-200 bg-blue-50/40 p-5 dark:border-blue-800 dark:bg-blue-950/40">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className="h-3 w-3 rounded-full bg-emerald-500" />
                    <span className="my-1 h-10 border-l-2 border-dashed border-blue-300" />
                    <span className="h-3 w-3 rounded-full bg-blue-500" />
                  </div>

                  <div className="flex-1 space-y-5">
                    <div>
                      <p className="text-xs font-bold text-slate-500 dark:text-slate-400">ORIGEM</p>
                      <p className="mt-1 font-semibold text-slate-800 dark:text-slate-100">Rua das Flores, 120</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-500 dark:text-slate-400">DESTINO</p>
                      <p className="mt-1 font-semibold text-slate-800 dark:text-slate-100">Av. Central, 450</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t-2 border-blue-200 pt-5 dark:border-blue-800">
                  <span className="text-sm text-slate-600 dark:text-slate-300">Valor ilustrativo</span>
                  <span className="text-2xl font-extrabold text-brand-700">R$ 25,00</span>
                </div>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2 rounded-xl border-2 border-emerald-200 bg-emerald-50 p-3 dark:border-emerald-800 dark:bg-emerald-950/50">
                <MapPin size={19} className="shrink-0 text-emerald-600" />
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">Localização</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border-2 border-blue-200 bg-blue-50 p-3 dark:border-blue-800 dark:bg-blue-950/50">
                <Clock size={19} className="shrink-0 text-blue-600" />
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">Solicitações</span>
              </div>
            </div>

            <p className="mt-5 text-center text-xs text-slate-500 dark:text-slate-400">
              Prévia ilustrativa do sistema
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
