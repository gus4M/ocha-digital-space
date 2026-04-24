import { createFileRoute, Link } from "@tanstack/react-router";
import heroBg from "../assets/hero-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gustavo Rocha Machado — Desenvolvedor de Sistemas" },
      {
        name: "description",
        content:
          "Estudante de Engenharia de Software com formação técnica em Desenvolvimento de Sistemas. Buscando estágio ou vaga júnior em desenvolvimento de software.",
      },
      { property: "og:title", content: "Gustavo Rocha Machado — Desenvolvedor de Sistemas" },
      {
        property: "og:description",
        content:
          "Portfólio de Gustavo Rocha Machado: desenvolvedor de sistemas em formação, com habilidades em PHP, JavaScript, MySQL e APIs REST.",
      },
    ],
  }),
  component: HomePage,
});

const skills = [
  { label: "PHP / Backend", value: 80 },
  { label: "JavaScript", value: 75 },
  { label: "HTML / CSS", value: 90 },
  { label: "MySQL / Banco de Dados", value: 78 },
];

const stats = [
  { value: "2025", label: "Técnico em DS — IFRS" },
  { value: "2026+", label: "Eng. Software — La Salle" },
  { value: "N2", label: "Suporte CANOASTEC" },
  { value: "Jr.", label: "Buscando oportunidade" },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[90vh] items-center overflow-hidden px-6">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{ backgroundImage: `url(${heroBg})` }}
          aria-hidden
        />
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-30" aria-hidden />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,oklch(0.62_0.21_255/0.18)_0%,transparent_60%)]"
          aria-hidden
        />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-12">
          <div className="z-10 lg:col-span-8">
            <div className="mb-8 inline-flex animate-[fade-in_0.6s_ease-out_both] items-center gap-2 rounded-full border border-brand/20 bg-brand/10 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-brand">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
              </span>
              Em busca de estágio / vaga júnior
            </div>

            <h1 className="mb-8 animate-[fade-up_0.7s_ease-out_both] text-5xl font-bold leading-[0.95] tracking-tighter md:text-7xl lg:text-8xl">
              Gustavo Rocha Machado
              <br />
              <span className="text-brand glow-text">Desenvolvedor de Sistemas</span>
            </h1>

            <p className="mb-10 max-w-[60ch] animate-[fade-up_0.9s_ease-out_both] text-lg leading-relaxed text-foreground/70">
              Estudante de <span className="text-foreground">Engenharia de Software</span>,
              com formação técnica em Desenvolvimento de Sistemas, buscando
              oportunidade de estágio ou vaga júnior na área de desenvolvimento
              de software.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contato"
                className="bg-brand px-8 py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground shadow-glow transition-colors hover:bg-brand-deep"
              >
                Entrar em Contato
              </Link>
              <Link
                to="/projetos"
                className="border border-border bg-background/40 px-8 py-4 text-sm font-bold uppercase tracking-widest backdrop-blur transition-colors hover:bg-foreground/5"
              >
                Ver Projetos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK STATS */}
      <section className="border-y border-border bg-panel/20 px-6 py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <div className="text-3xl font-bold tracking-tight text-brand md:text-4xl">
                {s.value}
              </div>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-foreground/50">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS PREVIEW PANEL */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="mb-4 font-mono text-[12px] font-bold uppercase tracking-[0.3em] text-brand-deep">
              // Visão Geral
            </h2>
            <h3 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
              Pronto para somar em times de tecnologia.
            </h3>
            <p className="text-foreground/60">
              Combinando formação técnica sólida com a graduação em Engenharia de
              Software, busco aplicar e expandir meus conhecimentos em projetos
              reais de desenvolvimento web.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="dashboard-border relative overflow-hidden rounded-sm bg-panel/40 p-8 shadow-panel backdrop-blur-sm">
              <div className="mb-8 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/40">
                  Stack Principal
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-brand">
                  Em evolução constante
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
            </div>
          </div>
        </div>
      </section>

      {/* SHORTCUT TO SECTIONS */}
      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-7xl gap-1 md:grid-cols-3">
          {[
            { to: "/sobre", title: "Sobre Mim", desc: "Trajetória, formação acadêmica e experiência profissional." },
            { to: "/habilidades", title: "Habilidades", desc: "Linguagens, front-end, back-end e ferramentas." },
            { to: "/projetos", title: "Projetos", desc: "Trabalhos desenvolvidos durante a formação técnica." },
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
