import type { SiteContent } from "../types";

export const siteContent = {
  metadataTitle: "Pluto Enerji | Türkçe",
  siteDescription:
    "B2B alıcılar için ham kaolin arzı, işlenmiş kaolin portföyü ve endüstriyel mineral çözümleri.",
  brandTagline: "Ham ve İşlenmiş Kaolin Tedariki",
  companySummary:
    "Pluto Enerji, mevcut yapımızda bulk talep için tüvenan ham kaolin tedariğini hızlı, güvenilir ve ticari olarak esnek bir şekilde sunarken, aynı zamanda gelecekteki zenginleştirme ve işlenmiş ürün süreçlerine uygun bir altyapı oluşturuyoruz.",
  navigation: {
    primary: [
      { label: "Ana Sayfa", path: "" },
      { label: "Hakkımızda", path: "about" },
      { label: "Kaolin", path: "kaolin" },
      { label: "Uygulamalar", path: "applications" },
      { label: "Medya", path: "media" },
      { label: "İletişim", path: "contact" },
    ],
    localeLabels: {
      en: "EN",
      zh: "中文",
      tr: "TR",
      ru: "RU",
    },
  },
  footer: {
    quickLinksTitle: "Hızlı Linkler",
    contactTitle: "İletişim",
    addressLabel: "Adres",
    emailLabel: "E-posta",
    phoneLabel: "Telefon",
    copyright: "(c) 2026 Pluto Enerji. Tüm hakları saklıdır.",
  },
} satisfies SiteContent;
