import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "../components/SectionHeading";

export const Route = createFileRoute("/habilidades")({
  head: () => ({
    meta: [
      { title: "Habilidades — Gustavo Rocha Machado" },
      {
        name: "description",
        content:
          "Stack técnica completa de Gustavo Rocha Machado: backend, cloud, frontend e arquitetura de software.",
      },
      { property: "og:title", content: "Habilidades — Gustavo Rocha Machado" },
      {
        property: "og:description",
        content: "Stack técnica e domínios de atuação como desenvolvedor de sistemas.",
      },
    ],
  }),
  component: SkillsPage,
});

const groups = [
  {
    code: "01",
    title: "Backend & APIs",
    desc: "Construção de APIs resilientes e microsserviços de alto throughput.",
    items: ["Node.js", "TypeScript", "Python", "Go", "REST", "GraphQL"],
  },
  {
    code: "02",
    title: "Cloud & DevOps",
    desc: "Infraestrutura como código e pipelines CI/CD em provedores cloud.",
    items: ["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
  },
  {
    code: "03",
    title: "Bancos de Dados",
    desc: "Modelagem relacional, NoSQL e otimização de consultas em escala.",
    items: ["PostgreSQL", "Redis", "MongoDB", "DynamoDB"],
  },
  {
    code: "04",
    title: "Frontend Engineering",
    desc: "Interfaces performáticas com foco em Core Web Vitals.",
    items: ["React", "Next.js", "TanStack", "Tailwind CSS"],
  },
  {
    code: "05",
    title: "Arquitetura",
    desc: "Microsserviços, event-driven, DDD e clean architecture.",
    items: ["Microservices", "Event-Driven", "DDD", "Clean Arch"],
  },
  {
    code: "06",
    title: "Qualidade & Segurança",
    desc: "Testes automatizados, observabilidade e práticas seguras.",
    items: ["Jest", "Vitest", "OAuth2", "OWASP", "Datadog"],
  },
];

function SkillsPage() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="// System Capabilities"
          title="Arsenal Tecnológico"
          description="Ferramentas selecionadas pela escalabilidade, segurança e performance bruta em ambientes corporativos."
        />

        <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => (
            <div
              key={g.code}
              className="group bg-background p-10 transition-colors hover:bg-brand/5"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-brand">
                  {g.code} //
                </span>
                <div className="size-2 rounded-full bg-brand opacity-50 transition-opacity group-hover:opacity-100" />
              </div>
              <h4 className="mb-3 text-xl font-bold">{g.title}</h4>
              <p className="mb-6 text-sm leading-relaxed text-foreground/50">{g.desc}</p>
              <div className="flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <span
                    key={i}
                    className="border border-border px-2 py-1 font-mono text-[11px] text-foreground/70"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
