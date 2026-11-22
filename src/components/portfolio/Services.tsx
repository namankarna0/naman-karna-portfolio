import { services } from "@/lib/portfolio-data";
import { iconMap } from "./icons";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="06 · Services"
      title="What I Can Do"
      intro="Areas I work in and can help with, as I keep building my experience."
    >
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => {
          const Icon = iconMap[s.icon];
          return (
            <Reveal
              as="li"
              key={s.title}
              delay={i * 60}
              className={i === 0 ? "sm:col-span-2 lg:col-span-2" : undefined}
            >
              <article className="glass glass-hover group h-full rounded-2xl p-6">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-gradient-primary group-hover:text-primary-foreground group-hover:shadow-glow">
                  {Icon && <Icon className="h-5 w-5" aria-hidden />}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </article>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}
