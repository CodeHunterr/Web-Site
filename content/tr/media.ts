import { companyInfo } from "../company";
import { mediaAssets } from "../media-assets";
import type { MediaPageContent } from "../types";

export const mediaPageContent = {
  metadata: {
    title: `${companyInfo.brandName} | Medya`,
    description: "Kurumsal sunum için saha, stok ve proses görselleri.",
  },
  hero: {
    eyebrow: "",
    titleLine1: "Operasyonlarımız",
    titleLine2: "ve Medya",
    description: "",
    notice: "",
    primaryLabel: "Medya dosyası iste",
    secondaryLabel: "Galeriyi gör",
  },
  heroSocial: {
    title: "Sosyal Medya Adreslerimiz",
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
    title: "Saha Görünümü",
    description: "",
    src: mediaAssets.mediaHeroImage.src,
    alt: "Pluto Enerji saha görünümü",
  },
  heroHighlights: [
    {
      title: "Saha görünürlüğü",
      description:
        "Ocak alanı, ulaşım yolları ve aktif saha koşullarını gösteren görsel yapı.",
    },
    {
      title: "Malzeme şeffaflığı",
      description:
        "Ham kaolin stok alanı, mineral dokusu ve malzeme akışının net sunumu.",
    },
    {
      title: "Operasyonel bağlam",
      description:
        "Proses, lojistik ve tesis iletişimi için hazırlanan profesyonel medya katmanı.",
    },
  ],
  sections: {
    quarry: {
      eyebrow: "Ocak ve Madencilik Alanı (Quarry & Mining Area)",
      title: "Saha ve çıkarım görünürlüğü için hazırlanan görseller.",
      description: "",
      galleryImages: [
        {
          title: "Ocak Panoraması",
          description:
            "Sahanın genel görünümünü ve aktif çalışma alanını gösteren geniş açı görüntü.",
          src: mediaAssets.quarryImages[0].src,
          alt: "Pluto Enerji ocak panoraması",
        },
        {
          title: "Saha Erişimi",
          description:
            "Ocak içi ulaşım yollarını ve operasyonel saha erişimini gösteren görüntü.",
          src: mediaAssets.quarryImages[1].src,
          alt: "Pluto Enerji saha erişim alanı",
        },
      ],
    },
    stock: {
      eyebrow: "Stok ve Malzeme (Stock & Material)",
      title: "Kaolin stok ve besleme sunumu için malzeme odaklı görseller.",
      description: "",
      galleryImages: [
        {
          title: "Hammadde Stok Sahası",
          description:
            "Ham kaolin malzemesinin stok yapısını ve saha düzenini yansıtan görsel.",
          src: mediaAssets.stockImages[0].src,
          alt: "Pluto Enerji hammadde stok sahası",
        },
      ],
    },
    operations: {
      eyebrow: "Operasyon ve Proses (Operations & Process)",
      title: "Proses görünürlüğü ve tesis iletişimi için operasyon görselleri.",
      description: "",
      galleryImages: [
        {
          title: "Operasyon Hattı",
          description:
            "Saha içi operasyon akışını ve proses düzenini destekleyen genel görünüm.",
          src: mediaAssets.operationsImages[0].src,
          alt: "Pluto Enerji operasyon hattı",
        },
      ],
    },
  },
  video: {
    eyebrow: "Video",
    title: "Media sayfasına entegre edilmiş operasyon videosu.",
    description: "",
    embedLabel: "Laboratuvar ve Operasyon Videosu",
    embedDescription: "",
  },
  videoUrl: mediaAssets.videoUrl,
} satisfies MediaPageContent;
