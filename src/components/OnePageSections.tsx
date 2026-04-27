import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Code2,
  Database,
  Globe,
  Linkedin,
  Mail,
  MessageCircle,
  Rocket,
  ShieldCheck,
  Users,
  Wrench,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import servicesBgVideo from "../assets/services-bg.mp4";

const serviceItems = [
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

const featuredProject = {
  tag: "Case // 2025",
  title: "Sistema Web para Gestão de Pacientes e Agendamentos",
  desc: "Desenvolvimento de um sistema web completo para gerenciamento de pacientes e agendamentos, demonstrando proficiência em PHP, MySQL, HTML, CSS e JavaScript. O sistema cobre todo o fluxo de uma clínica: cadastro de pacientes, prontuários, agenda de consultas, autenticação segura e relatórios.",
  stack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
  features: [
    { icon: Users, label: "Cadastro e gestão de pacientes" },
    { icon: Calendar, label: "Agendamento de consultas" },
    { icon: ShieldCheck, label: "Autenticação e níveis de acesso" },
    { icon: Database, label: "Relatórios e prontuários" },
  ],
};

const formacao = [
  {
    period: "2026 – 2029",
    title: "Engenharia de Software (Bacharelado)",
    place: "Universidade La Salle",
    desc: "Graduação em andamento, com foco em engenharia de software, arquitetura de sistemas e desenvolvimento web.",
    status: "Em andamento",
  },
  {
    period: "Concluído em 2025",
    title: "Técnico em Desenvolvimento de Sistemas",
    place: "IFRS — Instituto Federal do Rio Grande do Sul",
    desc: "Formação técnica completa em desenvolvimento de software, banco de dados, lógica de programação e desenvolvimento web.",
    status: "Concluído",
  },
];

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

export function ServicesSection() {
  return (
    <section id="servicos" className="relative scroll-mt-20 overflow-hidden px-6 py-24 [transform-style:preserve-3d]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <video
          src={servicesBgVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 size-full object-cover opacity-90 saturate-75 [transform:translateZ(-1px)_scale(1.08)]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/45 via-background/25 to-background/65" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="reveal-up mb-16 text-center">
          <span className="font-mono text-[12px] font-bold uppercase tracking-[0.3em] text-brand">
            // O que oferecemos
          </span>
          <h2 className="mx-auto mt-4 max-w-4xl text-5xl font-bold tracking-tight md:text-6xl">
            Soluções digitais completas
            <br />
            para o <span className="text-brand glow-text">seu negócio</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/60">
            Tecnologia, design e estratégia caminhando juntos para transformar a sua
            presença digital em resultados reais.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {serviceItems.map((s, index) => (
            <article
              key={s.title}
              className="glass-panel premium-card reveal-up group relative overflow-hidden p-8 hover:border-brand/40 hover:bg-brand/5"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <div className="mb-6 inline-flex size-14 items-center justify-center rounded border border-brand/30 bg-brand/10 text-brand transition-transform group-hover:scale-110">
                <s.icon className="size-6" />
              </div>

              <h3 className="mb-3 text-2xl font-bold text-brand-deep">{s.title}</h3>
              <p className="mb-6 text-foreground/70">{s.description}</p>

              <ul className="mb-8 space-y-2">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground/60">
                    <CheckCircle2 className="size-4 shrink-0 text-brand" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contato"
                className="premium-button inline-flex items-center gap-2 bg-brand px-5 py-3 font-mono text-xs font-bold uppercase tracking-widest text-primary-foreground hover:bg-brand-deep"
              >
                Solicitar Orçamento
                <ArrowRight className="size-3.5" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PortfolioSection() {
  return (
    <section id="portfolio" className="relative scroll-mt-20 overflow-hidden px-6 py-24">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-20 [background-attachment:fixed]" aria-hidden />
      <div className="reveal-up relative mx-auto max-w-7xl text-center">
        <span className="font-mono text-[12px] font-bold uppercase tracking-[0.3em] text-brand">
          // Portfólio
        </span>
        <h2 className="mx-auto mt-4 max-w-4xl text-5xl font-bold tracking-tight md:text-6xl">
          Meus <span className="text-brand glow-text">Projetos</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/60">
          Conheça alguns dos meus trabalhos e veja o que posso criar para você.
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-7xl">
        <article className="glass-panel premium-card reveal-up group relative overflow-hidden hover:border-brand/40">
          <div className="grid gap-0 lg:grid-cols-12">
            <div className="relative overflow-hidden border-b border-border bg-gradient-to-br from-brand/15 via-panel/60 to-brand-deep/20 p-10 lg:col-span-5 lg:border-b-0 lg:border-r">
              <div className="grid-bg absolute inset-0 opacity-30" aria-hidden />
              <div className="relative">
                <div className="mb-4 flex gap-1.5">
                  <span className="size-2.5 rounded-full bg-foreground/20" />
                  <span className="size-2.5 rounded-full bg-foreground/20" />
                  <span className="size-2.5 rounded-full bg-brand/60" />
                </div>
                <div className="rounded border border-border bg-background/80 p-5 font-mono text-[11px] backdrop-blur">
                  <div className="text-brand">// dashboard.php</div>
                  <div className="mt-3 space-y-2 text-foreground/70">
                    <div className="flex justify-between">
                      <span>Pacientes</span>
                      <span className="text-brand">128</span>
                    </div>
                    <div className="h-1 bg-foreground/10"><div className="h-full w-4/5 bg-brand" /></div>
                    <div className="flex justify-between pt-2">
                      <span>Consultas hoje</span>
                      <span className="text-brand">14</span>
                    </div>
                    <div className="h-1 bg-foreground/10"><div className="h-full w-2/3 bg-brand" /></div>
                    <div className="flex justify-between pt-2">
                      <span>Agendadas</span>
                      <span className="text-brand">37</span>
                    </div>
                    <div className="h-1 bg-foreground/10"><div className="h-full w-1/2 bg-brand" /></div>
                  </div>
                </div>
                <div className="mt-4 inline-flex items-center gap-2 border border-brand/30 bg-brand/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-brand">
                  <Code2 className="size-3" /> Mockup do sistema
                </div>
              </div>
            </div>

            <div className="p-8 lg:col-span-7 lg:p-10">
              <div className="mb-4 inline-flex border border-border bg-background/60 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-foreground/60">
                {featuredProject.tag}
              </div>

              <h3 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                {featuredProject.title}
              </h3>
              <p className="mb-8 text-foreground/65">{featuredProject.desc}</p>

              <ul className="mb-8 grid gap-3 sm:grid-cols-2">
                {featuredProject.features.map((f) => (
                  <li key={f.label} className="flex items-center gap-3 text-sm text-foreground/70">
                    <span className="inline-flex size-8 items-center justify-center rounded border border-brand/30 bg-brand/10 text-brand">
                      <f.icon className="size-4" />
                    </span>
                    {f.label}
                  </li>
                ))}
              </ul>

              <div className="mb-8">
                <div className="mb-3 font-mono text-[10px] uppercase tracking-widest text-foreground/40">
                  Tecnologias utilizadas
                </div>
                <div className="flex flex-wrap gap-2">
                  {featuredProject.stack.map((s) => (
                    <span key={s} className="border border-border bg-background/40 px-3 py-1.5 font-mono text-[11px] text-foreground/80">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 border-t border-border pt-6 font-mono text-[11px] uppercase tracking-widest text-foreground/50">
                <span className="size-2 rounded-full bg-brand/60" />
                <span>Repositório privado · Projeto acadêmico</span>
              </div>
            </div>
          </div>
        </article>
      </div>

    </section>
  );
}

export function AboutSection() {
  return (
    <section id="sobre" className="scroll-mt-20 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="// Perfil"
          title="Sobre Mim"
        />

        <div className="space-y-14">
          <div className="max-w-5xl">
            <p className="reveal-up text-2xl font-light leading-relaxed text-foreground/80">
              Olá! Sou <span className="font-semibold text-foreground">Gustavo Rocha Machado</span>, um desenvolvedor web
              focado em transformar ideias complexas em <span className="text-brand">soluções digitais robustas</span> e funcionais.
            </p>

            <div className="mt-10 space-y-6 text-foreground/60">
              <p className="reveal-up" style={{ animationDelay: "100ms" }}>
                Minha jornada técnica começou com a sólida formação em <strong className="font-semibold text-foreground">Desenvolvimento de Sistemas pelo IFRS</strong>,
                onde adquiri os fundamentos essenciais em programação, banco de dados e desenvolvimento web. Atualmente,
                aprofundo e expando essa expertise no <strong className="font-semibold text-foreground">Bacharelado em Engenharia de Software pela Universidade La Salle</strong>,
                dedicando-me à arquitetura de sistemas de alto desempenho, metodologias ágeis e às mais recentes inovações em desenvolvimento web.
              </p>

              <p className="reveal-up" style={{ animationDelay: "180ms" }}>
                Minha paixão pela tecnologia e o rigor da engenharia me impulsionam a criar soluções que não apenas funcionam,
                mas que geram valor real e impacto positivo para os negócios.
              </p>
            </div>
          </div>

          <div className="reveal-up">
            <div className="mb-8 flex items-center gap-4">
              <h3 className="font-mono text-xs uppercase tracking-widest text-brand">
                Formação
              </h3>
              <span className="h-px flex-1 bg-border" />
            </div>

              <ol className="relative space-y-5 border-l border-border pl-6">
                {formacao.map((item, index) => (
                  <li
                    key={item.title}
                    className="glass-panel premium-card reveal-up relative p-6 shadow-panel hover:border-brand/40 hover:bg-brand/5 md:p-7"
                    style={{ animationDelay: `${index * 120}ms` }}
                  >
                    <span className="absolute -left-[31px] top-6 flex size-3 items-center justify-center rounded-full border border-brand bg-background shadow-glow">
                      <span className="size-1 rounded-full bg-brand" />
                    </span>
                    <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-brand">
                      <span>{item.period}</span>
                      <span className="text-foreground/30">•</span>
                      <span className="text-foreground/40">{item.status}</span>
                    </div>
                    <div className="mt-1 text-base font-semibold">{item.title}</div>
                    <div className="text-sm text-foreground/40">{item.place}</div>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/60">{item.desc}</p>
                  </li>
                ))}
              </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contato" className="scroll-mt-20 px-6 py-24">
      <div className="reveal-up mx-auto max-w-7xl text-center">
        <span className="font-mono text-[12px] font-bold uppercase tracking-[0.3em] text-brand">
          // Initialize Communication
        </span>
        <h2 className="mx-auto mt-4 max-w-4xl text-5xl font-bold tracking-tight md:text-6xl">
          Pronto para Começar Seu <span className="text-brand glow-text">Projeto?</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/60">
          Entre em contato e vamos transformar sua ideia em realidade.
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-5xl">
        <div className="glass-panel reveal-up px-6 py-10 text-center shadow-panel md:px-10 md:py-14">
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
              className={`glass-panel premium-card reveal-up group flex min-h-40 flex-col items-center justify-center gap-4 px-6 py-8 text-center hover:border-brand/40 ${
                highlight ? "bg-brand/15 hover:bg-brand/25" : "bg-panel/25 hover:bg-brand/10"
              }`}
            >
              <div className="flex size-14 items-center justify-center border border-brand bg-background/60 text-brand transition-colors group-hover:bg-brand group-hover:text-primary-foreground">
                <Icon className="size-6" />
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-brand">{label}</div>
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
  );
}
