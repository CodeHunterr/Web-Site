import { companyInfo } from "../company";
import type { SustainabilityPageContent } from "../types";

export const sustainabilityPageContent = {
  metadata: {
    title: `${companyInfo.brandName} | 可持续发展`,
    description:
      "Pluto Enerji 通过负责任采矿、环境责任、职业安全与公司治理，系统呈现自身的可持续发展与 ESG 方法论。",
  },
  hero: {
    eyebrow: "可持续发展与 ESG",
    titleLine1: "负责任采矿，",
    titleLine2: "可持续未来",
    description:
      "在 Pluto Enerji Yatırım A.Ş.，可持续发展不仅被视为环境责任，更被视为长期价值创造、公司治理与负责任采矿的核心组成部分。",
    notice:
      "环境、社会与治理原则已成为我们长期增长战略中不可分割的一部分。",
    primaryLabel: "环境重点",
    secondaryLabel: "未来展望",
  },
  heroHighlights: [
    {
      title: "环境责任",
      description:
        "高效利用自然资源、降低环境影响并支持长期矿区可持续性，是我们的核心优先事项之一。",
    },
    {
      title: "人员与安全",
      description:
        "员工、合作伙伴与访客的健康和安全，始终是我们各项运营活动的核心前提。",
    },
    {
      title: "公司治理",
      description:
        "我们以透明、合规与负责任的商业原则为基础，致力于建立长期稳固的信任关系。",
    },
  ],
  overview: {
    section: {
      eyebrow: "方法论",
      title: "长期价值与负责任采矿",
      description:
        "我们将可持续发展视为连接环境责任、公司治理与长期价值创造的整体框架。",
    },
    paragraphs: [
      "作为 Pluto Enerji Yatırım A.Ş.，我们将可持续发展不仅视为环境责任，更视为长期价值创造、公司治理和负责任采矿的基本要素。",
      "在高岭土矿区开展的各项活动中，我们坚持以高效利用自然资源、最大程度降低环境影响，并为所有利益相关方创造可持续价值为基本原则。",
      "在严格遵循现行法律法规开展经营活动的同时，我们也将环境、社会和治理原则视为公司长期增长战略中不可分割的一部分。",
    ],
  },
  responsibility: {
    section: {
      eyebrow: "环境责任",
      title: "资源效率与运营纪律",
      description:
        "在开展采矿活动的过程中，我们致力于降低环境影响、提升资源利用效率，并持续优化生产流程。",
    },
    prioritiesLead: "在此框架下，我们的优先事项包括：",
    priorities: [
      "高效利用自然资源",
      "持续改进生产流程",
      "全面遵守环境法规",
      "提升废弃物管理与资源效率",
      "支持作业区域的长期可持续性",
    ],
    closing:
      "我们的长期目标，是通过投资先进的矿物选矿与加工技术，在提升资源利用效率的同时，从现有自然资源中创造更高附加值。",
  },
  pillars: {
    section: {
      eyebrow: "ESG 核心议题",
      title: "低碳、安全与治理",
      description:
        "技术进步、安全文化与合规治理，共同构成我们可持续发展框架的关键支柱。",
    },
    cards: [
      {
        title: "助力低碳工业发展",
        paragraphs: [
          "从全球范围来看，建筑材料与工业生产流程正加速向低碳技术转型。",
          "高岭土等工业矿物，已成为能够支持水泥、陶瓷、建筑材料以及多个工业领域开发更可持续生产流程的重要战略原料。",
          "Pluto Enerji 持续跟踪行业技术进展，并致力于开展相关技术研究，以推动公司产品未来进入更高附加值、更可持续的应用场景。",
        ],
      },
      {
        title: "人员与职业安全",
        paragraphs: [
          "成功且可持续的采矿活动，其核心始终是人。",
          "员工、业务合作伙伴以及访客的健康与安全，始终是我们最重要的优先事项之一。",
          "推动安全工作文化、支持职业发展以及以责任意识开展工作，构成了我们企业文化的基本部分。",
          "Pluto Enerji 秉持重视员工、重视长期合作，并致力于与所在地区建立相互信任关系的企业理念。",
        ],
      },
      {
        title: "公司治理",
        paragraphs: [
          "Pluto Enerji 以诚信、透明、问责和商业伦理为基础开展各项经营活动。",
        ],
        points: [
          "践行合乎伦理的商业实践",
          "保持透明沟通",
          "完整履行商业责任",
          "发展长期且可持续的业务合作关系",
        ],
      },
    ],
  },
  future: {
    section: {
      eyebrow: "未来愿景",
      title: "面向更高附加值的未来布局",
      description:
        "Pluto Enerji 的愿景并不局限于成为一家仅提供自然资源的矿业公司。",
    },
    paragraphs: [
      "我们的长期目标，是通过先进的矿物选矿与加工技术，将现有高岭土与石英资源转化为更高附加值的工业产品，提升在国际市场上的竞争力，并成长为一家以可持续增长理念运营的示范性工业矿物企业。",
      "基于这一方向，可持续发展与 ESG 原则已成为我们所有战略决策和未来投资布局的基础。",
    ],
  },
} satisfies SustainabilityPageContent;
