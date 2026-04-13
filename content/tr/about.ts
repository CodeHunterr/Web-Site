import { companyInfo } from "../company";
import type { AboutPageContent } from "../types";

export const aboutPageContent = {
  metadata: {
    title: `${companyInfo.brandName} | Hakkımızda`,
    description:
      "Pluto Enerji hakkında: ham kaolin arzı ve endüstriyel ürün portföyü etrafında konumlanan kaolin şirketi.",
  },
  hero: {
    eyebrow: "",
    titleLine1: "Kaolin Tedariğinde Güvenilir Ortak",
    titleLine2: "",
    description:
      `${companyInfo.brandName}, hazır ham kaolin arzı, disiplinli ticari iletişim ve profesyonel işlenmiş ürün portföyü etrafında konumlanan kaolin odaklı bir şirkettir.`,
    notice: "Ham kaolin talepleri ve iş ortaklığı görüşmeleri açıktır.",
    primaryLabel: "Bizimle İletişime Geç",
    secondaryLabel: "Uygulama Alanlarını İncele",
  },
  heroHighlights: [
    {
      title: "Ham arz odağı",
      description:
        "Hazır ham kaolin arzı, endüstriyel alıcılar ve ticari partnerler için ana teklif olarak öne çıkarılır.",
    },
    {
      title: "İşlenmiş portföy",
      description:
        "Yıkanmış kaolin (Washed Kaolin), rafine kaolin (Refined Kaolin), mikronize kaolin (Micronized Kaolin) ve endüstriyel kaliteler (Industrial Grades) aktif portföy diliyle sunulur.",
    },
    {
      title: "B2B iletişim",
      description:
        "Şirket; talep, numune ve ticari iş birliği için pratik bir iletişim yapısı sunar.",
    },
  ],
  overview: {
    section: {
      eyebrow: "",
      title: "Endüstriyel Ortaklıklar Odaklı Kaolin Şirketi",
      description:
        `${companyInfo.brandName}, ürün yapısını ticari netlikle sunar; ham kaolin arzını görünür kılarken işlenmiş ve uygulama odaklı ürünleri de profesyonel şekilde konumlandırır.`,
    },
    narrative:
      "Şirket yaklaşımı doğrudan iletişim, güvenilir geri dönüş ve endüstriyel alıcıların ham kaolin, rafine ürünler ve iş birliği yollarını hızlıca anlayabileceği bir portföy dili üzerine kuruludur.",
    points: [
      "Ham kaolin, tedarik ve ticari talep için ilk sırada konumlandırılır.",
      "İşlenmiş kaolin dili; yıkanmış kaolin (Washed Kaolin), rafine kaolin (Refined Kaolin), mikronize kaolin (Micronized Kaolin) ve endüstriyel kaliteleri (Industrial Grades) destekler.",
      "İletişim yapısı talep, numune ve uzun vadeli iş birliği fırsatları için düzenlenmiştir.",
    ],
  },
  portfolio: {
    section: {
      eyebrow: "",
      title: "Çözümler Sunan Portföy Yapısı",
      description:
        "Ham arzdan işlenmiş kalite ürünlere kadar şirket, kaolini belirsiz bir gelecek diliyle değil hazır ve profesyonel bir B2B anlatımla sunar.",
    },
    cards: [
      {
        title: "Ham Kaolin Arzı",
        description:
          "Bulk tedarik, endüstriyel uygunluk ve ticari iş ortaklığı görüşmeleri için hazır ham kaolin.",
      },
      {
        title: "İşlenmiş Ürünler",
        description:
          "Yıkanmış kaolin (Washed Kaolin), rafine kaolin (Refined Kaolin) ve mikronize kaolin (Micronized Kaolin) aktif ürün portföyünün parçası olarak sunulur.",
      },
      {
        title: "Endüstriyel Uyum",
        description:
          "Portföy dili seramik, vitrifiye, porselen, polimer ve kaplama uygulamalarını destekler.",
      },
    ],
  },
  contact: {
    section: {
      eyebrow: "İş Ortaklığı",
      title: "Ham kaolin, numune veya endüstriyel tedarik ihtiyacı için doğrudan iletişim kurun.",
      description:
        "Pluto Enerji, tedarik talepleri, numune koordinasyonu ve B2B iş birliklerine net bir ticari iletişim noktasıyla yanıt verir.",
    },
    primaryLabel: "contact@plutoenerji.com adresine yaz",
    secondaryLabel: "İletişim sayfasına git",
    cards: [
      { title: "Ana E-posta", description: companyInfo.email },
      { title: "Şirket Lokasyonu", description: companyInfo.address },
      {
        title: "Kapsam",
        description: "Ham kaolin arzı, işlenmiş ürünler ve endüstriyel iş birlikleri.",
      },
    ],
  },
} satisfies AboutPageContent;
