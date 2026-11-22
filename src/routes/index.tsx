import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/portfolio/About";
import { Certifications } from "@/components/portfolio/Certifications";
import { Contact } from "@/components/portfolio/Contact";
import { Education } from "@/components/portfolio/Education";
import { Experience } from "@/components/portfolio/Experience";
import { Footer } from "@/components/portfolio/Footer";
import { Hero } from "@/components/portfolio/Hero";
import { Navbar } from "@/components/portfolio/Navbar";
import { Projects } from "@/components/portfolio/Projects";
import { ScrollChrome } from "@/components/portfolio/ScrollChrome";
import { Services } from "@/components/portfolio/Services";
import { Skills } from "@/components/portfolio/Skills";

const title = "Naman Karna — Aspiring AI/ML Engineer & Computer Engineering Student";
const description =
  "Portfolio of Naman Karna, a Computer Engineering student at IOE Purwanchal Campus exploring AI/ML, Python, data science and backend development.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <ScrollChrome />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Services />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
