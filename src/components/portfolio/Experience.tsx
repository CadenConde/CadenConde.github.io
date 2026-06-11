import { SectionHeader } from "./SectionHeader";

type Item = {
  role: string;
  org: string;
  location: string;
  dates: string;
  bullets: string[];
};

const items: Item[] = [
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
    role: "IT Intern",
    org: "Life Connection of Ohio",
    location: "Dayton, OH",
    dates: "May 2025 — Present",
    bullets: [
      "Built and deployed an internal ticketing system, improving IT request efficiency.",
      "Administers Microsoft 365 (Entra ID, Exchange Online, MFA) and manages device lifecycle.",
      "Analyzes department data and documents processes to improve workflows.",
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
      "Oversaw and approved a $75K+ annual budget.",
    ],
  },
  {
    role: "Pickup Associate",
    org: "Kroger",
    location: "Centerville, OH",
    dates: "Apr 2023 — Jul 2025",
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

        <ol className="relative">
          {/* timeline rail */}
          <div
            aria-hidden
            className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-rule md:left-1/2"
          />

          {items.map((it, i) => (
            <li
              key={it.role + it.org}
              className={`reveal relative mb-14 grid grid-cols-[24px_1fr] gap-x-6 md:grid-cols-2 md:gap-x-12 ${
                i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
              }`}
            >
              {/* node */}
              <div className="absolute left-0 top-1 h-4 w-4 -translate-x-[3px] border border-primary bg-background md:left-1/2 md:-translate-x-1/2">
                <div className="absolute inset-1 bg-primary" />
              </div>

              <div
                className={`col-start-2 md:col-start-auto ${
                  i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"
                }`}
              >
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
                  {it.dates}
                </div>
                <h3 className="mt-2 font-serif text-2xl leading-tight">{it.role}</h3>
                <div className="mt-1 text-sm text-muted-foreground">
                  {it.org} · {it.location}
                </div>
              </div>

              <div className={`col-start-2 mt-4 md:col-start-auto md:mt-0 ${
                i % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"
              }`}>
                <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                  {it.bullets.map((b) => (
                    <li key={b} className={`flex gap-2 ${i % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
                      <span className="mt-2 h-px w-3 shrink-0 bg-primary/60" />
                      <span className="flex-1">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
