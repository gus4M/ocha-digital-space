import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "../components/SectionHeading";

export const Route = createFileRoute("/habilidades")({
  head: () => ({
    meta: [
      { title: "Habilidades — Gustavo Rocha Machado" },
      {
        name: "description",
        content:
          "Habilidades técnicas de Gustavo Rocha Machado: JavaScript, PHP, HTML, CSS, MySQL, APIs REST, Git e GitHub.",
      },
      { property: "og:title", content: "Habilidades — Gustavo Rocha Machado" },
      {
        property: "og:description",
        content: "Linguagens, front-end, back-end e ferramentas de Gustavo Rocha Machado.",
      },
    ],
  }),
  component: SkillsPage,
});

const groups = [
  {
    code: "01",
    title: "Linguagens",
    desc: "Linguagens de programação que utilizo para construir lógica e funcionalidades.",
    items: [
      { name: "JavaScript", level: 75 },
      { name: "PHP", level: 80 },
    ],
  },
  {
    code: "02",
    title: "Front-end",
    desc: "Tecnologias para construção de interfaces web acessíveis e responsivas.",
    items: [
      { name: "HTML", level: 92 },
      { name: "CSS", level: 88 },
    ],
  },
  {
    code: "03",
    title: "Back-end",
    desc: "Construção de APIs, integração com banco de dados e regras de negócio.",
    items: [
      { name: "PHP", level: 80 },
      { name: "MySQL", level: 78 },
      { name: "APIs REST", level: 72 },
    ],
  },
  {
    code: "04",
    title: "Ferramentas",
    desc: "Versionamento de código e colaboração em projetos.",
    items: [
      { name: "Git", level: 80 },
      { name: "GitHub", level: 80 },
    ],
  },
];

function SkillsPage() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="// Stack Técnica"
          title="Habilidades"
          description="Tecnologias que aprendi durante a formação técnica e que continuo aprofundando na graduação."
        />

        <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-2">
          {groups.map((g) => (
            <div
              key={g.code}
              className="glass-panel smooth-hover reveal-up group flex flex-col p-10 hover:-translate-y-1 hover:border-brand/40 hover:bg-brand/5"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-brand">
                  {g.code} //
                </span>
                <div className="size-2 rounded-full bg-brand opacity-50 transition-opacity group-hover:opacity-100" />
              </div>
              <h4 className="mb-3 text-2xl font-bold">{g.title}</h4>
              <p className="mb-8 text-sm leading-relaxed text-foreground/50">{g.desc}</p>

              <div className="mt-auto space-y-4">
                {g.items.map((item) => (
                  <div key={item.name} className="space-y-2">
                    <div className="flex justify-between font-mono text-xs uppercase">
                      <span>{item.name}</span>
                      <span className="text-brand">{item.level}%</span>
                    </div>
                    <div className="h-1 bg-foreground/5">
                      <div
                        className="h-full origin-left animate-[bar_1.4s_cubic-bezier(0.22,1,0.36,1)_both] bg-brand shadow-[0_0_8px_oklch(0.62_0.21_255/0.5)]"
                        style={{ width: `${item.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft note */}
        <div className="glass-panel reveal-up mt-12 p-8 text-sm text-foreground/60">
          <span className="font-mono text-[10px] uppercase tracking-widest text-brand">
            // Em estudo
          </span>
          <p className="mt-3">
            Atualmente aprofundando conhecimentos em frameworks JavaScript modernos,
            boas práticas de arquitetura de software e desenvolvimento de APIs RESTful
            mais robustas.
          </p>
        </div>
      </div>
    </section>
  );
}
