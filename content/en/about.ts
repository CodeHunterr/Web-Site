import { companyInfo } from "../company";
import type { AboutPageContent } from "../types";

export const aboutPageContent = {
  metadata: {
    title: `${companyInfo.brandName} | About`,
    description:
      "About Pluto Enerji, a kaolin-focused company positioned around raw kaolin supply and industrial product portfolio.",
  },
  hero: {
    eyebrow: "",
    titleLine1: "Trusted Partner in Kaolin Supply",
    titleLine2: "",
    description:
      `${companyInfo.brandName} is a kaolin-focused company built around ready raw kaolin supply, disciplined commercial communication and a professional portfolio structure for processed grades.`,
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
  intro: {
    items: [
      {
        title: "History",
        paragraphs: [
          "Pluto Enerji was established in 2020 with a vision to utilize natural resources efficiently and transform them into higher-value outputs. Beginning its operations with run-of-mine kaolin production, the company has continued to advance its production and development processes by closely following the needs of the sector.",
          "Since its foundation, the company has focused not only on raw material supply but also on improving quality and creating new areas of use. In line with this direction, we continue to strengthen our laboratory infrastructure and advance our transformation toward a more R&D-driven structure.",
        ],
      },
      {
        title: "Mission",
        paragraphs: [
          "To make the most efficient use of natural kaolin resources by developing sustainable, high-value products aligned with the needs of different industries.",
          "To deliver reliable, performance-oriented solutions to our customers through a scientific approach and a principle of continuous improvement.",
        ],
      },
      {
        title: "Vision",
        paragraphs: [
          "To become not only a raw material supplier in the field of kaolin and industrial minerals, but also a technology and solutions partner that develops products, designs processes and helps shape the sector.",
          "To become a competitive and leading brand in national and international markets through strong R&D capabilities, an innovative approach and technical expertise.",
        ],
      },
    ],
  },
  overview: {
    section: {
      eyebrow: "",
      title: "A Kaolin Company Focused on Industrial Partnerships",
      description:
        `${companyInfo.brandName} presents its product structure with commercial clarity, giving raw kaolin supply clear visibility while also supporting buyers interested in processed and application-aligned grades.`,
    },
    narrative:
      "The company approach is built around direct communication, dependable follow-up and a portfolio language that helps industrial buyers quickly understand available raw kaolin, refined product options and cooperation pathways.",
    points: [
      "Raw kaolin is positioned first for sourcing, evaluation and commercial demand.",
      "Processed kaolin language supports washed, refined, micronized and industrial-grade product discussions.",
      "Communication is organized around inquiries, samples and long-term cooperation opportunities.",
    ],
  },
  portfolio: {
    section: {
      eyebrow: "",
      title: "A Portfolio Structure That Delivers Solutions",
      description:
        "From raw supply to processed grades, the company presents kaolin with a ready and professional B2B narrative rather than a tentative roadmap.",
    },
    cards: [
      {
        title: "Raw Kaolin Supply",
        description:
          "Ready raw kaolin positioned for bulk sourcing, industrial qualification and commercial partnership discussions.",
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
    primaryLabel: "Email contact@plutoenerji.com",
    secondaryLabel: "Visit contact page",
    cards: [
      { title: "Primary Email", description: companyInfo.email },
      { title: "Company Base", description: companyInfo.address },
      { title: "Scope", description: "Raw kaolin supply, processed grades and industrial cooperation." },
    ],
  },
} satisfies AboutPageContent;
