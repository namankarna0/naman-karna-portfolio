import { Award, BadgeCheck, FileImage } from "lucide-react";
import { certifications } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Certifications() {
  return (
    <Section id="certifications" eyebrow="07 · Certifications" title="Certifications & Achievements">
      <div className="grid gap-6 md:grid-cols-2">
        {certifications.map((c) => (
          <Reveal key={c.title}>
            <article className="glass glass-hover relative h-full overflow-hidden rounded-3xl p-6 sm:p-8">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/15 blur-3xl" aria-hidden />
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
                    <Award className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{c.issuer}</p>
                    <h3 className="text-xl font-semibold text-foreground">{c.title}</h3>
                  </div>
                </div>
                <span className="flex items-center gap-1 rounded-full bg-success/15 px-3 py-1 text-xs font-medium text-success">
                  <BadgeCheck className="h-3.5 w-3.5" aria-hidden /> {c.status}
                </span>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{c.description}</p>

              {c.image ? (
                <img src={c.image} alt={`${c.title} certificate from ${c.issuer}`} className="mt-6 w-full rounded-xl" loading="lazy" />
              ) : (
                <div className="mt-6 grid aspect-[16/7] place-items-center rounded-xl border border-dashed border-glass-border bg-secondary/40 text-center">
                  <div className="flex flex-col items-center gap-2 text-muted-foreground">
                    <FileImage className="h-6 w-6" aria-hidden />
                    <span className="text-xs">Certificate image coming soon</span>
                  </div>
                </div>
              )}

              {c.verifyUrl && (
                <a
                  href={c.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex text-sm font-medium text-primary underline-offset-4 hover:underline"
                >
                  Verify certificate
                </a>
              )}
            </article>
          </Reveal>
        ))}
        <Reveal delay={100}>
          <div className="grid h-full min-h-48 place-items-center rounded-3xl border border-dashed border-glass-border p-8 text-center">
            <p className="max-w-xs text-sm text-muted-foreground">
              More certifications on the way as the AI/ML learning journey continues.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
