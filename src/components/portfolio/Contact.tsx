import { SectionHeader } from "./SectionHeader";
import { Mail, Github, Linkedin, FileText, ArrowUpRight } from "lucide-react";

const links = [
  {
    icon: Mail,
    label: "Email",
    value: "cadenconde@gmail.com",
    href: "mailto:cadenconde@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/caden-conde",
    href: "https://linkedin.com/in/caden-conde",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/CadenConde",
    href: "https://github.com/CadenConde",
  },
  {
    icon: FileText,
    label: "Resume",
    value: "/resume.pdf",
    href: "https://docs.google.com/document/d/1YU3iysqTgPJ3qgT3NMbzWNonieac5JJuT4Zuy6LA7GE/edit?usp=sharing",
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative border-t border-rule bg-muted/30 py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader num="05" eyebrow="Contact" title="Let's talk." />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div className="reveal">
            <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
              I'm always open to thoughtful conversations — about projects,
              collaboration, research, or just interesting ideas at the
              intersection of technology and people.
            </p>
            <div className="mt-8 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <div>Columbus, OH</div>
              <div className="mt-1 text-primary">Open to opportunities</div>
            </div>
          </div>

          <ul className="reveal reveal-delay-2 grid grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel={l.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group flex h-full items-center gap-4 bg-card p-6 transition-colors hover:bg-accent"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-border text-primary transition-colors group-hover:border-primary">
                    <l.icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      {l.label}
                    </div>
                    <div className="truncate font-serif text-base">{l.value}</div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <footer className="mt-24 flex flex-col items-start justify-between gap-4 border-t border-rule pt-8 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} Caden Conde — All rights reserved</div>
          <div>Built with care · Columbus, OH</div>
        </footer>
      </div>
    </section>
  );
}
