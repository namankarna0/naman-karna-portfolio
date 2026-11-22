import { Briefcase, CalendarDays, CheckCircle2, ExternalLink } from "lucide-react";
import { experience } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section id="experience" eyebrow="03 · Experience" title="Work Experience">
      <div className="grid gap-6 md:grid-cols-2">
        {experience.map((x, i) => (
          <Reveal key={x.organization} delay={i * 100}>
            
            <article className="glass glass-hover relative h-full overflow-hidden rounded-2xl p-6 sm:p-8">
              
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-primary" aria-hidden />
              
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Briefcase className="h-5 w-5" aria-hidden />
                </span>
              
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-foreground sm:text-xl">{x.role}</h3>
                  <p className="text-base text-primary">{x.organization}</p>
                </div>
                
              </div>
              <p className="mt-5 flex items-center gap-2 font-mono text-xs text-muted-foreground sm:text-sm">
                <CalendarDays className="h-4 w-4" aria-hidden /> {x.period}
                {x.current && (
                  <span className="ml-1 rounded-full bg-success/15 px-2 py-0.5 text-[11px] text-success">Active</span>
                )}
                
              </p>
              {x.summary && <p className="mt-4 text-sm text-foreground/85">{x.summary}</p>}
              <ul className="mt-5 space-y-3">
                {x.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                    {p}
                  </li>
                ))}
              </ul>
              <ul className="mt-6 flex flex-wrap gap-2">
                {x.tags.map((t) => (
                  <li key={t} className="rounded-md border border-glass-border bg-secondary/60 px-2.5 py-1 font-mono text-[11px] text-foreground/80">
                    {t}
                  </li>
                ))}
              </ul>
              {x.link && (
  <a
    href={x.link.href}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-5 inline-flex items-center gap-2 rounded-lg border border-glass-border bg-secondary/60 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-accent"
  >
    {x.link.label}
    <ExternalLink className="h-4 w-4" aria-hidden />
  </a>
)}

            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
