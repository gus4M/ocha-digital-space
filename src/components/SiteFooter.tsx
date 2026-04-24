import { Mail, MessageCircle, Linkedin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/30">
          © 2026 Gustavo Rocha Machado. Todos os direitos reservados.
        </div>
        <div className="flex items-center gap-4 text-foreground/40">
          <a
            href="https://www.linkedin.com/in/gustavo-machado2026"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-brand"
          >
            <Linkedin className="size-4" />
          </a>
          <a
            href="https://wa.me/5551993242572"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="transition-colors hover:text-brand"
          >
            <MessageCircle className="size-4" />
          </a>
          <a
            href="mailto:gugarochamachado@gmail.com"
            aria-label="Email"
            className="transition-colors hover:text-brand"
          >
            <Mail className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
