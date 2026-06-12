import { SectionHeader } from "./SectionHeader";
import {
  Code2,
  Brain,
  Server,
  Users,
  GraduationCap,
  Languages,
  Award,
  Cpu,
} from "lucide-react";

const specialties = [
  { icon: Code2, label: "Full-Stack Development", note: "React · TS · Python" },
  { icon: Brain, label: "AI & Machine Learning", note: "Applied research" },
  { icon: Server, label: "IT Operations", note: "M365 · Entra · Devices" },
  { icon: Users, label: "Leadership", note: "Teams · Strategy" },
];

const facts = [
  { icon: GraduationCap, label: "GPA", value: "3.82 / 4.0" },
  { icon: Award, label: "Building Since", value: "2018" },
  { icon: Languages, label: "Languages", value: "EN · 中文 · ES" },
  { icon: Cpu, label: "Stack", value: "Py · Java · React · C/C++" },
];

export function About() {
  return (
    <section id="about" className="relative border-t border-rule py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader num="02" eyebrow="About" title="A student, builder, and operator." />

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.4fr_1fr]">
          <div className="reveal space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              I'm a <span className="text-foreground">junior at The Ohio State University</span>{" "}
              studying Computer Science with an{" "}
              <span className="text-foreground">AI specialization</span> and a minor
              in Philosophy; an Entrepreneurship &amp; Innovation Scholar working at
              the intersection of systems thinking and human-centered design.
            </p>
            <p>
              My work spans software development, IT operations, and leadership.
              I've co-founded a startup, interned in IT at a healthcare nonprofit,
              and direct operations for a{" "}
              <span className="text-foreground">300+ member</span> student
              government. Along the way I've placed in hackathons, pitch
              competitions, and CTFs.
            </p>
            <p>
              I care about software that respects the people using it and about
              the ideas behind it as much as the code.
            </p>

            <div className="!mt-10 grid grid-cols-2 gap-px overflow-hidden border border-border bg-border sm:grid-cols-4">
              {facts.map((f) => (
                <div key={f.label} className="bg-card p-4">
                  <f.icon className="h-4 w-4 text-primary" />
                  <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                    {f.label}
                  </div>
                  <div className="mt-1 font-serif text-base">{f.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal reveal-delay-2">
            <div className="eyebrow mb-5">Specialties</div>
            <ul className="space-y-px overflow-hidden border border-border bg-border">
              {specialties.map((s) => (
                <li
                  key={s.label}
                  className="group flex items-center gap-4 bg-card p-5 transition-colors hover:bg-accent"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-border text-primary transition-colors group-hover:border-primary">
                    <s.icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-serif text-base">{s.label}</div>
                    <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                      {s.note}
                    </div>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground/60">→</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 border border-dashed border-border p-4">
              <div className="eyebrow mb-2">Certifications</div>
              <ul className="space-y-1 font-mono text-xs text-muted-foreground">
                <li>· CompTIA Network Pro</li>
                <li>· CompTIA PC Pro</li>
                <li>· Oracle Java Foundations</li>
                <li>· Oracle Database Foundations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
