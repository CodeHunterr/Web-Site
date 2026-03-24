import { companyInfo } from "../company";
import type { ContactPageContent } from "../types";

export const contactPageContent = {
  metadata: {
    title: `${companyInfo.brandName} | Contact`,
    description: "Contact Pluto Enerji for raw kaolin inquiries, sample requests and business collaboration.",
  },
  hero: {
    eyebrow: "",
    titleLine1: "",
    titleLine2: companyInfo.brandName,
    description:
      "Raw kaolin inquiries, sample requests, industrial grade discussions and business collaboration can be directed through the contact channels below.",
    notice: "Use the form below or email info@plutoenerji.com for direct commercial contact.",
    primaryLabel: "Send Message",
    secondaryLabel: "View contact details",
  },
  heroHighlights: [
    {
      title: "Raw kaolin inquiries",
      description:
        "A direct route for tuvenan raw kaolin demand, supply discussions and commercial follow-up.",
    },
    {
      title: "Sample requests",
      description:
        "Structured contact flow for material review, qualification and application-oriented sample coordination.",
    },
    {
      title: "Business collaboration",
      description:
        "Professional communication for partnerships, distribution discussions and industrial cooperation.",
    },
  ],
  company: {
    section: {
      eyebrow: "Company Information",
      title: "A direct B2B contact point for raw kaolin supply and industrial cooperation.",
      description:
        `${companyInfo.brandName} supports commercial communication, sample coordination and product discussions through a clear and responsive contact structure.`,
    },
    summary:
      "For raw kaolin supply, processed grade questions and partnership discussions, info@plutoenerji.com is the primary company contact.",
    details: [
      { label: "Company", value: companyInfo.brandName },
      { label: "Address", value: companyInfo.address },
      { label: "Email", value: companyInfo.email, href: companyInfo.emailHref },
      { label: "Phone", value: companyInfo.phone, href: companyInfo.phoneHref },
    ],
  },
  form: {
    title: "Send a raw kaolin or product inquiry",
    description:
      "Use this form to send raw kaolin supply requests, sample inquiries and business messages directly to Pluto Enerji.",
    submitLabel: "Send inquiry",
    fields: [
      { name: "name", label: "Full Name", type: "text", placeholder: "Enter full name", required: true },
      { name: "company", label: "Company", type: "text", placeholder: "Enter company name" },
      { name: "email", label: "Email", type: "email", placeholder: "Enter email address", required: true },
      { name: "phone", label: "Phone", type: "tel", placeholder: "Enter phone number" },
      {
        name: "subject",
        label: "Subject",
        type: "text",
        placeholder: "Raw kaolin inquiry, sample request or business topic",
        fullWidth: true,
        required: true,
      },
      {
        name: "message",
        label: "Message",
        type: "textarea",
        placeholder: "Write your inquiry",
        rows: 6,
        fullWidth: true,
        required: true,
      },
    ],
    messages: {
      success: "Your inquiry has been sent successfully. Our team will contact you shortly.",
      error: "We could not send your inquiry. Please try again or email info@plutoenerji.com.",
      sending: "Sending...",
      validationRequired: "Please complete the required fields.",
      validationEmail: "Please enter a valid email address.",
    },
  },
  supportCards: [
    {
      title: "Raw Kaolin Inquiry",
      description:
        "Use this route for tuvenan raw kaolin demand, pricing requests and bulk supply discussions.",
    },
    {
      title: "Sample Request",
      description:
        "Open a sample discussion for material review, qualification and sector-specific product evaluation.",
    },
    {
      title: "Business Collaboration",
      description:
        "Start a conversation about partnerships, supply cooperation and industrial business opportunities.",
    },
  ],
} satisfies ContactPageContent;
