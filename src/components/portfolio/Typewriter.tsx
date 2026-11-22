import { useEffect, useState } from "react";

/** Cycles through words with a typing effect; shows the first word statically for reduced motion. */
export function Typewriter({ words }: { words: readonly string[] }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(words[0] ?? "");
  const [deleting, setDeleting] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduce) setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const word = words[index % words.length] ?? "";
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && text === word) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    } else {
      timeout = setTimeout(
        () => setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
        deleting ? 40 : 80,
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, enabled]);

  return (
    <span className="inline-flex items-center">
      <span className="sr-only">{words.join(", ")}</span>
      <span aria-hidden className="caret pr-1 text-primary">
        {text}
      </span>
    </span>
  );
}
