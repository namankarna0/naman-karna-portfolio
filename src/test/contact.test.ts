import { describe, expect, it } from "vitest";
import { buildMailtoLink, contactSchema } from "@/lib/contact";

const valid = {
  name: "Asha Rai",
  email: "asha@example.com",
  subject: "Internship opportunity",
  message: "Hi Naman, we'd love to talk about an AI internship.",
};

describe("contact form", () => {
  it("accepts a complete message", () => {
    expect(contactSchema.safeParse(valid).success).toBe(true);
  });

  it("rejects an invalid email address", () => {
    expect(contactSchema.safeParse({ ...valid, email: "not-an-email" }).success).toBe(false);
  });

  it("rejects an empty message", () => {
    expect(contactSchema.safeParse({ ...valid, message: "   " }).success).toBe(false);
  });

  it("addresses the email to Naman with the subject filled in", () => {
    const link = buildMailtoLink(valid);
    expect(link.startsWith("mailto:namankarna0@gmail.com?")).toBe(true);
    expect(link).toContain("subject=Internship%20opportunity");
    expect(decodeURIComponent(link)).toContain("asha@example.com");
  });
});
