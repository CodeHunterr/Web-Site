import { companyInfo } from "../company";
import type { ApplicationsPageContent } from "../types";

export const applicationsPageContent = {
  metadata: {
    title: `${companyInfo.brandName} | Applications`,
    description:
      "Kaolin applications across ceramics, sanitaryware, porcelain, rubber, PVC coating and paints & coatings.",
  },
  hero: {
    eyebrow: "",
    titleLine1: "Industry-Based Kaolin Applications",
    titleLine2: "",
    description:
      "Pluto Enerji aligns raw, refined and industrial-grade kaolin offers with the requirements of ceramics, sanitaryware, porcelain, rubber, PVC coating and paints & coatings.",
    notice: "Commercial and technical application content is ready for B2B presentation.",
    primaryLabel: "Request application brief",
    secondaryLabel: "View sectors",
  },
  heroHighlights: [
    {
      title: "Product-to-sector fit",
      description:
        "Raw kaolin supply and processed product language are aligned with sector-specific industrial use requirements.",
    },
    {
      title: "Grade logic",
      description:
        "Particle size, whiteness, impurity profile and commercial suitability are positioned around each application area.",
    },
    {
      title: "Industrial readiness",
      description:
        "Application communication is structured for buyers seeking clear, specification-minded B2B kaolin supply.",
    },
  ],
  developmentApproach: {
    eyebrow: "",
    title: "Development Approach Tailored to Diverse Applications",
    description:
      `${companyInfo.brandName} evaluates kaolin potential from an end-use performance perspective and aligns development priorities with sector-specific requirements.`,
  },
  sectors: [
    {
      title: "Ceramics",
      description:
        "Kaolin positioning for ceramic body systems requiring dependable mineral behavior, clean fired appearance and supply consistency.",
      features: [
        "Controlled particle distribution for stable body preparation",
        "Commercial suitability for ceramic production lines",
        "Whiteness-oriented product positioning for cleaner appearance",
        "Supply language aligned with repeat industrial demand",
      ],
    },
    {
      title: "Sanitaryware",
      description:
        "Kaolin solutions presented for sanitaryware applications where casting response, body consistency and surface quality matter.",
      features: [
        "Material profile aligned with sanitaryware body expectations",
        "Iron-sensitive quality positioning for cleaner finished surfaces",
        "Commercial narrative suited to repeat supply programs",
        "Sample and qualification support for industrial buyers",
      ],
    },
    {
      title: "Porcelain",
      description:
        "Kaolin portfolio language suited to porcelain production requiring cleaner chemistry, premium appearance and controlled quality.",
      features: [
        "Low-impurity positioning for porcelain-focused evaluation",
        "Whiteness and visual quality as key commercial attributes",
        "Processed grade language ready for premium product discussion",
        "Application fit aligned with demanding industrial recipes",
      ],
    },
    {
      title: "Rubber & Tire",
      description:
        "Kaolin positioning for rubber systems where particle behavior, dispersion and filler consistency influence performance.",
      features: [
        "Particle-focused product language for compound behavior",
        "Commercial suitability for reinforcement-oriented mineral use",
        "Processed grade presentation for industrial formulation needs",
        "Stable supply communication for repeat manufacturing demand",
      ],
    },
    {
      title: "PVC Coating",
      description:
        "Kaolin offers aligned with PVC coating needs where fineness, appearance and controlled mineral response are important.",
      features: [
        "Fineness-oriented positioning for coating response",
        "Cleaner visual finish supported by refined grade language",
        "Commercial suitability for batch-sensitive industrial use",
        "Specification-minded communication for coating buyers",
      ],
    },
    {
      title: "Paints & Coatings",
      description:
        "Kaolin portfolio language for coating systems that depend on whiteness, particle control and stable mineral contribution.",
      features: [
        "Whiteness-oriented positioning for stronger visual quality",
        "Particle size control language for suspension behavior",
        "Refined and micronized options for coating-related discussions",
        "Consistent industrial supply narrative for B2B buyers",
      ],
    },
    {
      title: "Cement",
      cardDescription:
        "Reliable natural kaolin solutions developed for the evolving raw material needs of the cement industry. Pluto Enerji aims to provide sustainable solutions for cement producers through disciplined production infrastructure, dependable raw material supply and a long-term partnership approach.",
      description:
        "Reliable natural kaolin solutions developed for the evolving raw material requirements of the cement industry. Natural kaolin produced from our mining field is evaluated to meet the cement sector's expectations for quality, continuity and dependable supply. Pluto Enerji aims to be a reliable supplier to cement producers through disciplined production infrastructure, stable raw material availability and a long-term partnership approach.",
      features: [
        "Natural kaolin supply aligned with cement production processes",
        "Quality approach focused on consistent chemistry and homogeneous mineral character",
        "Sustainable and reliable raw material supply supported by regular production",
        "Technical evaluation and product development aligned with different process requirements",
        "Mineral structure with high alumina potential, supported by a quality development approach targeting lower iron content",
        "Product development vision supporting low-carbon cement technologies and SCM applications",
        "Supply model designed to support long-term business partnerships",
        "R&D and continuous improvement approach aligned with evolving sector needs",
      ],
      detailsCtaLabel: "View Details",
      detailsCollapseLabel: "Hide Details",
    },
  ],
  supplyHighlight: {
    section: {
      eyebrow: "Commercial Supply",
      title: "Raw Kaolin Supply",
      description:
        "We provide quarry-origin raw kaolin supply through a direct and commercially strong model for industrial buyers.",
    },
    intro:
      "Pluto Enerji offers direct raw kaolin supply from its quarry operations, providing a flexible sourcing model for industrial buyers.",
    supportLead: "This supply structure supports:",
    supports: [
      "bulk raw material access",
      "cost-efficient sourcing",
      "suitability for custom processing and beneficiation",
      "direct commercial coordination for sample and supply requests",
    ],
    closing:
      "Our raw kaolin supply is positioned for companies that require large-scale mineral input or prefer to manage their own downstream processing strategy.",
    ctaLabel: "Request Supply Information",
  },
} satisfies ApplicationsPageContent;
