import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Info, Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { buildMailtoLink, contactSchema, type ContactInput } from "@/lib/contact";
import { profile } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { SocialLinks } from "./SocialLinks";

const fieldClass =
  "h-12 rounded-xl border-glass-border bg-secondary/50 text-base text-foreground placeholder:text-muted-foreground/70 focus-visible:border-primary/60 focus-visible:ring-primary/40";

export function Contact() {
  const [opened, setOpened] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactInput>({ resolver: zodResolver(contactSchema), mode: "onTouched" });

  const onSubmit = (data: ContactInput) => {
    window.location.href = buildMailtoLink(data);
    setOpened(true);
  };

  const info = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: "Phone", value: profile.phone, href: profile.phoneHref },
    { icon: MapPin, label: "Location", value: profile.location },
  ];

  return (
    <Section
      id="contact"
      eyebrow="08 · Contact"
      title="Let's Connect"
      intro="Have an interesting idea, project, or opportunity? I'd love to connect, collaborate, and explore how we can build something meaningful together."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] [&>*]:min-w-0">
        <Reveal className="space-y-4">
          {info.map(({ icon: Icon, label, value, href }) => {
            const content = (
              <>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <span className="min-w-0">
                  <span className="block font-mono text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
                  <span className="block break-words text-base text-foreground">{value}</span>
                </span>
              </>
            );
            return href ? (
              <a key={label} href={href} className="glass glass-hover flex items-center gap-4 rounded-2xl p-5">
                {content}
              </a>
            ) : (
              <div key={label} className="glass flex items-center gap-4 rounded-2xl p-5">
                {content}
              </div>
            );
          })}
          <div className="glass rounded-2xl p-5">
            <p className="mb-4 font-mono text-xs uppercase tracking-wider text-muted-foreground">Find me online</p>
            <SocialLinks />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form noValidate onSubmit={handleSubmit(onSubmit)} className="glass space-y-5 rounded-3xl p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="name" label="Full Name" error={errors.name?.message}>
                <Input id="name" autoComplete="name" placeholder="Your name" className={fieldClass} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} {...register("name")} />
              </Field>
              <Field id="email" label="Email Address" error={errors.email?.message}>
                <Input id="email" type="email" autoComplete="email" placeholder="you@example.com" className={fieldClass} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} {...register("email")} />
              </Field>
            </div>
            <Field id="subject" label="Subject" error={errors.subject?.message}>
              <Input id="subject" placeholder="What's this about?" className={fieldClass} aria-invalid={!!errors.subject} aria-describedby={errors.subject ? "subject-error" : undefined} {...register("subject")} />
            </Field>
            <Field id="message" label="Message" error={errors.message?.message}>
              <Textarea id="message" rows={6} placeholder="Tell me about your idea, project or opportunity..." className={cn(fieldClass, "h-auto min-h-40 py-3")} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined} {...register("message")} />
            </Field>

            <Button type="submit" variant="hero" size="xl" className="w-full sm:w-auto">
              <Send aria-hidden /> Send Message
            </Button>

            <div role="status" aria-live="polite">
              {opened ? (
                <p className="flex gap-3 rounded-xl border border-primary/30 bg-primary/10 p-4 text-sm text-foreground">
                  <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                  <span>
                    Your email app should now be open with the message ready — press <strong>Send</strong> there to deliver it.
                    If nothing opened, email me directly at{" "}
                    <a href={`mailto:${profile.email}`} className="font-medium text-primary underline underline-offset-4">
                      {profile.email}
                    </a>
                    .
                  </span>
                </p>
              ) : (
                <p className="text-xs text-muted-foreground">Sending opens your email app with your message ready to go.</p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

function Field({ id, label, error, children }: { id: string; label: string; error?: string | undefined; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-sm text-foreground/90">
        {label}
      </Label>
      {children}
      {error && (
        <p id={`${id}-error`} className="text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
