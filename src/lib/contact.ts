import { z } from "zod";

export const CONTACT_EMAIL = "namankarna0@gmail.com";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  subject: z.string().trim().min(3, "Please add a short subject").max(150, "Subject is too long"),
  message: z
    .string()
    .trim()
    .min(10, "Your message should be at least 10 characters")
    .max(2000, "Message must be under 2000 characters"),
});

export type ContactInput = z.infer<typeof contactSchema>;

/** Builds a mailto link addressed to Naman with the visitor's message pre-filled. */
export function buildMailtoLink(input: ContactInput): string {
  const body = `${input.message}\n\n— ${input.name} (${input.email})`;
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(input.subject)}&body=${encodeURIComponent(body)}`;
}
