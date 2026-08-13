# Darende Kurtarma – FINAL Yayın Paketi

Bu paket `darendeotokurtarici.com` için hazırlanan tek sayfa Dostlar Oto Kurtarma / Çekici sitesinin yayın sürümüdür.

## GitHub Pages

ZIP içindeki dosyaları repository köküne yükleyin. `index.html` doğrudan repo ana dizininde olmalıdır.

Asset yolları `./assets/...` şeklindedir. Yayın alan adı `https://darendeotokurtarici.com/` olarak ayarlanmıştır. GitHub Pages kullanıyorsanız kökteki `CNAME` ve `.nojekyll` dosyalarını silmeyin.

## Hero video

- Dosya: `assets/media/hero-video.mp4`
- Poster: `assets/media/hero-video-poster.webp`
- Ölçü: 464×832
- Süre: 13 saniye
- H.264 MP4, sessiz, loop, playsinline

Video kartı ve poster ilk ekranda sabit boyutla hemen çizilir. Video ana sayfa kaynakları yüklendikten sonra oynatılır ve ekran dışına çıkınca gereksiz işlem yükünü azaltmak için duraklatılır.

## Performans düzenlemeleri

- Mobil ve masaüstü hero görselleri önceden blur/dark işlenip WebP olarak küçültüldü.
- Büyük hakkımızda PNG görseli WebP'ye çevrildi.
- Galeri görselleri 1200×900 WebP olarak optimize edildi.
- İlk ekran dışı görseller lazy-load kullanır.
- Hero görseli viewport'a göre preload edilir.
- Mobilde pahalı sürekli blur/glow animasyonları azaltıldı; giriş animasyonları korunur.
- Hero içerikleri JS `reveal` beklemeden hemen görünür.
- Video kartındaki `DO` metinleri kaldırıldı.

## SEO

- Title: `Darende Oto Kurtarma & Çekici | Yol Yardım`
- H1: `Darende Oto Kurtarma, Çekici ve Yol Yardım`
- Canonical: `https://darendeotokurtarici.com/`
- `robots.txt`, `sitemap.xml`, Open Graph ve LocalBusiness JSON-LD hazırdır.

Gerçek Lighthouse/PageSpeed puanı yayın anındaki sunucu, ağ ve test koşullarına göre değişebilir. Kod tarafında performans, erişilebilirlik, best practices ve SEO için yayın öncesi kontroller uygulanmıştır.
