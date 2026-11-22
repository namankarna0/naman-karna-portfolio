import { navItems, profile } from "@/lib/portfolio-data";
import { Monogram } from "./Monogram";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-glass-border bg-navy-deep">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-primary opacity-60" aria-hidden />
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <div className="flex items-center gap-3">
              <Monogram />
              <span className="font-display text-lg font-semibold text-foreground">{profile.name}</span>
            </div>
            <p className="text-gradient mt-4 font-display text-base font-medium">{profile.tagline}</p>
          </div>
          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-2 sm:grid-cols-3">
              {navItems.map((n) => (
                <li key={n.id}>
                  <a href={`#${n.id}`} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <SocialLinks size="sm" />
        </div>
        <p className="mt-12 border-t border-glass-border pt-6 text-xs text-muted-foreground">
          © {year} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
