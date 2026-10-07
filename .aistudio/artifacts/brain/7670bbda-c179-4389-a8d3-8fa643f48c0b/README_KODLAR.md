# Curious Moves Berlin — Web Sitesi Kaynak Kodları & Dosyaları

Bu dosya, Curious Moves Berlin web sitesinin tüm kaynak kodlarını ve sayfayı tek bir dosya halinde nasıl çalıştıracağınızı açıklar.

## 📦 Hazırlanan İndirilebilir Dosyalar

1. **`curious_moves_berlin.html`** (Tek Dosya - Bağımsız Web Sayfası):
   - Tüm CSS stilleri, JavaScript mantığı, görselleri ve Türkçe/Almanca/İngilizce dil desteğini tek bir HTML dosyasında barındırır.
   - Bilgisayarınızda çift tıklayarak doğrudan Chrome, Safari, Edge veya Firefox tarayıcısında açıp eksiksiz kullanabilirsiniz.
   - Herhangi bir sunucu (Node.js/npm) kurulumu gerektirmez.

2. **`curious_moves_berlin_kodlar.zip`** (Tam Kaynak Kod Arşivi):
   - Projenin tüm React bileşenleri (`src/components/*`),
   - Çok dilli veri yapıları (`src/data/*`),
   - Fotoğraf depolama ve yönetim yardımcıları (`src/utils/*`),
   - Express backend sunucusu (`server.ts`),
   - `package.json`, `vite.config.ts`, `tailwind` ve `tsconfig.json` yapılandırmalarını içerir.

---

## 💻 Bilgisayarınızda Geliştirme Olarak Çalıştırma

Kaynak kod arşivini (ZIP) çıkardıktan sonra terminalde:

```bash
# 1. Bağımlılıkları yükleyin
npm install

# 2. Geliştirme sunucusunu başlatın (Port 3000)
npm run dev
```

Tarayıcınızda `http://localhost:3000` adresine giderek siteyi anında görüntüleyebilirsiniz.

---

## 🌐 Sayfa Yapısı ve Öne Çıkan Özellikler

- **Çok Dilli Destek (TR / DE / EN)**: Tüm içerikler pedagojik terminolojiye uygun olarak 3 dilde hazırlanmıştır.
- **5 Seans Fotoğraf Galerisi**: Seans anları (Parkta Yoga, Ağaç Denge Duruşları, Görsel Kartlar, Salon Mat Pratiği, Çember Düzeni) yüksek kalitede sergilenmektedir.
- **Detaylı Program Modalları**: Çocuk Yogası, Autismus Einzelförderung, P4C Çocuklar İçin Felsefe, Yaratıcı Drama & Çok Dilli Türkçe Atölyeleri.
- **Duyarlı (Responsive) Tasarım**: Mobil, tablet ve masaüstü ekranlarda kusursuz görünüm.
