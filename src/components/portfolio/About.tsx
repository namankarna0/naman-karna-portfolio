import { about, profile } from "@/lib/portfolio-data";
import { iconMap } from "./icons";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" eyebrow="01 · About" title="About Me">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
        <Reveal className="min-w-0 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p className="font-display text-lg font-medium text-foreground sm:text-xl">{about.lead}</p>
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
          <p className="text-gradient font-display text-xl font-semibold">{profile.tagline}</p>
        </Reveal>

        <div className="min-w-0 space-y-6">
          <Reveal delay={100} className="glass overflow-hidden rounded-2xl">
            <div className="flex items-center gap-2 border-b border-glass-border px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-destructive/70" aria-hidden />
              <span className="h-3 w-3 rounded-full bg-chart-5/70" aria-hidden />
              <span className="h-3 w-3 rounded-full bg-success/70" aria-hidden />
              <span className="ml-3 font-mono text-xs text-muted-foreground">naman.py</span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7 text-muted-foreground sm:text-sm">
              <code>
                <span className="text-violet">class</span> <span className="text-primary">Naman</span>
{"(Engineer):\n"}
{"    focus = "}
<span className="text-success">"AI / Machine Learning"</span>
{"\n    stack = {\n        "}
<span className="text-success">"languages"</span>
{": ["}
<span className="text-success">"Python"</span>, <span className="text-success">"JavaScript"</span>,{" "}
<span className="text-success">"C++"</span>, <span className="text-success">"C"</span>
{"],\n        "}
<span className="text-success">"backend"</span>
{": ["}
<span className="text-success">"Django"</span>, <span className="text-success">"Node.js"</span>{" "}

{"],\n        "}
<span className="text-success">"data_ml"</span>
{": ["}
<span className="text-success">"Pandas"</span>, <span className="text-success">"NumPy"</span>{" "}

{"],\n        "}
<span className="text-success">"databases"</span>
{": ["}
<span className="text-success">"PostgreSQL"</span>, <span className="text-success">"MongoDB"</span>
{"],\n        "}
<span className="text-success">"tools"</span>
{": ["}
<span className="text-success">"Git"</span>, <span className="text-success">"Expo"</span>,{" "}
<span className="text-success">"Postman"</span>, <span className="text-success">"ThunderClient"</span>
{"],\n    }\n"}
{"    campus = "}
<span className="text-success">"IOE Purwanchal Campus"</span>
{"\n\n    "}
<span className="text-violet">def</span> <span className="text-primary">loop</span>
{"(self):\n        "}
<span className="text-violet">while</span> <span className="text-electric">True</span>
{":\n            learn(); build(); create(); improve()"}
              </code>
            </pre>
          </Reveal>

          <ul className="grid grid-cols-2 gap-4">
            {about.highlights.map((h, i) => {
              const Icon = iconMap[h.icon];
              return (
                <Reveal as="li" key={h.label} delay={150 + i * 70} className="glass glass-hover rounded-2xl p-5">
                  {Icon && (
                    <span className="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                  )}
                  <p className="text-sm font-medium leading-snug text-foreground">{h.label}</p>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </Section>
  );
}
