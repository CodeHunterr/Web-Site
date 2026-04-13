import { companyInfo } from "../company";
import type { ApplicationsPageContent } from "../types";

export const applicationsPageContent = {
  metadata: {
    title: `${companyInfo.brandName} | 应用领域`,
    description:
      "面向陶瓷、卫生洁具、瓷器、橡胶、PVC 涂层和涂料行业的高岭土解决方案。",
  },
  hero: {
    eyebrow: "",
    titleLine1: "面向各行业的高岭土应用",
    titleLine2: "",
    description:
      "围绕不同行业需求打造的高岭土开发路径，覆盖陶瓷、卫生洁具、瓷器、橡胶、PVC 涂层与涂料行业。",
    notice: "简体中文应用内容已准备完成。",
    primaryLabel: "索取应用简介",
    secondaryLabel: "查看行业",
  },
  heroHighlights: [
    {
      title: "行业导向开发",
      description:
        "每条高岭土开发路径都围绕终端用途要求，而不是单一通用等级。",
    },
    {
      title: "技术分级逻辑",
      description:
        "白度、杂质特征与粒度控制均与各行业的商业要求相匹配。",
    },
    {
      title: "工业化准备",
      description:
        "开发方案面向规模化生产、重复性与 B2B 规格控制。",
    },
  ],
  developmentApproach: {
    eyebrow: "",
    title: "面向不同应用的开发方法",
    description:
      `${companyInfo.brandName} 从终端使用性能角度评估高岭土潜力，并将开发重点与行业需求相匹配。`,
  },
  sectors: [
    {
      title: "陶瓷",
      description:
        "针对需要稳定矿物表现、可控烧成特性和可靠白度的陶瓷体系而设计的高岭土方案。",
      features: [
        "受控粒度分布，保证坯体制备一致性",
        "白度提升路径，获得洁净烧成外观",
        "降低杂质，提升热行为稳定性",
        "工艺设计与产线连续性目标相匹配",
      ],
    },
    {
      title: "卫生洁具",
      description:
        "面向卫生洁具应用的原料开发，重点平衡可塑性、成型表现与外观质量。",
      features: [
        "优化矿物特征，提升成型一致性",
        "白度导向升级，支持高端表面效果",
        "铁管理，降低颜色相关风险",
        "稳定供料策略，满足重复生产需求",
      ],
    },
    {
      title: "瓷器",
      description:
        "面向瓷器领域的高岭土开发，强调洁净化学组成、高品质外观和严格的产品控制。",
      features: [
        "高纯度方向，适配高要求配方",
        "以白度提升驱动光学质量优化",
        "低铁路线，获得洁净视觉效果",
        "以规格为导向的质量规划",
      ],
    },
    {
      title: "橡胶与轮胎",
      description:
        "针对橡胶体系的矿物优化，重点关注补强表现、分散质量与工艺适配性。",
      features: [
        "粒度调节，改善分散特性",
        "洁净矿物基础，提升胶料稳定性",
        "稳定供料质量，保障配方一致性",
        "为差异化填料等级开发预留路径",
      ],
    },
    {
      title: "PVC 涂层（PVC Coating）",
      description:
        "面向 PVC 涂层应用的高岭土方案，强调表面质量、细度控制与批次稳定性。",
      features: [
        "细粒度目标，获得平滑涂层表现",
        "亮度提升方向，带来洁净外观",
        "降低杂质，改善外观控制",
        "工艺路线匹配工业涂层性能需求",
      ],
    },
    {
      title: "涂料与涂层（Paints & Coatings）",
      description:
        "面向涂层系统的高岭土开发，重点关注白度、粒度控制和稳定矿物贡献。",
      features: [
        "白度提升潜力，支持高视觉品质",
        "粒度控制，改善悬浮表现",
        "洁净化学组成，支持高端定位",
        "稳定矿物表现，适配工业涂层系统",
      ],
    },
  ],
  supplyHighlight: {
    section: {
      eyebrow: "商业供应",
      title: "原高岭土供应",
      description:
        "我们以直接且具备商业优势的模式，为工业采购方提供矿山原生高岭土供应。",
    },
    intro:
      "Pluto Enerji 直接依托矿山运营提供原矿高岭土供应，为工业采购方提供灵活且具备商业优势的采购模式。",
    supportLead: "该供应结构可支持：",
    supports: [
      "大批量原料获取",
      "更具成本效率的采购",
      "适配客户定制加工与选矿流程",
      "样品与供货需求的直接商务协调",
    ],
    closing:
      "我们的原矿高岭土供应特别适合需要大规模矿物原料输入，或希望自主管理后续选矿与加工策略的企业。",
    ctaLabel: "提交供应咨询",
  },
} satisfies ApplicationsPageContent;
