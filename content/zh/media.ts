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
        href: "https://www.linkedin.com/company/plutoenerji",
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
          title: "实验室检视",
          description: "用于样品评估与矿物质量观察的实验室画面。",
          src: mediaAssets.labImages[0].src,
          alt: "Pluto Enerji 实验室检视",
        },
        {
          title: "工艺监测",
          description: "支持高岭土处理流程观察与技术跟踪的实验室图像。",
          src: mediaAssets.labImages[1].src,
          alt: "Pluto Enerji 工艺监测",
        },
        {
          title: "材料评估",
          description: "展示矿物分析与工艺适配评估阶段的实验室场景。",
          src: mediaAssets.labImages[2].src,
          alt: "Pluto Enerji 材料评估",
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
