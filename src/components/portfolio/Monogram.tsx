import { profile } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

export function Monogram({
  className,
}: {
  className?: string | undefined;
}) {
  return (
    <span
      className={cn(
        "grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-full bg-gradient-primary font-display text-sm font-bold text-primary-foreground shadow-glow",
        className,
      )}
      aria-hidden
    >
      {profile.photo ? (
        <img
          src={profile.photo}
          alt=""
          className="h-full w-full object-cover"
          width={40}
          height={40}
        />
      ) : (
        profile.initials
      )}
    </span>
  );
}
