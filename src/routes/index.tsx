import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroBg from "../assets/hero-bg.jpg";
import {
  AboutSection,
  ContactSection,
  PortfolioSection,
  ServicesSection,
} from "../components/OnePageSections";

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

function HomePage() {
  return (
    <>
      <section id="home" className="relative flex min-h-[92vh] scroll-mt-20 items-center overflow-hidden px-6">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 saturate-75 hue-rotate-[8deg]"
          style={{ backgroundImage: `url(${heroBg})` }}
          aria-hidden
        />
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-30" aria-hidden />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/60 via-background/35 to-background"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,oklch(0.62_0.21_255/0.18)_0%,transparent_60%)]"
          aria-hidden
        />
        <div className="hero-float pointer-events-none absolute left-[8%] top-[22%] hidden size-20 border border-brand/20 bg-brand/5 backdrop-blur-sm lg:block" aria-hidden />
        <div className="hero-float pointer-events-none absolute bottom-[18%] right-[12%] hidden size-28 rounded-full border border-foreground/10 bg-foreground/5 backdrop-blur-sm [animation-delay:1.4s] lg:block" aria-hidden />
        <div className="hero-float pointer-events-none absolute right-[28%] top-[18%] hidden h-16 w-16 rotate-45 border border-brand/25 bg-brand/10 backdrop-blur-sm [animation-delay:2.2s] md:block" aria-hidden />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-12">
          <div className="z-10 lg:col-span-9">
            <div className="mb-8 inline-flex animate-[fade-in_0.6s_ease-out_both] items-center gap-2 rounded-full border border-brand/20 bg-brand/10 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-brand">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
              </span>
              Disponível para novos projetos
            </div>

            <h1 className="mb-8 animate-[fade-up_0.75s_ease-out_0.12s_both] text-5xl font-bold leading-[0.95] tracking-tighter md:text-7xl lg:text-[5.5rem]">
              Transforme sua ideia em um
              <br />
              <span className="text-brand glow-text">site de sucesso</span>
            </h1>

            <p className="mb-10 max-w-[60ch] animate-[fade-up_0.75s_ease-out_0.28s_both] text-lg leading-relaxed text-foreground/70 md:text-xl">
              Desenvolvimento web profissional e personalizado para impulsionar seu
              negócio no ambiente digital.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contato"
                className="premium-button group inline-flex items-center gap-2 bg-brand px-8 py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground shadow-glow hover:bg-brand-deep"
              >
                Solicitar Orçamento Grátis
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#servicos"
                className="border border-border bg-background/40 px-8 py-4 text-sm font-bold uppercase tracking-widest backdrop-blur transition-colors hover:bg-foreground/5"
              >
                Conheça os Serviços
              </a>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection />
      <PortfolioSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
