import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";
import { useReveal } from "@/components/portfolio/useReveal";
import { useEffect, useRef } from 'react';
import favicon from "@/assets/favicon.ico";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Caden Conde | Portfolio " },
      {
        name: "description",
        content:
          "Portfolio of Caden Conde — CS & AI student at The Ohio State University. Builder, problem-solver, hackathon winner.",
      },
    ],
    links: [
      {
        rel: "icon",
        href: favicon,
      },
    ],
  }),
  component: Index,
});

const WORKER_URL = 'https://portfolio-analytics.cadenconde.workers.dev/ping';

function sendPing(event:any) {
  fetch(WORKER_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      event,
      referrer: document.referrer || 'Direct visit',
    }),
  }).catch(() => {});
}

function Index() {
  
  const projectsRef = useRef(null);

  useEffect(() => {
  if (!sessionStorage.getItem('pinged')) {
    sessionStorage.setItem('pinged', 'true');
    sendPing('page_view');
  }

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        sendPing('viewed_projects');
        observer.disconnect();
      }
    },
    { threshold: 0.1 }
  );

  if (projectsRef.current) observer.observe(projectsRef.current);
  return () => observer.disconnect();
}, []);

  
  useReveal();
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Experience />
      <div ref={projectsRef}>
        <Projects />
      </div>
      <Contact />
    </main>
  );
}
