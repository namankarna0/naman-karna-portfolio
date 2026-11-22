import { Gauge, Star } from "lucide-react";
import { skillGroups } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";
import { iconMap } from "./icons";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="04 · Skills"
      title="Technical Skills & Tech Stack"
      intro="AI/ML and Python are where I'm focusing most of my learning, supported by backend, web and design skills."
    >
      <Reveal className="glass mb-8 flex flex-col gap-3 rounded-2xl p-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-center gap-3 text-sm text-foreground">
          <Gauge className="h-5 w-5 text-primary" aria-hidden />
          Overall skill level: <strong className="font-semibold text-primary">Intermediate</strong>
        </p>
        <p className="text-sm text-muted-foreground">Still learning and improving with every project.</p>
      </Reveal>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => {
          const Icon = iconMap[g.icon];
          const isPrimary = i === 0;
          return (
            <Reveal
              key={g.title}
              delay={i * 60}
              className={cn(isPrimary && "md:col-span-2", g.featured && !isPrimary && "lg:row-span-1")}
            >
              <article
                className={cn(
                  "glass glass-hover relative h-full overflow-hidden rounded-2xl p-6",
                  g.featured && "border-primary/30",
                )}
              >
                {g.featured && <div className="bg-hero absolute inset-0 -z-10 opacity-80" aria-hidden />}
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={cn(
                      "grid place-items-center rounded-xl",
                      g.featured
                        ? "h-12 w-12 bg-gradient-primary text-primary-foreground shadow-glow"
                        : "h-11 w-11 bg-primary/10 text-primary",
                    )}
                  >
                    {Icon && <Icon className="h-5 w-5" aria-hidden />}
                  </span>
                  {g.featured && (
                    <span className="flex items-center gap-1 rounded-full border border-primary/40 bg-primary/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-primary">
                      <Star className="h-3 w-3" aria-hidden /> Focus
                    </span>
                  )}
                </div>
                <h3 className={cn("mt-5 font-semibold text-foreground", isPrimary ? "text-xl sm:text-2xl" : "text-lg")}>
                  {g.title}
                </h3>
                {g.note && <p className="mt-1.5 text-sm text-muted-foreground">{g.note}</p>}
                <ul className="mt-5 flex flex-wrap gap-2">
                  {g.skills.map((s) => (
                    <li
                      key={s.name}
                      className={cn(
                        "rounded-lg border px-3 py-1.5 font-mono transition-colors",
                        s.featured
                          ? "border-primary/50 bg-primary/15 text-sm font-semibold text-primary"
                          : isPrimary
                            ? "border-glass-border bg-secondary/70 text-sm text-foreground"
                            : "border-glass-border bg-secondary/50 text-xs text-foreground/85",
                      )}
                    >
                      {s.name}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
