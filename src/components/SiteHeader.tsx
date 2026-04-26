import { ArrowRight } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#servicos", label: "Serviços" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#sobre", label: "Sobre Mim" },
  { href: "#contato", label: "Contato" },
] as const;

export function SiteHeader() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="#home" className="flex items-baseline gap-3">
          <span className="text-lg font-bold uppercase tracking-tight">
            G. Rocha Machado
          </span>
          <span className="hidden font-mono text-[10px] tracking-[0.2em] text-brand sm:block">
            / DEV WEB
          </span>
        </a>

        <div className="hidden items-center gap-9 text-sm font-medium uppercase tracking-wide text-foreground/70 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-brand">
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contato"
          className="group inline-flex items-center gap-2 bg-brand px-5 py-3 font-mono text-xs font-bold uppercase tracking-widest text-primary-foreground shadow-glow transition-all duration-300 hover:bg-brand-deep"
        >
          Solicitar Orçamento
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </nav>
  );
}
