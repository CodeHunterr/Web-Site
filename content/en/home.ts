import { companyInfo } from "../company";
import { mediaAssets } from "../media-assets";
import type { HomePageContent } from "../types";

export const homePageContent = {
  metadata: {
    title: `${companyInfo.brandName} | Home`,
    description: "Raw kaolin supply, refined kaolin portfolio and industrial-grade kaolin solutions for B2B buyers.",
  },
  hero: {
    eyebrow: "",
    titleLine1: "Kaolin Solutions for Industrial Production",
    titleLine2: "",
    description:
      `${companyInfo.brandName} is a kaolin-focused supplier and commercial solution partner offering ready tuvenan raw kaolin supply together with refined, micronized and industrial-grade kaolin product pathways.`,
    notice: "Raw kaolin supply, sample requests and business inquiries are open.",
    primaryLabel: "Contact Us",
    secondaryLabel: "Explore Applications",
  },
  heroImage: mediaAssets.homeHeroImage,
  heroAside: {
    kicker: "Supply position",
    description:
      "Structured for bulk raw kaolin supply, sample coordination and long-term industrial cooperation with responsive B2B communication.",
  },
  heroInfoItems: [
    {
      title: "Tuvenan Raw Kaolin",
      description:
        "Commercially visible raw kaolin supply positioned for direct inquiry, bulk demand and partner discussions.",
    },
    {
      title: "Refined Portfolio",
      description:
        "Washed, refined and micronized kaolin language is presented as part of an active industrial portfolio.",
    },
    {
      title: "Industrial Grades",
      description:
        "Product positioning aligned with ceramics, sanitaryware, porcelain, rubber, PVC coating and paints & coatings.",
    },
  ],
  supply: {
    section: {
      eyebrow: "Raw Kaolin Supply",
      title: "Ready tuvenan kaolin supply for commercial demand, samples and cooperation.",
      description:
        "Pluto Enerji presents raw kaolin supply as a visible commercial offer, supporting bulk sourcing, industrial review, sample requests and B2B cooperation from one clear contact structure.",
    },
    primaryLabel: "Send raw kaolin inquiry",
    secondaryLabel: "Explore product portfolio",
    cards: [
      {
        title: "Ready Supply",
        description:
          "Tuvenan raw kaolin is presented as a ready supply position for active buyer discussions and project evaluations.",
      },
      {
        title: "Sample & Cooperation",
        description:
          "Sample requests and commercial cooperation conversations are supported through a direct and professional response flow.",
      },
      {
        title: "Bulk / Raw Kaolin",
        description:
          "Suitable for buyers seeking bulk raw kaolin sourcing, trading opportunities or longer-term supply planning.",
      },
      {
        title: "Industrial Suitability",
        description:
          "Material positioning supports evaluation for ceramics, sanitaryware, porcelain and broader industrial use cases.",
      },
    ],
  },
  about: {
    section: {
      eyebrow: "About",
      title: "A kaolin-focused company with a clear commercial and industrial position.",
      description:
        `${companyInfo.brandName} combines ready raw kaolin supply visibility with disciplined product presentation for refined and industrial-grade kaolin buyers.`,
    },
    narrative:
      "The company is positioned around practical B2B response, dependable communication and a portfolio structure that makes both raw supply and processed kaolin products easy to understand for industrial customers.",
    points: [
      "Ready raw kaolin supply positioned as the lead commercial offer.",
      "Processed grades presented as part of an active product portfolio.",
      "Structured communication for samples, inquiries and cooperation.",
    ],
  },
  applications: {
    section: {
      eyebrow: "Portfolio",
      title: "An active kaolin product structure for industrial customers.",
      description:
        "The portfolio is presented with commercial clarity, from raw kaolin supply to refined and industrial-grade product options.",
    },
    cards: [
      {
        title: "Raw Kaolin Supply",
        description: "Tuvenan kaolin positioned for bulk demand, sourcing discussions and industrial evaluation.",
      },
      {
        title: "Washed Kaolin",
        description: "Washed kaolin language presented for customers seeking cleaner and more controlled mineral output.",
      },
      {
        title: "Refined Kaolin",
        description: "Refined kaolin positioned for stronger consistency, visual quality and specification alignment.",
      },
      {
        title: "Micronized Kaolin",
        description: "Micronized product positioning for applications requiring tighter fineness and dispersion behavior.",
      },
      {
        title: "Industrial Grades",
        description: "Grade language aligned with practical sector demand across ceramics, polymers and coatings.",
      },
      {
        title: "Application Matching",
        description: "Commercial and technical guidance for selecting the right kaolin offer for each end use.",
      },
    ],
  },
  contact: {
    section: {
      eyebrow: "Contact",
      title: `Start a raw kaolin or product discussion with ${companyInfo.brandName}.`,
      description:
        "Share raw kaolin demand, sample requests, industrial grade needs or cooperation ideas through one direct B2B contact channel.",
    },
    primaryLabel: "Email info@plutoenerji.com",
    secondaryLabel: "Call now",
    cards: [
      { title: "Email", description: companyInfo.email },
      { title: "Phone", description: companyInfo.phone },
      { title: "Commercial Focus", description: "Raw kaolin supply, samples and industrial grade inquiries." },
    ],
  },
} satisfies HomePageContent;
