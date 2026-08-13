# Darende Kurtarma – Tek Sayfa Oto Kurtarma Web Sitesi

Bu proje `darendekurtarma.com` için hazırlanmış, Vanilla HTML/CSS/JS tabanlı tek sayfa üretim altyapısıdır. Ana SEO odağı Darende olmakla birlikte Malatya, Gürün, Sivas ve Elbistan arama niyetleri de ayrı ve özgün semantik bölümlerle hedeflenmiştir.

## Dosya yapısı

- `index.html` — tüm kullanıcıya açık içerik ve Schema
- `robots.txt` — arama motoru tarama kuralları
- `sitemap.xml` — tek canonical URL
- `site.webmanifest` — temel web app manifest
- `favicon.svg` — geçici sade favicon
- `assets/css/style.css` — ana responsive tasarım
- `assets/css/animations.css` — hafif animasyonlar
- `assets/js/main.js` — mobil menü, sticky header, anchor davranışları
- `assets/js/animations.js` — IntersectionObserver tabanlı görünürlük animasyonları
- `assets/img/seo/og-darende-oto-kurtarma.webp` — 1200×630 Open Graph görseli
- `assets/img/gallery/` — 8 gerçek işletme fotoğrafının ekleneceği klasör
- `assets/video/hero/` — 464×832 hero videosunun ekleneceği klasör
- `SEO-CHECKLIST.md` — yayın ve Local SEO kontrol listesi

## Yayın öncesi mutlaka değiştirilecek gerçek bilgiler

Proje içinde aşağıdaki placeholder'ları global arama ile bulun ve yalnızca doğrulanmış bilgilerle değiştirin:

- `{BUSINESS_NAME}`
- `{PHONE_DISPLAY}`
- `{PHONE_E164}`
- `{WHATSAPP_E164}`
- `{ADDRESS}`
- `{BUSINESS_HOURS}`
- `{GOOGLE_MAPS_URL}`

Ek olarak işletmenin gerçek Google İşletme Profili, Instagram, e-posta ve koordinatları sağlanırsa siteye eklenebilir. Koordinat veya çalışma saati uydurulmaz.

## Telefon ve WhatsApp butonlarını aktifleştirme

Şu an doğrulanmış telefon verilmediği için CTA'lar `#iletisim` alanına gider. Telefon geldikten sonra:

- Telefon linklerini `href="tel:+90XXXXXXXXXX"`
- WhatsApp linklerini `href="https://wa.me/90XXXXXXXXXX?text=..."`

şeklinde güncelleyin. WhatsApp numarasında `+`, boşluk ve parantez kullanılmaz.

Önerilen hazır mesaj:

`Merhaba, oto kurtarma / çekici hizmeti için bilgi almak istiyorum. Konumumu paylaşabilirim.`

## Hero video

Kaynak ölçü: **464 × 832 px**, portrait.

Önerilen dosyalar:

- `assets/video/hero/hero-darende-kurtarma.mp4`
- opsiyonel `assets/video/hero/hero-darende-kurtarma.webm`
- poster: `assets/video/hero/hero-darende-kurtarma.webp`

Hero video artık doğrudan bağlıdır. Kullanılan dosya yolu `assets/media/hero-video.mp4`, poster yolu `assets/media/hero-video-poster.webp` şeklindedir. Video etiketi `autoplay muted loop playsinline preload="auto"` ile yapılandırılmıştır. Dosya adını `hero-video.mp4.mp4` yapmayın; doğru ad yalnızca `hero-video.mp4` olmalıdır.

## Galeri fotoğrafları

8 gerçek işletme fotoğrafı önerilen master ölçüsü: **1600 × 1200 px WebP (4:3)**.

Tercihen her fotoğraf için:

- 800×600
- 1200×900
- 1600×1200

varyantları oluşturup `srcset` kullanın. Hedef dosya ağırlığı, görsele göre mümkünse 150–300 KB aralığıdır.

Örnek dosya adları:

- `oto-kurtarma-darende-01.webp`
- `oto-kurtarma-darende-02.webp`
- `darende-cekici-01.webp`
- `darende-cekici-02.webp`
- `yol-yardim-darende-01.webp`
- `yol-yardim-darende-02.webp`
- `arac-kurtarma-01.webp`
- `arac-kurtarma-02.webp`

Alt metinleri fotoğrafta gerçekten görülen sahneye göre yazın. Bir fotoğrafı çekilmediği şehirde çekilmiş gibi tanımlamayın.

## Local çalıştırma

Proje kökünde:

```bash
python3 -m http.server 8080
```

ardından tarayıcıda `http://localhost:8080` açın.

## GitHub Pages notu

Bu proje root-relative asset yolları (`/assets/...`) kullanır. Custom domain ile root'ta yayın için uygundur. Repository alt yolu üzerinden test yapılacaksa asset yollarını göreli hale getirmek veya local server kullanmak daha güvenlidir.

## SEO yapısı

Ana title:

`Darende Oto Kurtarma & Çekici | Yol Yardım`

Tek H1:

`Darende Oto Kurtarma, Çekici ve Yol Yardım`

Canonical:

`https://darendekurtarma.com/`

Hedef bölgeler aynı sayfada özgün bloklar halinde ele alınmıştır:

- Darende
- Malatya
- Gürün
- Sivas
- Elbistan

Şehir isimlerini yapay biçimde çoğaltmayın. Search Console verisi geldikçe sorgu bazında gerçek performansa göre içerik geliştirin.

## Schema

`LocalBusiness` JSON-LD hazırdır. Yayından önce placeholder işletme adı, telefon ve adres mutlaka değiştirilmelidir. Gerçek koordinat yoksa `geo`, gerçek çalışma saati yoksa `openingHoursSpecification`, gerçek sosyal profil yoksa `sameAs` eklemeyin. `aggregateRating` veya sahte yorum Schema'sı eklemeyin.

## Test

Paket hazırlanırken otomatik olarak şu kontroller hedeflenir:

- tek H1
- duplicate ID = 0
- JS syntax geçerli
- local asset referansları mevcut
- canonical / title / description mevcut
- JSON-LD parse edilebilir
- mobil menü: dış tıklama, Escape, hash, popstate, pageshow/pagehide ile kapanır
- 320 px ve üzeri ekranlarda yatay taşma olmaması

Gerçek Lighthouse skoru ölçülmeden 100/100 iddiası yapılmaz.
