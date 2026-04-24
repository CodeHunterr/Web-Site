import { companyInfo } from "../company";
import { mediaAssets } from "../media-assets";
import type { MediaPageContent } from "../types";

export const mediaPageContent = {
  metadata: {
    title: `${companyInfo.brandName} | Media`,
    description: "Quarry, laboratory and operational visuals for corporate media presentation.",
  },
  hero: {
    eyebrow: "",
    titleLine1: "Our Operations",
    titleLine2: "& Media",
    description:
      "Quarry visuals, laboratory records and operational media reflect Pluto Enerji's field discipline and technical visibility.",
    notice: "",
    primaryLabel: "",
    secondaryLabel: "View Gallery",
  },
  heroSlides: mediaAssets.mediaHeroSlides,
  heroSupportCards: [
    {
      title: "Field Visuals",
      description: "Selected quarry imagery presenting site scale, extraction continuity and operational context.",
    },
    {
      title: "Laboratory Records",
      description: "Controlled laboratory visuals supporting sample review, analysis and technical monitoring.",
    },
    {
      title: "Operational Media",
      description: "Curated media assets aligned with corporate presentation and industrial communication needs.",
    },
  ],
  heroSocial: {
    title: "Our Social Media",
    links: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/pluto-enerji",
        platform: "linkedin",
      },
      {
        label: "Instagram",
        href: "https://www.instagram.com/plutoenerji",
        platform: "instagram",
      },
    ],
  },
  sections: {
    quarry: {
      eyebrow: "",
      title: "Quarry & Mining Area",
      description: "",
      galleryImages: [
        {
          title: "Quarry Panorama",
          description: "Wide-angle view presenting the general quarry structure and active extraction field.",
          src: mediaAssets.quarryImages[0].src,
          alt: "Pluto Enerji quarry panorama",
        },
        {
          title: "Mining Access",
          description: "Field access routes and internal site movement prepared for structured quarry visibility.",
          src: mediaAssets.quarryImages[1].src,
          alt: "Pluto Enerji mining access area",
        },
        {
          title: "Production Field",
          description: "Operational mining area visual supporting field continuity and production visibility.",
          src: mediaAssets.quarryImages[2].src,
          alt: "Pluto Enerji production field",
        },
        {
          title: "Working Zone",
          description: "Active working zone image highlighting site depth, scale and operational context.",
          src: mediaAssets.quarryImages[3].src,
          alt: "Pluto Enerji working zone",
        },
        {
          title: "Excavation View",
          description: "Detailed quarry image reflecting extraction texture and mineral field character.",
          src: mediaAssets.quarryImages[4].src,
          alt: "Pluto Enerji excavation view",
        },
      ],
    },
    stock: {
      eyebrow: "",
      title: "Kaolin Mineral Processing",
      description: "",
      galleryImages: [
        {
          title: "Sample Preparation Station",
          description: "Kaolin samples are prepared within a controlled workflow before processing and analytical review.",
          src: mediaAssets.processingImages[0].src,
          alt: "Pluto Enerji sample preparation station",
        },
        {
          title: "Process Control Point",
          description: "Material flow, equipment sequence and processing steps are monitored through coordinated field and laboratory control.",
          src: mediaAssets.processingImages[1].src,
          alt: "Pluto Enerji process control point",
        },
        {
          title: "Quality Monitoring View",
          description: "Visual records from the processing stage support product consistency and disciplined operations.",
          src: mediaAssets.processingImages[2].src,
          alt: "Pluto Enerji quality monitoring view",
        },
        {
          title: "Mineral Separation Area",
          description: "The technical layout supports routing kaolin material through distinct processing stages with operational clarity.",
          src: mediaAssets.processingImages[3].src,
          alt: "Pluto Enerji mineral separation area",
        },
        {
          title: "Technical Operations Detail",
          description: "Process-line detail imagery reflects a controlled and organised operational flow for kaolin handling.",
          src: mediaAssets.processingImages[4].src,
          alt: "Pluto Enerji technical operations detail",
        },
      ],
    },
    laboratory: {
      eyebrow: "",
      title: "Laboratory Images",
      description: "",
      galleryImages: [
        {
          title: "Sample Intake & Registration",
          description: "Kaolin samples pass through intake and traceability steps before entering the laboratory workflow.",
          src: mediaAssets.laboratoryImages[0].src,
          alt: "Pluto Enerji sample intake and registration",
        },
        {
          title: "Physical Property Review",
          description: "Texture, moisture and core physical behaviour are reviewed under controlled laboratory conditions.",
          src: mediaAssets.laboratoryImages[1].src,
          alt: "Pluto Enerji physical property review",
        },
        {
          title: "Whiteness Control",
          description: "Visual quality and whiteness potential are assessed to support technical positioning and product evaluation.",
          src: mediaAssets.laboratoryImages[2].src,
          alt: "Pluto Enerji whiteness control",
        },
        {
          title: "Particle Size Observation",
          description: "Particle structure observations support application alignment and process expectations.",
          src: mediaAssets.laboratoryImages[3].src,
          alt: "Pluto Enerji particle size observation",
        },
        {
          title: "Post-Drying Evaluation",
          description: "Material behaviour and surface condition are reviewed following the drying stage.",
          src: mediaAssets.laboratoryImages[4].src,
          alt: "Pluto Enerji post-drying evaluation",
        },
        {
          title: "Screening & Fraction Tracking",
          description: "Fraction separation is monitored within a laboratory setup to support controlled process quality.",
          src: mediaAssets.laboratoryImages[5].src,
          alt: "Pluto Enerji screening and fraction tracking",
        },
        {
          title: "Laboratory Preparation Bench",
          description: "Equipment and sample preparation are arranged within a disciplined technical workflow ahead of analysis.",
          src: mediaAssets.laboratoryImages[6].src,
          alt: "Pluto Enerji laboratory preparation bench",
        },
        {
          title: "Experimental Process Setup",
          description: "Processing scenarios can be configured at laboratory scale to evaluate alternative quality targets.",
          src: mediaAssets.laboratoryImages[7].src,
          alt: "Pluto Enerji experimental process setup",
        },
        {
          title: "Mineral Purity Review",
          description: "Purity checks and mineral characterisation form a core part of technical quality evaluation.",
          src: mediaAssets.laboratoryImages[8].src,
          alt: "Pluto Enerji mineral purity review",
        },
        {
          title: "Comparative Sample Set",
          description: "Side-by-side comparison of different samples helps reveal product differentiation and suitable process direction.",
          src: mediaAssets.laboratoryImages[9].src,
          alt: "Pluto Enerji comparative sample set",
        },
        {
          title: "Pre-Analysis Preparation",
          description: "Preparation steps before measurement and review are standardised to strengthen result reliability.",
          src: mediaAssets.laboratoryImages[10].src,
          alt: "Pluto Enerji pre-analysis preparation",
        },
        {
          title: "Operator-Controlled Inspection",
          description: "Inspections under technical team supervision support data-led process decisions.",
          src: mediaAssets.laboratoryImages[11].src,
          alt: "Pluto Enerji operator-controlled inspection",
        },
        {
          title: "Experimental Quality Verification",
          description: "Laboratory verification steps support product suitability across different industrial applications.",
          src: mediaAssets.laboratoryImages[12].src,
          alt: "Pluto Enerji experimental quality verification",
        },
        {
          title: "Final Review Before Reporting",
          description: "The final review stage strengthens consistency and readiness for technical and commercial reporting.",
          src: mediaAssets.laboratoryImages[13].src,
          alt: "Pluto Enerji final review before reporting",
        },
      ],
    },
  },
  video: {
    eyebrow: "",
    title: "Laboratory & Operations Video",
    description: "",
    embedLabel: "Laboratory & Operations Video",
    embedDescription: "",
  },
  videoUrl: mediaAssets.videoUrl,
} satisfies MediaPageContent;
