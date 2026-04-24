import { createFileRoute, Link } from "@tanstack/react-router";
import { Globe, Rocket, Code2, Wrench, ArrowRight, CheckCircle2 } from "lucide-react";
import servicesBgVideo from "@/assets/services-bg.mp4";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — Desenvolvimento Web | Gustavo Rocha Machado" },
      {
        name: "description",
        content:
          "Criação de sites profissionais, landing pages, sistemas web personalizados e manutenção. Soluções digitais completas para o seu negócio.",
      },
      { property: "og:title", content: "Serviços de Desenvolvimento Web — Gustavo Rocha Machado" },
      {
        property: "og:description",
        content:
          "Sites, landing pages e sistemas web sob medida para impulsionar o seu negócio no ambiente digital.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Globe,
    title: "Criação de Sites Profissionais",
    description:
      "Desenvolvemos sites modernos, responsivos e otimizados para conversão, com foco na experiência do usuário e na autoridade da sua marca.",
    features: ["Design responsivo", "SEO otimizado", "Performance acelerada"],
  },
  {
    icon: Rocket,
    title: "Páginas Web e Landing Pages",
    description:
      "Crie páginas de alta performance para suas campanhas de marketing, focadas em capturar leads e gerar resultados.",
    features: ["Alta conversão", "Integração com Ads", "Captura de leads"],
  },
  {
    icon: Code2,
    title: "Sistemas Web Personalizados",
    description:
      "Soluções sob medida para automatizar processos, otimizar a gestão e escalar seu negócio com tecnologia exclusiva.",
    features: ["Sob medida", "Automação de processos", "Painel administrativo"],
  },
  {
    icon: Wrench,
    title: "Manutenção e Suporte",
    description:
      "Garanta a performance e segurança do seu site com serviços de manutenção contínua e suporte técnico especializado.",
    features: ["Atualizações", "Backup e segurança", "Suporte técnico"],
  },
];

function ServicesPage() {
  return (
    <div className="relative pt-32">
      {/* VIDEO BACKGROUND */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden" style={{ zIndex: 0 }}>
        <video
          src={servicesBgVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 size-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/75 to-background/95" />
      </div>

      {/* CONTENT WRAPPER */}
      <div className="relative" style={{ zIndex: 1 }}>
      {/* HEADER */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-7xl text-center">
          <span className="font-mono text-[12px] font-bold uppercase tracking-[0.3em] text-brand">
            // O que oferecemos
          </span>
          <h1 className="mx-auto mt-4 max-w-4xl text-5xl font-bold tracking-tight md:text-6xl">
            Soluções digitais completas
            <br />
            para o <span className="text-brand glow-text">seu negócio</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/60">
            Tecnologia, design e estratégia caminhando juntos para transformar a sua
            presença digital em resultados reais.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {services.map((s) => (
            <article
              key={s.title}
              className="dashboard-border group relative overflow-hidden bg-panel/40 p-8 transition-all duration-300 hover:bg-brand/5"
            >
              <div className="mb-6 inline-flex size-14 items-center justify-center rounded border border-brand/30 bg-brand/10 text-brand transition-transform group-hover:scale-110">
                <s.icon className="size-6" />
              </div>

              <h3 className="mb-3 text-2xl font-bold text-brand-deep">
                {s.title}
              </h3>
              <p className="mb-6 text-foreground/70">{s.description}</p>

              <ul className="mb-8 space-y-2">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground/60">
                    <CheckCircle2 className="size-4 shrink-0 text-brand" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                to="/contato"
                className="inline-flex items-center gap-2 bg-brand px-5 py-3 font-mono text-xs font-bold uppercase tracking-widest text-primary-foreground transition-all hover:bg-brand-deep"
              >
                Solicitar Orçamento
                <ArrowRight className="size-3.5" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="border-t border-border bg-panel/20 px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Pronto para começar seu projeto?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-foreground/60">
            Entre em contato e receba um orçamento personalizado e sem compromisso para
            o seu próximo site, landing page ou sistema web.
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
    </div>
  );
}
