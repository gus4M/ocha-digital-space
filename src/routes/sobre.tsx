import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "../components/SectionHeading";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre Mim — Gustavo Rocha Machado" },
      {
        name: "description",
        content:
          "Conheça Gustavo Rocha Machado: estudante de Engenharia de Software na La Salle, técnico em Desenvolvimento de Sistemas pelo IFRS e estagiário no CANOASTEC.",
      },
      { property: "og:title", content: "Sobre Mim — Gustavo Rocha Machado" },
      {
        property: "og:description",
        content: "Formação, experiência profissional e trajetória de Gustavo Rocha Machado.",
      },
    ],
  }),
  component: AboutPage,
});

const formacao = [
  {
    period: "2026 – 2029",
    title: "Engenharia de Software (Bacharelado)",
    place: "Universidade La Salle",
    desc: "Graduação em andamento, com foco em engenharia de software, arquitetura de sistemas e desenvolvimento web.",
    status: "Em andamento",
  },
  {
    period: "Concluído em 2025",
    title: "Técnico em Desenvolvimento de Sistemas",
    place: "IFRS — Instituto Federal do Rio Grande do Sul",
    desc: "Formação técnica completa em desenvolvimento de software, banco de dados, lógica de programação e desenvolvimento web.",
    status: "Concluído",
  },
];

const experiencia = [
  {
    role: "Estagiário — Suporte N2",
    company: "CANOASTEC",
    desc: "Atuação em suporte técnico de nível 2, manutenção e suporte de sistemas, atendimento a chamados internos e auxílio em rotinas de TI.",
  },
  {
    role: "Freelancer — Design e Tráfego Pago",
    company: "Projetos próprios",
    desc: "Atendimento a clientes em projetos de design gráfico, identidade visual e gestão de campanhas de tráfego pago em plataformas digitais.",
  },
  {
    role: "Trabalhos temporários — Atendimento ao público",
    company: "Diversos",
    desc: "Experiência em comunicação, trabalho em equipe e resolução de problemas em ambientes dinâmicos de atendimento.",
  },
];

function AboutPage() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="// Perfil"
          title="Sobre Mim"
          description="Estudante apaixonado por tecnologia, em busca da primeira oportunidade na área de desenvolvimento."
        />

        {/* Intro */}
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-2xl font-light leading-relaxed text-foreground/80">
              Olá, sou <span className="font-semibold text-foreground">Gustavo Rocha Machado</span>,
              estudante de Engenharia de Software com{" "}
              <span className="text-brand">paixão por tecnologia</span> e
              vontade de transformar ideias em sistemas que funcionam.
            </p>

            <div className="mt-10 space-y-6 text-foreground/60">
              <p>
                Minha jornada começou na formação técnica em Desenvolvimento de
                Sistemas no IFRS, onde aprendi os fundamentos de programação,
                banco de dados e desenvolvimento web. Hoje, dou continuidade aos
                estudos no Bacharelado em Engenharia de Software pela
                Universidade La Salle.
              </p>
              <p>
                Atualmente atuo como estagiário no CANOASTEC, em suporte N2 e
                manutenção de sistemas, o que me permite vivenciar o cotidiano
                de uma operação de TI e desenvolver hard skills e soft skills
                essenciais para a carreira de desenvolvedor.
              </p>
              <p>
                Também tenho experiência como freelancer em design e tráfego
                pago, além de trabalhos temporários no atendimento ao público,
                que me ajudaram a desenvolver comunicação, organização e foco em
                resultado.
              </p>
            </div>
          </div>

          {/* Formação */}
          <div className="lg:col-span-5">
            <div className="dashboard-border bg-panel/30 p-8">
              <h3 className="mb-8 font-mono text-xs uppercase tracking-widest text-brand">
                Formação
              </h3>
              <ol className="relative space-y-8 border-l border-border pl-6">
                {formacao.map((item) => (
                  <li key={item.title} className="relative">
                    <span className="absolute -left-[31px] top-1 flex size-3 items-center justify-center rounded-full border border-brand bg-background">
                      <span className="size-1 rounded-full bg-brand" />
                    </span>
                    <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-brand">
                      <span>{item.period}</span>
                      <span className="text-foreground/30">•</span>
                      <span className="text-foreground/40">{item.status}</span>
                    </div>
                    <div className="mt-1 text-base font-semibold">{item.title}</div>
                    <div className="text-sm text-foreground/40">{item.place}</div>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/60">
                      {item.desc}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        {/* Experiência */}
        <div className="mt-24">
          <h3 className="mb-10 font-mono text-xs uppercase tracking-widest text-brand-deep">
            // Experiência Profissional
          </h3>
          <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-3">
            {experiencia.map((e) => (
              <div
                key={e.role}
                className="group bg-background p-8 transition-colors hover:bg-brand/5"
              >
                <div className="mb-4 flex size-10 items-center justify-center rounded border border-brand/20 bg-brand/10 transition-transform group-hover:scale-110">
                  <div className="size-2 rounded-full bg-brand" />
                </div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-brand">
                  {e.company}
                </div>
                <h4 className="mt-2 text-lg font-bold">{e.role}</h4>
                <p className="mt-3 text-sm leading-relaxed text-foreground/60">
                  {e.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
