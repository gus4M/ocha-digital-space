import { createFileRoute } from "@tanstack/react-router";
import { Mail, MessageCircle, Linkedin } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Fale Comigo — Gustavo Rocha Machado" },
      {
        name: "description",
        content:
          "Entre em contato com Gustavo Rocha Machado por email, WhatsApp ou LinkedIn para oportunidades de estágio e desenvolvimento.",
      },
      { property: "og:title", content: "Fale Comigo — Gustavo Rocha Machado" },
      {
        property: "og:description",
        content: "Canais de contato profissional de Gustavo Rocha Machado.",
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
  },
  {
    label: "WhatsApp",
    value: "(51) 99324-2572",
    href: "https://wa.me/5551993242572",
    Icon: MessageCircle,
  },
  {
    label: "LinkedIn",
    value: "/in/gustavo-machado2026",
    href: "https://www.linkedin.com/in/gustavo-machado2026",
    Icon: Linkedin,
  },
];

function ContactPage() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="// Initialize Communication"
          title="Fale Comigo."
          description="Disponível para oportunidades de estágio, vagas júnior e projetos colaborativos."
        />

        <div className="grid gap-12 lg:grid-cols-12">
          {/* Form */}
          <form
            className="dashboard-border space-y-6 bg-panel/30 p-10 lg:col-span-7"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="grid gap-6 md:grid-cols-2">
              <Field label="Nome" name="name" placeholder="Seu nome" />
              <Field label="Email" name="email" type="email" placeholder="voce@empresa.com" />
            </div>
            <Field label="Assunto" name="subject" placeholder="Sobre o que vamos conversar?" />
            <div>
              <label className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-foreground/50">
                Mensagem
              </label>
              <textarea
                rows={6}
                placeholder="Conte um pouco sobre a oportunidade ou projeto..."
                className="w-full border border-border bg-background/40 px-4 py-3 text-sm outline-none transition-colors focus:border-brand"
              />
            </div>
            <button
              type="submit"
              className="bg-brand px-8 py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-brand-deep"
            >
              Enviar mensagem
            </button>
          </form>

          {/* Channels */}
          <aside className="space-y-4 lg:col-span-5">
            {channels.map(({ label, value, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="dashboard-border group flex items-center gap-5 bg-panel/20 p-6 transition-colors hover:bg-brand/5"
              >
                <div className="flex size-12 shrink-0 items-center justify-center border border-border bg-background/60 text-brand transition-colors group-hover:border-brand">
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
              </a>
            ))}

            <div className="dashboard-border bg-panel/20 p-6">
              <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/40">
                Status
              </div>
              <div className="mt-2 flex items-center gap-2 text-base font-semibold">
                <span className="size-2 rounded-full bg-brand" />
                Disponível para estágio e vagas júnior
              </div>
              <p className="mt-3 text-sm text-foreground/50">
                Resposta em até 24 horas em dias úteis.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
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
