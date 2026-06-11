import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";
import { useReveal } from "@/components/portfolio/useReveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Caden Conde — Computer Science & AI" },
      {
        name: "description",
        content:
          "Portfolio of Caden Conde — CS & AI student at The Ohio State University. Builder, problem-solver, hackathon winner.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
