import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "../components/SectionHeading";

export const Route = createFileRoute("/projetos")({
  head: () => ({
    meta: [
      { title: "Projetos — Gustavo Rocha Machado" },
      {
        name: "description",
        content:
          "Projetos acadêmicos e pessoais desenvolvidos por Gustavo Rocha Machado, com foco em desenvolvimento web full-stack.",
      },
      { property: "og:title", content: "Projetos — Gustavo Rocha Machado" },
      {
        property: "og:description",
        content: "Portfólio de projetos de desenvolvimento de sistemas.",
      },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  {
    tag: "Acadêmico // 2025",
    title: "Sistema Web para Gestão de Pacientes e Agendamentos",
    desc: "Sistema web completo desenvolvido como projeto principal do curso técnico, voltado para o gerenciamento de pacientes, prontuários e agendamentos de consultas em clínicas. Inclui autenticação, CRUD completo e relatórios.",
    stack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    href: null,
    featured: true,
  },
];

function ProjectsPage() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="// Projetos Selecionados"
          title="Projetos em Destaque"
          description="Projetos acadêmicos e pessoais que demonstram minha jornada como desenvolvedor."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {projects.map((p, idx) => (
            <article
              key={p.title}
              className={`dashboard-border group relative overflow-hidden bg-panel/20 p-10 transition-colors hover:bg-brand/5 ${
                p.featured ? "lg:col-span-2" : ""
              }`}
            >
              <div className="absolute right-6 top-6 border border-border bg-background/60 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-foreground/60 backdrop-blur">
                {p.tag}
              </div>

              <div className="mb-6 font-mono text-xs text-brand">
                0{idx + 1}
              </div>

              <h4 className="mb-4 max-w-[28ch] text-3xl font-bold tracking-tight transition-colors group-hover:text-brand md:text-4xl">
                {p.title}
              </h4>
              <p className="mb-8 max-w-[60ch] text-sm leading-relaxed text-foreground/60">
                {p.desc}
              </p>

              <div className="mb-8 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="border border-border px-2 py-1 font-mono text-[11px] text-foreground/70"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {p.href ? (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 bg-brand px-6 py-3 font-mono text-[11px] font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-brand-deep"
                >
                  <span>Ver projeto</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              ) : (
                <div className="flex items-center gap-3 border-t border-border pt-6 font-mono text-[11px] uppercase tracking-widest text-foreground/40">
                  <span className="size-2 rounded-full bg-brand/60" />
                  <span>Repositório privado · Projeto acadêmico</span>
                </div>
              )}
            </article>
          ))}
        </div>

        <div className="dashboard-border mt-12 bg-panel/10 p-10 text-center">
          <div className="font-mono text-[10px] uppercase tracking-widest text-brand">
            // Em construção
          </div>
          <h4 className="mt-3 text-2xl font-bold">Mais projetos em breve</h4>
          <p className="mx-auto mt-3 max-w-md text-sm text-foreground/50">
            Estou desenvolvendo novos projetos pessoais e de estudo. Em breve mais sistemas estarão disponíveis aqui.
          </p>
        </div>
      </div>
    </section>
  );
}
