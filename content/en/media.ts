import { companyInfo } from "../company";
import { mediaAssets } from "../media-assets";
import type { MediaPageContent } from "../types";

export const mediaPageContent = {
  metadata: {
    title: `${companyInfo.brandName} | Media`,
    description: "Quarry, stock and process visuals for structured corporate presentation.",
  },
  hero: {
    eyebrow: "",
    titleLine1: "Our Operations",
    titleLine2: "& Media",
    description: "",
    notice: "",
    primaryLabel: "Request media deck",
    secondaryLabel: "View gallery",
  },
  heroSocial: {
    title: "Our Social Media",
    links: [
      {
        label: "LinkedIn :",
        href: "https://www.linkedin.com/company/plutoenerji",
        platform: "linkedin",
      },
      {
        label: "Instagram :",
        href: "https://www.instagram.com/plutoenerji",
        platform: "instagram",
      },
    ],
  },
  heroImage: {
    title: "Site Overview",
    description: "",
    src: mediaAssets.mediaHeroImage.src,
    alt: "Pluto Enerji site overview",
  },
  heroHighlights: [
    {
      title: "Quarry visibility",
      description:
        "Visual documentation of extraction areas, access zones and active site conditions.",
    },
    {
      title: "Material transparency",
      description:
        "Clear presentation of raw kaolin stock areas, mineral texture and handling flow.",
    },
    {
      title: "Operational context",
      description:
        "A professional media layer prepared for process, logistics and plant communication.",
    },
  ],
  sections: {
    quarry: {
      eyebrow: "Quarry & Mining Area",
      title: "Field visuals prepared for site and extraction visibility.",
      description: "",
      galleryImages: [
        {
          title: "Quarry Panorama",
          description:
            "Wide-angle visual showing the overall quarry layout and active field area.",
          src: mediaAssets.quarryImages[0].src,
          alt: "Pluto Enerji quarry panorama",
        },
        {
          title: "Mining Access",
          description:
            "View of site access routes and internal movement across the quarry area.",
          src: mediaAssets.quarryImages[1].src,
          alt: "Pluto Enerji mining access area",
        },
      ],
    },
    stock: {
      eyebrow: "Stock & Material",
      title: "Material-focused visuals for kaolin stock and feed presentation.",
      description: "",
      galleryImages: [
        {
          title: "Raw Material Stock",
          description:
            "Visual presenting raw kaolin stock structure and on-site material arrangement.",
          src: mediaAssets.stockImages[0].src,
          alt: "Pluto Enerji raw material stock area",
        },
      ],
    },
    operations: {
      eyebrow: "Operations & Process",
      title: "Operational imagery for process visibility and plant communication.",
      description: "",
      galleryImages: [
        {
          title: "Process Line",
          description:
            "General operational view supporting process flow and site activity presentation.",
          src: mediaAssets.operationsImages[0].src,
          alt: "Pluto Enerji process line",
        },
      ],
    },
  },
  video: {
    eyebrow: "Video",
    title: "Operational video integrated into the media page.",
    description: "",
    embedLabel: "Laboratory & Operations Video",
    embedDescription: "",
  },
  videoUrl: mediaAssets.videoUrl,
} satisfies MediaPageContent;
