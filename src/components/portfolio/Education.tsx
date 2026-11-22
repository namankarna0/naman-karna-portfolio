import { GraduationCap, MapPin, School } from "lucide-react";
import { education } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Education() {
  return (
    <Section id="education" eyebrow="02 · Education" title="Education">
      <ol className="relative ml-4 space-y-8 border-l border-glass-border sm:ml-6">
        {education.map((e, i) => {
          const Icon = e.current ? GraduationCap : School;
          return (
            <Reveal as="li" key={e.institution} delay={i * 90} className="relative pl-8 sm:pl-12">
              <span
                className={cn(
                  "absolute -left-5 top-5 grid h-10 w-10 place-items-center rounded-xl border",
                  e.current
                    ? "border-primary/50 bg-gradient-primary text-primary-foreground shadow-glow"
                    : "border-glass-border bg-secondary text-primary",
                )}
                aria-hidden
              >
                <Icon className="h-5 w-5" />
              </span>
              <article className="glass glass-hover rounded-2xl p-6 sm:p-7">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg font-semibold text-foreground sm:text-xl">{e.degree}</h3>
                  {e.current && (
                    <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-0.5 font-mono text-[11px] uppercase tracking-wider text-primary">
                      Current
                    </span>
                  )}
                </div>
                <p className="mt-2 text-base text-foreground/85">{e.institution}</p>
                <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" aria-hidden /> {e.location}
                </p>
                {(e.status || e.period) && (
                  <div className="mt-4 flex flex-wrap gap-2 font-mono text-xs">
                    {e.status && <span className="rounded-lg bg-secondary px-3 py-1.5 text-foreground/85">{e.status}</span>}
                    {e.period && <span className="rounded-lg bg-secondary px-3 py-1.5 text-primary">{e.period}</span>}
                  </div>
                )}
              </article>
            </Reveal>
          );
        })}
      </ol>
    </Section>
  );
}
