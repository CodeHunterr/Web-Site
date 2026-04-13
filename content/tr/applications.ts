import { companyInfo } from "../company";
import type { ApplicationsPageContent } from "../types";

export const applicationsPageContent = {
  metadata: {
    title: `${companyInfo.brandName} | Uygulamalar`,
    description:
      "Seramik, vitrifiye, porselen, kauçuk, PVC kaplama ve boya-kaplama uygulamaları için kaolin çözümleri.",
  },
  hero: {
    eyebrow: "",
    titleLine1: "Sektör Bazlı Kaolin Uygulamaları",
    titleLine2: "",
    description:
      "Seramik, vitrifiye, porselen, kauçuk, PVC kaplama ve boya-kaplama sistemleri için geliştirilen kaolin yaklaşımı.",
    notice: "Türkçe uygulama içeriği hazır.",
    primaryLabel: "Uygulama özeti iste",
    secondaryLabel: "Sektörleri gör",
  },
  heroHighlights: [
    {
      title: "Sektör odaklı geliştirme",
      description:
        "Her kaolin yaklaşımı tek bir genel ürün yerine son kullanım beklentileri etrafında şekillenir.",
    },
    {
      title: "Teknik derecelendirme mantığı",
      description:
        "Beyazlık, empürite profili ve tane boyutu her sektörün ticari beklentisiyle hizalanır.",
    },
    {
      title: "Endüstriyel hazırlık",
      description:
        "Geliştirme yaklaşımı ölçeklenebilir üretim, tekrarlanabilirlik ve B2B spesifikasyon kontrolü için yapılandırılmıştır.",
    },
  ],
  developmentApproach: {
    eyebrow: "",
    title: "Farklı Kullanımlara Uygun Geliştirme Yaklaşımı",
    description:
      `${companyInfo.brandName}, kaolin potansiyelini son kullanım performansı açısından değerlendirir ve geliştirme önceliklerini sektör ihtiyaçlarıyla eşleştirir.`,
  },
  sectors: [
    {
      title: "Seramik",
      description:
        "Stabil mineral davranışı, kontrollü pişirim ve güvenilir beyazlık isteyen seramik sistemleri için tasarlanmış kaolin çözümleri.",
      features: [
        "Tutarlı hamur hazırlığı için kontrollü tane dağılımı",
        "Temiz pişmiş görünüm için beyazlık geliştirme yolu",
        "Stabil termal davranış için düşük empürite odağı",
        "Üretim sürekliliğine uyumlu proses tasarımı",
      ],
    },
    {
      title: "Vitrifiye",
      description:
        "Plastisite, döküm davranışı ve görsel kalite dengesinin kritik olduğu vitrifiye uygulamaları için hedefli hammadde geliştirme.",
      features: [
        "Yüksek şekillendirme tutarlılığı için rafine mineral profil",
        "Premium yüzeyler için beyazlık odaklı iyileştirme",
        "Renk riskini azaltan demir yönetimi",
        "Tekrarlı endüstriyel üretim için stabil besleme stratejisi",
      ],
    },
    {
      title: "Porselen",
      description:
        "Temiz kimya, premium görünüm ve sıkı ürün kontrolü isteyen porselen segmentleri için kaolin geliştirme.",
      features: [
        "Zorlu reçeteler için yüksek saflık yönü",
        "Beyazlık odaklı rafinasyon ile optik kalite artışı",
        "Temiz görsel çıktı için düşük demir yolu",
        "Premium konumlandırma için spesifikasyon odaklı kalite planı",
      ],
    },
    {
      title: "Kauçuk ve Lastik",
      description:
        "Ticari değeri etkileyen takviye davranışı, dispersiyon ve proses uyumu için mineral optimizasyonu.",
      features: [
        "Yüksek dispersiyon için tane ayarı",
        "Kontrollü compound davranışı için temiz mineral tabanı",
        "Endüstriyel formül istikrarı için tutarlı besleme kalitesi",
        "Farklılaşmış dolgu sınıfları için ürün geliştirme yönü",
      ],
    },
    {
      title: "PVC Kaplama (PVC Coating)",
      description:
        "Yüzey kalitesi, kontrollü incelik ve parti tutarlılığı gerektiren PVC kaplama uygulamaları için kaolin çözümleri.",
      features: [
        "Düzgün kaplama tepkisi için ince tane hedefi",
        "Temiz görünüm için parlaklık yönü",
        "Kontrollü görünüm için empürite azaltma",
        "Endüstriyel kaplama performansına uyumlu proses yolu",
      ],
    },
    {
      title: "Boya ve Kaplamalar (Paints & Coatings)",
      description:
        "Beyazlık, tane kontrolü ve stabil mineral katkısına bağlı kaplama sistemleri için uygulama odaklı kaolin geliştirme.",
      features: [
        "Yüksek görsel kalite için beyazlık potansiyeli",
        "Stabil süspansiyon davranışı için tane boyutu kontrolü",
        "Premium ürün konumu için temiz kimya yönü",
        "Endüstriyel sistemler için tutarlı mineral performansı",
      ],
    },
  ],
  supplyHighlight: {
    section: {
      eyebrow: "Ticari Tedarik",
      title: "Ham Kaolin Tedariği",
      description:
        "Ocak çıkışlı ham kaolin arzını endüstriyel alıcılar için doğrudan ve ticari olarak güçlü bir modelle sunuyoruz.",
    },
    intro:
      "Pluto Enerji, ocak operasyonlarından doğrudan ham kaolin tedariği sağlayarak endüstriyel alıcılar için esnek ve ticari olarak güçlü bir tedarik modeli sunar.",
    supportLead: "Bu yapı şunları sağlar:",
    supports: [
      "büyük hacimli hammadde erişimi",
      "maliyet avantajlı tedarik",
      "müşteriye özel işleme süreçlerine uygunluk",
      "numune ve tedarik taleplerinde doğrudan ticari koordinasyon",
    ],
    closing:
      "Ham kaolin tedarikimiz, yüksek hacimli mineral girdisine ihtiyaç duyan veya kendi zenginleştirme süreçlerini yönetmek isteyen firmalar için güçlü bir çözümdür.",
    ctaLabel: "Tedarik Talebi Gönder",
  },
} satisfies ApplicationsPageContent;
