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
      title: "Карьер и зона добычи (Quarry & Mining Area)",
      description: "",
      galleryImages: [
        {
          title: "Панорама карьера",
          description: "Широкий обзор, показывающий общую структуру карьера и активную зону добычи.",
          src: mediaAssets.quarryImages[0].src,
          alt: "Pluto Enerji панорама карьера",
        },
        {
          title: "Доступ к участку",
          description: "Изображение внутренних дорог и условий движения по карьерной площадке.",
          src: mediaAssets.quarryImages[1].src,
          alt: "Pluto Enerji доступ к участку",
        },
        {
          title: "Производственная зона",
          description: "Визуал активной добычи, отражающий производственный ритм и масштаб участка.",
          src: mediaAssets.quarryImages[2].src,
          alt: "Pluto Enerji производственная зона",
        },
        {
          title: "Рабочие контуры",
          description: "Снимок активной рабочей зоны, подчеркивающий глубину и пространственный контекст карьера.",
          src: mediaAssets.quarryImages[3].src,
          alt: "Pluto Enerji рабочие контуры",
        },
        {
          title: "Вид добычи",
          description: "Детальный кадр, передающий фактуру выемки и характер минерального поля.",
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
          title: "Участок подготовки проб",
          description: "Образцы каолина подготавливаются в контролируемом рабочем процессе перед переработкой и анализом.",
          src: mediaAssets.processingImages[0].src,
          alt: "Pluto Enerji участок подготовки проб",
        },
        {
          title: "Точка контроля процесса",
          description: "Поток материала, последовательность оборудования и стадии обработки отслеживаются в координации участка и лаборатории.",
          src: mediaAssets.processingImages[1].src,
          alt: "Pluto Enerji точка контроля процесса",
        },
        {
          title: "Визуальный контроль качества",
          description: "Визуальные записи этапов обработки поддерживают стабильность продукта и операционную дисциплину.",
          src: mediaAssets.processingImages[2].src,
          alt: "Pluto Enerji визуальный контроль качества",
        },
        {
          title: "Зона разделения минерала",
          description: "Техническая конфигурация поддерживает направление каолинового материала по различным этапам обработки.",
          src: mediaAssets.processingImages[3].src,
          alt: "Pluto Enerji зона разделения минерала",
        },
        {
          title: "Деталь технической операции",
          description: "Детальные изображения линии обработки отражают контролируемую и организованную структуру операционного потока.",
          src: mediaAssets.processingImages[4].src,
          alt: "Pluto Enerji деталь технической операции",
        },
      ],
    },
    laboratory: {
      eyebrow: "",
      title: "Изображения лаборатории",
      description: "",
      galleryImages: [
        {
          title: "Приём и регистрация образцов",
          description: "Перед входом в лабораторный цикл образцы каолина проходят этапы регистрации и прослеживаемости.",
          src: mediaAssets.laboratoryImages[0].src,
          alt: "Pluto Enerji приём и регистрация образцов",
        },
        {
          title: "Анализ физических свойств",
          description: "Текстура, влажность и базовое физическое поведение материала оцениваются в контролируемых лабораторных условиях.",
          src: mediaAssets.laboratoryImages[1].src,
          alt: "Pluto Enerji анализ физических свойств",
        },
        {
          title: "Контроль белизны",
          description: "Визуальное качество и потенциал белизны оцениваются для технического позиционирования продукта.",
          src: mediaAssets.laboratoryImages[2].src,
          alt: "Pluto Enerji контроль белизны",
        },
        {
          title: "Наблюдение за размером частиц",
          description: "Наблюдения за структурой частиц поддерживают оценку применимости и процессных ожиданий.",
          src: mediaAssets.laboratoryImages[3].src,
          alt: "Pluto Enerji наблюдение за размером частиц",
        },
        {
          title: "Оценка после сушки",
          description: "После этапа сушки состояние материала и поверхности рассматривается в контролируемом режиме.",
          src: mediaAssets.laboratoryImages[4].src,
          alt: "Pluto Enerji оценка после сушки",
        },
        {
          title: "Контроль ситового разделения",
          description: "Разделение фракций отслеживается в лабораторной среде для поддержки стабильного качества процесса.",
          src: mediaAssets.laboratoryImages[5].src,
          alt: "Pluto Enerji контроль ситового разделения",
        },
        {
          title: "Подготовительный лабораторный стол",
          description: "Оборудование и образцы организуются в дисциплинированном техническом потоке перед анализом.",
          src: mediaAssets.laboratoryImages[6].src,
          alt: "Pluto Enerji подготовительный лабораторный стол",
        },
        {
          title: "Экспериментальная схема процесса",
          description: "На лабораторном уровне можно моделировать разные сценарии обработки для оценки альтернативных качественных целей.",
          src: mediaAssets.laboratoryImages[7].src,
          alt: "Pluto Enerji экспериментальная схема процесса",
        },
        {
          title: "Контроль минеральной чистоты",
          description: "Проверка чистоты и минералогическая характеристика являются ключевыми этапами технической оценки качества.",
          src: mediaAssets.laboratoryImages[8].src,
          alt: "Pluto Enerji контроль минеральной чистоты",
        },
        {
          title: "Сравнительный набор образцов",
          description: "Сопоставление разных образцов помогает определить продуктовые различия и подходящее направление процесса.",
          src: mediaAssets.laboratoryImages[9].src,
          alt: "Pluto Enerji сравнительный набор образцов",
        },
        {
          title: "Подготовка перед анализом",
          description: "Подготовительные шаги до измерений и проверки стандартизируются для повышения надёжности результатов.",
          src: mediaAssets.laboratoryImages[10].src,
          alt: "Pluto Enerji подготовка перед анализом",
        },
        {
          title: "Проверка под контролем оператора",
          description: "Инспекции под наблюдением технической команды поддерживают принятие решений на основе данных.",
          src: mediaAssets.laboratoryImages[11].src,
          alt: "Pluto Enerji проверка под контролем оператора",
        },
        {
          title: "Экспериментальное подтверждение качества",
          description: "Лабораторные этапы верификации поддерживают пригодность продукта для различных областей применения.",
          src: mediaAssets.laboratoryImages[12].src,
          alt: "Pluto Enerji экспериментальное подтверждение качества",
        },
        {
          title: "Финальный контроль перед отчётом",
          description: "Заключительный этап проверки усиливает последовательность технического и коммерческого представления результата.",
          src: mediaAssets.laboratoryImages[13].src,
          alt: "Pluto Enerji финальный контроль перед отчётом",
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
