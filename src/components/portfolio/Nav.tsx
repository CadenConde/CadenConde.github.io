import { useEffect, useState } from "react";
import { FileText } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="group flex items-center gap-2">
          <span className="font-mono text-xs text-muted-foreground">[</span>
          <span className="font-serif text-lg tracking-tight">Caden Conde</span>
          <span className="font-mono text-xs text-muted-foreground">]</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
            >
              <span className="mr-1.5 text-primary/60">
                0{i + 1}
              </span>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="https://drive.google.com/file/d/1cdUity-lfmWAaux9KeDk0n3TwIXlLFJM/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-1.5 rounded-sm border border-border px-3 py-1.5 font-mono text-[13px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:border-primary hover:text-primary sm:inline-flex"
          >
            <FileText className="h-3 w-3" /> Resume
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
