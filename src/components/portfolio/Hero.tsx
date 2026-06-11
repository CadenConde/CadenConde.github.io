import { useEffect, useRef } from "react";
import { ArrowDown, ArrowUpRight, Download, Mail, Github, Linkedin } from "lucide-react";
import portrait from "@/assets/image1.jpg";

export function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const glow = glowRef.current;
    if (!section || !glow) return;

    let raf = 0;
    let tx = 0;
    let ty = 0;
    const onMove = (e: PointerEvent) => {
      const rect = section.getBoundingClientRect();
      tx = e.clientX - rect.left;
      ty = e.clientY - rect.top;
      if (!raf) {
        raf = requestAnimationFrame(() => {
          glow.style.transform = `translate(${tx - 300}px, ${ty - 300}px)`;
          glow.style.opacity = "1";
          raf = 0;
        });
      }
    };
    const onLeave = () => {
      glow.style.opacity = "0";
    };
    section.addEventListener("pointermove", onMove);
    section.addEventListener("pointerleave", onLeave);
    return () => {
      section.removeEventListener("pointermove", onMove);
      section.removeEventListener("pointerleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative isolate flex min-h-screen items-center overflow-hidden pt-24"
    >
      {/* Mouse-following purple glow */}
      <div
        ref={glowRef}
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 -z-10 h-[600px] w-[600px] rounded-full opacity-0 transition-opacity duration-500 will-change-transform"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklch, var(--primary) 35%, transparent) 0%, color-mix(in oklch, var(--primary) 12%, transparent) 35%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Animated blueprint background */}
      <div aria-hidden className="absolute inset-0 -z-20">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="absolute -left-32 top-1/4 h-[28rem] w-[28rem] rounded-full bg-primary/20 blur-3xl anim-drift anim-pulse-soft" />
        <div
          className="absolute -right-24 bottom-1/4 h-[22rem] w-[22rem] rounded-full bg-primary/10 blur-3xl anim-drift"
          style={{ animationDelay: "-9s" }}
        />
        <svg
          className="absolute inset-0 h-full w-full text-primary/40"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern id="dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="currentColor" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
          <path
            d="M 0 80 Q 200 40 400 120 T 800 100 T 1600 140"
            stroke="currentColor"
            strokeWidth="1"
            className="anim-dash"
          />
          <path
            d="M 0 220 Q 300 280 600 200 T 1200 240 T 1800 200"
            stroke="currentColor"
            strokeWidth="1"
            className="anim-dash"
            style={{ animationDelay: "-4s" }}
          />
          <path
            d="M 0 380 Q 250 340 500 420 T 1000 380 T 1800 400"
            stroke="currentColor"
            strokeWidth="1"
            className="anim-dash"
            style={{ animationDelay: "-7s" }}
          />
          <path
            d="M 0 540 Q 350 600 700 520 T 1400 560 T 2000 520"
            stroke="currentColor"
            strokeWidth="1"
            className="anim-dash"
            style={{ animationDelay: "-12s" }}
          />
          <path
            d="M 0 700 Q 200 660 400 740 T 800 720 T 1600 760"
            stroke="currentColor"
            strokeWidth="1"
            className="anim-dash"
            style={{ animationDelay: "-2s" }}
          />
        </svg>
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
        <div className="reveal">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-primary" />
            <span className="eyebrow">01 / Introduction</span>
          </div>

          <h1 className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Caden
            <br />
            <span className="italic text-primary">Conde</span>
            <span className="text-primary">.</span>
          </h1>

          <p className="mt-6 max-w-xl font-mono text-sm uppercase tracking-[0.18em] text-muted-foreground">
            Computer Science &amp; AI
            <span className="mx-2 text-primary">·</span>
            Builder
            <span className="mx-2 text-primary">·</span>
            Problem Solver
          </p>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Computer Science student at{" "}
            <span className="text-foreground">The Ohio State University</span>{" "}
            specializing in AI, with a minor in Philosophy. I build things that
            matter — from hackathon-winning apps to startups — with deep
            interest in technical systems and the human side of technology.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all hover:translate-y-[-1px] hover:shadow-lg hover:shadow-primary/20"
            >
              View Projects
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-sm border border-border px-5 py-3 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
            >
              <Mail className="h-4 w-4" /> Contact Me
            </a>

            <div className="ml-1 flex items-center gap-1">
              <a
                href="https://github.com/CadenConde"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary hover:-translate-y-0.5"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com/in/caden-conde"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary hover:-translate-y-0.5"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Portrait */}
        <div className="relative reveal reveal-delay-2">
          <div className="absolute -inset-3 border border-rule" aria-hidden />
          <div className="absolute -left-3 -top-3 h-3 w-3 border-l border-t border-primary" aria-hidden />
          <div className="absolute -right-3 -top-3 h-3 w-3 border-r border-t border-primary" aria-hidden />
          <div className="absolute -bottom-3 -left-3 h-3 w-3 border-b border-l border-primary" aria-hidden />
          <div className="absolute -bottom-3 -right-3 h-3 w-3 border-b border-r border-primary" aria-hidden />
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-muted">
            <img
              src={portrait}
              alt="Portrait of Caden Conde"
              width={896}
              height={1152}
              className="h-full w-full object-cover grayscale-[20%] transition-all duration-700 hover:grayscale-0"
            />
            <div className="absolute inset-0 mix-blend-multiply bg-gradient-to-b from-transparent via-transparent to-primary/20" />
          </div>
          <div className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            <span>fig.01</span>
            <span>Columbus, OH · 40.0°N 83.0°W</span>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary"
      >
        <span className="mr-2">Scroll</span>
        <ArrowDown className="inline h-3 w-3 animate-bounce" />
      </a>
    </section>
  );
}
