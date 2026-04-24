import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Database, Calendar, Users, ShieldCheck, Code2 } from "lucide-react";

export const Route = createFileRoute("/projetos")({
  head: () => ({
    meta: [
      { title: "Portfólio — Projetos | Gustavo Rocha Machado" },
      {
        name: "description",
        content:
          "Conheça alguns dos meus trabalhos e veja o que posso criar para o seu negócio. Sistemas web, sites e landing pages desenvolvidos com tecnologias modernas.",
      },
      { property: "og:title", content: "Portfólio — Gustavo Rocha Machado" },
      {
        property: "og:description",
        content:
          "Cases de desenvolvimento web: sistemas, sites e landing pages criados com PHP, MySQL, JavaScript e mais.",
      },
    ],
  }),
  component: ProjectsPage,
});

const featuredProject = {
  tag: "Case // 2025",
  title: "Sistema Web para Gestão de Pacientes e Agendamentos",
  desc: "Desenvolvimento de um sistema web completo para gerenciamento de pacientes e agendamentos, demonstrando proficiência em PHP, MySQL, HTML, CSS e JavaScript. O sistema cobre todo o fluxo de uma clínica: cadastro de pacientes, prontuários, agenda de consultas, autenticação segura e relatórios.",
  stack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
  features: [
    { icon: Users, label: "Cadastro e gestão de pacientes" },
    { icon: Calendar, label: "Agendamento de consultas" },
    { icon: ShieldCheck, label: "Autenticação e níveis de acesso" },
    { icon: Database, label: "Relatórios e prontuários" },
  ],
};

function ProjectsPage() {
  return (
    <div className="pt-32">
      {/* HEADER */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-7xl text-center">
          <span className="font-mono text-[12px] font-bold uppercase tracking-[0.3em] text-brand">
            // Portfólio
          </span>
          <h1 className="mx-auto mt-4 max-w-4xl text-5xl font-bold tracking-tight md:text-6xl">
            Meus <span className="text-brand glow-text">Projetos</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/60">
            Conheça alguns dos meus trabalhos e veja o que posso criar para você.
          </p>
        </div>
      </section>

      {/* FEATURED CASE */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <article className="dashboard-border group relative overflow-hidden bg-panel/40">
            <div className="grid gap-0 lg:grid-cols-12">
              {/* Visual mockup */}
              <div className="relative overflow-hidden border-b border-border bg-gradient-to-br from-brand/15 via-panel/60 to-brand-deep/20 p-10 lg:col-span-5 lg:border-b-0 lg:border-r">
                <div className="grid-bg absolute inset-0 opacity-30" aria-hidden />
                <div className="relative">
                  <div className="mb-4 flex gap-1.5">
                    <span className="size-2.5 rounded-full bg-foreground/20" />
                    <span className="size-2.5 rounded-full bg-foreground/20" />
                    <span className="size-2.5 rounded-full bg-brand/60" />
                  </div>
                  <div className="rounded border border-border bg-background/80 p-5 font-mono text-[11px] backdrop-blur">
                    <div className="text-brand">// dashboard.php</div>
                    <div className="mt-3 space-y-2 text-foreground/70">
                      <div className="flex justify-between">
                        <span>Pacientes</span>
                        <span className="text-brand">128</span>
                      </div>
                      <div className="h-1 bg-foreground/10">
                        <div className="h-full w-4/5 bg-brand" />
                      </div>
                      <div className="flex justify-between pt-2">
                        <span>Consultas hoje</span>
                        <span className="text-brand">14</span>
                      </div>
                      <div className="h-1 bg-foreground/10">
                        <div className="h-full w-2/3 bg-brand" />
                      </div>
                      <div className="flex justify-between pt-2">
                        <span>Agendadas</span>
                        <span className="text-brand">37</span>
                      </div>
                      <div className="h-1 bg-foreground/10">
                        <div className="h-full w-1/2 bg-brand" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 inline-flex items-center gap-2 border border-brand/30 bg-brand/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-brand">
                    <Code2 className="size-3" /> Mockup do sistema
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:col-span-7 lg:p-10">
                <div className="mb-4 inline-flex border border-border bg-background/60 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-foreground/60">
                  {featuredProject.tag}
                </div>

                <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                  {featuredProject.title}
                </h2>
                <p className="mb-8 text-foreground/65">{featuredProject.desc}</p>

                <ul className="mb-8 grid gap-3 sm:grid-cols-2">
                  {featuredProject.features.map((f) => (
                    <li key={f.label} className="flex items-center gap-3 text-sm text-foreground/70">
                      <span className="inline-flex size-8 items-center justify-center rounded border border-brand/30 bg-brand/10 text-brand">
                        <f.icon className="size-4" />
                      </span>
                      {f.label}
                    </li>
                  ))}
                </ul>

                <div className="mb-8">
                  <div className="mb-3 font-mono text-[10px] uppercase tracking-widest text-foreground/40">
                    Tecnologias utilizadas
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {featuredProject.stack.map((s) => (
                      <span
                        key={s}
                        className="border border-border bg-background/40 px-3 py-1.5 font-mono text-[11px] text-foreground/80"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 border-t border-border pt-6 font-mono text-[11px] uppercase tracking-widest text-foreground/50">
                  <span className="size-2 rounded-full bg-brand/60" />
                  <span>Repositório privado · Projeto acadêmico</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* COMING SOON */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="dashboard-border bg-panel/20 p-10 text-center">
            <div className="font-mono text-[10px] uppercase tracking-widest text-brand">
              // Em construção
            </div>
            <h3 className="mt-3 text-2xl font-bold">Mais cases em breve</h3>
            <p className="mx-auto mt-3 max-w-md text-sm text-foreground/55">
              Novos projetos pessoais e de clientes serão publicados aqui em breve. Quer
              ser um dos próximos cases?
            </p>
            <Link
              to="/contato"
              className="mt-6 inline-flex items-center gap-2 bg-brand px-6 py-3 font-mono text-xs font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-brand-deep"
            >
              Iniciar meu projeto <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-panel/20 px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Veja o que posso criar para <span className="text-brand">você</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-foreground/60">
            Conte-me sua ideia e receba um orçamento personalizado, gratuito e sem
            compromisso.
          </p>
          <Link
            to="/contato"
            className="mt-8 inline-flex items-center gap-2 bg-brand px-8 py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground shadow-glow transition-colors hover:bg-brand-deep"
          >
            Solicitar Orçamento Grátis <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
