# GitHub Pages’e Hatasız Yükleme Talimatı

Bu paket, ekrandaki mevcut düzene göre GitHub Pages ve özel alan adı `darendeotokurtarici.com` için hazırlanmıştır. PHP, veritabanı veya paket kurulumu gerekmez.

## ZIP içeriğini nereye yüklemelisiniz?

ZIP’i bilgisayarınızda açın ve içindeki dosyaların tamamını GitHub deposunun `main` dalındaki kök dizine yükleyin. Doğru görünüm:

```text
depo-koku/
  .github/workflows/static.yml
  CNAME
  index.html
  404.html
  robots.txt
  sitemap.xml
  sitemap-core.xml
  assets/
  darende-oto-kurtarma/
  darende-yol-yardim/
```

`depo-koku/site/index.html` veya `depo-koku/darende-oto-kurtarici-.../index.html` biçiminde fazladan üst klasör oluşmamalıdır. GitHub Pages’in 404 vermemesi için `index.html` yayınlanan artifact’in en üstünde bulunmalıdır.

## GitHub ayarları

Ekran görüntüsündeki ayarlar doğru durumdadır:

- Settings → Pages → Source: **GitHub Actions**
- Custom domain: **darendeotokurtarici.com**
- DNS check: **Successful**
- Enforce HTTPS: **Açık**

Kök dizindeki `CNAME` dosyasını silmeyin veya içeriğini değiştirmeyin.

## Yayın akışı

`.github/workflows/static.yml` dosyası `main` dalına yapılan her gönderimde otomatik çalışır. Workflow:

1. Depoyu alır.
2. Yalnızca ziyaretçiye sunulması gereken site dosyalarından temiz bir yayın paketi hazırlar.
3. `index.html`, `CNAME`, `robots.txt`, sitemap, CSS ve JavaScript dosyalarının varlığını kontrol eder.
4. Kontroller geçerse GitHub Pages’e yayınlar.

İç SEO raporu, yükleme talimatı, CSV listesi, `.github` klasörü ve Apache’ye özel `.htaccess` dosyaları canlı siteye gönderilmez.

## Yükleme sonrası kontrol

Actions sekmesinde **Deploy static content to Pages** çalışmasının yeşil tamamlanmasını bekleyin. Ardından şu adresleri açın:

- `https://darendeotokurtarici.com/`
- `https://darendeotokurtarici.com/darende-oto-kurtarma/`
- `https://darendeotokurtarici.com/d300-darende-cekici/`
- `https://darendeotokurtarici.com/robots.txt`
- `https://darendeotokurtarici.com/sitemap.xml`

Kontrol listesi:

- Ana sayfa ve alt sayfalar 404 vermemeli.
- CSS, görseller ve video eksiksiz yüklenmeli.
- Telefon ve WhatsApp düğmeleri mobilde çalışmalı.
- Tarayıcı adresi HTTPS olmalı.
- `www` veya eski GitHub adresi kullanıldığında özel alan adına yönlenmeli.
- Sayfa kaynağındaki canonical adres `https://darendeotokurtarici.com/` alan adını kullanmalı.

## Organik SEO yayına alma

1. Google Search Console’da alan adı mülkünü DNS ile doğrulayın.
2. Yalnızca `https://darendeotokurtarici.com/sitemap.xml` adresini gönderin.
3. URL Denetleme ile ana sayfa ve `sitemap-core.xml` içindeki dokuz temel sayfa için dizine ekleme isteyin.
4. Google İşletme Profili veya Google Haritalar işletme kaydı oluşturmayın.
5. Gerçek saha fotoğrafları ve özgün iş vaka içerikleri geldikçe temel hizmet sayfalarını güncelleyin.

## Önemli notlar

- GitHub Pages `.htaccess` çalıştırmaz. HTTPS ve özel alan adı yönlendirmesini GitHub Pages ayarları yapar.
- Eski `darendeotocekici.com` alan adının 301 yönlendirmesi o alan adının kendi hosting veya DNS/Cloudflare tarafında yapılmalıdır.
- Aynı siteyi iki alan adında paralel yayınlamayın.
- 67 mahalle sayfasının `noindex` etiketlerini özgün saha kanıtı olmadan topluca kaldırmayın.
- Otomatik backlink paketi veya alakasız footer bağlantıları satın almayın.
