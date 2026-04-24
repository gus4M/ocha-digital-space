import { Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre Mim" },
  { to: "/habilidades", label: "Habilidades" },
  { to: "/projetos", label: "Projetos" },
] as const;

export function SiteHeader() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-baseline gap-4">
          <span className="text-xl font-bold uppercase tracking-tight">
            G. Rocha Machado
          </span>
          <span className="hidden font-mono text-[10px] tracking-[0.2em] text-foreground/40 sm:block">
            SYSTEMS_ARCHITECT_V2.0
          </span>
        </Link>

        <div className="hidden items-center gap-10 text-sm font-medium uppercase tracking-wide text-foreground/70 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-brand" }}
              className="transition-colors hover:text-brand"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <Link
          to="/contato"
          className="border border-brand px-5 py-2 font-mono text-xs font-bold tracking-widest text-brand transition-all duration-300 hover:bg-brand hover:text-primary-foreground"
        >
          INITIALIZE_COMM
        </Link>
      </div>
    </nav>
  );
}
