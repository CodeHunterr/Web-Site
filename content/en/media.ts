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
        href: "https://www.linkedin.com/company/plutoenerji",
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
          description:
            "Wide-angle view presenting the general quarry structure and active extraction field.",
          src: mediaAssets.quarryImages[0].src,
          alt: "Pluto Enerji quarry panorama",
        },
        {
          title: "Mining Access",
          description:
            "Field access routes and internal site movement prepared for structured quarry visibility.",
          src: mediaAssets.quarryImages[1].src,
          alt: "Pluto Enerji mining access area",
        },
        {
          title: "Production Field",
          description:
            "Operational mining area visual supporting field continuity and production visibility.",
          src: mediaAssets.quarryImages[2].src,
          alt: "Pluto Enerji production field",
        },
        {
          title: "Working Zone",
          description:
            "Active working zone image highlighting site depth, scale and operational context.",
          src: mediaAssets.quarryImages[3].src,
          alt: "Pluto Enerji working zone",
        },
        {
          title: "Excavation View",
          description:
            "Detailed quarry image reflecting extraction texture and mineral field character.",
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
          title: "Laboratory Review",
          description:
            "Laboratory-stage image supporting sample review and mineral quality assessment.",
          src: mediaAssets.labImages[0].src,
          alt: "Pluto Enerji laboratory review",
        },
        {
          title: "Process Monitoring",
          description:
            "Controlled processing visual prepared for kaolin handling and technical observation.",
          src: mediaAssets.labImages[1].src,
          alt: "Pluto Enerji process monitoring",
        },
        {
          title: "Material Evaluation",
          description:
            "Focused laboratory image showing analytical handling for mineral evaluation workflows.",
          src: mediaAssets.labImages[2].src,
          alt: "Pluto Enerji material evaluation",
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
