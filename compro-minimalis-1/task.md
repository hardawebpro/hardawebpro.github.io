Pakai prompt berikut di Cursor:

Bertindaklah sebagai senior UI/UX designer dan front-end developer untuk website company profile B2B yang modern, minimalis, kredibel, dan berorientasi konversi.

Buat website company profile satu halaman untuk brand **Kenko Electric Indonesia**, perusahaan supplier timbangan digital untuk kebutuhan bisnis, retail, gudang, logistik, manufaktur, dan industri.

Buat tiga file terpisah:

- `index.html`
- `style.css`
- `script.js`

Jangan gunakan framework, library, CSS framework, icon library, slider library, jQuery, Bootstrap, Tailwind, atau dependency JavaScript eksternal. Gunakan HTML semantik, native CSS, dan vanilla JavaScript saja.

Jangan menulis komentar di dalam kode.

## Tujuan desain

Website harus terasa:

- Profesional dan terpercaya untuk kebutuhan B2B.
- Minimalis, clean, modern, dan tidak generik.
- Cocok untuk perusahaan supplier alat ukur dan timbangan digital.
- Memiliki nuansa teknis, presisi, industri, dan premium.
- Mendukung persepsi EEAT: Experience, Expertise, Authoritativeness, Trustworthiness.
- Aman untuk kategori YMYL: jangan membuat klaim legal, sertifikasi, garansi, kalibrasi, tera, izin, atau pengalaman perusahaan yang belum dapat dibuktikan.
- Gunakan placeholder jelas untuk data legal, alamat, nomor telepon, WhatsApp, email, produk, cakupan layanan, dan dokumen perusahaan.

## Konsep visual

Hindari background warna solid polos pada section.

Gunakan kombinasi layered gradient sangat halus, transparansi, noise ringan, grid teknis, dot pattern, garis blueprint, atau pola CSS-only sebagai aksen visual profesional.

Jangan memakai foto stok generik manusia berjabat tangan, meeting kantor, call center, atau gudang palsu.

Gunakan ilustrasi SVG inline sederhana, abstrak, dan orisinal untuk menggambarkan timbangan digital, layar LED, sensor beban, proses pengukuran, atau jaringan distribusi.

Gunakan CSS pattern seperti:

- `repeating-linear-gradient`
- `radial-gradient`
- grid blueprint
- garis tipis transparan
- dot matrix
- efek panel kaca halus

Pastikan pattern tidak mengganggu keterbacaan teks.

## Color palette

Gunakan CSS custom properties pendek dan konsisten:

- `--ink: #0B1820`
- `--teal: #0C5A61`
- `--blue: #1666D8`
- `--gold: #C98B3D`
- `--mist: #EEF3F2`
- `--paper: #F8FAF9`
- `--line: rgba(11, 24, 32, 0.12)`
- `--text: #26343B`
- `--mute: #617078`

Gunakan warna biru dan teal sebagai identitas utama.

Gunakan gold hanya untuk aksen kecil, status, label, atau detail teknis penting.

Jangan gunakan warna terlalu mencolok, neon, merah dominan, atau gradient berlebihan.

## Font pairing

Gunakan Google Fonts dengan preload dan `display=swap`.

Gunakan:

- `Manrope` untuk heading, body, tombol, dan navigasi.
- `IBM Plex Mono` untuk label teknis, nomor produk, spesifikasi ringkas, badge, dan elemen kecil.

Gunakan fallback system font yang aman.

Heading harus tegas, modern, dan tidak terlalu dekoratif.

Body text harus nyaman dibaca, minimal `16px` pada layar 320px.

## Mobile-first dan aksesibilitas

Bangun CSS dengan pendekatan mobile-first.

Website wajib nyaman pada lebar layar minimum `320px`.

Pastikan:

- Tidak ada horizontal scroll pada 320px.
- Ukuran target tombol minimal 44px.
- Menu mobile memakai offcanvas yang stabil dan mudah ditutup.
- Ada tombol close, overlay, fokus keyboard, dan `Escape` untuk menutup menu.
- Ada skip link untuk langsung ke konten utama.
- Semua input memiliki label.
- Semua tombol memiliki teks jelas.
- Kontras warna minimal memenuhi WCAG AA.
- Fokus keyboard terlihat.
- Gunakan `prefers-reduced-motion`.
- Jangan gunakan autoplay carousel.
- Jangan gunakan animasi berlebihan.
- Jangan gunakan popup mengganggu.
- FAQ harus keyboard-friendly.
- Gunakan landmark semantik seperti `header`, `nav`, `main`, `section`, `article`, `footer`.

Gunakan `clamp()` untuk tipografi responsif.

## Struktur website

Buat section berikut secara lengkap dan SEO-friendly.

### 1. Header

- Logo teks: Kenko Electric Indonesia.
- Label kecil: Supplier Timbangan Digital.
- Navigasi anchor: Beranda, Solusi, Produk, Keunggulan, Proses, FAQ, Kontak.
- Tombol CTA: Konsultasi Kebutuhan.
- Header sticky transparan dengan efek glass halus saat scroll.
- Menu mobile offcanvas yang benar-benar responsif.

### 2. Hero section

Gunakan H1:

“Supplier Timbangan Digital untuk Bisnis, Gudang, Retail, dan Industri”

Buat copywriting profesional, tidak berlebihan, dan relevan secara semantik.

Masukkan keyword alami seperti:

- supplier timbangan digital
- timbangan industri
- timbangan platform
- timbangan retail
- timbangan gudang
- kebutuhan pengukuran bisnis
- solusi penimbangan
- alat ukur digital

Hero harus memiliki:

- Eyebrow text.
- H1.
- Deskripsi singkat.
- Dua CTA: “Konsultasi Produk” dan “Lihat Solusi”.
- Informasi trust kecil berbentuk badge, tanpa klaim palsu.
- Ilustrasi SVG timbangan digital modern.
- Background blueprint CSS-only.

Jangan menuliskan klaim seperti “terbaik”, “nomor satu”, “terpercaya sejak sekian tahun”, atau “resmi” tanpa placeholder verifikasi.

### 3. Trust indicator

Buat section ringkas berisi empat indikator:

- Konsultasi kebutuhan penggunaan.
- Pilihan kategori timbangan.
- Dukungan informasi spesifikasi.
- Pendampingan sebelum pembelian.

Gunakan bahasa netral dan tidak menjanjikan hasil yang tidak dapat dibuktikan.

### 4. Solusi berdasarkan kebutuhan

Buat section dengan kartu solusi untuk:

- Retail dan toko.
- Gudang dan logistik.
- Produksi dan manufaktur.
- Pasar, distribusi, dan perdagangan.
- Laboratorium atau kebutuhan presisi.
- Kebutuhan penimbangan custom.

Setiap kartu harus memiliki:

- SVG icon inline.
- Judul.
- Deskripsi maksimal dua kalimat.
- Link anchor kecil “Konsultasikan kebutuhan”.

### 5. Kategori produk

Buat section produk dengan enam kategori:

- Timbangan meja digital.
- Timbangan harga retail.
- Timbangan platform.
- Timbangan lantai.
- Timbangan gantung.
- Indikator timbangan dan aksesorinya.

Jangan menampilkan spesifikasi atau harga fiktif.

Gunakan label seperti:

- Kapasitas dapat disesuaikan.
- Pilihan ukuran platform.
- Kebutuhan penggunaan tertentu.
- Konsultasi spesifikasi sebelum pembelian.

Buat desain product card yang menggunakan SVG atau CSS illustration, bukan gambar stok.

### 6. Keunggulan Kenko Electric Indonesia

Buat section EEAT berjudul:

“Memilih Timbangan Digital dengan Pertimbangan yang Tepat”

Isi dengan poin yang memperkuat trust:

- Membantu memetakan kebutuhan penggunaan.
- Menjelaskan spesifikasi secara mudah dipahami.
- Mengarahkan pilihan produk berdasarkan kapasitas dan lingkungan kerja.
- Membantu kebutuhan unit, aksesori, atau komponen pendukung.
- Menyediakan jalur komunikasi jelas sebelum pemesanan.

Gunakan copywriting realistis.

Jangan mengklaim sertifikasi, garansi, kalibrasi resmi, tera, layanan nasional, atau stok siap kirim tanpa placeholder verifikasi.

Tambahkan note kecil:

“Informasi produk, layanan pendukung, ketersediaan, dan dokumen terkait perlu dikonfirmasi sesuai kebutuhan pembelian.”

### 7. Alur konsultasi dan pemesanan

Buat section proses empat langkah:

1. Sampaikan kebutuhan penimbangan.
2. Evaluasi kapasitas dan lingkungan penggunaan.
3. Terima rekomendasi kategori produk.
4. Konfirmasi spesifikasi dan proses pemesanan.

Gunakan layout timeline modern dengan garis teknis CSS-only.

### 8. Section transparansi dan kepatuhan

Buat section khusus yang mendukung YMYL dan trust.

Judul:

“Informasi Produk yang Perlu Diklarifikasi Sebelum Pembelian”

Isi poin berikut:

- Kapasitas dan ketelitian alat.
- Lingkungan penggunaan.
- Material platform atau unit.
- Kompatibilitas indikator dan aksesori.
- Kebutuhan dokumen produk.
- Status layanan instalasi, kalibrasi, atau tera bila diperlukan.

Gunakan disclaimer berikut dengan bahasa profesional:

“Untuk penggunaan yang membutuhkan dokumen khusus, kalibrasi, tera, atau kepatuhan metrologi legal, pastikan kebutuhan Anda dikonsultasikan sebelum pemesanan. Ketersediaan layanan dan dokumen dapat berbeda sesuai jenis produk, wilayah, serta ketentuan yang berlaku.”

### 9. FAQ

Buat FAQ lengkap minimal delapan pertanyaan:

- Bagaimana memilih kapasitas timbangan digital?
- Apa perbedaan timbangan meja dan timbangan platform?
- Apakah timbangan dapat digunakan untuk gudang?
- Apakah tersedia timbangan untuk retail?
- Bagaimana menentukan ukuran platform?
- Apakah tersedia komponen atau aksesori timbangan?
- Apakah produk dapat digunakan untuk kebutuhan usaha?
- Informasi apa yang perlu disiapkan sebelum konsultasi?

Gunakan elemen `details` dan `summary` agar dapat diakses tanpa JavaScript.

Jawaban harus informatif tetapi tidak membuat klaim yang belum diverifikasi.

Tambahkan structured data `FAQPage` yang isinya sama persis dengan FAQ halaman.

### 10. CTA akhir

Buat CTA akhir dengan judul:

“Diskusikan Kebutuhan Timbangan Digital Anda”

Masukkan copy yang mengajak calon pelanggan menjelaskan:

- Jenis barang yang ditimbang.
- Kapasitas kebutuhan.
- Lokasi penggunaan.
- Lingkungan kerja.
- Jumlah unit yang dibutuhkan.

Buat form sederhana dengan field:

- Nama.
- Nama perusahaan.
- Nomor WhatsApp.
- Email.
- Jenis kebutuhan.
- Pesan.

Tidak perlu backend.

Gunakan validasi JavaScript ringan dan aman.

Tampilkan status form melalui `aria-live`.

Gunakan placeholder URL WhatsApp, email, dan endpoint form yang mudah diganti.

### 11. Footer

Footer harus memuat:

- Logo teks Kenko Electric Indonesia.
- Deskripsi singkat perusahaan.
- Navigasi penting.
- Placeholder alamat.
- Placeholder WhatsApp.
- Placeholder email.
- Placeholder jam operasional.
- Link Kebijakan Privasi.
- Link Syarat dan Ketentuan.
- Copyright.

Tambahkan area “Informasi Perusahaan” dengan placeholder:

- Nama badan usaha.
- Nomor legalitas.
- Alamat operasional.
- Email bisnis.

Jangan isi dengan data fiktif.

## SEO

Terapkan SEO on-page dengan baik.

Gunakan:

- Satu H1 saja.
- Struktur heading H2 dan H3 logis.
- Meta title.
- Meta description.
- Canonical placeholder.
- Open Graph meta placeholder.
- Semantic HTML.
- Internal anchor navigation.
- Teks alt untuk SVG atau gambar bermakna.
- JSON-LD `Organization`.
- JSON-LD `WebSite`.
- JSON-LD `FAQPage`.

Gunakan bahasa Indonesia profesional.

Buat SEO copywriting alami, bukan keyword stuffing.

Pastikan kata kunci dan LSI tersebar natural, termasuk:

- supplier timbangan digital
- jual timbangan digital
- timbangan industri
- timbangan gudang
- timbangan retail
- timbangan platform
- solusi penimbangan
- alat ukur digital
- kebutuhan kapasitas timbangan
- konsultasi timbangan usaha

Jangan menyalin teks dari website lain.

Jangan membuat testimoni palsu, daftar klien palsu, jumlah proyek palsu, rating palsu, atau logo perusahaan tanpa izin.

## Performa

Optimalkan performa:

- Hindari gambar besar.
- Jangan gunakan video background.
- Jangan gunakan slider.
- Jangan gunakan animasi berat.
- Gunakan inline SVG sederhana.
- Gunakan CSS pattern, bukan gambar dekoratif.
- Gunakan `defer` untuk JavaScript.
- Gunakan `loading="lazy"` bila nanti ada gambar non-kritis.
- Gunakan `width` dan `height` pada gambar bila ditambahkan.
- Jangan menggunakan font weight berlebihan.
- Pastikan desain tetap menarik tanpa aset gambar eksternal.

## JavaScript

Gunakan JavaScript hanya untuk:

- Toggle menu mobile.
- Menutup menu dengan overlay, tombol close, dan tombol Escape.
- Mengunci scroll body saat menu terbuka.
- Header state saat scroll.
- Validasi form sederhana.
- Pesan status form.

Gunakan nama function custom dengan awalan `mm_`.

Gunakan nama variabel pendek dan jelas.

Pastikan tidak ada error JavaScript di browser console.

## Hasil akhir

Langsung buat seluruh isi file `index.html`, `style.css`, dan `script.js`.

Pastikan setiap file siap dijalankan langsung di browser.

Setelah selesai, tampilkan ringkasan singkat berisi:

- File yang dibuat.
- Placeholder data yang wajib diganti.
- Bagian yang perlu diverifikasi sebelum website dipublikasikan.
- Checklist responsivitas 320px.

Tersedia juga versi prompt yang langsung diarahkan untuk dikonversi menjadi WordPress theme atau landing page Elementor/Bricks.
