import { companyInfo } from "../company";
import { mediaAssets } from "../media-assets";
import type { HomePageContent } from "../types";

export const homePageContent = {
  metadata: {
    title: `${companyInfo.brandName} | 首页`,
    description: "面向 B2B 客户的原矿高岭土供应、加工级高岭土组合与工业矿物解决方案。",
  },
  hero: {
    eyebrow: "",
    titleLine1: "工业生产用高岭土解决方案",
    titleLine2: "",
    description:
      `${companyInfo.brandName} 是一家专注高岭土的供应商与商业合作伙伴，提供可直接供应的原矿高岭土，并同时展示精选、微粉化及工业级高岭土产品结构。`,
    notice: "原高岭土供应、样品需求与商务洽谈正在进行中。",
    primaryLabel: "联系我们",
    secondaryLabel: "查看应用领域",
  },
  heroImage: mediaAssets.homeHeroImage,
  heroSlides: mediaAssets.homeHeroSlides,
  heroAside: {
    kicker: "供应定位",
    description:
      "面向大宗原矿高岭土供应、样品对接与长期工业合作，提供清晰且高效的 B2B 沟通方式。",
  },
  heroInfoItems: [
    {
      title: "原矿高岭土",
      description:
        "突出展示原矿高岭土供应，可直接用于询盘、大宗采购和合作沟通。",
    },
    {
      title: "加工级产品组合",
      description:
        "水洗高岭土（Washed Kaolin）、精选高岭土（Refined Kaolin）和微粉化高岭土（Micronized Kaolin）以现有工业产品组合方式呈现。",
    },
    {
      title: "工业级产品（Industrial Grades）",
      description:
        "产品定位覆盖陶瓷、卫生洁具、瓷器、橡胶、PVC 涂层和涂料系统等应用方向。",
    },
  ],
  supply: {
    section: {
      eyebrow: "",
      title: "原高岭土供应",
      description:
        "Pluto Enerji 将原矿高岭土供应作为清晰可见的商业报价，支持大宗采购、工业评估、样品申请与 B2B 合作沟通。",
    },
    primaryLabel: "申请高岭土供应",
    secondaryLabel: "查看产品信息",
    cards: [
      {
        title: "现货供应",
        description: "原矿高岭土已具备直接供应定位，可用于买方沟通和项目评估。",
      },
      {
        title: "样品与合作",
        description: "样品申请与商务合作沟通均可通过清晰直接的联络方式推进。",
      },
      {
        title: "大宗 / 原矿供应",
        description: "适合有大宗原矿采购、贸易合作或长期供货规划需求的客户。",
      },
      {
        title: "工业适用性",
        description: "材料定位可支持陶瓷、卫生洁具、瓷器及更广泛工业用途的评估。",
      },
    ],
  },
  about: {
    section: {
      eyebrow: "",
      title: "专注工业的高岭土公司",
      description:
        `${companyInfo.brandName} 将现货原矿高岭土供应与加工级、工业级产品的专业呈现结合在一起。`,
    },
    narrative:
      "公司的定位围绕务实的 B2B 响应、稳定沟通以及清晰的产品组合展开，使工业客户更容易理解原矿供应与加工高岭土产品结构。",
    points: [
      "现货原矿高岭土作为首要商业报价重点展示。",
      "加工级产品以现有产品组合的一部分进行专业呈现。",
      "围绕样品、询盘与合作建立清晰沟通流程。",
    ],
  },
  applications: {
    section: {
      eyebrow: "",
      title: "工业用高岭土产品结构",
      description:
        "从原矿供应到加工级及工业级产品，整体产品组合以清晰专业的商业方式呈现。",
    },
    cards: [
      {
        title: "原矿高岭土供应",
        description: "原矿高岭土面向大宗需求、采购沟通与工业评估。",
      },
      {
        title: "水洗高岭土（Washed Kaolin）",
        description: "面向寻求更洁净、更可控矿物输出的客户进行专业展示。",
      },
      {
        title: "精选高岭土（Refined Kaolin）",
        description: "用于更高一致性、视觉品质和规格匹配要求的产品定位。",
      },
      {
        title: "微粉化高岭土（Micronized Kaolin）",
        description: "适用于需要更细粒度与更好分散表现的应用场景。",
      },
      {
        title: "工业级产品（Industrial Grades）",
        description: "产品分级语言覆盖陶瓷、聚合物与涂层等实际行业需求。",
      },
      {
        title: "应用匹配",
        description: "为不同终端用途提供高岭土选择上的商业与技术指导。",
      },
    ],
  },
  contact: {
    section: {
      eyebrow: "联系",
      title: `与 ${companyInfo.brandName} 开启原矿或产品沟通。`,
      description:
        "欢迎通过统一的 B2B 联络渠道提交原矿高岭土需求、样品申请、工业级产品需求或合作意向。",
    },
    primaryLabel: "发送邮件至 info@plutoenerji.com",
    secondaryLabel: "立即致电",
    cards: [
      { title: "邮箱", description: companyInfo.email },
      { title: "电话", description: companyInfo.phone },
      { title: "商务重点", description: "原矿高岭土供应、样品与工业级产品询盘。" },
    ],
  },
} satisfies HomePageContent;
