import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gustavo Rocha Machado — Desenvolvedor de Sistemas" },
      {
        name: "description",
        content:
          "Desenvolvedor de sistemas focado em arquiteturas resilientes, microsserviços e interfaces de alta performance.",
      },
      { property: "og:title", content: "Gustavo Rocha Machado — Desenvolvedor de Sistemas" },
      {
        property: "og:description",
        content:
          "Portfólio com projetos, habilidades técnicas e formação de Gustavo Rocha Machado.",
      },
    ],
  }),
  component: HomePage,
});

const skills = [
  {
    label: "Backend",
    value: 94,
  },
  {
    label: "System Design",
    value: 89,
  },
  {
    label: "API Security",
    value: 91,
  },
  {
    label: "Cloud / DevOps",
    value: 87,
  },
];

const stats = [
  { value: "1.2k+", label: "Commits / ano" },
  { value: "08", label: "Sistemas em produção" },
  { value: "5+", label: "Anos de experiência" },
  { value: "24ms", label: "Latência média" },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden px-6">
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,oklch(0.62_0.21_255/0.12)_0%,transparent_60%)]" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-12">
          <div className="z-10 lg:col-span-7">
            <div className="mb-8 inline-flex animate-[fade-in_0.6s_ease-out_both] items-center gap-2 rounded-full border border-brand/20 bg-brand/10 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-brand">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
              </span>
              Disponível para novos projetos
            </div>

            <h1 className="mb-8 animate-[fade-up_0.7s_ease-out_both] text-6xl font-bold leading-[0.9] tracking-tighter md:text-8xl">
              SISTEMAS DE
              <br />
              <span className="text-brand glow-text">ALTA PERFORMANCE</span>
            </h1>

            <p className="mb-10 max-w-[55ch] animate-[fade-up_0.9s_ease-out_both] text-lg leading-relaxed text-foreground/60">
              Olá, sou <span className="text-foreground">Gustavo Rocha Machado</span>.
              Desenvolvedor de sistemas focado em arquiteturas resilientes e
              interfaces de comando intuitivas, transformando complexidade técnica
              em vantagem competitiva.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/projetos"
                className="bg-brand px-8 py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-brand-deep"
              >
                Ver Projetos
              </Link>
              <Link
                to="/contato"
                className="border border-border px-8 py-4 text-sm font-bold uppercase tracking-widest transition-colors hover:bg-foreground/5"
              >
                Entrar em Contato
              </Link>
            </div>
          </div>

          {/* Telemetry panel */}
          <div className="lg:col-span-5">
            <div className="dashboard-border relative overflow-hidden rounded-sm bg-panel/40 p-8 shadow-panel backdrop-blur-sm">
              <div className="mb-10 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/40">
                  Status: Active
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-brand">
                  Latency: 24ms
                </span>
              </div>

              <div className="space-y-5">
                {skills.map((s) => (
                  <div key={s.label} className="space-y-2">
                    <div className="flex justify-between font-mono text-xs uppercase">
                      <span>{s.label}</span>
                      <span className="text-brand">{s.value}%</span>
                    </div>
                    <div className="h-1 bg-foreground/5">
                      <div
                        className="h-full origin-left animate-[bar_1.4s_cubic-bezier(0.22,1,0.36,1)_both] bg-brand shadow-[0_0_8px_oklch(0.62_0.21_255/0.6)]"
                        style={{ width: `${s.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4 border-t border-border pt-8">
                {stats.slice(0, 2).map((s) => (
                  <div key={s.label}>
                    <div className="text-3xl font-bold tabular-nums">{s.value}</div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/40">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK STATS */}
      <section className="border-y border-border bg-panel/20 px-6 py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <div className="text-4xl font-bold tracking-tight text-brand">{s.value}</div>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-foreground/50">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SHORTCUT TO SECTIONS */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-1 md:grid-cols-3">
          {[
            { to: "/sobre", title: "Sobre Mim", desc: "Trajetória, formação e missão como desenvolvedor de sistemas." },
            { to: "/habilidades", title: "Habilidades", desc: "Stack técnica e domínios de atuação em cloud e backend." },
            { to: "/projetos", title: "Projetos", desc: "Sistemas em produção: e-commerce, fintech e logística." },
          ].map((card) => (
            <Link
              key={card.to}
              to={card.to}
              className="dashboard-border group bg-panel/20 p-10 transition-colors hover:bg-brand/5"
            >
              <div className="mb-6 flex size-12 items-center justify-center rounded border border-brand/20 bg-brand/10 transition-transform group-hover:scale-110">
                <div className="size-2 rounded-full bg-brand" />
              </div>
              <h4 className="mb-3 text-2xl font-bold">{card.title}</h4>
              <p className="mb-6 text-sm leading-relaxed text-foreground/50">{card.desc}</p>
              <span className="font-mono text-[10px] uppercase tracking-widest text-brand/60 transition-colors group-hover:text-brand">
                Acessar →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
