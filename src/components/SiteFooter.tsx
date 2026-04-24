export function SiteFooter() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/30">
          © {new Date().getFullYear()} Gustavo Rocha Machado / All Rights Reserved
        </div>
        <div className="flex gap-6 font-mono text-[10px] uppercase text-foreground/40">
          <a href="#" className="transition-colors hover:text-brand">Github</a>
          <a href="#" className="transition-colors hover:text-brand">Linkedin</a>
          <a href="#" className="transition-colors hover:text-brand">Email</a>
        </div>
      </div>
    </footer>
  );
}
