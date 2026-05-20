import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name too long")
    .regex(/^[\p{L}\s'-]+$/u, "Name contains invalid characters"),

  email: z
    .string()
    .email("Please enter a valid email address")
    .max(254, "Email too long"),

  phone: z
    .string()
    .min(7, "Phone number too short")
    .max(20, "Phone number too long")
    .regex(/^\+?[\d\s\-().]+$/, "Invalid phone number format"),

  business: z
    .string()
    .min(2, "Business name must be at least 2 characters")
    .max(150, "Business name too long"),

  platform: z.enum(["Salla", "Zid", "Shopify", "WooCommerce", "Next.js", "Other"]),

  budget: z.enum([
    "Under 1,000 $",
    "1,000-5,000 $",
    "5,000-15,000 $",
    "15,000-25,000 $",
    "25,000+ $",
  ]),

  // No transform — keep optional string so RHF input type matches output type
  url: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^https?:\/\/.+/.test(val),
      "URL must start with http:// or https://"
    ),

  goal: z
    .string()
    .min(20, "Please describe your goal in at least 20 characters")
    .max(2000, "Message too long"),

  // Honeypot — must be empty; bots fill this
  _hp: z.string().max(0, "Bot detected").optional(),
});

/** Shape of values inside the React Hook Form (input type) */
export type ContactFormInput = z.input<typeof contactSchema>;

/** Shape after Zod parsing — used in the API route */
export type ContactFormData = z.output<typeof contactSchema>;
