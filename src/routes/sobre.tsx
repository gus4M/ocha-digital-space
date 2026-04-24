import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "../components/SectionHeading";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre Mim — Gustavo Rocha Machado" },
      {
        name: "description",
        content:
          "Conheça a trajetória de Gustavo Rocha Machado: formação, missão e abordagem como desenvolvedor de sistemas.",
      },
      { property: "og:title", content: "Sobre Mim — Gustavo Rocha Machado" },
      {
        property: "og:description",
        content: "Trajetória profissional e formação acadêmica de Gustavo Rocha Machado.",
      },
    ],
  }),
  component: AboutPage,
});

const timeline = [
  {
    year: "2024",
    title: "Engenheiro de Software Pleno",
    company: "Empresa de Tecnologia",
    desc: "Liderança técnica em microsserviços e arquitetura distribuída para sistemas de pagamento.",
  },
  {
    year: "2022",
    title: "Desenvolvedor Full Stack",
    company: "Startup SaaS",
    desc: "Construção de plataformas web escaláveis com Node.js, React e infraestrutura na AWS.",
  },
  {
    year: "2020",
    title: "Bacharelado em Ciência da Computação",
    company: "Universidade",
    desc: "Formação acadêmica com ênfase em algoritmos, sistemas distribuídos e engenharia de software.",
  },
];

function AboutPage() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="// Perfil"
          title="Sobre mim"
          description="Combinando rigor técnico com visão de produto para entregar sistemas que realmente fazem diferença."
        />

        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-2xl font-light leading-relaxed text-foreground/80">
              Sou <span className="font-semibold text-foreground">Gustavo Rocha Machado</span>,
              desenvolvedor de sistemas com paixão por construir{" "}
              <span className="text-brand">infraestruturas robustas</span> e
              experiências digitais performáticas.
            </p>

            <div className="mt-10 space-y-6 text-foreground/60">
              <p>
                Minha trajetória começou na curiosidade por entender como as coisas
                funcionam por baixo dos panos. Hoje, transformo essa curiosidade em
                arquiteturas escaláveis, seguras e bem documentadas, sempre com foco
                no impacto que cada linha de código pode gerar para o negócio.
              </p>
              <p>
                Trabalho com times multidisciplinares para traduzir requisitos
                complexos em soluções claras, prezando por código limpo, testes
                automatizados e processos de entrega contínua que garantem
                disponibilidade e velocidade.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="dashboard-border bg-panel/30 p-8">
              <h3 className="mb-8 font-mono text-xs uppercase tracking-widest text-brand">
                Trajetória
              </h3>
              <ol className="relative space-y-8 border-l border-border pl-6">
                {timeline.map((item) => (
                  <li key={item.year} className="relative">
                    <span className="absolute -left-[31px] top-1 flex size-3 items-center justify-center rounded-full border border-brand bg-background">
                      <span className="size-1 rounded-full bg-brand" />
                    </span>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-brand">
                      {item.year}
                    </div>
                    <div className="mt-1 text-base font-semibold">{item.title}</div>
                    <div className="text-sm text-foreground/40">{item.company}</div>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/60">
                      {item.desc}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
