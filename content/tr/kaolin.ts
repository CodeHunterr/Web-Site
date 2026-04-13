import { companyInfo } from "../company";
import type { KaolinPageContent } from "../types";

export const kaolinPageContent = {
  metadata: {
    title: `${companyInfo.brandName} | Kaolin`,
    description: "Kaolin sayfası için içerik yerleşim yapısı.",
  },
  hero: {
    eyebrow: "Kaolin",
    title: "KAOLIN",
    description:
      "Endüstriyel üretimin temel hammaddelerinden biri olan kaolin, yüksek saflık, düşük aşındırıcılık ve geniş kullanım alanlarıyla modern sanayinin vazgeçilmez minerallerinden biridir.",
    backgroundImage: "/images/kaolin.jpg",
  },
  sections: [
    {
      id: "kaolin-nedir",
      title: "Kaolin nedir",
      body:
        "Kaolin, temel olarak kaolinit mineralinden oluşan, ince taneli, beyaz renkli doğal bir kil türüdür. Milyonlarca yıl boyunca feldispat bakımından zengin kayaçların kimyasal ayrışması sonucu oluşur ve doğada yüksek saflık potansiyeline sahip önemli bir endüstriyel hammaddedir.\n\nDüşük aşındırıcılığı, kimyasal olarak inert yapısı ve işlenebilirliği sayesinde kaolin; seramikten kauçuğa, boyadan plastiklere kadar birçok sektörde kritik bir rol oynar. Günümüzde gelişmiş üretim teknolojileri ile birlikte kaolin, yalnızca geleneksel alanlarda değil, yüksek performans gerektiren endüstriyel uygulamalarda da aktif olarak kullanılmaktadır.",
    },
    {
      id: "ozellikler",
      title: "Özellikler",
      body:
        "Kaolinin endüstriyel değerini belirleyen en önemli unsurlar, sahip olduğu fiziksel ve kimyasal özelliklerdir:\n\nYüksek Saflık: Uygun proseslerle demir ve diğer safsızlıklar azaltılarak yüksek beyazlık ve kalite elde edilir.\n\nParçacık Boyutu ve Dağılımı: Kaolinin tane boyutu ve şekli, yüzey kalitesi ve mekanik performans üzerinde doğrudan etkilidir.\n\nYüzey Kimyası: Farklı uygulamalara göre uyarlanabilir ve diğer malzemelerle uyumu artırılabilir.\n\nTermal Kararlılık: Yüksek sıcaklıklara dayanıklı yapısı sayesinde seramik ve refrakter uygulamalar için idealdir.\n\nDüşük Aşındırıcılık: Üretim süreçlerinde ekipmanlara zarar vermeden işlenebilir.",
    },
    {
      id: "olusumu",
      title: "Oluşumu",
      body:
        "Kaolin, feldispat bakımından zengin kayaçların uzun yıllar süren kimyasal ayrışması sonucu doğal olarak oluşur. Bu süreçte kayaç yapısı çözünür ve kaolinit minerali ortaya çıkar.\n\nZamanla erozyon etkisiyle bu mineraller farklı bölgelere taşınır ve daha saf, yoğun ve ekonomik olarak değerli yataklar halinde birikir. Oluşum koşullarına ve bulunduğu bölgeye bağlı olarak kaolinin fiziksel ve kimyasal özellikleri değişiklik gösterebilir.\n\nBu doğal oluşum süreci, kaolinin endüstriyel kullanım açısından farklı kalite seviyelerinde rezervler sunmasını sağlar.",
    },
    {
      id: "islenmesi",
      title: "İşlenmesi",
      body:
        "Kaolin, doğal haliyle ham kaolin olarak kullanılabildiği gibi, farklı zenginleştirme ve rafinasyon süreçlerinden geçirilerek endüstriyel standartlara uygun hale getirilebilir.\n\nBaşlıca işlem adımları şunlardır:\n\n- Kırma ve eleme\n- Yıkama ve sınıflandırma\n- Demir ve yabancı mineral giderme\n- Yoğunlaştırma\n- Kurutma ve mikronize etme\n\nBu süreçler sayesinde kaolinin beyazlığı artırılır, tane boyutu kontrol altına alınır ve farklı endüstriyel uygulamalara uygun ürünler elde edilir.",
    },
    {
      id: "kullanim-alanlari",
      title: "Kullanım alanları",
      body:
        "Kaolin, çok geniş bir endüstriyel kullanım alanına sahip stratejik bir hammaddedir:\n\n- Seramik ve porselen üretimi\n- Boya ve kaplama sistemleri\n- Kağıt ve ambalaj sanayi\n- Kauçuk ve plastik uygulamaları\n- PVC ve kablo üretimi\n- Tarım ve kozmetik ürünleri\n\nFarklı sektörlerde sağladığı performans avantajları sayesinde kaolin, üretim kalitesini doğrudan etkileyen kritik bir bileşen olarak değerlendirilmektedir.",
    },
    {
      id: "pluto-yaklasimi",
      title: "Pluto Enerji yaklaşımı",
      body:
        "Pluto Enerji olarak kaolini yalnızca bir hammadde olarak değil, endüstriyel üretimin performansını doğrudan etkileyen stratejik bir bileşen olarak değerlendiriyoruz.\n\nMevcut yapımızda ham kaolin tedariğini hızlı, güvenilir ve ticari olarak esnek bir şekilde sunarken, aynı zamanda gelecekteki zenginleştirme ve işlenmiş ürün süreçlerine uygun bir altyapı oluşturuyoruz.\n\nBu yaklaşım sayesinde hem bugünkü taleplere hızlı cevap verebilen hem de gelişmiş endüstriyel ihtiyaçlara uyum sağlayabilecek sürdürülebilir bir çözüm sunmayı hedefliyoruz.",
    },
  ],
} satisfies KaolinPageContent;
