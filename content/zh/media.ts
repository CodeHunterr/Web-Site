import { companyInfo } from "../company";
import { mediaAssets } from "../media-assets";
import type { MediaPageContent } from "../types";

export const mediaPageContent = {
  metadata: {
    title: `${companyInfo.brandName} | 媒体中心`,
    description: "用于企业展示的矿区、堆场和工艺视觉资料。",
  },
  hero: {
    eyebrow: "",
    titleLine1: "我们的运营",
    titleLine2: "与媒体资料",
    description: "",
    notice: "",
    primaryLabel: "索取媒体资料",
    secondaryLabel: "查看图库",
  },
  heroSocial: {
    title: "我们的社交媒体",
    links: [
      {
        label: "LinkedIn :",
        href: "https://www.linkedin.com/company/plutoenerji",
        platform: "linkedin",
      },
      {
        label: "Instagram :",
        href: "https://www.instagram.com/plutoenerji",
        platform: "instagram",
      },
    ],
  },
  heroImage: {
    title: "现场概览",
    description: "",
    src: mediaAssets.mediaHeroImage.src,
    alt: "Pluto Enerji 现场概览",
  },
  heroHighlights: [
    {
      title: "现场可视化",
      description:
        "展示矿区、道路通行和作业现场状态的视觉内容。",
    },
    {
      title: "物料透明度",
      description:
        "清晰呈现原矿高岭土堆场、矿物纹理和物料流向。",
    },
    {
      title: "运营背景",
      description:
        "为工艺、物流和工厂沟通准备的专业媒体层。",
    },
  ],
  sections: {
    quarry: {
      eyebrow: "矿区与采矿区域（Quarry & Mining Area）",
      title: "用于展示矿区和采掘可视化的图像。",
      description: "",
      galleryImages: [
        {
          title: "矿区全景",
          description:
            "展示矿区整体布局和现场作业区域的广角画面。",
          src: mediaAssets.quarryImages[0].src,
          alt: "Pluto Enerji 矿区全景",
        },
        {
          title: "采场通道",
          description:
            "展示矿区内部道路与现场通行条件的图像。",
          src: mediaAssets.quarryImages[1].src,
          alt: "Pluto Enerji 采场通道",
        },
      ],
    },
    stock: {
      eyebrow: "堆场与物料（Stock & Material）",
      title: "用于高岭土堆场与进料展示的物料图像。",
      description: "",
      galleryImages: [
        {
          title: "原料堆场",
          description:
            "展示原矿高岭土堆存结构与现场物料布局的图像。",
          src: mediaAssets.stockImages[0].src,
          alt: "Pluto Enerji 原料堆场",
        },
      ],
    },
    operations: {
      eyebrow: "运营与工艺（Operations & Process）",
      title: "用于工艺可视化与工厂沟通的运营图像。",
      description: "",
      galleryImages: [
        {
          title: "工艺流程线",
          description:
            "用于展示现场流程组织与运营活动的整体画面。",
          src: mediaAssets.operationsImages[0].src,
          alt: "Pluto Enerji 工艺流程线",
        },
      ],
    },
  },
  video: {
    eyebrow: "视频",
    title: "已集成到媒体页面中的运营视频。",
    description: "",
    embedLabel: "实验室与运营视频",
    embedDescription: "",
  },
  videoUrl: mediaAssets.videoUrl,
} satisfies MediaPageContent;
