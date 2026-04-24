import { createFileRoute } from "@tanstack/react-router";
import { Mail, MessageCircle, Linkedin, Send, Phone } from "lucide-react";

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
    value: "(51) 99324-2572",
    href: "https://wa.me/5551993242572?text=Ol%C3%A1%20Gustavo%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.",
    Icon: MessageCircle,
    cta: "Falar no WhatsApp",
    highlight: true,
  },
  {
    label: "LinkedIn",
    value: "/in/gustavo-machado2026",
    href: "https://www.linkedin.com/in/gustavo-machado2026",
    Icon: Linkedin,
    cta: "Conectar",
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

      {/* CONTENT */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-12">
            {/* Form */}
            <form
              className="dashboard-border space-y-6 bg-panel/30 p-8 lg:col-span-7 lg:p-10"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-brand">
                  // Formulário de contato
                </div>
                <h2 className="mt-2 text-2xl font-bold">Solicite um orçamento gratuito</h2>
                <p className="mt-2 text-sm text-foreground/55">
                  Preencha o formulário abaixo e retorno o contato em breve.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <Field label="Nome" name="name" placeholder="Seu nome completo" />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="voce@empresa.com"
                />
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <Field
                  label="Telefone"
                  name="phone"
                  type="tel"
                  placeholder="(51) 99999-9999"
                />
                <Field
                  label="Assunto"
                  name="subject"
                  placeholder="Site, landing page, sistema..."
                />
              </div>
              <div>
                <label className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-foreground/50">
                  Mensagem
                </label>
                <textarea
                  rows={6}
                  placeholder="Conte um pouco sobre o seu projeto, prazo e objetivos..."
                  className="w-full border border-border bg-background/40 px-4 py-3 text-sm outline-none transition-colors focus:border-brand"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-brand px-8 py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground shadow-glow transition-colors hover:bg-brand-deep"
              >
                Enviar mensagem <Send className="size-4" />
              </button>
            </form>

            {/* Channels */}
            <aside className="space-y-4 lg:col-span-5">
              <div className="dashboard-border bg-panel/20 p-6">
                <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/40">
                  Status
                </div>
                <div className="mt-2 flex items-center gap-2 text-base font-semibold">
                  <span className="size-2 rounded-full bg-brand" />
                  Disponível para novos projetos
                </div>
                <p className="mt-3 text-sm text-foreground/55">
                  Resposta em até 24 horas em dias úteis. Orçamento sem compromisso.
                </p>
              </div>

              {channels.map(({ label, value, href, Icon, cta, highlight }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className={`dashboard-border group flex items-center gap-5 p-6 transition-colors ${
                    highlight
                      ? "bg-brand/10 hover:bg-brand/15"
                      : "bg-panel/20 hover:bg-brand/5"
                  }`}
                >
                  <div
                    className={`flex size-12 shrink-0 items-center justify-center border bg-background/60 transition-colors ${
                      highlight
                        ? "border-brand text-brand"
                        : "border-border text-brand group-hover:border-brand"
                    }`}
                  >
                    <Icon className="size-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-brand">
                      {label}
                    </div>
                    <div className="mt-1 truncate text-base font-semibold transition-colors group-hover:text-brand">
                      {value}
                    </div>
                  </div>
                  <div className="hidden font-mono text-[10px] uppercase tracking-widest text-brand sm:block">
                    {cta} →
                  </div>
                </a>
              ))}

              <a
                href="https://wa.me/5551993242572?text=Ol%C3%A1%20Gustavo%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-brand px-6 py-4 font-mono text-xs font-bold uppercase tracking-widest text-primary-foreground shadow-glow transition-colors hover:bg-brand-deep"
              >
                <Phone className="size-4" /> Falar no WhatsApp agora
              </a>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-foreground/50"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full border border-border bg-background/40 px-4 py-3 text-sm outline-none transition-colors focus:border-brand"
      />
    </div>
  );
}
