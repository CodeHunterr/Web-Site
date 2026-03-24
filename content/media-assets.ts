import type { GalleryItem } from "./types";

export const mediaAssets = {
  homeHeroImage: {
    title: "Process Overview",
    description: "Homepage hero image slot for process, plant and material presentation.",
    src: "/images/home-hero.jpg",
    alt: "Pluto Enerji process overview",
  } satisfies GalleryItem,
  mediaHeroImage: {
    title: "Operations Overview",
    description: "Media page hero visual for quarry and site presentation.",
    src: "/images/Maden-1.jpeg",
    alt: "Pluto Enerji operations overview",
  } satisfies GalleryItem,
  quarryImages: [
    {
      title: "Quarry Panorama",
      description: "Primary quarry overview visual for site visibility and field presentation.",
      src: "/images/Maden-1.jpeg",
      alt: "Pluto Enerji quarry panorama",
    },
    {
      title: "Mining Access",
      description: "Supporting quarry image for access routes, benches and field movement.",
      src: "/images/Maden-2.jpeg",
      alt: "Pluto Enerji mining access area",
    },
  ] satisfies GalleryItem[],
  stockImages: [
    {
      title: "Raw Material Stock",
      description: "Material area visual for raw kaolin presentation and stock visibility.",
      src: "/images/Maden-2.jpeg",
      alt: "Pluto Enerji raw material stock area",
    },
  ] satisfies GalleryItem[],
  operationsImages: [
    {
      title: "Process Line",
      description: "Operational site visual used for process communication and field context.",
      src: "/images/Maden-1.jpeg",
      alt: "Pluto Enerji process line",
    },
  ] satisfies GalleryItem[],
  videoUrl: "/videos/lab.mp4",
} as const;
