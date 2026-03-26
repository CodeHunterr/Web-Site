import type { GalleryItem } from "./types";

export const mediaAssets = {
  homeHeroImage: {
    title: "Process Overview",
    description: "Homepage hero image slot for process, plant and material presentation.",
    src: "/images/home-hero.jpg",
    alt: "Pluto Enerji process overview",
  } satisfies GalleryItem,
  homeHeroSlides: [
    {
      title: "Hero Slide 1",
      description: "Premium hero background image for Pluto Enerji.",
      src: "/images/hero/hero-1.jpg",
      alt: "Pluto Enerji hero slide 1",
    },
    {
      title: "Hero Slide 2",
      description: "Premium hero background image for Pluto Enerji.",
      src: "/images/hero/hero-2.jpg",
      alt: "Pluto Enerji hero slide 2",
    },
    {
      title: "Hero Slide 3",
      description: "Premium hero background image for Pluto Enerji.",
      src: "/images/hero/hero-3.jpg",
      alt: "Pluto Enerji hero slide 3",
    },
    {
      title: "Hero Slide 4",
      description: "Premium hero background image for Pluto Enerji.",
      src: "/images/hero/hero-4.jpg",
      alt: "Pluto Enerji hero slide 4",
    },
  ] satisfies GalleryItem[],
  mediaHeroImage: {
    title: "Operations Overview",
    description: "Media page hero visual for quarry and site presentation.",
    src: "/images/Maden-1.jpeg",
    alt: "Pluto Enerji operations overview",
  } satisfies GalleryItem,
  aboutHeroImage: {
    title: "About Hero",
    description: "About page hero background image for Pluto Enerji.",
    src: "/images/Maden-3.jpeg",
    alt: "Pluto Enerji about hero background",
  } satisfies GalleryItem,
  contactHeroImage: {
    title: "Contact Hero",
    description: "Contact page hero background image for Pluto Enerji.",
    src: "/images/Contact/Contact-1.png",
    alt: "Pluto Enerji contact hero background",
  } satisfies GalleryItem,
  mediaHeroSlides: [
    {
      title: "Media Hero 1",
      description: "Media hero background image.",
      src: "/images/Maden-1.jpeg",
      alt: "Pluto Enerji media hero image 1",
    },
    {
      title: "Media Hero 2",
      description: "Media hero background image.",
      src: "/images/Maden-2.jpeg",
      alt: "Pluto Enerji media hero image 2",
    },
    {
      title: "Media Hero 3",
      description: "Media hero background image.",
      src: "/images/Maden-3.jpeg",
      alt: "Pluto Enerji media hero image 3",
    },
    {
      title: "Media Hero 4",
      description: "Media hero background image.",
      src: "/images/Maden-4.jpeg",
      alt: "Pluto Enerji media hero image 4",
    },
    {
      title: "Media Hero 5",
      description: "Media hero background image.",
      src: "/images/Maden-5.jpeg",
      alt: "Pluto Enerji media hero image 5",
    },
    {
      title: "Media Hero 6",
      description: "Media hero background image.",
      src: "/images/lab-1.png",
      alt: "Pluto Enerji media hero image 6",
    },
    {
      title: "Media Hero 7",
      description: "Media hero background image.",
      src: "/images/lab-2.png",
      alt: "Pluto Enerji media hero image 7",
    },
    {
      title: "Media Hero 8",
      description: "Media hero background image.",
      src: "/images/lab-3.png",
      alt: "Pluto Enerji media hero image 8",
    },
  ] satisfies GalleryItem[],
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
    {
      title: "Production Field",
      description: "Operational quarry area visual for mining field presentation.",
      src: "/images/Maden-3.jpeg",
      alt: "Pluto Enerji production field",
    },
    {
      title: "Working Zone",
      description: "Extraction zone image for site continuity and active area visibility.",
      src: "/images/Maden-4.jpeg",
      alt: "Pluto Enerji working zone",
    },
    {
      title: "Excavation View",
      description: "Field depth and extraction texture visual for mining presentation.",
      src: "/images/Maden-5.jpeg",
      alt: "Pluto Enerji excavation view",
    },
  ] satisfies GalleryItem[],
  labImages: [
    {
      title: "Lab Stage 1",
      description: "Laboratory and processing image for kaolin handling presentation.",
      src: "/images/lab-1.png",
      alt: "Pluto Enerji laboratory stage 1",
    },
    {
      title: "Lab Stage 2",
      description: "Laboratory and processing image for kaolin handling presentation.",
      src: "/images/lab-2.png",
      alt: "Pluto Enerji laboratory stage 2",
    },
    {
      title: "Lab Stage 3",
      description: "Laboratory and processing image for kaolin handling presentation.",
      src: "/images/lab-3.png",
      alt: "Pluto Enerji laboratory stage 3",
    },
  ] satisfies GalleryItem[],
  videoUrl: "/videos/lab.mp4",
} as const;
