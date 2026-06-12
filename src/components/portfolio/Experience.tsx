import { SectionHeader } from "./SectionHeader";

const accents = [
  "oklch(0.65 0.13 295)",  // light purple (site primary)
  "oklch(0.72 0.10 230)",  // light blue
  "oklch(0.68 0.12 90)",   // dark yellow
  "oklch(0.52 0.16 305)",  // purple
  "oklch(0.62 0.11 150)",  // green
  "oklch(0.62 0.17 30)",   // orangeish red
  "oklch(0.42 0.10 260)",  // navy
];

type Item = {
  role: string;
  org: string;
  location: string;
  dates: string;
  bullets: string[];
};

const items: Item[] = [
  {
    role: "IT Systems Administrator",
    org: "Life Connection of Ohio",
    location: "Dayton, OH",
    dates: "May 2026 — Present",
    bullets: [
      "Developed and deployed an internal ticketing system, streamlining IT request intake and improving response efficiency.",
      "Administered Microsoft 365 services (Entra ID, Exchange Online, MFA), supported daily IT operations, and performed device lifecycle management including imaging, wiping, and inventory auditing across the organization.",
      "Provided critical IT support for 130+ employees in a healthcare environment, resolving 40+ monthly tickets and ensuring rapid response times and uninterrupted technology services for clinical, operational, and executive teams.",
    ],
  },
  {
    role: "Senior Director of Operations",
    org: "OSU Undergraduate Student Government",
    location: "Columbus, OH",
    dates: "Apr 2026 — Present",
    bullets: [
      "Directs infrastructure for a 300+ member student organization.",
      "Administers digital platforms (Canvas, website, GroupMe); manages access and troubleshoots issues.",
      "Leads and coordinates three teams, overseeing project execution and delegation.",
    ],
  },
  {
    role: "Co-Founder / Lead Developer",
    org: "FUNDamentals",
    location: "Columbus, OH",
    dates: "Sep 2024 — May 2026",
    bullets: [
      "Co-founded a financial literacy startup; secured 4 pilot schools and 1 nonprofit partner.",
      "Won pitch competitions judged by VCs and entrepreneurs, raising $5.5K+ in funding.",
      "Led a developer team to build an engaging educational platform in React.",
    ],
  },
  {
    role: "Coding Instructor",
    org: "TECH CORPS",
    location: "Dayton, OH",
    dates: "May 2025 — Nov 2025",
    bullets: [
      "Taught programming to middle school students from underprivileged backgrounds.",
      "Led a team of instructors providing individualized project support.",
    ],
  },
  {
    role: "On-Campus Living Area Senator",
    org: "OSU Undergraduate Student Government",
    location: "Columbus, OH",
    dates: "Sep 2025 — Apr 2026",
    bullets: [
      "Legislative Coordinator for Sustainability Committee; Steering Committee member.",
      "Represented 15,000+ students in university governance and policy development.",
      "Oversaw and approved a $200K+ annual budget.",
    ],
  },
  {
    role: "Pickup Associate",
    org: "Kroger",
    location: "Centerville, OH",
    dates: "Apr 2023 — Jul 2026",
    bullets: [
      "Provided customer service; collected and loaded orders efficiently.",
      "Collaborated with team members and resolved customer issues.",
    ],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="relative border-t border-rule bg-muted/30 py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          num="03"
          eyebrow="Experience"
          title="A record of building and leading."
        />

        <ol className="relative space-y-8 md:grid md:grid-cols-2 md:gap-x-0 md:space-y-0">
          {/* center rail */}
          <div
            aria-hidden
            className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-rule md:left-1/2"
          />

          {items.map((it, i) => {
            const right = i % 2 === 1;
            const accent = accents[i % accents.length];
            return (
              <li
                key={it.role + it.org}
                className={`reveal relative grid grid-cols-[24px_1fr] gap-x-6 md:block md:pb-16 ${
                  right ? "md:pl-12" : "md:pr-12"
                }`}
                style={{
                  gridRow: `${i + 1} / span 2`,
                  gridColumn: right ? 2 : 1,
                }}
              >
                {/* node — centered on the rail */}
                <div
                  aria-hidden
                  className={`absolute top-1 z-10 h-4 w-4 -translate-x-[3px] border bg-background ${
                    right
                      ? "left-0 md:left-0 md:-translate-x-1/2"
                      : "left-0 md:left-auto md:right-0 md:translate-x-1/2"
                  }`}
                  style={{ borderColor: accent }}
                >
                  <div className="absolute inset-1" style={{ backgroundColor: accent }} />
                </div>

                <div className="col-start-2 md:col-start-auto">
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em]" style={{ color: accent }}>
                    {it.dates}
                  </div>
                  <h3 className="mt-2 font-serif text-2xl leading-tight">
                    {it.role}
                  </h3>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {it.org} · {it.location}
                  </div>

                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                    {it.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-2 h-px w-3 shrink-0" style={{ backgroundColor: accent, opacity: 0.6 }} />
                        <span className="flex-1">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
