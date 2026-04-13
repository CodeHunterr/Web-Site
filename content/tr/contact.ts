import { companyInfo } from "../company";
import type { ContactPageContent } from "../types";

export const contactPageContent = {
  metadata: {
    title: `${companyInfo.brandName} | İletişim`,
    description: "Teknik talepler, numune istekleri ve iş birliği görüşmeleri için iletişim sayfası.",
  },
  hero: {
    eyebrow: "",
    titleLine1: "",
    titleLine2: companyInfo.brandName,
    description: "Teknik talepler, numune istekleri ve iş birliği görüşmeleri aşağıdaki iletişim kanallarından iletilebilir.",
    notice: "Aşağıdaki formu kullanabilir veya doğrudan contact@plutoenerji.com adresine yazabilirsiniz.",
    primaryLabel: "Mesaj Gönder",
    secondaryLabel: "Şirket bilgisini gör",
  },
  heroHighlights: [
    { title: "Teknik koordinasyon", description: "Spesifikasyon görüşmeleri, proses soruları ve kaolin odaklı talepler için net iletişim hattı." },
    { title: "Numune talepleri", description: "Numune yönetimi, malzeme takibi ve uygulama odaklı görüşmeler için hazır yapı." },
    { title: "İş birliği", description: "Ortaklıklar, ticari görüşmeler ve endüstriyel iş birlikleri için yapılandırılmış iletişim." },
  ],
  company: {
    section: {
      eyebrow: "",
      title: "Şirket Bilgileri",
      description: "",
    },
    summary: "Ticari tanışma, malzeme görüşmeleri ve proje soruları için ekip bu sayfadaki iletişim kanalları üzerinden ulaşılabilir.",
    details: [
      { label: "Şirket", value: companyInfo.brandName },
      { label: "Adres", value: companyInfo.address },
      { label: "E-posta", value: companyInfo.email, href: companyInfo.emailHref },
      { label: "Telefon", value: companyInfo.phone, href: companyInfo.phoneHref },
    ],
    socialTitle: "Sosyal Medya",
    socialLinks: [
      { label: "LinkedIn", href: "https://www.linkedin.com/company/plutoenerji", platform: "linkedin" },
      { label: "Instagram", href: "https://www.instagram.com/plutoenerji", platform: "instagram" },
    ],
  },
  form: {
    title: "Mesaj Gönder",
    description: "",
    submitLabel: "Mesaj Gönder",
    fields: [
      { name: "name", label: "Ad Soyad", type: "text", placeholder: "Ad soyad girin", required: true },
      { name: "company", label: "Şirket", type: "text", placeholder: "Şirket adı girin" },
      { name: "email", label: "E-posta", type: "email", placeholder: "E-posta adresi girin", required: true },
      { name: "phone", label: "Telefon", type: "tel", placeholder: "Telefon numarası girin" },
      { name: "subject", label: "Konu", type: "text", placeholder: "Konu girin", fullWidth: true, required: true },
      {
        name: "message",
        label: "Mesaj",
        type: "textarea",
        placeholder: "Mesajınızı yazın",
        rows: 6,
        fullWidth: true,
        required: true,
      },
    ],
    messages: {
      success: "Talebiniz başarıyla gönderildi. Ekibimiz kısa süre içinde sizinle iletişime geçecektir.",
      error: "Talep gönderilemedi. Lütfen tekrar deneyin veya contact@plutoenerji.com adresine yazın.",
      sending: "Gönderiliyor...",
      validationRequired: "Lütfen zorunlu alanları doldurun.",
      validationEmail: "Lütfen geçerli bir e-posta adresi girin.",
    },
  },
  supportCards: [
    { title: "Numune Talebi", description: "Numune koordinasyonu, malzeme değerlendirmesi ve ürün uyumu görüşmeleri için kullanın." },
    { title: "Teknik Talep", description: "Proses sorularını, kalite başlıklarını ve uygulama bazlı teknik gereksinimleri paylaşın." },
    { title: "İş Birliği", description: "Tedarik, distribütörlük, endüstriyel iş birliği veya stratejik ortaklık konuşmalarını başlatın." },
  ],
} satisfies ContactPageContent;
