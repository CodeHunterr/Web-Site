import { companyInfo } from "../company";
import { mediaAssets } from "../media-assets";
import type { MediaPageContent } from "../types";

export const mediaPageContent = {
  metadata: {
    title: `${companyInfo.brandName} | 媒体中心`,
    description: "矿区、实验室与运营画面的企业级媒体展示。",
  },
  hero: {
    eyebrow: "",
    titleLine1: "我们的运营",
    titleLine2: "与媒体资料",
    description:
      "矿区影像、实验室记录与运营媒体内容，体现了 Pluto Enerji 在现场生产中的纪律性与技术可视化能力。",
    notice: "",
    primaryLabel: "",
    secondaryLabel: "查看图库",
  },
  heroSlides: mediaAssets.mediaHeroSlides,
  heroSupportCards: [
    {
      title: "矿区影像",
      description: "展示矿区规模、开采连续性与现场生产环境的精选画面。",
    },
    {
      title: "实验室记录",
      description: "支持样品审查、分析与技术监测的受控实验室影像。",
    },
    {
      title: "运营媒体",
      description: "面向企业展示与工业沟通整理的运营媒体资料。",
    },
  ],
  heroSocial: {
    title: "我们的社交媒体",
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
      title: "矿区与采矿区域（Quarry & Mining Area）",
      description: "",
      galleryImages: [
        {
          title: "矿区全景",
          description: "展示矿区整体结构与当前采掘区域的广角画面。",
          src: mediaAssets.quarryImages[0].src,
          alt: "Pluto Enerji 矿区全景",
        },
        {
          title: "现场通道",
          description: "用于呈现矿区内部道路与现场通行条件的作业画面。",
          src: mediaAssets.quarryImages[1].src,
          alt: "Pluto Enerji 现场通道",
        },
        {
          title: "生产区域",
          description: "反映采矿连续性与现场生产状态的作业区域图像。",
          src: mediaAssets.quarryImages[2].src,
          alt: "Pluto Enerji 生产区域",
        },
        {
          title: "作业分区",
          description: "突出矿区深度、规模与作业环境的现场视角。",
          src: mediaAssets.quarryImages[3].src,
          alt: "Pluto Enerji 作业分区",
        },
        {
          title: "开采视角",
          description: "体现开采纹理与矿体特征的细节画面。",
          src: mediaAssets.quarryImages[4].src,
          alt: "Pluto Enerji 开采视角",
        },
      ],
    },
    stock: {
      eyebrow: "",
      title: "高岭土矿物处理",
      description: "",
      galleryImages: [
        {
          title: "样品准备工位",
          description: "高岭土样品在受控流程中完成处理与分析前的准备工作。",
          src: mediaAssets.processingImages[0].src,
          alt: "Pluto Enerji 样品准备工位",
        },
        {
          title: "工艺控制节点",
          description: "物料流向、设备顺序与处理步骤在现场和实验室协同下得到监控。",
          src: mediaAssets.processingImages[1].src,
          alt: "Pluto Enerji 工艺控制节点",
        },
        {
          title: "质量跟踪视图",
          description: "处理阶段的可视化记录为产品稳定性与运营纪律提供支持。",
          src: mediaAssets.processingImages[2].src,
          alt: "Pluto Enerji 质量跟踪视图",
        },
        {
          title: "矿物分离区域",
          description: "技术化布局支持高岭土物料在不同处理阶段之间的有序衔接。",
          src: mediaAssets.processingImages[3].src,
          alt: "Pluto Enerji 矿物分离区域",
        },
        {
          title: "技术运营细节",
          description: "处理线细节画面体现了受控且有序的运营流程。",
          src: mediaAssets.processingImages[4].src,
          alt: "Pluto Enerji 技术运营细节",
        },
      ],
    },
    laboratory: {
      eyebrow: "",
      title: "实验室影像",
      description: "",
      galleryImages: [
        {
          title: "样品接收与登记",
          description: "高岭土样品进入实验室流程前，先完成接收登记与可追溯性管理。",
          src: mediaAssets.laboratoryImages[0].src,
          alt: "Pluto Enerji 样品接收与登记",
        },
        {
          title: "物理性质检查",
          description: "材料的质地、含水状态与基础物理表现将在受控实验室条件下进行观察。",
          src: mediaAssets.laboratoryImages[1].src,
          alt: "Pluto Enerji 物理性质检查",
        },
        {
          title: "白度控制",
          description: "对可视品质与白度潜力进行评估，以支持产品定位与技术判断。",
          src: mediaAssets.laboratoryImages[2].src,
          alt: "Pluto Enerji 白度控制",
        },
        {
          title: "粒径观察",
          description: "颗粒结构观察有助于评估应用适配性与工艺预期。",
          src: mediaAssets.laboratoryImages[3].src,
          alt: "Pluto Enerji 粒径观察",
        },
        {
          title: "干燥后评估",
          description: "材料在干燥阶段后的状态与表面条件会进行受控复核。",
          src: mediaAssets.laboratoryImages[4].src,
          alt: "Pluto Enerji 干燥后评估",
        },
        {
          title: "筛分与级别跟踪",
          description: "不同粒级的分离在实验室环境中持续跟踪，以支持稳定的工艺质量。",
          src: mediaAssets.laboratoryImages[5].src,
          alt: "Pluto Enerji 筛分与级别跟踪",
        },
        {
          title: "实验室准备台",
          description: "设备与样品在分析前按照有序技术流程完成准备。",
          src: mediaAssets.laboratoryImages[6].src,
          alt: "Pluto Enerji 实验室准备台",
        },
        {
          title: "实验工艺搭建",
          description: "可在实验室尺度下配置不同处理方案，以评估替代性质量目标。",
          src: mediaAssets.laboratoryImages[7].src,
          alt: "Pluto Enerji 实验工艺搭建",
        },
        {
          title: "矿物纯度检查",
          description: "纯度检查与矿物特征识别是技术质量评估中的核心环节。",
          src: mediaAssets.laboratoryImages[8].src,
          alt: "Pluto Enerji 矿物纯度检查",
        },
        {
          title: "对比样品组",
          description: "不同样品的并列对比有助于识别产品差异并明确适合的工艺方向。",
          src: mediaAssets.laboratoryImages[9].src,
          alt: "Pluto Enerji 对比样品组",
        },
        {
          title: "分析前准备",
          description: "测量与检查前的准备步骤会进行标准化，以提升结果可靠性。",
          src: mediaAssets.laboratoryImages[10].src,
          alt: "Pluto Enerji 分析前准备",
        },
        {
          title: "操作员受控检查",
          description: "在技术团队监督下进行的检查，有助于推动基于数据的工艺决策。",
          src: mediaAssets.laboratoryImages[11].src,
          alt: "Pluto Enerji 操作员受控检查",
        },
        {
          title: "实验质量验证",
          description: "实验室验证步骤支持产品在不同工业应用中的适配性判断。",
          src: mediaAssets.laboratoryImages[12].src,
          alt: "Pluto Enerji 实验质量验证",
        },
        {
          title: "报告前最终复核",
          description: "最终复核阶段可增强技术输出的一致性以及面向商务沟通的准备度。",
          src: mediaAssets.laboratoryImages[13].src,
          alt: "Pluto Enerji 报告前最终复核",
        },
      ],
    },
  },
  video: {
    eyebrow: "",
    title: "实验室与运营视频",
    description: "",
    embedLabel: "实验室与运营视频",
    embedDescription: "",
  },
  videoUrl: mediaAssets.videoUrl,
} satisfies MediaPageContent;
