
import { ShieldCheck, LockKeyhole, Wallet, CheckCircle2 } from "lucide-react";

export default function Security() {
  return (
    <section className="px-6 pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 overflow-hidden rounded-3xl bg-brand-700 p-8 text-white dark:bg-emerald-950 sm:p-12 lg:grid-cols-2 lg:p-16">

          <div>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-white/30 bg-white/15">
              <ShieldCheck size={30} />
            </div>

            <span className="mt-7 block text-sm font-bold uppercase tracking-widest text-brand-100">
              Segurança e controle
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
              Tecnologia com atenção também aos custos.
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-brand-50">
              O Vai De Zap conta com uma proteção específica para controlar o acesso à API de mapas e reduzir o risco de cobranças acidentais.
            </p>
          </div>

          <div className="rounded-2xl border-2 border-white/30 bg-white/10 p-7 backdrop-blur-sm dark:border-emerald-300/30 dark:bg-slate-950/35">
            <div className="flex items-center gap-4 border-b-2 border-white/20 pb-6">
              <LockKeyhole size={28} className="text-brand-100" />
              <div>
                <h3 className="font-bold">Proteção de API</h3>
                <p className="mt-1 text-sm text-brand-100">Controle de acesso aos serviços externos</p>
              </div>
            </div>

            <div className="mt-6 space-y-5">
              <div className="flex items-start gap-3">
                <CheckCircle2 size={21} className="mt-0.5 shrink-0 text-emerald-200" />
                <p className="text-sm leading-relaxed text-white">Controle da disponibilização da chave de API.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={21} className="mt-0.5 shrink-0 text-emerald-200" />
                <p className="text-sm leading-relaxed text-white">Proteção contra utilização acidental dos serviços de mapas.</p>
              </div>
              <div className="flex items-start gap-3">
                <Wallet size={21} className="mt-0.5 shrink-0 text-emerald-200" />
                <p className="text-sm leading-relaxed text-white">Mais atenção ao controle de custos da integração.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
