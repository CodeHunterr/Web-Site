import { companyInfo } from "../company";
import { mediaAssets } from "../media-assets";
import type { MediaPageContent } from "../types";

export const mediaPageContent = {
  metadata: {
    title: `${companyInfo.brandName} | Медиа`,
    description: "Визуальные материалы по карьеру, складам и процессу для корпоративной презентации.",
  },
  hero: {
    eyebrow: "",
    titleLine1: "Наши операции",
    titleLine2: "и медиа",
    description: "",
    notice: "",
    primaryLabel: "Запросить медиаматериалы",
    secondaryLabel: "Смотреть галерею",
  },
  heroSocial: {
    title: "Наши социальные сети",
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
    title: "Обзор площадки",
    description: "",
    src: mediaAssets.mediaHeroImage.src,
    alt: "Pluto Enerji обзор площадки",
  },
  heroHighlights: [
    {
      title: "Видимость площадки",
      description:
        "Визуальный слой, показывающий карьер, подъездные пути и текущее состояние рабочей зоны.",
    },
    {
      title: "Прозрачность материала",
      description:
        "Четкая презентация складской зоны сырого каолина, текстуры минерала и потока материала.",
    },
    {
      title: "Операционный контекст",
      description:
        "Профессиональный медийный слой для процесса, логистики и коммуникации по площадке.",
    },
  ],
  sections: {
    quarry: {
      eyebrow: "Карьер и добыча (Quarry & Mining Area)",
      title: "Изображения для демонстрации площадки и процесса добычи.",
      description: "",
      galleryImages: [
        {
          title: "Панорама карьера",
          description:
            "Широкий обзор, показывающий общую структуру карьера и активную рабочую зону.",
          src: mediaAssets.quarryImages[0].src,
          alt: "Pluto Enerji панорама карьера",
        },
        {
          title: "Подъезд к участку",
          description:
            "Изображение внутренних дорог и условий доступа в зоне карьера.",
          src: mediaAssets.quarryImages[1].src,
          alt: "Pluto Enerji подъезд к карьеру",
        },
      ],
    },
    stock: {
      eyebrow: "Склад и материал (Stock & Material)",
      title: "Визуальные материалы для представления складов и подачи каолина.",
      description: "",
      galleryImages: [
        {
          title: "Склад сырья",
          description:
            "Изображение, отражающее структуру складирования сырого каолина и размещение материала на площадке.",
          src: mediaAssets.stockImages[0].src,
          alt: "Pluto Enerji склад сырья",
        },
      ],
    },
    operations: {
      eyebrow: "Операции и процесс (Operations & Process)",
      title: "Визуальные материалы для показа процесса и коммуникации по площадке.",
      description: "",
      galleryImages: [
        {
          title: "Производственная линия",
          description:
            "Общий вид, поддерживающий презентацию процессного потока и операционной активности на площадке.",
          src: mediaAssets.operationsImages[0].src,
          alt: "Pluto Enerji производственная линия",
        },
      ],
    },
  },
  video: {
    eyebrow: "Видео",
    title: "Операционное видео, встроенное в страницу Media.",
    description: "",
    embedLabel: "Видео лаборатории и операций",
    embedDescription: "",
  },
  videoUrl: mediaAssets.videoUrl,
} satisfies MediaPageContent;
