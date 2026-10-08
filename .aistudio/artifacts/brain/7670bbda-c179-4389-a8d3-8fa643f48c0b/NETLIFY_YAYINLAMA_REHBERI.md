# 🚀 Netlify'da Yayınlama Rehberi (Curious Moves Berlin)

Curious Moves Berlin web sitenizi Netlify üzerinde tamamen **ücretsiz**, özel alan adınızı (domain) bağlayabileceğiniz ve SSL sertifikalı (https) şekilde yayınlamak için aşağıdaki 2 kolay yöntemden birini seçebilirsiniz.

---

## 🌟 Yöntem 1: En Hızlı ve Kolay Yol (Netlify Drop — Sadece 1 Dakika!)

Herhangi bir kod yüklemesi yapmadan, GitHub bilmenize gerek kalmadan sitenizi anında canlıya alabilirsiniz:

1. **Hazırlanan Netlify Paketini İndirin:**
   - Tarayıcınızda doğrudan `/indir/netlify` adresine gidin veya Artifacts bölümünden **`netlify_deploy_dist.zip`** dosyasını indirin.
   - İndirdiğiniz zip dosyasını bilgisayarınızda bir klasöre çıkartın (içinde `index.html`, `assets`, `_redirects` vb. yer alır).
2. **Netlify'a Giriş Yapın:**
   - [app.netlify.com/drop](https://app.netlify.com/drop) adresini açın (veya [netlify.com](https://www.netlify.com/) adresinden ücretsiz bir hesap oluşturup giriş yapın).
3. **Sürükleyip Bırakın:**
   - Çıkardığınız klasörü ekrandaki kesikli çizgili **"Drag and drop your site output folder here"** alanına sürükleyip bırakın.
4. **Tebrikler, Siteniz Yayında!** 🎉
   - Netlify saniyeler içinde sitenizi yayınlayacak ve size özel `https://curious-moves-xxxxxx.netlify.app` gibi canlı bir bağlantı verecektir.
   - İsterseniz "Site settings > Change site name" bölümünden sitenizin adını `curiousmoves-berlin.netlify.app` gibi özelleştirebilirsiniz.

---

## 🔄 Yöntem 2: GitHub ile Otomatik Dağıtım (Continuous Deployment)

Eğer sitenizi GitHub deponuz üzerinden bağlayıp her kod güncellediğinizde otomatik yayınlanmasını isterseniz:

1. Proje kodlarını GitHub'a yükleyin.
2. Netlify panelinde **"Add new site" > "Import an existing project" > "GitHub"** seçeneğini tıklayın.
3. Reponuzu seçin.
4. Yapılandırma ayarlarını Netlify otomatik olarak algılayacaktır (çünkü projeye `netlify.toml` dosyasını ekledik):
   - **Build command:** `npm run build` *(veya `npm run build:client`)*
   - **Publish directory:** `dist`
5. **"Deploy site"** butonuna basın.

---

## 🛠️ Projeye Önceden Eklenen Netlify Ayarları

Netlify üzerinde sitenizin sorunsuz çalışması için şu ayarlar projeye otomatik olarak entegre edilmiştir:

- **`netlify.toml`**: Derleme (`dist`) ve yönlendirme kuralları tanımlandı.
- **`_redirects`**: Sayfa yenilendiğinde veya doğrudan linkle girildiğinde 404 hatası alınmasını engelleyen SPA yönlendirmesi (`/* /index.html 200`) eklendi.
- **Cache Header'ları**: CSS ve JS dosyalarının hızlı yüklenmesi için optimize edildi.
