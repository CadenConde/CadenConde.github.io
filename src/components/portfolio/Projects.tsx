import { SectionHeader } from "./SectionHeader";
import { ArrowUpRight } from "lucide-react";

type Project = {
  num: string;
  title: string;
  stack: string[];
  blurb: string;
  outcomes: string[];
  accent: string;
};

const projects: Project[] = [
  {
    num: "01",
    title: "Dormie",
    stack: ["React Native", "TypeScript", "Firebase", "Python", "FastAPI"],
    blurb:
      "Full-stack mobile app using AI for smoother roommate communication — auto chore assignment, location sharing, and AI conflict mediation.",
    outcomes: [
      "Won 'Most Social Impact' — HackOHI/O 13 (100+ teams)",
      "100+ user surveys to refine the concept",
    ],
    accent: "from-violet-500/30 to-indigo-500/10",
  },
  {
    num: "02",
    title: "Taiwanese Street Market Mission",
    stack: ["C#", "Unity", "VR"],
    blurb:
      "VR language-learning app teaching conversational Mandarin Chinese through immersive market scenes; built with an interdisciplinary team.",
    outcomes: ["1st Place — OSU World Language Appathon"],
    accent: "from-rose-500/25 to-amber-500/10",
  },
  {
    num: "03",
    title: "Universal Translator",
    stack: ["Python", "C++", "OpenCV", "Arduino"],
    blurb:
      "Real-time sign-language translation device: interprets ASL gestures and outputs spoken or written translations across languages.",
    outcomes: ["2nd Place — MakeOHI/O", "Hardware + software integration"],
    accent: "from-emerald-500/25 to-cyan-500/10",
  },
  {
    num: "04",
    title: "Red-Black Tree Implementation",
    stack: ["Python", "Algorithms"],
    blurb:
      "Complete Red-Black Tree with insertion, deletion, and search; comprehensive test coverage and performance analysis.",
    outcomes: ["Full O(log n) guarantees", "Documented benchmarks"],
    accent: "from-sky-500/25 to-blue-500/10",
  },
  {
    num: "05",
    title: "Project Euler",
    stack: ["Python", "Java", "Mathematics"],
    blurb:
      "100+ computational problems solved with mathematics, algorithms, and optimization. Ongoing since August 2023.",
    outcomes: ["100+ problems solved", "Active since 2023"],
    accent: "from-fuchsia-500/25 to-violet-500/10",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative border-t border-rule py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          num="04"
          eyebrow="Selected Work"
          title="Projects, prototypes, and proofs."
        />

        <div className="space-y-24">
          {projects.map((p, i) => {
            const reverse = i % 2 === 1;
            return (
              <article
                key={p.title}
                className="reveal grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16"
              >
                {/* Visual */}
                <div
                  className={`relative aspect-[4/3] overflow-hidden border border-border bg-card ${
                    reverse ? "lg:order-2" : ""
                  }`}
                >
                  <div className="absolute inset-0 blueprint-bg opacity-70" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${p.accent}`} />
                  <div className="absolute inset-0 flex flex-col justify-between p-6">
                    <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      <span>project / {p.num}</span>
                      <span>case-study</span>
                    </div>
                    <div className="font-serif text-[clamp(3rem,8vw,5.5rem)] leading-none tracking-tight text-foreground/90">
                      {p.title.split(" ")[0]}
                      <span className="text-primary">.</span>
                    </div>
                  </div>
                  {/* corner ticks */}
                  <div className="pointer-events-none absolute inset-0">
                    <span className="absolute left-3 top-3 h-2 w-2 border-l border-t border-primary" />
                    <span className="absolute right-3 top-3 h-2 w-2 border-r border-t border-primary" />
                    <span className="absolute bottom-3 left-3 h-2 w-2 border-b border-l border-primary" />
                    <span className="absolute bottom-3 right-3 h-2 w-2 border-b border-r border-primary" />
                  </div>
                </div>

                {/* Body */}
                <div>
                  <div className="font-mono text-xs text-primary">
                    {p.num} / 05
                  </div>
                  <h3 className="mt-2 font-serif text-3xl leading-tight tracking-tight sm:text-4xl">
                    {p.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    {p.blurb}
                  </p>

                  <ul className="mt-5 space-y-1.5 text-sm text-foreground/80">
                    {p.outcomes.map((o) => (
                      <li key={o} className="flex items-start gap-2">
                        <span className="mt-2 h-px w-3 shrink-0 bg-primary" />
                        {o}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.stack.map((t) => (
                      <span
                        key={t}
                        className="border border-border bg-card px-2.5 py-1 font-mono text-[11px] tracking-tight text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="group mt-8 inline-flex items-center gap-2 border-b border-transparent pb-0.5 font-mono text-xs uppercase tracking-[0.18em] text-primary transition-all hover:border-primary"
                  >
                    Ask about this project
                    <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
