import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

/** Top scroll-progress bar plus a back-to-top button. */
export function ScrollChrome() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.documentElement.classList.add("js-ready");
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(max > 0 ? window.scrollY / max : 0);
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const showTop = progress > 0.08;

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-[60] h-[3px]" aria-hidden>
        <div
          className="h-full origin-left bg-gradient-primary"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0 })}
        aria-label="Back to top"
        className={cn(
          "glass fixed bottom-5 right-5 z-50 grid h-12 w-12 place-items-center rounded-full text-primary transition-all duration-300 hover:shadow-glow sm:bottom-8 sm:right-8",
          showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
        )}
      >
        <ArrowUp className="h-5 w-5" aria-hidden />
      </button>
    </>
  );
}
