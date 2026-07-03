import { companyInfo } from "../company";
import type { SustainabilityPageContent } from "../types";

export const sustainabilityPageContent = {
  metadata: {
    title: `${companyInfo.brandName} | Sustainability`,
    description:
      "Pluto Enerji's sustainability and ESG approach is presented through responsible mining, environmental stewardship, occupational safety and sound corporate governance.",
  },
  hero: {
    eyebrow: "Sustainability & ESG",
    titleLine1: "Responsible Mining,",
    titleLine2: "Sustainable Future",
    description:
      "At Pluto Enerji Yatırım A.Ş., sustainability is not viewed solely as an environmental responsibility, but as a core pillar of long-term value creation, corporate governance and responsible mining.",
    notice:
      "Environmental, social and governance principles form an integral part of our long-term growth approach.",
    primaryLabel: "Environmental Priorities",
    secondaryLabel: "Future Outlook",
  },
  heroHighlights: [
    {
      title: "Environmental stewardship",
      description:
        "Efficient resource use, reduced environmental impact and long-term site sustainability remain among our core priorities.",
    },
    {
      title: "People & safety",
      description:
        "The health and safety of our employees, business partners and visitors are central to every stage of our operations.",
    },
    {
      title: "Corporate governance",
      description:
        "We aim to build lasting trust through transparency, ethical business conduct and accountable decision-making.",
    },
  ],
  overview: {
    section: {
      eyebrow: "Approach",
      title: "Long-Term Value and Responsible Mining",
      description:
        "We treat sustainability as an integrated framework that links environmental responsibility, sound governance and enduring value creation.",
    },
    paragraphs: [
      "At Pluto Enerji Yatırım A.Ş., we regard sustainability not only as an environmental responsibility, but as a fundamental element of long-term value creation, corporate governance and responsible mining.",
      "Across our kaolin mining operations, we adopt as a core principle the efficient use of natural resources, the minimization of environmental impacts and the creation of sustainable value for all stakeholders.",
      "While conducting our activities in line with applicable legal regulations, we consider environmental, social and governance principles to be an integral part of the company's long-term growth strategy.",
    ],
  },
  responsibility: {
    section: {
      eyebrow: "Environmental responsibility",
      title: "Resource Efficiency and Operational Discipline",
      description:
        "In our mining activities, we aim to reduce environmental impacts, improve resource efficiency and continuously advance our production processes.",
    },
    prioritiesLead: "In this framework, our priorities are:",
    priorities: [
      "Efficient use of natural resources",
      "Continuous improvement in production processes",
      "Full compliance with environmental legislation",
      "Advancement of waste management and resource efficiency",
      "Support for the long-term sustainability of our operating areas",
    ],
    closing:
      "Our long-term objective is to increase resource efficiency while generating higher added value from our existing natural resources through investment in advanced mineral beneficiation and processing technologies.",
  },
  pillars: {
    section: {
      eyebrow: "ESG pillars",
      title: "Low Carbon, Safety and Governance",
      description:
        "Technical progress, a strong safety culture and ethical governance together define the core pillars of our sustainability framework.",
    },
    cards: [
      {
        title: "Contribution to a Low-Carbon Industry",
        paragraphs: [
          "Globally, building materials and industrial production processes are undergoing a significant transition toward low-carbon technologies.",
          "Industrial minerals such as kaolin are among the strategic raw materials that can contribute to the development of more sustainable production processes in cement, ceramics, construction materials and many other industrial sectors.",
          "At Pluto Enerji, we closely follow technological developments in the sector and aim to carry out technical studies that will position our products for higher value-added and more sustainable applications in the future.",
        ],
      },
      {
        title: "People and Occupational Safety",
        paragraphs: [
          "People are at the heart of successful and sustainable mining operations.",
          "The health and safety of our employees, business partners and visitors remain among our highest priorities.",
          "Promoting a safe working culture, supporting professional development and acting with a strong sense of responsibility are fundamental elements of our corporate culture.",
          "Pluto Enerji embraces a corporate approach that values its people, prioritizes long-term partnerships and seeks to build relationships of mutual trust with the region in which it operates.",
        ],
      },
      {
        title: "Corporate Governance",
        paragraphs: [
          "Pluto Enerji conducts its operations in line with the principles of integrity, transparency, accountability and ethical business conduct.",
        ],
        points: [
          "Adopting ethical business practices",
          "Maintaining transparent communication",
          "Fulfilling our commercial responsibilities in full",
          "Building long-term and sustainable business partnerships",
        ],
      },
    ],
  },
  future: {
    section: {
      eyebrow: "Vision",
      title: "Future Outlook for Higher Value Creation",
      description:
        "Pluto Enerji's vision goes beyond being solely a mining company that produces natural resources.",
    },
    paragraphs: [
      "Our long-term objective is to transform our kaolin and quartz resources into higher value-added industrial products through advanced mineral beneficiation and processing technologies, strengthen our competitiveness in international markets and become a model industrial minerals company operating with a sustainable growth mindset.",
      "In this direction, sustainability and ESG principles form the basis of all our strategic decisions and future-oriented investments.",
    ],
  },
} satisfies SustainabilityPageContent;
