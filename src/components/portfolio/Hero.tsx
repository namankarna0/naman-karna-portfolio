import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/portfolio-data";
import { ProfileFrame } from "./ProfileFrame";
import { SocialLinks } from "./SocialLinks";
import { Typewriter } from "./Typewriter";

export function Hero() {
  return (
    <section id="home" aria-label="Introduction" className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-24 pb-20">
      <div className="bg-grid absolute inset-0 -z-10" aria-hidden />
      <div className="bg-hero absolute inset-0 -z-10" aria-hidden />
      <div className="absolute -left-32 top-24 -z-10 h-80 w-80 rounded-full bg-electric/20 blur-3xl animate-drift" aria-hidden />
      <div className="absolute -right-24 bottom-10 -z-10 h-72 w-72 rounded-full bg-violet/20 blur-3xl animate-drift [animation-delay:-6s]" aria-hidden />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
        <div className="order-2 min-w-0 lg:order-1">
          <p className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-xs text-muted-foreground">
            <span className="text-primary">{">"}</span> hello, world — I'm
          </p>
          <h1 className="text-5xl font-bold leading-[1.02] text-foreground sm:text-6xl lg:text-7xl">
            Naman <span className="text-gradient">Karna</span>
          </h1>
          <p className="mt-5 font-display text-xl font-medium text-foreground/90 sm:text-2xl">{profile.headline}</p>
          <p className="mt-3 max-w-xl text-base text-muted-foreground sm:text-lg">{profile.subheadline}</p>

          <p className="mt-6 h-8 font-mono text-base sm:text-lg">
            <span className="text-muted-foreground">~/role $ </span>
            <Typewriter words={profile.roles} />
          </p>

          <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">{profile.intro}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="hero" size="xl">
              <a href="#projects">
                Explore My Projects <ArrowRight aria-hidden />
              </a>
            </Button>
            <Button asChild variant="glass" size="xl">
              <a href="#contact">
                <Mail aria-hidden /> Contact Me
              </a>
            </Button>
          </div>

          <SocialLinks className="mt-9" />
        </div>

        <div className="order-1 mx-auto w-full max-w-[280px] sm:max-w-[340px] lg:order-2 lg:max-w-[400px]">
          <div className="animate-float">
            <ProfileFrame />
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary sm:flex"
      >
        <span className="flex h-9 w-6 justify-center rounded-full border border-current pt-2">
          <span className="h-2 w-1 rounded-full bg-current animate-scroll-dot" />
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
      </a>
    </section>
  );
}
