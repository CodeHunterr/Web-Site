import { companyInfo } from "../company";
import type { KaolinPageContent } from "../types";

export const kaolinPageContent = {
  metadata: {
    title: `${companyInfo.brandName} | Kaolin`,
    description:
      "Professional overview of kaolin properties, formation, processing, industrial applications and Pluto Enerji's approach.",
  },
  hero: {
    eyebrow: "Kaolin",
    title: "KAOLIN",
    description:
      "Kaolin, one of the fundamental raw materials of industrial production, is among the indispensable minerals of modern industry with its high purity, low abrasiveness and broad range of applications.",
    backgroundImage: "/images/kaolin.jpg",
  },
  sections: [
    {
      id: "what-is-kaolin",
      title: "What Is Kaolin",
      body:
        "Kaolin is a naturally white, fine-particle clay composed primarily of the mineral kaolinite. It forms over millions of years through the chemical weathering of feldspar-rich rocks and represents an important industrial raw material with strong high-purity potential.\n\nThanks to its low abrasiveness, chemically inert structure and processability, kaolin plays a critical role across many sectors, from ceramics and rubber to paints and plastics. With advanced production technologies, kaolin is now actively used not only in traditional applications but also in industrial uses that require higher performance.",
    },
    {
      id: "properties",
      title: "Properties of Kaolin",
      body:
        "The industrial value of kaolin is primarily defined by its physical and chemical properties:\n\nHigh Purity: With suitable processing, iron and other impurities can be reduced to achieve higher brightness and product quality.\n\nParticle Size and Distribution: The size and shape of kaolin particles directly influence surface quality and mechanical performance.\n\nSurface Chemistry: It can be adapted for different applications and optimized for better compatibility with other materials.\n\nThermal Stability: Its resistance to high temperatures makes kaolin ideal for ceramics and refractory applications.\n\nLow Abrasiveness: It can be processed with limited wear on production equipment.",
    },
    {
      id: "formation",
      title: "How Does Kaolin Form",
      body:
        "Kaolin forms naturally through the long-term chemical weathering of feldspar-rich rocks. During this process, the original rock structure decomposes and kaolinite mineral develops.\n\nOver time, erosion transports these minerals to different areas, where they can accumulate as purer, denser and economically valuable deposits. Depending on geological conditions and deposit location, the physical and chemical characteristics of kaolin may vary.\n\nThis natural formation process enables reserves with different quality levels for industrial use.",
    },
    {
      id: "processing",
      title: "How Is Kaolin Processed",
      body:
        "Kaolin can be used in its natural state as run-of-mine material, or it can be upgraded through beneficiation and refining processes to meet industrial standards.\n\nThe main process steps include:\n\n- Crushing and screening\n- Washing and classification\n- Removal of iron and foreign minerals\n- Thickening\n- Drying and micronization\n\nThrough these processes, kaolin brightness is improved, particle size is controlled, and products tailored to different industrial applications are obtained.",
    },
    {
      id: "applications",
      title: "Applications of Kaolin",
      body:
        "Kaolin is a strategic raw material with a wide range of industrial applications:\n\n- Ceramics and porcelain production\n- Paint and coating systems\n- Paper and packaging industry\n- Rubber and plastics applications\n- PVC and cable production\n- Agriculture and cosmetics\n\nThanks to the performance advantages it provides across different sectors, kaolin is regarded as a critical component that directly influences production quality.",
    },
    {
      id: "pluto-approach",
      title: "Pluto Enerji Approach",
      body:
        "At Pluto Enerji, we view kaolin not only as a raw material, but as a strategic component that directly influences industrial production performance.\n\nWithin our current structure, we offer run-of-mine kaolin supply in a fast, reliable and commercially flexible manner, while also building an infrastructure suited to future beneficiation and processed-product pathways.\n\nThis approach enables us to offer a sustainable solution that can respond quickly to current demand while remaining adaptable to advanced industrial requirements.",
    },
  ],
} satisfies KaolinPageContent;
