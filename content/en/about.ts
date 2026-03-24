import { companyInfo } from "../company";
import type { AboutPageContent } from "../types";

export const aboutPageContent = {
  metadata: {
    title: `${companyInfo.brandName} | About`,
    description: "About Pluto Enerji, a kaolin-focused company positioned around raw kaolin supply and industrial product portfolio.",
  },
  hero: {
    eyebrow: "",
    titleLine1: "Trusted Partner in Kaolin Supply",
    titleLine2: "",
    description:
      `${companyInfo.brandName} is a kaolin-focused company built around ready tuvenan raw kaolin supply, disciplined commercial communication and a professional portfolio structure for processed grades.`,
    notice: "Raw kaolin inquiries and partnership discussions are welcome.",
    primaryLabel: "Contact Us",
    secondaryLabel: "Explore Applications",
  },
  heroHighlights: [
    {
      title: "Raw supply focus",
      description:
        "Ready raw kaolin supply is positioned as the lead commercial offer for industrial buyers and trading partners.",
    },
    {
      title: "Processed portfolio",
      description:
        "Washed, refined, micronized and industrial-grade kaolin are presented within an active portfolio language.",
    },
    {
      title: "B2B response",
      description:
        "The company communicates with a practical structure for inquiries, samples and business collaboration.",
    },
  ],
  overview: {
    section: {
      eyebrow: "Company Overview",
      title: "A kaolin company shaped for supply discussions, technical review and industrial partnerships.",
      description:
        `${companyInfo.brandName} presents its product structure with commercial clarity, giving raw kaolin supply clear visibility while also supporting buyers interested in processed and application-aligned grades.`,
    },
    narrative:
      "The company approach is built around direct communication, dependable follow-up and a portfolio language that helps industrial buyers quickly understand available raw kaolin, refined product options and cooperation pathways.",
    points: [
      "Tuvenan raw kaolin is positioned first for sourcing, evaluation and commercial demand.",
      "Processed kaolin language supports washed, refined, micronized and industrial-grade product discussions.",
      "Communication is organized around inquiries, samples and long-term cooperation opportunities.",
    ],
  },
  portfolio: {
    section: {
      eyebrow: "Commercial Structure",
      title: "A portfolio designed to speak clearly to industrial buyers.",
      description:
        "From raw supply to processed grades, the company presents kaolin with a ready and professional B2B narrative rather than a tentative roadmap.",
    },
    cards: [
      {
        title: "Raw Kaolin Supply",
        description:
          "Ready tuvenan kaolin positioned for bulk sourcing, industrial qualification and commercial partnership discussions.",
      },
      {
        title: "Processed Grades",
        description:
          "Washed, refined and micronized kaolin are presented as part of the active portfolio language for industrial demand.",
      },
      {
        title: "Industrial Alignment",
        description:
          "Portfolio communication supports ceramics, sanitaryware, porcelain, polymers and coating-related applications.",
      },
    ],
  },
  contact: {
    section: {
      eyebrow: "Partnership",
      title: "Open a direct conversation on raw kaolin, samples or industrial supply needs.",
      description:
        "Pluto Enerji is positioned to respond to sourcing requests, sample coordination and B2B cooperation with a clear commercial point of contact.",
    },
    primaryLabel: "Email info@plutoenerji.com",
    secondaryLabel: "Visit contact page",
    cards: [
      { title: "Primary Email", description: companyInfo.email },
      { title: "Company Base", description: companyInfo.address },
      { title: "Scope", description: "Raw kaolin supply, processed grades and industrial cooperation." },
    ],
  },
} satisfies AboutPageContent;
