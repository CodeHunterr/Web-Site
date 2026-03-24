import { companyInfo } from "../company";
import { mediaAssets } from "../media-assets";
import type { HomePageContent } from "../types";

export const homePageContent = {
  metadata: {
    title: `${companyInfo.brandName} | Ana Sayfa`,
    description:
      "B2B alıcılar için ham kaolin arzı, işlenmiş kaolin portföyü ve endüstriyel mineral çözümleri.",
  },
  hero: {
    eyebrow: "",
    titleLine1: "Endüstriyel Üretim İçin Kaolin Çözümleri",
    titleLine2: "",
    description:
      `${companyInfo.brandName}, hazır tüvenan ham kaolin arzı sunan ve aynı zamanda rafine, mikronize ve endüstriyel kalite ürünlerini profesyonel şekilde konumlandıran kaolin odaklı bir tedarikçi ve çözüm ortağıdır.`,
    notice: "Ham kaolin arzı, numune talepleri ve ticari görüşmeler aktiftir.",
    primaryLabel: "Bizimle İletişime Geç",
    secondaryLabel: "Uygulama Alanlarını İncele",
  },
  heroImage: mediaAssets.homeHeroImage,
  heroAside: {
    kicker: "Tedarik konumu",
    description:
      "Bulk ham kaolin arzı, numune koordinasyonu ve uzun vadeli endüstriyel iş birlikleri için yapılandırılmış net bir B2B iletişim modeli.",
  },
  heroInfoItems: [
    {
      title: "Tüvenan Ham Kaolin",
      description:
        "Doğrudan talep, bulk satış ve iş ortaklığı görüşmeleri için görünür şekilde konumlandırılmış ham kaolin arzı.",
    },
    {
      title: "İşlenmiş Portföy",
      description:
        "Yıkanmış kaolin (Washed Kaolin), rafine kaolin (Refined Kaolin) ve mikronize kaolin (Micronized Kaolin) aktif ürün portföyünün parçası olarak sunulur.",
    },
    {
      title: "Endüstriyel Kaliteler (Industrial Grades)",
      description:
        "Ürün konumlandırması seramik, vitrifiye, porselen, kauçuk, PVC kaplama ve boya-kaplama sistemleriyle uyumludur.",
    },
  ],
  supply: {
    section: {
      eyebrow: "Ham Kaolin Arzı",
      title: "Ticari talep, numune ve iş birliği için hazır tüvenan kaolin arzı.",
      description:
        "Pluto Enerji, ham kaolin arzını görünür bir ticari teklif olarak sunar; bulk tedarik, endüstriyel inceleme, numune talepleri ve B2B iş birlikleri için net bir iletişim yapısı sağlar.",
    },
    primaryLabel: "Ham kaolin talebi gönder",
    secondaryLabel: "Ürün portföyünü incele",
    cards: [
      {
        title: "Hazır Arz",
        description:
          "Tüvenan ham kaolin, aktif müşteri görüşmeleri ve proje değerlendirmeleri için hazır arz konumundadır.",
      },
      {
        title: "Numune ve İş Birliği",
        description:
          "Numune talepleri ve ticari iş birliği görüşmeleri doğrudan ve profesyonel bir akışla yönetilir.",
      },
      {
        title: "Bulk / Ham Kaolin",
        description:
          "Bulk ham kaolin tedariği, ticari fırsatlar ve uzun vadeli arz planlaması arayan alıcılar için uygundur.",
      },
      {
        title: "Endüstriyel Uygunluk",
        description:
          "Malzeme konumu seramik, vitrifiye, porselen ve daha geniş endüstriyel kullanım alanları için uygundur.",
      },
    ],
  },
  about: {
    section: {
      eyebrow: "Hakkımızda",
      title: "Ticari ve endüstriyel konumu net olan kaolin odaklı bir şirket.",
      description:
        `${companyInfo.brandName}, hazır ham kaolin arzını görünür kılarken işlenmiş ve endüstriyel kalite ürünleri de disiplinli bir portföy yapısıyla sunar.`,
    },
    narrative:
      "Şirket yapısı, pratik B2B iletişim, güvenilir geri dönüş ve hem ham kaolin arzını hem de işlenmiş ürünleri anlaşılır biçimde sunan bir portföy mantığı üzerine kuruludur.",
    points: [
      "Hazır ham kaolin arzı ana ticari teklif olarak öne çıkarılır.",
      "İşlenmiş ürünler aktif ürün portföyünün bir parçası olarak sunulur.",
      "Numune, talep ve iş birliği için yapılandırılmış iletişim sağlanır.",
    ],
  },
  applications: {
    section: {
      eyebrow: "Portföy",
      title: "Endüstriyel müşteriler için aktif kaolin ürün yapısı.",
      description:
        "Ham kaolin arzından işlenmiş ve endüstriyel kalite ürünlere kadar portföy ticari netlikle sunulur.",
    },
    cards: [
      {
        title: "Ham Kaolin Arzı",
        description:
          "Tüvenan kaolin, bulk talep, satın alma görüşmeleri ve endüstriyel değerlendirme için konumlandırılmıştır.",
      },
      {
        title: "Yıkanmış Kaolin (Washed Kaolin)",
        description:
          "Daha temiz ve daha kontrollü mineral çıktısı arayan müşteriler için profesyonel şekilde sunulur.",
      },
      {
        title: "Rafine Kaolin (Refined Kaolin)",
        description:
          "Daha güçlü tutarlılık, görsel kalite ve spesifikasyon uyumu gerektiren uygulamalar için konumlandırılmıştır.",
      },
      {
        title: "Mikronize Kaolin (Micronized Kaolin)",
        description:
          "Daha ince tane boyutu ve daha iyi dispersiyon davranışı gerektiren uygulamalar için uygundur.",
      },
      {
        title: "Endüstriyel Kaliteler (Industrial Grades)",
        description:
          "Ürün kalite dili seramik, polimer ve kaplama sektörlerindeki pratik taleplerle uyumludur.",
      },
      {
        title: "Uygulama Eşleştirme",
        description:
          "Her son kullanım alanı için doğru kaolin teklifini seçmeye yardımcı olacak ticari ve teknik yönlendirme sunulur.",
      },
    ],
  },
  contact: {
    section: {
      eyebrow: "İletişim",
      title: `${companyInfo.brandName} ile ham kaolin veya ürün görüşmesini başlatın.`,
      description:
        "Ham kaolin talebi, numune isteği, endüstriyel kalite ihtiyacı veya iş birliği konularını tek bir B2B iletişim kanalı üzerinden paylaşın.",
    },
    primaryLabel: "info@plutoenerji.com adresine yaz",
    secondaryLabel: "Hemen ara",
    cards: [
      { title: "E-posta", description: companyInfo.email },
      { title: "Telefon", description: companyInfo.phone },
      {
        title: "Ticari Odak",
        description: "Ham kaolin arzı, numune ve endüstriyel kalite talepleri.",
      },
    ],
  },
} satisfies HomePageContent;
