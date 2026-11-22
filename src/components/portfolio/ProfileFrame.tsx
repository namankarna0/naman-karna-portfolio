import { profile } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

/** Rounded portrait frame with a cyan glow. Shows the NK monogram until a photo is set. */
export function ProfileFrame({ className }: { className?: string | undefined }) {
  return (
    <div className={cn("relative aspect-square w-full", className)}>
      <div className="absolute -inset-6 rounded-full bg-gradient-primary opacity-25 blur-3xl animate-drift" aria-hidden />
      <div
        className="absolute -inset-3 rounded-[2.5rem] border border-dashed border-primary/30 animate-spin-slow"
        aria-hidden
      />
      <div className="glow-ring relative h-full w-full overflow-hidden rounded-[2rem] bg-navy-deep">
        {profile.photo ? (
          <img
            src={profile.photo}
            alt="Portrait of Naman Karna"
            className="h-full w-full object-cover"
            width={640}
            height={640}
          />
        ) : (
          <div className="relative grid h-full w-full place-items-center" role="img" aria-label="Naman Karna monogram">
            <div className="bg-grid absolute inset-0 opacity-70" aria-hidden />
            <div className="bg-hero absolute inset-0" aria-hidden />
            <span className="text-gradient relative font-display text-[6.5rem] font-bold leading-none sm:text-[8rem]">
              NK
            </span>
            <span className="absolute bottom-6 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              Biratnagar · Nepal
            </span>
          </div>
        )}
      </div>
      <div className="glass absolute -bottom-4 -left-4 flex items-center gap-2 rounded-xl px-3 py-2 font-mono text-xs text-foreground sm:-left-8">
        <span className="h-2 w-2 rounded-full bg-success shadow-glow" aria-hidden />
        Open to opportunities
      </div>
    </div>
  );
}
