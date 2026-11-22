g# Naman Karna — Personal Portfolio

**Aspiring AI/ML Engineer & Computer Engineering Student**  
Biratnagar, Nepal · Learning. Building. Creating. Improving.

A single-page personal portfolio showcasing my education, experience, technical skills, projects, services, and certifications. Built with React, TypeScript, and TanStack Start, with a dark navy theme, cyan and electric-blue accents, glass-style surfaces, and restrained animations.

[GitHub](https://github.com/namankarna0) · [LinkedIn](https://www.linkedin.com/in/namankarna/) · [Email](mailto:namankarna0@gmail.com)

## Contents

- [Overview](#overview)
- [Tech stack](#tech-stack)
- [Run locally](#run-locally)
- [Available commands](#available-commands)
- [Project structure](#project-structure)
- [Update portfolio content](#update-portfolio-content)
- [Add a profile photo](#add-a-profile-photo)
- [Use the photo in the top-left icon](#use-the-photo-in-the-top-left-icon)
- [Add certificates](#add-certificates)
- [Put selected certificates first](#put-selected-certificates-first)
- [Add a graphic-design poster gallery](#add-a-graphic-design-poster-gallery)
- [Contact form](#contact-form)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [Credits and usage](#credits-and-usage)

## Overview

The portfolio includes:

- **Home:** introduction, rotating role text, social links, and a portrait frame.
- **About:** background, interests, and learning journey.
- **Education:** Computer Engineering studies and earlier education.
- **Experience:** graphic-design work and backend-development internship.
- **Skills:** AI/ML, Python, backend and web development, SQL, tools, and design.
- **Projects:** DEFENDER++ and QR Attendance System, with images and available links.
- **Services:** areas of technical and creative work.
- **Certifications:** certificate descriptions, optional images, and verification links.
- **Contact:** contact information and a validated form that opens the visitor's email app.

The page includes smooth section navigation, a mobile menu, scroll-reveal effects, and a back-to-top control.

> **Included versus optional:** The source currently uses an NK portrait placeholder and includes the Kaggle Pandas course entry without a certificate image. The small navigation/footer icon also shows NK. Photo customization and the graphic-design gallery below are instructions you can apply; the gallery is not yet included in the page.

## Tech stack

| Area | Technology |
| --- | --- |
| Application | React 19, TypeScript, TanStack Start |
| Routing | TanStack Router |
| Development and builds | Vite |
| Styling | Tailwind CSS v4, semantic CSS theme tokens |
| UI and icons | shadcn-style components, Radix UI, Lucide React |
| Forms and validation | React Hook Form, Zod |
| Tests | Vitest, React Testing Library |

## Run locally

### Prerequisites

- A current **Node.js LTS** release, with npm included: [Download Node.js](https://nodejs.org/).
- A code editor such as VS Code.
- The extracted project source, including `package.json`.

### Start the portfolio

1. Extract the source ZIP if you downloaded one.
2. Open the extracted project folder in your editor.
3. Open a terminal **inside the folder containing `package.json`**.
4. Run:

```bash
npm install
npm run dev
```

Open the local URL printed in the terminal. Keep the terminal running while using the site; press **Ctrl+C** to stop it.

**There is no single file to double-click.** Vite starts the application, and `src/routes/index.tsx` defines the portfolio page. Saving source changes updates the local preview automatically.

## Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start local development |
| `npm run build` | Generate a production build |
| `npm run build:dev` | Build using development mode |
| `npm run preview` | Preview the generated build locally |
| `npm run test` | Run the test suite once |
| `npm run test:watch` | Run tests in watch mode |
| `npm run lint` | Check lint rules |
| `npm run format` | Format project files; this modifies files |

## Project structure

```text
src/
├── assets/                      # Project images and your added photos/posters
├── components/
│   ├── portfolio/               # Page sections and shared portfolio elements
│   │   ├── Certifications.tsx
│   │   ├── Monogram.tsx         # Small navigation and footer icon
│   │   ├── ProfileFrame.tsx     # Large portrait or NK placeholder
│   │   ├── Reveal.tsx
│   │   └── Section.tsx
│   └── ui/                      # Shared UI components
├── lib/
│   ├── portfolio-data.ts        # Profile, links, and section content
│   └── contact.ts               # Contact validation and mailto builder
├── routes/
│   ├── __root.tsx               # Shared document shell
│   └── index.tsx                # Single-page section order and page metadata
├── test/                        # Routing and contact tests
├── router.tsx
└── styles.css                   # Global styles and theme tokens
public/                         # Public assets, favicon, and robots.txt
package.json                    # Dependencies and commands
vite.config.ts                  # Build and development configuration
```

## Update portfolio content

Most content changes belong in **`src/lib/portfolio-data.ts`**:

| Export | What to update |
| --- | --- |
| `profile` | Name, introduction, roles, photo, location, and contact details |
| `socials` | Social-profile links |
| `navItems` | Navigation labels and section anchors |
| `about` | About paragraphs and highlights |
| `education` | Education entries |
| `experience` | Roles, organizations, dates, and responsibilities |
| `skillGroups` | Skill categories and individual skills |
| `projects` | Project descriptions, images, stack, contributors, and links |
| `services` | Service descriptions |
| `certifications` | Certificate entries, images, and verification links |

Keep section components focused on rendering this content. Use only real facts and links; omit optional fields when details are unavailable.

To change colors or typography, edit `src/styles.css`. To change the page title or social-sharing description, edit the `head()` metadata in `src/routes/index.tsx`.

## Add a profile photo

1. Save your photo as **`src/assets/profile.jpg`**.
2. Add this import at the top of `src/lib/portfolio-data.ts`:

```ts
import profilePhoto from "@/assets/profile.jpg";
```

3. Inside `profile`, replace:

```ts
photo: null as string | null,
```

with:

```ts
photo: profilePhoto,
```

The large portrait frame will display your photo. Match the import to the actual filename and extension if you use PNG or WebP instead. A square image with the face centered works well because the frame crops the image to fit.

## Use the photo in the top-left icon

After setting `profile.photo`, replace **`src/components/portfolio/Monogram.tsx`** with:

```tsx
import { profile } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

export function Monogram({ className }: { className?: string | undefined }) {
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
```

This changes both the top-left icon and the footer icon. They share the same component and fall back to initials when no photo is set.

## Add certificates

### Add an image to the existing Pandas entry

1. Save the certificate image as `src/assets/kaggle-pandas.jpg`.
2. Import it at the top of `src/lib/portfolio-data.ts`:

```ts
import pandasCertificate from "@/assets/kaggle-pandas.jpg";
```

3. Add the `image` property to the existing entry:

```ts
export const certifications: Certification[] = [
  {
    title: "Pandas Course",
    issuer: "Kaggle",
    status: "Completed",
    description:
      "Successfully completed the Pandas course on Kaggle as part of my continuous learning journey in Python, Data Science, and Artificial Intelligence.",
    image: pandasCertificate,
  },
];
```

### Add more certificates

Import each new image, then add another object **inside the same `certifications` array**, separated by a comma:

```ts
// At the top of the file, after saving your actual image:
import additionalCertificate from "@/assets/additional-certificate.jpg";

// Inside the existing certifications array:
{
  title: "Your actual course title",
  issuer: "Your actual certificate issuer",
  status: "Completed",
  description: "Describe the course you completed.",
  image: additionalCertificate,
},
```

Replace the example content with your real details. If you have a public verification URL, add `verifyUrl` with that URL. Otherwise, leave the property out. Do not add a second `export const certifications` declaration.

PNG, JPG, and WebP files can be displayed directly. A PDF cannot be used as an `<img>` source; export it as an image first. Without an image, the existing certificate placeholder remains visible.

## Put selected certificates first

Move the **two or three complete certificate objects** you want to highlight to the start of the `certifications` array. The page renders certificates in array order.

This is ordering, not a separate sticky or pinned feature. Keep each object's properties together and separate objects with commas.

## Add a graphic-design poster gallery

This optional section showcases posters separately from software projects.

### 1. Add poster images and content

Save your images in `src/assets/`, then add imports to `src/lib/portfolio-data.ts`:

```ts
import poster1 from "@/assets/poster-1.jpg";
import poster2 from "@/assets/poster-2.jpg";
```

Add this export at the bottom of the same file, replacing the titles with the actual poster names:

```ts
export const graphicDesign = {
  eyebrow: "Graphic Design",
  title: "Posters & Visual Design",
  posters: [
    { title: "Your first poster title", image: poster1 },
    { title: "Your second poster title", image: poster2 },
  ],
};
```

Add the following entry to the existing `navItems` array, preferably after Projects:

```ts
{ id: "graphic-design", label: "Graphic Design" },
```

### 2. Create the gallery section

Create **`src/components/portfolio/GraphicDesign.tsx`**:

```tsx
import { graphicDesign } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function GraphicDesign() {
  return (
    <Section
      id="graphic-design"
      eyebrow={graphicDesign.eyebrow}
      title={graphicDesign.title}
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {graphicDesign.posters.map((poster) => (
          <Reveal key={poster.title}>
            <article className="glass overflow-hidden rounded-lg">
              <a
                href={poster.image}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${poster.title} full size`}
                className="block focus-visible:outline-2 focus-visible:outline-primary"
              >
                <img
                  src={poster.image}
                  alt={poster.title}
                  className="aspect-[3/4] w-full bg-secondary object-contain"
                  loading="lazy"
                />
              </a>
              <h3 className="p-4 text-lg font-semibold text-foreground">
                {poster.title}
              </h3>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
```

The gallery preserves each poster's full composition. Clicking a poster opens the image in a new tab. Use unique poster titles because the gallery uses titles as list keys.

### 3. Place it on the page

In **`src/routes/index.tsx`**, add:

```ts
import { GraphicDesign } from "@/components/portfolio/GraphicDesign";
```

Then insert the section between the existing Projects and Services sections:

```tsx
<Projects />
<GraphicDesign />
<Services />
```

Save all three files. Both the main navigation and footer read `navItems`, so the new link appears in both. Keep the section ID and navigation ID identical.

To add more posters later, import the images and append entries to `graphicDesign.posters`; no layout changes are needed.

## Contact form

The form validates the visitor's name, email, subject, and message, then opens their email application with a prefilled draft addressed to **namankarna0@gmail.com**.

- The visitor must send the email from their email app.
- The website does **not** send or store messages itself.
- A configured email handler is required on the visitor's device.
- No email-service API key or database is needed for this behavior.

Validation and draft generation live in `src/lib/contact.ts`, with tests in `src/test/contact.test.ts`. If you change the destination email, update **both** `CONTACT_EMAIL` in `contact.ts` and `profile.email` in `portfolio-data.ts`.

## Deployment

### Through Lovable

Open the project in Lovable and use **Publish** when you are ready. Saving code or committing changes does not publish the site automatically.

### On another host

Run `npm run build` in your local checkout and use a deployment setup compatible with **TanStack Start and the project's Cloudflare-targeted server output**. This is not a plain HTML site: do not assume that uploading source files or a generic `dist` folder to static hosting is sufficient.

Follow the chosen host's TanStack Start instructions and verify the production page before sharing its address. Keep private credentials out of the source repository.

## Troubleshooting

| Problem | What to check |
| --- | --- |
| `npm` is not recognized | Install Node.js LTS, then reopen the terminal |
| `package.json` cannot be found | Open the terminal in the extracted project folder containing that file |
| An imported image cannot be found | Check its location, extension, and exact capitalization; hosted builds can be case-sensitive |
| A certificate does not appear | Add the object inside the existing array and check commas and braces |
| The large portrait still shows NK | Confirm `profile.photo` uses the imported photo instead of `null` |
| The small icon still shows NK | Apply the separate `Monogram.tsx` replacement above |
| The gallery link does not scroll | Use `graphic-design` for both the section ID and navigation ID, and render `<GraphicDesign />` |
| The email draft does not open | Configure a default email handler or use the displayed email address directly |
| The page is blank after an edit | Check the development terminal for the first error, fix it, then refresh the browser |

## Credits and usage

**Portfolio owner:** Naman Karna  
**Built with:** [Lovable](https://lovable.dev), React, TanStack Start, and the open-source tools listed above.

Project contributors are credited alongside their projects in `src/lib/portfolio-data.ts`. Preserve accurate attribution when updating those entries.

No open-source license is currently declared in this repository. Do not assume that the portfolio's source, personal photos, certificates, or design work are licensed for reuse; obtain permission or add an explicit license before distributing them under new terms.
