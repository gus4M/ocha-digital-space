import { createFileRoute } from "@tanstack/react-router";
import { Mail, MessageCircle, Linkedin } from "lucide-react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Pronto para Começar Seu Projeto? — Gustavo Rocha Machado" },
      {
        name: "description",
        content:
          "Entre em contato e vamos transformar sua ideia em realidade. Email, WhatsApp e LinkedIn para iniciar seu projeto web com Gustavo Rocha Machado.",
      },
      {
        property: "og:title",
        content: "Pronto para Começar Seu Projeto? — Gustavo Rocha Machado",
      },
      {
        property: "og:description",
        content:
          "Solicite um orçamento gratuito para sites, landing pages e sistemas web personalizados.",
      },
    ],
  }),
  component: ContactPage,
});

const channels = [
  {
    label: "Email",
    value: "gugarochamachado@gmail.com",
    href: "mailto:gugarochamachado@gmail.com",
    Icon: Mail,
    cta: "Enviar email",
  },
  {
    label: "WhatsApp",
    value: "Falar no WhatsApp",
    href: "https://wa.me/5551993242572",
    Icon: MessageCircle,
    cta: "Abrir conversa",
    highlight: true,
  },
  {
    label: "LinkedIn",
    value: "Conectar no LinkedIn",
    href: "https://www.linkedin.com/in/gustavo-rocha-machado2026",
    Icon: Linkedin,
    cta: "Ver perfil",
  },
];

function ContactPage() {
  return (
    <div className="pt-32">
      {/* HEADER */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-7xl text-center">
          <span className="font-mono text-[12px] font-bold uppercase tracking-[0.3em] text-brand">
            // Initialize Communication
          </span>
          <h1 className="mx-auto mt-4 max-w-4xl text-5xl font-bold tracking-tight md:text-6xl">
            Pronto para Começar Seu{" "}
            <span className="text-brand glow-text">Projeto?</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/60">
            Entre em contato e vamos transformar sua ideia em realidade.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 border border-brand/30 bg-brand/10 px-4 py-2 font-mono text-xs uppercase tracking-widest text-brand">
            <span className="size-2 animate-pulse rounded-full bg-brand" />
            Disponível para novos projetos · Resposta em até 24h
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl">
          <div className="dashboard-border bg-panel/25 px-6 py-10 text-center shadow-panel md:px-10 md:py-14">
            <div className="mx-auto inline-flex items-center justify-center gap-3 text-xl font-bold md:text-3xl">
              <span className="size-4 shrink-0 animate-pulse rounded-full bg-status-available shadow-status" />
              <span>Disponível para novos projetos • Resposta em até 24h</span>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {channels.map(({ label, value, href, Icon, cta, highlight }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className={`dashboard-border group flex min-h-40 flex-col items-center justify-center gap-4 px-6 py-8 text-center transition-colors ${
                  highlight ? "bg-brand/15 hover:bg-brand/25" : "bg-panel/25 hover:bg-brand/10"
                }`}
              >
                <div className="flex size-14 items-center justify-center border border-brand bg-background/60 text-brand transition-colors group-hover:bg-brand group-hover:text-primary-foreground">
                  <Icon className="size-6" />
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-brand">
                    {label}
                  </div>
                  <div className="mt-2 text-lg font-bold">{value}</div>
                  <div className="mt-3 font-mono text-[10px] uppercase tracking-widest text-foreground/55 transition-colors group-hover:text-brand">
                    {cta} →
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

