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
            "Sahanın derinliğini ve operasyonel ölçeği hissettiren aktif çalışma zonu görünümü.",
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
          title: "Numune Hazırlık İstasyonu",
          description:
            "Kaolin numuneleri kontrollü çalışma düzeni içinde işleme ve analiz öncesi hazırlanır.",
          src: mediaAssets.processingImages[0].src,
          alt: "Pluto Enerji numune hazırlık istasyonu",
        },
        {
          title: "Proses Kontrol Noktası",
          description:
            "Malzeme akışı, ekipman düzeni ve işlem adımları saha ile laboratuvar koordinasyonunda izlenir.",
          src: mediaAssets.processingImages[1].src,
          alt: "Pluto Enerji proses kontrol noktası",
        },
        {
          title: "Kalite Takip Görünümü",
          description:
            "İşleme sürecindeki görsel kayıtlar, ürün sürekliliği ve operasyon disiplini açısından referans oluşturur.",
          src: mediaAssets.processingImages[2].src,
          alt: "Pluto Enerji kalite takip görünümü",
        },
        {
          title: "Mineral Ayırma Alanı",
          description:
            "Kaolin malzemesinin farklı işlem aşamalarına yönlendirilmesini destekleyen teknik düzen görülmektedir.",
          src: mediaAssets.processingImages[3].src,
          alt: "Pluto Enerji mineral ayırma alanı",
        },
        {
          title: "Teknik Operasyon Detayı",
          description:
            "İşleme hattına ait detay görseller, operasyon akışının kontrollü ve düzenli yapısını yansıtır.",
          src: mediaAssets.processingImages[4].src,
          alt: "Pluto Enerji teknik operasyon detayı",
        },
      ],
    },
    laboratory: {
      eyebrow: "",
      title: "Laboratuvar Görüntüleri",
      description: "",
      galleryImages: [
        {
          title: "Numune Kabul ve Kayıt",
          description:
            "Kaolin numuneleri laboratuvar sürecine alınmadan önce kayıt ve izlenebilirlik adımlarından geçirilir.",
          src: mediaAssets.laboratoryImages[0].src,
          alt: "Pluto Enerji numune kabul ve kayıt",
        },
        {
          title: "Fiziksel Özellik İncelemesi",
          description:
            "Malzemenin doku, nem ve temel fiziksel davranışları laboratuvar koşullarında gözlemlenir.",
          src: mediaAssets.laboratoryImages[1].src,
          alt: "Pluto Enerji fiziksel özellik incelemesi",
        },
        {
          title: "Beyazlık Kontrolü",
          description:
            "Kaolinin görsel kalitesi ve beyazlık potansiyeli, ürün konumlandırmasını destekleyecek şekilde değerlendirilir.",
          src: mediaAssets.laboratoryImages[2].src,
          alt: "Pluto Enerji beyazlık kontrolü",
        },
        {
          title: "Tane Boyutu Gözlemi",
          description:
            "Partikül yapısına ilişkin gözlemler, uygulama uyumu ve proses beklentileri açısından takip edilir.",
          src: mediaAssets.laboratoryImages[3].src,
          alt: "Pluto Enerji tane boyutu gözlemi",
        },
        {
          title: "Kurutma Sonrası Değerlendirme",
          description:
            "Kurutma adımı sonrasında malzeme davranışı ve yüzey yapısı kontrollü biçimde gözden geçirilir.",
          src: mediaAssets.laboratoryImages[4].src,
          alt: "Pluto Enerji kurutma sonrası değerlendirme",
        },
        {
          title: "Eleme ve Fraksiyon Takibi",
          description:
            "Farklı fraksiyonların ayrımı, laboratuvar düzeni içinde proses kalitesini destekleyecek şekilde izlenir.",
          src: mediaAssets.laboratoryImages[5].src,
          alt: "Pluto Enerji eleme ve fraksiyon takibi",
        },
        {
          title: "Laboratuvar Hazırlık Masası",
          description:
            "Analiz öncesi ekipman ve numune hazırlığı, düzenli bir teknik çalışma akışı içinde yürütülür.",
          src: mediaAssets.laboratoryImages[6].src,
          alt: "Pluto Enerji laboratuvar hazırlık masası",
        },
        {
          title: "Deneysel Proses Kurulumu",
          description:
            "İşleme senaryoları, laboratuvar ölçeğinde kurulup farklı kalite hedeflerine göre değerlendirilebilir.",
          src: mediaAssets.laboratoryImages[7].src,
          alt: "Pluto Enerji deneysel proses kurulumu",
        },
        {
          title: "Mineral Saflık Kontrolü",
          description:
            "Safsızlık takibi ve mineral karakterizasyonu, teknik kalite kararlarını destekleyen ana aşamalardandır.",
          src: mediaAssets.laboratoryImages[8].src,
          alt: "Pluto Enerji mineral saflık kontrolü",
        },
        {
          title: "Karşılaştırmalı Numune Seti",
          description:
            "Farklı numunelerin yan yana değerlendirilmesi, ürün farklılaşmasını ve uygun proses yönünü görünür kılar.",
          src: mediaAssets.laboratoryImages[9].src,
          alt: "Pluto Enerji karşılaştırmalı numune seti",
        },
        {
          title: "Analiz Öncesi Hazırlık",
          description:
            "Ölçüm ve inceleme öncesindeki hazırlık adımları, sonuçların güvenilirliği için standartlaştırılır.",
          src: mediaAssets.laboratoryImages[10].src,
          alt: "Pluto Enerji analiz öncesi hazırlık",
        },
        {
          title: "Operatör Kontrollü İnceleme",
          description:
            "Teknik ekip gözetiminde yürütülen incelemeler, proses kararlarının veri temelli ilerlemesini sağlar.",
          src: mediaAssets.laboratoryImages[11].src,
          alt: "Pluto Enerji operatör kontrollü inceleme",
        },
        {
          title: "Deneysel Kalite Doğrulama",
          description:
            "Laboratuvar doğrulama adımları, ürün kalitesinin farklı kullanım alanlarına uygunluğunu destekler.",
          src: mediaAssets.laboratoryImages[12].src,
          alt: "Pluto Enerji deneysel kalite doğrulama",
        },
        {
          title: "Raporlama Öncesi Son Kontrol",
          description:
            "Son gözden geçirme süreci, teknik çıktının tutarlılığını ve ticari iletişime uygunluğunu güçlendirir.",
          src: mediaAssets.laboratoryImages[13].src,
          alt: "Pluto Enerji raporlama öncesi son kontrol",
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
