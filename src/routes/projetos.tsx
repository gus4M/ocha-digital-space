import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "../components/SectionHeading";

export const Route = createFileRoute("/projetos")({
  head: () => ({
    meta: [
      { title: "Projetos — Gustavo Rocha Machado" },
      {
        name: "description",
        content:
          "Sistemas em produção desenvolvidos por Gustavo Rocha Machado: fintech, e-commerce, logística e mais.",
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
    tag: "Fintech // 2024",
    title: "OmniPay Gateway",
    desc: "Sistema de processamento de pagamentos distribuído capaz de lidar com 14.000 requisições por segundo, com idempotência e auditoria completa.",
    stack: ["Go", "Kafka", "PostgreSQL", "Kubernetes"],
  },
  {
    tag: "E-commerce // 2024",
    title: "Omni-Channel Retail Core",
    desc: "Backbone de e-commerce em microsserviços para integração de estoque, marketplace e PDV em tempo real.",
    stack: ["Node.js", "TypeScript", "Redis", "AWS"],
  },
  {
    tag: "Logística // 2023",
    title: "Vector Logistics AI",
    desc: "Otimização de rotas em tempo real utilizando algoritmos genéticos e telemetria IoT integrada.",
    stack: ["Python", "FastAPI", "MongoDB", "GCP"],
  },
  {
    tag: "SaaS // 2023",
    title: "Pulse Analytics",
    desc: "Plataforma de analytics multi-tenant com dashboards em tempo real e modelo de cobrança por uso.",
    stack: ["Next.js", "PostgreSQL", "ClickHouse", "Stripe"],
  },
];

function ProjectsPage() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="// Projetos Selecionados"
          title="Sistemas em Produção"
          description="Uma seleção curada de sistemas desenvolvidos para resolver problemas reais em escala."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {projects.map((p, idx) => (
            <article
              key={p.title}
              className="dashboard-border group relative overflow-hidden bg-panel/20 p-10 transition-colors hover:bg-brand/5"
            >
              <div className="absolute right-6 top-6 border border-border bg-background/60 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-foreground/60 backdrop-blur">
                {p.tag}
              </div>

              <div className="mb-6 font-mono text-xs text-brand">
                0{idx + 1}
              </div>

              <h4 className="mb-4 text-3xl font-bold tracking-tight transition-colors group-hover:text-brand">
                {p.title}
              </h4>
              <p className="mb-8 max-w-[52ch] text-sm leading-relaxed text-foreground/60">
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

              <div className="flex items-center gap-3 border-t border-border pt-6 font-mono text-[11px] uppercase tracking-widest text-brand">
                <span>Estudo de caso</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
