import type { SiteContent } from "../types";

export const siteContent = {
  metadataTitle: "Pluto Enerji | Русский",
  siteDescription:
    "Поставка сырого каолина, портфель переработанного каолина и промышленные минеральные решения для B2B-покупателей.",
  brandTagline: "Поставка Сырого и Переработанного Каолина",
  companySummary:
    "В текущей структуре Pluto Enerji обеспечивает поставку сырого каолина для оптового спроса быстро, надёжно и с коммерческой гибкостью, одновременно формируя инфраструктуру, подходящую для будущих процессов обогащения и выпуска переработанной продукции.",
  navigation: {
    primary: [
      { label: "Главная", path: "" },
      { label: "О нас", path: "about" },
      { label: "Каолин", path: "kaolin" },
      { label: "Применение", path: "applications" },
      { label: "Медиа", path: "media" },
      { label: "Контакты", path: "contact" },
    ],
    localeLabels: {
      en: "EN",
      zh: "中文",
      tr: "TR",
      ru: "RU",
    },
  },
  footer: {
    quickLinksTitle: "Быстрые ссылки",
    contactTitle: "Контакты",
    addressLabel: "Адрес",
    emailLabel: "Email",
    phoneLabel: "Телефон",
    copyright: "(c) 2026 Pluto Enerji. Все права защищены.",
  },
} satisfies SiteContent;
