import type { SiteContent } from "../types";

export const siteContent = {
  metadataTitle: "Pluto Enerji",
  siteDescription: "Raw kaolin supply, refined kaolin portfolio and industrial mineral solutions for B2B buyers.",
  brandTagline: "Raw & Processed Kaolin Supply",
  companySummary:
    "Pluto Enerji supplies tuvenan raw kaolin for bulk demand and presents washed, refined, micronized and industrial-grade kaolin products with a professional B2B portfolio language.",
  navigation: {
    primary: [
      { label: "Home", path: "" },
      { label: "About", path: "about" },
      { label: "Kaolin", path: "kaolin" },
      { label: "Applications", path: "applications" },
      { label: "Media", path: "media" },
      { label: "Contact", path: "contact" },
    ],
    localeLabels: {
      en: "EN",
      zh: "中文",
      tr: "TR",
      ru: "RU",
    },
  },
  footer: {
    quickLinksTitle: "Quick Links",
    contactTitle: "Contact",
    addressLabel: "Address",
    emailLabel: "Email",
    phoneLabel: "Phone",
    copyright: "(c) 2026 Pluto Enerji. All rights reserved.",
  },
} satisfies SiteContent;
