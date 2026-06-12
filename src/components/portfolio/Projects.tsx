import { SectionHeader } from "./SectionHeader";
import { ArrowUpRight } from "lucide-react";
import dormieImg from "@/assets/project-dormie.png";
import marketImg from "@/assets/project-market.jpg";
import translatorImg from "@/assets/project-translator.jpg";
import rbtreeImg from "@/assets/project-rbtree.png";
import eulerImg from "@/assets/project-euler.png";

const accents = [
  "oklch(0.65 0.13 295)",  // light purple (site primary)
  "oklch(0.72 0.10 230)",  // light blue
  "oklch(0.68 0.12 90)",   // dark yellow
  "oklch(0.52 0.16 305)",  // purple
  "oklch(0.62 0.11 150)",  // green
  "oklch(0.62 0.17 30)",   // orangeish red
  "oklch(0.42 0.10 260)",  // navy
];

type Project = {
  num: string;
  title: string;
  stack: string[];
  blurb: string;
  outcomes: string[];
  image: string;
  href: string;
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
    image: dormieImg,
    href: "https://www.linkedin.com/posts/caden-conde_hackohio13-dormie-socialimpact-activity-7393838918154203136-8A-L?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEKprycBNS-dq4IcVXJF_-eVW4eSD683upI",
  },
  {
    num: "02",
    title: "Taiwanese Street Market Mission",
    stack: ["C#", "Unity", "VR"],
    blurb:
      "VR language-learning app teaching conversational Mandarin Chinese through immersive market scenes; built with an interdisciplinary team.",
    outcomes: ["1st Place — OSU World Language Appathon"],
    image: marketImg,
    href: "https://github.com/CadenConde/Taiwanese-Night-Market-Mission",
  },
  {
    num: "03",
    title: "Universal Translator",
    stack: ["Python", "C++", "OpenCV", "Arduino"],
    blurb:
      "Real-time sign-language translation device: interprets ASL gestures and outputs spoken or written translations across languages.",
    outcomes: ["2nd Place — MakeOHI/O", "Hardware + software integration"],
    image: translatorImg,
    href: "https://www.linkedin.com/posts/caden-conde_makeathon-makeohio25-ohiostateuniversity-activity-7312245346938605568-9yE-?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEKprycBNS-dq4IcVXJF_-eVW4eSD683upI",
  },
  {
    num: "04",
    title: "Red-Black Trees",
    stack: ["Python", "Algorithms"],
    blurb:
      "Complete Red-Black Tree with insertion, deletion, and search; comprehensive test coverage and performance analysis.",
    outcomes: ["Full O(log n) guarantees", "Documented benchmarks"],
    image: rbtreeImg,
    href: "https://github.com/CadenConde/RedBlackTrees",
  },
  {
    num: "05",
    title: "Project Euler",
    stack: ["Python", "Java", "Mathematics"],
    blurb:
      "100+ computational problems solved with mathematics, algorithms, and optimization. Ongoing since August 2023.",
    outcomes: ["100+ problems solved", "Active since 2023"],
    image: eulerImg,
    href: "https://github.com/CadenConde/Euler-202-Solution",
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
            const accent = accents[i % accents.length];
            return (
              <article
                key={p.title}
                className="reveal grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16"
              >
                {/* Visual — full image, darkened, with title overlay; hover reveals image */}
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${p.title}`}
                  className={`group/img relative block aspect-[4/3] overflow-hidden border border-border bg-card ${
                    reverse ? "lg:order-2" : ""
                  }`}
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="absolute inset-0 h-full w-full object-cover grayscale-[35%] brightness-[0.45] transition-all duration-700 ease-out group-hover/img:grayscale-0 group-hover/img:brightness-100 group-hover/img:scale-[1.02]"
                  />

                  {/* Darkening gradient — fades on hover */}
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-background/30 opacity-100 transition-opacity duration-500 group-hover/img:opacity-0"
                  />

                  {/* Text overlay — fades out on hover */}
                  <div className="absolute inset-0 flex flex-col justify-between p-6 transition-opacity duration-500 group-hover/img:opacity-0">
                    <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">
                      <span>project / {p.num}</span>
                      <span>case-study</span>
                    </div>
                    <div className="font-serif text-[clamp(1.75rem,4.2vw,3rem)] leading-[1.05] tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
                      {p.title}
                      <span style={{ color: accent }}>.</span>
                    </div>
                  </div>

                  {/* corner ticks */}
                  <div className="pointer-events-none absolute inset-0">
                    <span className="absolute left-3 top-3 h-2 w-2 border-l border-t" style={{ borderColor: accent }} />
                    <span className="absolute right-3 top-3 h-2 w-2 border-r border-t" style={{ borderColor: accent }} />
                    <span className="absolute bottom-3 left-3 h-2 w-2 border-b border-l" style={{ borderColor: accent }} />
                    <span className="absolute bottom-3 right-3 h-2 w-2 border-b border-r" style={{ borderColor: accent }} />
                  </div>
                </a>

                {/* Body */}
                <div>
                  <div className="font-mono text-xs" style={{ color: accent }}>
                    {p.num} / 05
                  </div>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group/title mt-2 inline-block"
                  >
                    <h3 className="font-serif text-3xl leading-tight tracking-tight transition-colors sm:text-4xl">
                      {p.title}
                    </h3>
                  </a>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    {p.blurb}
                  </p>

                  <ul className="mt-5 space-y-1.5 text-sm text-foreground/80">
                    {p.outcomes.map((o) => (
                      <li key={o} className="flex items-start gap-2">
                        <span className="mt-2 h-px w-3 shrink-0" style={{ backgroundColor: accent }} />
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
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group mt-8 inline-flex items-center gap-2 border-b border-transparent pb-0.5 font-mono text-xs uppercase tracking-[0.18em] transition-all hover:border-primary"
                    style={{ color: accent }}
                  >
                    View Project
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
