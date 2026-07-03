Bertindaklah sebagai senior UI/UX designer, art director fotografi, dan front-end developer berpengalaman untuk membuat website portfolio agency kreatif yang premium.

Buat website company profile satu halaman untuk brand **Izzatishot Creative**, agency jasa fotografer dan videografer di **Kota Depok, Jawa Barat**.

Layanan utama:

- Jasa fotografer olahraga.
- Jasa foto produk.
- Jasa foto prewedding.
- Jasa foto wedding.
- Jasa dokumentasi event.
- Jasa videografi event.
- Jasa konten visual untuk brand dan bisnis.

Nomor telepon dan WhatsApp: **0821-2345-076**

Website akan dipasang di GitHub Pages pada folder:

```text
/izzatishot-creative/
```

Buat struktur folder berikut:

```text
izzatishot-creative/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   └── images/
│       ├── hero-photo.jpg
│       ├── sport-photo.jpg
│       ├── product-photo.jpg
│       ├── prewed-photo.jpg
│       ├── wedding-photo.jpg
│       ├── event-photo.jpg
│       └── og-image.jpg
```

Gunakan path relatif seperti berikut agar berjalan normal di GitHub Pages subfolder:

```html
./assets/css/style.css ./assets/js/script.js ./assets/images/hero-photo.jpg
```

Jangan gunakan path absolut seperti:

```html
/assets/css/style.css /assets/images/hero-photo.jpg
```

Buat tiga file utama secara terpisah:

- `index.html`
- `assets/css/style.css`
- `assets/js/script.js`

Jangan gunakan Bootstrap, Tailwind, jQuery, React, Vue, GSAP, Swiper, Font Awesome, library icon, framework CSS, atau framework JavaScript.

Gunakan HTML semantik, native CSS, vanilla JavaScript, inline SVG, dan CSS custom properties.

Jangan menulis komentar di dalam kode.

## Arah desain utama

Website harus terasa seperti portfolio studio kreatif fotografi dan videografi modern.

Hasil visual harus:

- Artistik, editorial, premium, dan unik.
- Memiliki karakter visual kuat.
- Tidak terlihat seperti template agency biasa.
- Memadukan nuansa galeri fotografi, majalah kreatif, dan studio produksi.
- Tetap profesional untuk calon klien wedding, event, brand, dan perusahaan.
- Memiliki hierarki visual sangat jelas.
- Fokus kepada visual portfolio dan CTA WhatsApp.
- Menghindari tampilan korporat terlalu kaku.
- Menghindari desain ramai, warna neon, glassmorphism berlebihan, atau efek futuristik tidak relevan.

Gunakan komposisi asymmetrical grid, whitespace cukup luas, text overlay elegan, cropping gambar editorial, dan kartu portfolio dengan hover yang halus.

Gunakan gambar foto yang sesuai dengan layanan fotografi dan videografi.

Gunakan placeholder gambar lokal di folder `assets/images/`.

Jika gambar belum tersedia, gunakan fallback background gradient CSS dengan label seperti:

```text
Ganti dengan foto portfolio asli Izzatishot Creative
```

Jangan menggunakan foto manusia AI yang terlihat palsu.

Jangan menampilkan testimonial palsu, jumlah klien palsu, penghargaan palsu, logo partner palsu, atau klaim “nomor satu”.

## Konsep warna

Gunakan sistem warna dual-theme yang benar-benar dirancang untuk mode terang dan gelap.

### Light mode

```css
--bg: #f5f1ea;
--surface: #fcfaf6;
--ink: #171615;
--mute: #706b65;
--line: rgba(23, 22, 21, 0.14);
--rose: #a86351;
--olive: #5c6754;
--sand: #d8c5ae;
--gold: #b68a57;
```

### Dark mode

```css
--bg: #141312;
--surface: #1d1b19;
--ink: #f4f0e9;
--mute: #b7b0a8;
--line: rgba(244, 240, 233, 0.15);
--rose: #d58c76;
--olive: #a8b59a;
--sand: #6e6255;
--gold: #d9b47a;
```

Gunakan warna rose, olive, dan gold sebagai aksen kecil.

Jangan memakai background solid polos untuk semua section.

Gunakan kombinasi:

- Grain texture CSS-only.
- Editorial grid.
- Halftone dots.
- Garis tipis.
- Gradient lembut.
- Overlay gelap pada gambar.
- Efek framing seperti negative film atau contact sheet.
- CSS pattern menggunakan `radial-gradient()` dan `repeating-linear-gradient()`.

Pastikan pattern tidak mengurangi keterbacaan.

## Font pairing

Gunakan Google Fonts dengan `display=swap`.

Gunakan pairing berikut:

- `DM Serif Display` untuk heading besar, quote, dan heading artistik.
- `Manrope` untuk navigasi, body, CTA, form, dan teks pendukung.
- `IBM Plex Mono` untuk label kategori, nomor project, metadata, dan microcopy.

Gunakan fallback system fonts.

Heading harus terasa editorial dan artistik.

Body text harus modern, bersih, dan nyaman dibaca.

Gunakan `clamp()` untuk skala tipografi.

## Dark mode

Buat dark mode yang berfungsi penuh.

Ketentuan:

- Ikuti preferensi sistem pengguna pada kunjungan pertama.
- Tambahkan tombol toggle dark mode di header.
- Simpan pilihan pengguna menggunakan `localStorage`.
- Gunakan atribut `data-theme="dark"` pada elemen `html`.
- Perbarui `aria-label` tombol mode.
- Gunakan ikon SVG matahari dan bulan.
- Tambahkan transisi warna lembut.
- Pastikan gambar, overlay, border, teks, dan tombol tetap terlihat baik pada dark mode.
- Jangan sekadar membalik warna putih menjadi hitam.

## Mobile-first dan responsivitas

Bangun website dengan pendekatan mobile-first.

Wajib nyaman di layar minimum `320px`.

Pastikan:

- Tidak ada horizontal scroll.
- Semua teks tetap terbaca di lebar 320px.
- Tombol memiliki target sentuh minimal 44px.
- Grid portfolio berubah menjadi satu kolom pada mobile.
- Layout desktop menggunakan grid editorial yang lebih dinamis.
- Header mobile menggunakan offcanvas menu yang stabil.
- Offcanvas memiliki overlay, tombol close, fokus keyboard, dan dukungan tombol Escape.
- Body scroll terkunci saat menu terbuka.
- Gunakan `prefers-reduced-motion`.
- Tidak ada animasi berat.
- Semua kontrol dapat digunakan dengan keyboard.
- Kontras warna memenuhi minimal WCAG AA.
- Ada skip link menuju konten utama.

## Struktur website

Buat section berikut.

### 1. Header

Buat header sticky minimalis.

Isi:

- Logo teks: `Izzatishot Creative`.
- Subtitle kecil: `Photography & Videography`.
- Navigasi anchor: Beranda, Layanan, Portfolio, Tentang, Proses, FAQ, Kontak.
- Tombol dark mode.
- Tombol CTA kecil: `Hubungi Kami`.

Tampilan header:

- Transparan saat halaman di atas.
- Memiliki background blur halus setelah scroll.
- Tidak terlalu besar.
- Tidak menutupi konten.

### 2. Hero section

Gunakan visual hero besar dengan background foto utama.

Buat H1:

```text
Merekam Momen, Membentuk Cerita, Menghidupkan Visual
```

Buat copywriting Indonesia yang puitis namun tetap profesional.

Masukkan semantic relevance alami seperti:

- jasa fotografer Depok
- jasa videografer Depok
- dokumentasi wedding
- foto prewedding
- fotografer event
- fotografi produk
- dokumentasi olahraga
- visual brand
- photo dan video production

Tambahkan:

- Eyebrow: `Creative Visual Studio · Depok, Jawa Barat`
- H1.
- Paragraf pendek.
- CTA utama: `Konsultasi via WhatsApp`
- CTA kedua: `Lihat Portfolio`
- Teks kecil: `Untuk wedding, event, olahraga, produk, dan kebutuhan visual brand.`

Gunakan nomor WhatsApp dengan format URL:

```text
https://wa.me/628212345076
```

Tambahkan elemen artistik:

- Nomor project dekoratif.
- Garis tipis.
- Label kategori.
- Frame CSS menyerupai film.
- Text vertical kecil pada desktop.
- Overlay agar teks tetap kontras.

### 3. Intro statement

Buat section singkat dengan layout editorial.

Judul:

```text
Setiap Frame Memiliki Alasan untuk Diingat
```

Buat dua paragraf singkat tentang pendekatan Izzatishot Creative dalam menangkap emosi, detail, energi acara, dan identitas visual brand.

Jangan membuat klaim palsu.

Gunakan background dengan CSS grain halus.

### 4. Layanan

Buat section dengan heading:

```text
Layanan Visual untuk Momen dan Brand yang Berarti
```

Buat enam kartu layanan:

1. Fotografi Olahraga.
2. Fotografi Produk.
3. Foto Prewedding.
4. Dokumentasi Wedding.
5. Fotografi Event.
6. Videografi Event dan Brand.

Setiap kartu memuat:

- Nomor layanan.
- Judul.
- Deskripsi singkat.
- Inline SVG unik.
- Link kecil: `Diskusikan kebutuhan`.

Gunakan layout grid yang tidak simetris pada desktop.

Gunakan layout satu kolom atau dua kolom kecil pada mobile.

### 5. Portfolio

Buat section portfolio menjadi fokus visual utama.

Judul:

```text
Cerita yang Kami Tangkap Melalui Lensa
```

Buat filter sederhana dengan vanilla JavaScript:

- Semua.
- Wedding.
- Prewedding.
- Produk.
- Olahraga.
- Event.

Gunakan minimal enam portfolio card.

Setiap item memuat:

- Foto.
- Kategori.
- Judul project.
- Lokasi atau jenis acara.
- Tahun placeholder.
- Hover effect elegan.

Contoh project:

- Wedding Intimate di Depok.
- Prewedding Outdoor.
- Dokumentasi Turnamen Olahraga.
- Foto Produk UMKM.
- Corporate Gathering.
- Event Peluncuran Produk.

Jangan gunakan nama klien fiktif.

Gunakan data generic seperti:

```text
Private Client
Brand Project
Event Documentation
```

Buat layout portfolio seperti masonry editorial menggunakan CSS Grid.

Jangan menggunakan library masonry.

### 6. Section keunggulan

Judul:

```text
Visual yang Dibangun dari Detail, Ritme, dan Cerita
```

Buat empat keunggulan:

- Pendekatan visual sesuai karakter acara.
- Perhatian pada detail dan momen penting.
- Komunikasi kebutuhan sebelum produksi.
- Output visual untuk kenangan personal dan komunikasi brand.

Gunakan layout split dengan foto editorial besar di satu sisi.

Jangan menulis klaim seperti “hasil terbaik”, “paling profesional”, atau “terjamin memuaskan”.

### 7. Section proses kerja

Judul:

```text
Dari Brief hingga Hasil Akhir
```

Buat empat langkah:

1. Ceritakan kebutuhan visual Anda.
2. Diskusikan konsep, waktu, dan kebutuhan dokumentasi.
3. Produksi foto atau video di lokasi.
4. Proses seleksi dan pengiriman hasil sesuai kesepakatan.

Gunakan desain timeline horizontal pada desktop dan vertikal pada mobile.

Tambahkan microcopy:

```text
Ruang lingkup, timeline, jumlah output, dan detail layanan akan disesuaikan dengan kebutuhan project.
```

### 8. About section

Judul:

```text
Izzatishot Creative dari Depok untuk Cerita yang Lebih Hidup
```

Isi dengan copywriting profesional mengenai studio kreatif yang melayani kebutuhan fotografi dan videografi untuk personal, komunitas, event, serta bisnis.

Gunakan alamat:

```text
Kota Depok, Jawa Barat
```

Jangan mengarang alamat jalan lengkap.

Tambahkan area informasi:

- Lokasi: Kota Depok, Jawa Barat.
- Layanan: Foto dan video production.
- Konsultasi: WhatsApp.
- Area kerja: Placeholder “Depok dan area sesuai kesepakatan”.

Tambahkan catatan:

```text
Ketersediaan jadwal, cakupan lokasi, serta detail paket akan dikonfirmasi saat konsultasi.
```

### 9. FAQ

Buat minimal delapan FAQ menggunakan elemen `details` dan `summary`.

Pertanyaan:

1. Apakah Izzatishot Creative melayani foto wedding?
2. Apakah tersedia jasa foto prewedding?
3. Apakah menerima dokumentasi event perusahaan?
4. Apakah menerima fotografi olahraga?
5. Apakah bisa membantu foto produk untuk bisnis?
6. Apakah tersedia layanan videografi?
7. Bagaimana cara konsultasi kebutuhan project?
8. Apakah layanan tersedia untuk area luar Depok?

Jawaban harus realistis, profesional, dan tidak menjanjikan sesuatu yang belum dikonfirmasi.

Tambahkan JSON-LD `FAQPage` dengan isi sama seperti FAQ di halaman.

### 10. CTA akhir dan kontak

Buat section CTA dengan visual besar.

Judul:

```text
Punya Momen atau Cerita yang Ingin Diabadikan?
```

Tambahkan copy singkat.

Tampilkan CTA:

```text
WhatsApp Izzatishot Creative
```

Gunakan link:

```text
https://wa.me/628212345076
```

Tambahkan form kontak tanpa backend.

Field:

- Nama.
- Nomor WhatsApp.
- Jenis layanan.
- Tanggal acara.
- Lokasi acara.
- Ceritakan kebutuhan Anda.

Gunakan validasi vanilla JavaScript.

Tampilkan pesan status menggunakan `aria-live`.

Jangan berpura-pura mengirim data ke server.

Saat submit, tampilkan pesan bahwa form perlu dihubungkan ke layanan form backend atau WhatsApp sebelum digunakan secara live.

### 11. Footer

Footer harus memuat:

- Logo teks Izzatishot Creative.
- Deskripsi singkat.
- Kota Depok, Jawa Barat.
- Nomor WhatsApp: 0821-2345-076.
- Link WhatsApp.
- Navigasi anchor.
- Tombol mode terang/gelap tambahan.
- Copyright.

Tambahkan teks:

```text
Foto dan video pada website ini perlu diganti dengan portfolio asli sebelum publikasi.
```

## SEO

Terapkan SEO on-page yang baik.

Gunakan:

- Satu H1.
- Struktur heading H2 dan H3 logis.
- Meta title.
- Meta description.
- Canonical placeholder.
- Open Graph tags.
- Twitter card tags.
- JSON-LD `ProfessionalService`.
- JSON-LD `LocalBusiness`.
- JSON-LD `WebSite`.
- JSON-LD `FAQPage`.
- Semantic HTML.
- Alt text relevan untuk gambar.
- Internal anchor link.
- Deskripsi lokasi Kota Depok, Jawa Barat.

Gunakan meta title:

```text
Izzatishot Creative | Jasa Fotografer & Videografer Depok
```

Gunakan meta description:

```text
Izzatishot Creative menyediakan jasa fotografer dan videografer di Depok untuk wedding, prewedding, olahraga, produk, event, serta kebutuhan visual brand.
```

Gunakan keyword secara alami:

- jasa fotografer Depok
- jasa videografer Depok
- fotografer wedding Depok
- foto prewedding Depok
- fotografer event Depok
- jasa foto produk Depok
- dokumentasi olahraga
- jasa dokumentasi event
- foto dan video production
- fotografer profesional Depok

Jangan melakukan keyword stuffing.

## Performa

Optimalkan performa website.

Ketentuan:

- Gunakan gambar local yang sudah dikompresi.
- Gunakan format WebP bila tersedia.
- Tambahkan atribut `loading="lazy"` pada gambar di bawah fold.
- Tambahkan `width` dan `height` pada gambar.
- Jangan gunakan background video.
- Jangan gunakan slider.
- Jangan gunakan animasi berat.
- Gunakan inline SVG untuk icon.
- Jangan load font weight terlalu banyak.
- Gunakan `font-display: swap`.
- Gunakan `defer` untuk JavaScript.
- Pastikan layout tidak mengalami Cumulative Layout Shift besar.

## JavaScript

Gunakan JavaScript hanya untuk:

- Dark mode toggle.
- Penyimpanan preferensi mode di `localStorage`.
- Toggle offcanvas menu mobile.
- Menutup menu menggunakan overlay, tombol close, dan Escape.
- Lock body scroll saat menu terbuka.
- Header state saat scroll.
- Filter portfolio.
- Validasi form sederhana.
- Menampilkan status form.

Gunakan awalan `mm_` untuk seluruh function JavaScript buatan sendiri.

Gunakan nama variabel pendek dan jelas, maksimal lima karakter.

Jangan gunakan `var`.

Gunakan `const` dan `let`.

Pastikan tidak ada error di browser console.

## Output akhir

Langsung buat seluruh isi file berikut:

```text
izzatishot-creative/index.html
izzatishot-creative/assets/css/style.css
izzatishot-creative/assets/js/script.js
```

Sertakan juga daftar kebutuhan gambar yang harus diisi pada folder:

```text
izzatishot-creative/assets/images/
```

Pastikan website dapat langsung dijalankan melalui GitHub Pages dari subfolder `/izzatishot-creative/`.
