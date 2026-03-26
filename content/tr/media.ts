import { companyInfo } from "../company";
import { mediaAssets } from "../media-assets";
import type { MediaPageContent } from "../types";

export const mediaPageContent = {
  metadata: {
    title: `${companyInfo.brandName} | Medya`,
    description: "Ocak, laboratuvar ve operasyon görsellerinin kurumsal sunumu.",
  },
  hero: {
    eyebrow: "",
    titleLine1: "Operasyonlarımız",
    titleLine2: "ve Medya",
    description:
      "Ocak görselleri, laboratuvar kayıtları ve operasyon medyası, Pluto Enerji'nin sahadaki üretim disiplinini ve teknik görünürlüğünü yansıtır.",
    notice: "",
    primaryLabel: "",
    secondaryLabel: "Galeriyi Gör",
  },
  heroSlides: mediaAssets.mediaHeroSlides,
  heroSupportCards: [
    {
      title: "Saha Görselleri",
      description: "Ocak ölçeğini, saha sürekliliğini ve üretim bağlamını yansıtan seçili görseller.",
    },
    {
      title: "Laboratuvar Kayıtları",
      description: "Numune inceleme, analiz ve teknik gözlem süreçlerini destekleyen kontrollü laboratuvar görselleri.",
    },
    {
      title: "Operasyon Medyası",
      description: "Kurumsal sunum ve endüstriyel iletişim için düzenlenmiş operasyon medya varlıkları.",
    },
  ],
  heroSocial: {
    title: "Sosyal Medya Adreslerimiz",
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
      title: "Ocak ve Madencilik Alanı (Quarry & Mining Area)",
      description: "",
      galleryImages: [
        {
          title: "Ocak Panoraması",
          description:
            "Sahanın genel yapısını ve aktif çıkarım alanını gösteren geniş açılı görünüm.",
          src: mediaAssets.quarryImages[0].src,
          alt: "Pluto Enerji ocak panoraması",
        },
        {
          title: "Saha Erişimi",
          description:
            "Ocak içi erişim yollarını ve operasyonel saha hareketini yansıtan görünüm.",
          src: mediaAssets.quarryImages[1].src,
          alt: "Pluto Enerji saha erişimi",
        },
        {
          title: "Üretim Sahası",
          description:
            "Aktif madencilik alanını ve üretim sürekliliğini gösteren saha görseli.",
          src: mediaAssets.quarryImages[2].src,
          alt: "Pluto Enerji üretim sahası",
        },
        {
          title: "Çalışma Zonları",
          description:
            "Sahanın derinliğini ve operasyonel ölçeyi hissettiren aktif çalışma zonu görünümü.",
          src: mediaAssets.quarryImages[3].src,
          alt: "Pluto Enerji çalışma zonları",
        },
        {
          title: "Kazı Görünümü",
          description:
            "Kazı dokusunu ve mineral alan karakterini öne çıkaran detaylı saha görseli.",
          src: mediaAssets.quarryImages[4].src,
          alt: "Pluto Enerji kazı görünümü",
        },
      ],
    },
    stock: {
      eyebrow: "",
      title: "Kaolin Minerali İşleme",
      description: "",
      galleryImages: [
        {
          title: "Laboratuvar İncelemesi",
          description:
            "Numune değerlendirme ve mineral kalite gözlemi için hazırlanan laboratuvar görseli.",
          src: mediaAssets.labImages[0].src,
          alt: "Pluto Enerji laboratuvar incelemesi",
        },
        {
          title: "Proses Takibi",
          description:
            "Kaolin işleme akışını ve kontrollü teknik gözlemi destekleyen laboratuvar görünümü.",
          src: mediaAssets.labImages[1].src,
          alt: "Pluto Enerji proses takibi",
        },
        {
          title: "Malzeme Değerlendirmesi",
          description:
            "Mineral analizi ve işleme uygunluğu için kullanılan değerlendirme aşamasını gösteren görsel.",
          src: mediaAssets.labImages[2].src,
          alt: "Pluto Enerji malzeme değerlendirmesi",
        },
      ],
    },
  },
  video: {
    eyebrow: "",
    title: "Laboratuvar ve Operasyon Videosu",
    description: "",
    embedLabel: "Laboratuvar ve Operasyon Videosu",
    embedDescription: "",
  },
  videoUrl: mediaAssets.videoUrl,
} satisfies MediaPageContent;
