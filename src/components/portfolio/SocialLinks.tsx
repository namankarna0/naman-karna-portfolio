import { Facebook, Github, Instagram, Linkedin, type LucideIcon } from "lucide-react";
import { socials, type SocialKey } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

const icons: Record<SocialKey, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  facebook: Facebook,
  instagram: Instagram,
};

export function SocialLinks({ className, size = "md" }: { className?: string | undefined; size?: "sm" | "md" }) {
  return (
    <ul className={cn("flex items-center gap-3", className)}>
      {socials.map(({ key, label, href }) => {
        const Icon = icons[key];
        return (
          <li key={key}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Naman Karna on ${label}`}
              className={cn(
                "glass grid place-items-center rounded-xl text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary hover:shadow-glow",
                size === "md" ? "h-11 w-11" : "h-10 w-10",
              )}
            >
              <Icon className="h-[18px] w-[18px]" aria-hidden />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
