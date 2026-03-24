import type { SiteContent } from "../types";

export const siteContent = {
  metadataTitle: "Pluto Enerji | 中文",
  siteDescription: "面向 B2B 买家的原矿高岭土供应、加工级高岭土组合与工业矿物解决方案。",
  brandTagline: "原矿与加工高岭土供应",
  companySummary:
    "Pluto Enerji 面向大宗需求提供原矿高岭土，并以专业 B2B 方式呈现水洗高岭土（Washed Kaolin）、精选高岭土（Refined Kaolin）、微粉化高岭土（Micronized Kaolin）和工业级产品（Industrial Grades）。",
  navigation: {
    primary: [
      { label: "首页", path: "" },
      { label: "关于我们", path: "about" },
      { label: "高岭土", path: "kaolin" },
      { label: "应用领域", path: "applications" },
      { label: "媒体中心", path: "media" },
      { label: "联系我们", path: "contact" },
    ],
    localeLabels: {
      en: "EN",
      zh: "中文",
      tr: "TR",
      ru: "RU",
    },
  },
  footer: {
    quickLinksTitle: "快速链接",
    contactTitle: "联系方式",
    addressLabel: "地址",
    emailLabel: "邮箱",
    phoneLabel: "电话",
    copyright: "(c) 2026 Pluto Enerji. 版权所有。",
  },
} satisfies SiteContent;
