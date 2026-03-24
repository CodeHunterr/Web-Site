import type { SiteContent } from "../types";

export const siteContent = {
  metadataTitle: "Pluto Enerji | Русский",
  siteDescription:
    "Поставка сырого каолина, портфель переработанного каолина и промышленные минеральные решения для B2B-покупателей.",
  brandTagline: "Поставка Сырого и Переработанного Каолина",
  companySummary:
    "Pluto Enerji поставляет тювенанный сырой каолин для оптового спроса и профессионально представляет промытый каолин (Washed Kaolin), рафинированный каолин (Refined Kaolin), микронизированный каолин (Micronized Kaolin) и промышленные сорта (Industrial Grades) в B2B-портфеле.",
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
