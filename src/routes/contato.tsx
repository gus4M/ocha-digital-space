import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "../components/SectionHeading";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Gustavo Rocha Machado" },
      {
        name: "description",
        content: "Entre em contato com Gustavo Rocha Machado para colaborações e oportunidades.",
      },
      { property: "og:title", content: "Contato — Gustavo Rocha Machado" },
      {
        property: "og:description",
        content: "Canais de contato profissional de Gustavo Rocha Machado.",
      },
    ],
  }),
  component: ContactPage,
});

const channels = [
  { label: "Email", value: "gustavo@exemplo.com", href: "mailto:gustavo@exemplo.com" },
  { label: "LinkedIn", value: "/in/gustavo-rocha-machado", href: "#" },
  { label: "GitHub", value: "@gustavomachado", href: "#" },
];

function ContactPage() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="// Initialize Communication"
          title="Vamos construir algo sólido."
          description="Disponível para projetos freelance, posições full-time e consultoria técnica."
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
                placeholder="Conte um pouco sobre o projeto..."
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
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="dashboard-border group block bg-panel/20 p-6 transition-colors hover:bg-brand/5"
              >
                <div className="font-mono text-[10px] uppercase tracking-widest text-brand">
                  {c.label}
                </div>
                <div className="mt-2 text-lg font-semibold transition-colors group-hover:text-brand">
                  {c.value}
                </div>
              </a>
            ))}

            <div className="dashboard-border bg-panel/20 p-6">
              <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/40">
                Status
              </div>
              <div className="mt-2 flex items-center gap-2 text-base font-semibold">
                <span className="size-2 rounded-full bg-brand" />
                Disponível para novos projetos
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
