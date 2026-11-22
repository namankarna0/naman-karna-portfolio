import { ExternalLink, Github, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { projects, type Project } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

function StackTags({ stack }: { stack: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Technology stack">
      {stack.map((t) => (
        <li key={t} className="rounded-md border border-glass-border bg-secondary/60 px-2.5 py-1 font-mono text-[11px] text-foreground/85">
          {t}
        </li>
      ))}
    </ul>
  );
}

function ProjectDetails({ project }: { project: Project }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="glass" size="lg">
          View Project Details
        </Button>
      </DialogTrigger>
      <DialogContent className="glass max-h-[88vh] overflow-y-auto border-glass-border bg-popover sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl text-foreground">{project.title}</DialogTitle>
          <DialogDescription className="text-primary">{project.subtitle}</DialogDescription>
        </DialogHeader>
        <img
          src={project.image}
          alt={project.imageAlt}
          className="aspect-video w-full rounded-xl object-cover"
          loading="lazy"
        />
        <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
          {project.description.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        {project.features && (
          <div>
            <h4 className="mb-2 text-sm font-semibold text-foreground">Features</h4>
            <ul className="grid gap-1.5 text-sm text-muted-foreground sm:grid-cols-2">
              {project.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <span className="text-primary" aria-hidden>▹</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div>
          <h4 className="mb-2 text-sm font-semibold text-foreground">Technology Stack</h4>
          <StackTags stack={project.stack} />
        </div>
        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          <Users className="h-4 w-4 text-primary" aria-hidden />
          Contributors: {project.contributors.join(", ")}
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          {project.github && (
            <Button asChild variant="hero">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github aria-hidden /> View on GitHub
              </a>
            </Button>
          )}
          {project.details && (
            <Button asChild variant="glass">
              <a href={project.details} target="_blank" rel="noopener noreferrer">
                <ExternalLink aria-hidden /> View on LinkedIn
              </a>
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function Projects() {
  return (
    <Section id="projects" eyebrow="05 · Projects" title="Featured Projects">
      <div className="grid gap-8 lg:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 120}>
            <article className="glass glass-hover group flex h-full flex-col overflow-hidden rounded-3xl">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={p.image}
                  alt={p.imageAlt}
                  loading="lazy"
                  width={1200}
                  height={675}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" aria-hidden />
                <span className="glass absolute left-4 top-4 rounded-full px-3 py-1 font-mono text-[11px] text-foreground">
                  0{i + 1}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <h3 className="text-2xl font-semibold text-foreground">{p.title}</h3>
                <p className="mt-1 text-sm text-primary">{p.subtitle}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.description[0]}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description[1]}</p>
                <div className="mt-6">
                  <StackTags stack={p.stack} />
                </div>
                <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4 text-primary" aria-hidden />
                  With {p.contributors.join(", ")}
                </p>
                <div className="mt-auto flex flex-wrap gap-3 pt-7">
                  {p.github && (
                    <Button asChild variant="hero" size="lg">
                      <a href={p.github} target="_blank" rel="noopener noreferrer">
                        <Github aria-hidden /> View on GitHub
                      </a>
                    </Button>
                  )}
                  <ProjectDetails project={p} />
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
