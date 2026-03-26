import { companyInfo } from "../company";
import { mediaAssets } from "../media-assets";
import type { MediaPageContent } from "../types";

export const mediaPageContent = {
  metadata: {
    title: `${companyInfo.brandName} | Медиа`,
    description: "Корпоративная медиапрезентация карьера, лаборатории и операционной среды.",
  },
  hero: {
    eyebrow: "",
    titleLine1: "Наши операции",
    titleLine2: "и медиа",
    description:
      "Визуалы карьера, лабораторные материалы и операционные медиа отражают производственную дисциплину и техническую прозрачность Pluto Enerji.",
    notice: "",
    primaryLabel: "",
    secondaryLabel: "Смотреть галерею",
  },
  heroSlides: mediaAssets.mediaHeroSlides,
  heroSupportCards: [
    {
      title: "Материалы по карьеру",
      description: "Подборка изображений, передающих масштаб участка, непрерывность добычи и производственный контекст.",
    },
    {
      title: "Лабораторные записи",
      description: "Контролируемые лабораторные материалы для оценки образцов, анализа и технического наблюдения.",
    },
    {
      title: "Операционные медиа",
      description: "Подготовленные медиа-материалы для корпоративной презентации и промышленной коммуникации.",
    },
  ],
  heroSocial: {
    title: "Наши социальные сети",
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
      title: "Карьер и зона добычи (Quarry & Mining Area)",
      description: "",
      galleryImages: [
        {
          title: "Панорама карьера",
          description:
            "Широкий обзор, показывающий общую структуру карьера и активную зону добычи.",
          src: mediaAssets.quarryImages[0].src,
          alt: "Pluto Enerji панорама карьера",
        },
        {
          title: "Доступ к участку",
          description:
            "Изображение внутренних дорог и условий движения по карьерной площадке.",
          src: mediaAssets.quarryImages[1].src,
          alt: "Pluto Enerji доступ к участку",
        },
        {
          title: "Производственная зона",
          description:
            "Визуал активной добычи, отражающий производственный ритм и масштаб участка.",
          src: mediaAssets.quarryImages[2].src,
          alt: "Pluto Enerji производственная зона",
        },
        {
          title: "Рабочие контуры",
          description:
            "Снимок активной рабочей зоны, подчеркивающий глубину и пространственный контекст карьера.",
          src: mediaAssets.quarryImages[3].src,
          alt: "Pluto Enerji рабочие контуры",
        },
        {
          title: "Вид добычи",
          description:
            "Детальный кадр, передающий фактуру выемки и характер минерального поля.",
          src: mediaAssets.quarryImages[4].src,
          alt: "Pluto Enerji вид добычи",
        },
      ],
    },
    stock: {
      eyebrow: "",
      title: "Переработка каолинового минерала",
      description: "",
      galleryImages: [
        {
          title: "Лабораторный обзор",
          description:
            "Лабораторный визуал для оценки образцов и наблюдения за качеством минерала.",
          src: mediaAssets.labImages[0].src,
          alt: "Pluto Enerji лабораторный обзор",
        },
        {
          title: "Контроль процесса",
          description:
            "Изображение контролируемого этапа обработки для технического наблюдения за каолином.",
          src: mediaAssets.labImages[1].src,
          alt: "Pluto Enerji контроль процесса",
        },
        {
          title: "Оценка материала",
          description:
            "Лабораторный кадр, отражающий этап анализа минерала и оценки технологической пригодности.",
          src: mediaAssets.labImages[2].src,
          alt: "Pluto Enerji оценка материала",
        },
      ],
    },
  },
  video: {
    eyebrow: "",
    title: "Видео лаборатории и операций",
    description: "",
    embedLabel: "Видео лаборатории и операций",
    embedDescription: "",
  },
  videoUrl: mediaAssets.videoUrl,
} satisfies MediaPageContent;
