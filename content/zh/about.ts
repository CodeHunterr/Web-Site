import { companyInfo } from "../company";
import type { AboutPageContent } from "../types";

export const aboutPageContent = {
  metadata: {
    title: `${companyInfo.brandName} | 关于我们`,
    description:
      "关于 Pluto Enerji：一家以原矿高岭土供应和工业产品组合为核心定位的高岭土公司。",
  },
  hero: {
    eyebrow: "",
    titleLine1: "值得信赖的高岭土供应合作伙伴",
    titleLine2: "",
    description:
      `${companyInfo.brandName} 是一家围绕现货原矿高岭土供应、严谨商务沟通以及专业加工级产品组合建立起来的高岭土公司。`,
    notice: "欢迎原矿高岭土询盘与合作沟通。",
    primaryLabel: "联系我们",
    secondaryLabel: "查看应用领域",
  },
  heroHighlights: [
    {
      title: "原矿供应重点",
      description:
        "现货原矿高岭土作为面向工业客户和贸易伙伴的主要商业报价重点展示。",
    },
    {
      title: "加工产品组合",
      description:
        "水洗高岭土（Washed Kaolin）、精选高岭土（Refined Kaolin）、微粉化高岭土（Micronized Kaolin）和工业级产品（Industrial Grades）均以现有组合方式呈现。",
    },
    {
      title: "B2B 响应",
      description:
        "公司围绕询盘、样品和商务合作建立了务实清晰的沟通结构。",
    },
  ],
  overview: {
    section: {
      eyebrow: "公司概览",
      title: "一家面向供货讨论、技术评估与工业合作而构建的高岭土公司。",
      description:
        `${companyInfo.brandName} 以清晰的商业方式呈现产品结构，在突出原矿高岭土供应的同时，也支持买家了解加工级与应用导向型产品。`,
    },
    narrative:
      "公司的方法建立在直接沟通、稳定跟进以及清晰产品组合语言之上，帮助工业买家快速理解现有原矿高岭土、精选产品及合作路径。",
    points: [
      "原矿高岭土优先用于采购、评估与商业需求沟通。",
      "加工级高岭土支持水洗高岭土（Washed Kaolin）、精选高岭土（Refined Kaolin）、微粉化高岭土（Micronized Kaolin）与工业级产品（Industrial Grades）讨论。",
      "沟通结构围绕询盘、样品与长期合作机会组织。",
    ],
  },
  portfolio: {
    section: {
      eyebrow: "商业结构",
      title: "为工业买家清晰表达而设计的产品组合。",
      description:
        "从原矿供应到加工级产品，公司以现成、专业的 B2B 语言展示高岭土，而不是以模糊的未来计划表达。",
    },
    cards: [
      {
        title: "原矿高岭土供应",
        description:
          "可直接用于大宗采购、工业确认和商业合作沟通的原矿高岭土。",
      },
      {
        title: "加工级产品",
        description:
          "水洗高岭土（Washed Kaolin）、精选高岭土（Refined Kaolin）和微粉化高岭土（Micronized Kaolin）作为现有工业需求产品语言的一部分进行展示。",
      },
      {
        title: "工业匹配",
        description:
          "产品组合沟通覆盖陶瓷、卫生洁具、瓷器、聚合物和涂层相关应用。",
      },
    ],
  },
  contact: {
    section: {
      eyebrow: "合作",
      title: "就原矿高岭土、样品或工业供货需求开启直接沟通。",
      description:
        "Pluto Enerji 以清晰的商务联络方式响应采购请求、样品协调与 B2B 合作。",
    },
    primaryLabel: "发送邮件至 info@plutoenerji.com",
    secondaryLabel: "访问联系页面",
    cards: [
      { title: "主要邮箱", description: companyInfo.email },
      { title: "公司所在地", description: companyInfo.address },
      { title: "范围", description: "原矿高岭土供应、加工级产品与工业合作。" },
    ],
  },
} satisfies AboutPageContent;
