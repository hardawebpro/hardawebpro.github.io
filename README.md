# HardaWebPro on GitHub

Situs resmi **HardaWebPro** — web developer Indonesia — yang di-host di GitHub Pages. Repositori ini berisi halaman landing dan kumpulan **ide, prototype, serta demo preview** website yang dibuat oleh HardaWebPro.

**Live:** [https://hardawebpro.github.io](https://hardawebpro.github.io)

## Tentang Proyek

HardaWebPro menggunakan repositori ini sebagai etalase karya di GitHub. Halaman utama menampilkan profil singkat dan daftar demo yang dapat dibuka langsung di browser. Setiap demo adalah situs statis mandiri (HTML, CSS, JavaScript) tanpa backend atau framework.

## Demo yang Tersedia

| Demo                   | Path                                          | Deskripsi                                                                                                                                                                                            |
| ---------------------- | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Masjid 1**           | [`/masjid-1/`](masjid-1/)                     | Prototype website masjid _Masjid Al Istiqomah_ — agenda kegiatan, kajian, transparansi kas, pengurus, dan kontak jamaah. Dilengkapi mode gelap serta pengaturan ukuran teks.                         |
| **Masjid 2**           | [`/masjid-2/`](masjid-2/)                     | Varian desain website masjid _Masjid Al Istiqomah_ — jadwal sholat, countdown waktu sholat berikutnya, tanggal Hijriah, kegiatan rutin, pengurus DKM, dan laporan keuangan transparan.               |
| **Compro Minimalis 1** | [`/compro-minimalis-1/`](compro-minimalis-1/) | Company profile B2B minimalis untuk _Kenko Electric Indonesia_ — supplier timbangan digital untuk bisnis, retail, gudang, dan industri. Satu halaman dengan konsultasi produk, FAQ, dan form kontak. |

## Struktur Folder

```
.
├── index.html              # Halaman utama / landing page
├── assets/
│   ├── scss/               # Sumber SCSS untuk halaman utama
│   │   └── global.scss
│   ├── css/                # CSS hasil kompilasi (global.css, global.min.css)
│   └── fonts/
├── masjid-1/               # Demo prototype masjid (varian 1)
│   ├── index.html
│   ├── masjid-al-istiqomah.css
│   └── masjid-al-istiqomah.js
├── masjid-2/               # Demo prototype masjid (varian 2)
│   ├── index.html
│   ├── style.css
│   └── script.js
├── compro-minimalis-1/     # Demo company profile B2B minimalis
│   ├── index.html
│   ├── style.css
│   └── script.js
├── gulpfile.js             # Task Gulp untuk kompilasi SCSS
└── package.json
```

## Teknologi

- **Halaman utama:** HTML5, SCSS (dikompilasi dengan Gulp + Sass), CSS minified
- **Demo statis:** HTML5, CSS, JavaScript vanilla — tanpa dependensi runtime (masjid, company profile, kontraktor, dll.)
- **Build tool:** [Gulp](https://gulpjs.com/) 5, [Sass](https://sass-lang.com/), Autoprefixer, CleanCSS

## Pengembangan Lokal

### Prasyarat

- [Node.js](https://nodejs.org/) (untuk menjalankan Gulp)
- npm

### Instalasi

```bash
npm install
```

### Kompilasi SCSS

Kompilasi sekali:

```bash
npx gulp sass-global
```

Mode watch (otomatis recompile saat file SCSS berubah):

```bash
npx gulp
```

Hasil kompilasi disimpan di `assets/css/` sebagai `global.css` dan `global.min.css`.

### Menjalankan di Browser

Buka `index.html` langsung di browser, atau gunakan server lokal (misalnya Live Server di VS Code / Cursor) agar path relatif berjalan dengan benar.

## Kontak

- **GitHub:** [github.com/hardawebpro](https://github.com/hardawebpro)
- **WhatsApp:** [+62 813-9891-2341](https://api.whatsapp.com/?send=6281398912341&text=Hello%20HardaWebPro%20Developer%20Indonesia)

---

_Prototype & demo preview oleh [HardaWebPro](https://hardawebpro.com) — Web Developer Indonesia._

---

# Desain Terbaru

https://hardawebpro.github.io/masjid-1/
https://hardawebpro.github.io/masjid-2/
https://hardawebpro.github.io/kontraktor-electrical-1/
https://hardawebpro.github.io/compro-minimalis-1/
https://hardawebpro.github.io/jasa-cleaning-service/
https://hardawebpro.github.io/jasa-kargo-logistik/
https://hardawebpro.github.io/smp-yapia-cipadu/
