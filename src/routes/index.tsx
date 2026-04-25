import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Globe,
  Rocket,
  Code2,
  Wrench,
  GraduationCap,
  Briefcase,
  Target,
  Cpu,
  Wallet,
} from "lucide-react";
import heroBg from "../assets/hero-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gustavo Rocha Machado — Desenvolvimento Web Profissional" },
      {
        name: "description",
        content:
          "Criação de sites, landing pages e sistemas web personalizados. Transforme sua ideia em um site de sucesso com desenvolvimento profissional.",
      },
      { property: "og:title", content: "Gustavo Rocha Machado — Desenvolvimento Web" },
      {
        property: "og:description",
        content:
          "Desenvolvimento web profissional e personalizado para impulsionar seu negócio no ambiente digital.",
      },
    ],
  }),
  component: HomePage,
});

const services = [
  {
    icon: Globe,
    title: "Criação de Sites",
    description:
      "Sites modernos, responsivos e otimizados para conversão, com foco em experiência do usuário.",
  },
  {
    icon: Rocket,
    title: "Landing Pages",
    description:
      "Páginas de alta performance para suas campanhas de marketing, focadas em capturar leads.",
  },
  {
    icon: Code2,
    title: "Sistemas Web",
    description:
      "Soluções sob medida para automatizar processos e escalar seu negócio com tecnologia exclusiva.",
  },
  {
    icon: Wrench,
    title: "Manutenção & Suporte",
    description:
      "Performance e segurança garantidas com manutenção contínua e suporte técnico especializado.",
  },
];

const stats = [
  { value: "100%", label: "Responsivo" },
  { value: "SEO", label: "Otimizado" },
  { value: "24h", label: "Resposta rápida" },
  { value: "∞", label: "Possibilidades" },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden px-6">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
          style={{ backgroundImage: `url(${heroBg})` }}
          aria-hidden
        />
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-30" aria-hidden />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,oklch(0.62_0.21_255/0.18)_0%,transparent_60%)]"
          aria-hidden
        />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-12">
          <div className="z-10 lg:col-span-9">
            <div className="mb-8 inline-flex animate-[fade-in_0.6s_ease-out_both] items-center gap-2 rounded-full border border-brand/20 bg-brand/10 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-brand">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
              </span>
              Disponível para novos projetos
            </div>

            <h1 className="mb-8 animate-[fade-up_0.7s_ease-out_both] text-5xl font-bold leading-[0.95] tracking-tighter md:text-7xl lg:text-[5.5rem]">
              Transforme sua ideia em um
              <br />
              <span className="text-brand glow-text">site de sucesso</span>
            </h1>

            <p className="mb-10 max-w-[60ch] animate-[fade-up_0.9s_ease-out_both] text-lg leading-relaxed text-foreground/70 md:text-xl">
              Desenvolvimento web profissional e personalizado para impulsionar seu
              negócio no ambiente digital.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contato"
                className="group inline-flex items-center gap-2 bg-brand px-8 py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground shadow-glow transition-all hover:bg-brand-deep"
              >
                Solicitar Orçamento Grátis
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/servicos"
                className="border border-border bg-background/40 px-8 py-4 text-sm font-bold uppercase tracking-widest backdrop-blur transition-colors hover:bg-foreground/5"
              >
                Conheça os Serviços
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

      {/* SERVICES SECTION */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <span className="font-mono text-[12px] font-bold uppercase tracking-[0.3em] text-brand">
              // Nossos Serviços
            </span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Soluções digitais completas
              <br />
              para o <span className="text-brand-deep">seu negócio</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <article
                key={s.title}
                className="dashboard-border group bg-panel/40 p-8 transition-all duration-300 hover:bg-brand/5"
              >
                <div className="mb-6 inline-flex size-14 items-center justify-center rounded border border-brand/30 bg-brand/10 text-brand transition-transform group-hover:scale-110">
                  <s.icon className="size-6" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-brand-deep">{s.title}</h3>
                <p className="mb-6 text-base leading-relaxed text-foreground/70">
                  {s.description}
                </p>
                <Link
                  to="/servicos"
                  className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-brand transition-colors hover:text-brand-deep"
                >
                  Saiba Mais <ArrowRight className="size-3.5" />
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/servicos"
              className="inline-flex items-center gap-2 border border-brand px-6 py-3 font-mono text-xs font-bold uppercase tracking-widest text-brand transition-all hover:bg-brand hover:text-primary-foreground"
            >
              Ver todos os serviços <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY ME */}
      <section className="border-y border-border bg-panel/20 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <span className="font-mono text-[12px] font-bold uppercase tracking-[0.3em] text-brand">
              // Diferenciais
            </span>
            <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">
              Por que escolher{" "}
              <span className="text-brand glow-text">Gustavo Rocha Machado?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-foreground/60">
              Formação sólida, experiência prática e foco em resultados para entregar
              soluções web que realmente impulsionam o seu negócio.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: GraduationCap,
                title: "Formação Sólida",
                desc: "Estudante de Engenharia de Software e Técnico em Desenvolvimento de Sistemas pelo IFRS, garantindo uma base robusta e conhecimento atualizado.",
              },
              {
                icon: Briefcase,
                title: "Experiência Prática",
                desc: "Atuação estratégica no time de desenvolvimento de softwares da Prefeitura de Canoas, no Canoastec. Lá, aprimorei minhas habilidades em resolução de desafios complexos e na criação de soluções digitais que impactam diretamente a vida dos cidadãos.",
              },
              {
                icon: Target,
                title: "Foco em Resultados",
                desc: "Meu compromisso vai além do código. Eu me dedico a entender a sua visão e transformá-la em uma realidade digital que não só impulsiona seu negócio, mas também encanta seus clientes. Cada projeto é uma parceria, onde sua satisfação e o sucesso do seu empreendimento são a minha maior motivação.",
              },
              {
                icon: Cpu,
                title: "Tecnologias Modernas",
                desc: "Domínio de tecnologias de ponta como React, Next.js, TypeScript, Node.js, GraphQL, AWS, Docker, PostgreSQL e Tailwind CSS. Ferramentas que garantem a construção de soluções digitais robustas, escaláveis e com performance excepcional para o seu negócio.",
              },
              {
                icon: Wallet,
                title: "Investimento Acessível",
                desc: "Soluções de alta qualidade com excelente custo-benefício e condições de pagamento flexíveis, viabilizando o seu projeto digital.",
              },
              {
                icon: Rocket,
                title: "Entrega no Prazo",
                desc: "Atendimento próximo e personalizado em cada etapa do projeto, com cronograma claro e entrega dentro do combinado, sem surpresas.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="dashboard-border group bg-background/40 p-7 transition-all duration-300 hover:bg-brand/5"
              >
                <div className="mb-5 inline-flex size-12 items-center justify-center rounded border border-brand/30 bg-brand/10 text-brand transition-transform group-hover:scale-110">
                  <item.icon className="size-5" />
                </div>
                <h3 className="mb-3 text-lg font-bold text-brand-deep">{item.title}</h3>
                <p className="text-sm leading-relaxed text-foreground/65">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Vamos tirar o seu projeto
            <br />
            <span className="text-brand glow-text">do papel?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-foreground/60">
            Conte-me a sua ideia e receba um orçamento personalizado, gratuito e sem
            compromisso. Resposta em até 24 horas.
          </p>
          <Link
            to="/contato"
            className="mt-8 inline-flex items-center gap-2 bg-brand px-8 py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground shadow-glow transition-colors hover:bg-brand-deep"
          >
            Solicitar Orçamento Grátis
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
