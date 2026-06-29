/**
 * Masjid Al Istiqomah — script.js
 * Demo desain oleh HardaWebPro.com
 * CodePen: paste konten ini di box JS
 */

'use strict';

/* ============================================================
   1. DATA CONSTANTS
============================================================ */
const DATA = {

  /* Monthly base prayer times for Tangerang, Banten
     Format per month: [Subuh[H,M], Dzuhur[H,M], Ashar[H,M], Maghrib[H,M], Isya[H,M]] */
  prayerBase: {
    1:  [[4,47],[12,2],[15,22],[18,12],[19,23]],
    2:  [[4,45],[12,1],[15,20],[18,11],[19,21]],
    3:  [[4,39],[11,57],[15,15],[18,5],[19,15]],
    4:  [[4,32],[11,53],[15,10],[17,57],[19,8]],
    5:  [[4,27],[11,49],[15,7],[17,51],[19,3]],
    6:  [[4,27],[11,49],[15,8],[17,50],[19,2]],
    7:  [[4,29],[11,51],[15,9],[17,52],[19,4]],
    8:  [[4,33],[11,54],[15,12],[17,55],[19,7]],
    9:  [[4,37],[11,52],[15,11],[17,56],[19,7]],
    10: [[4,40],[11,51],[15,12],[17,55],[19,6]],
    11: [[4,44],[11,53],[15,14],[17,57],[19,9]],
    12: [[4,47],[11,57],[15,19],[18,3],[19,14]]
  },

  prayerNames: ['Subuh','Dzuhur','Ashar','Maghrib','Isya'],
  prayerArabic: ['الصُّبْحُ','الظُّهْرُ','الْعَصْرُ','الْمَغْرِبُ','الْعِشَاءُ'],

  hijriMonths: ['Muharram','Safar',"Rabi'ul Awal","Rabi'ul Akhir",'Jumadil Awal','Jumadil Akhir','Rajab',"Sya'ban",'Ramadhan','Syawal',"Dzulqa'dah",'Dzulhijjah'],
  hariId:  ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'],
  bulanId: ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'],

  jadwal: [
    { hari:'Senin',   waktu:"Ba'da Subuh", jam:'05.00 – 06.00', kegiatan:'Kajian Tafsir Al-Quran',       pembina:'Ust. Ahmad Fauzi, Lc.',       tempat:'Ruang Utama',    ico:'book' },
    { hari:'Selasa',  waktu:'Pagi',         jam:'08.00 – 10.00', kegiatan:"Tahsin Al-Quran (Ibu-Ibu)",    pembina:'Ustadzah Nurul Hidayah',       tempat:'Ruang Ibu-Ibu',  ico:'quran' },
    { hari:'Rabu',    waktu:"Ba'da Dzuhur", jam:'13.00 – 14.00', kegiatan:'Kajian Fiqh Kontemporer',      pembina:'Ust. Abdurrahman, S.Ag.',      tempat:'Ruang Utama',    ico:'book' },
    { hari:'Kamis',   waktu:"Ba'da Maghrib",jam:'19.00 – 20.00', kegiatan:'Yasinan & Tahlil',             pembina:'Jamaah Bapak-Bapak',           tempat:'Ruang Utama',    ico:'pray' },
    { hari:'Jumat',   waktu:'Siang',        jam:'12.00 – 13.00', kegiatan:'Sholat Jumat & Khutbah',       pembina:'Khatib Tamu (Bergantian)',     tempat:'Ruang Utama',    ico:'mosque' },
    { hari:'Jumat',   waktu:"Ba'da Ashar",  jam:'16.00 – 17.30', kegiatan:"Majelis Ta'lim Wanita",        pembina:"Ustadzah Siti Aisyah",         tempat:'Ruang Ibu-Ibu',  ico:'quran' },
    { hari:'Sabtu',   waktu:'Sore',         jam:'16.00 – 17.30', kegiatan:'TPA Anak-Anak',                pembina:'Tim Pengajar TPA',             tempat:'Ruang Belajar',  ico:'child' },
    { hari:'Sabtu',   waktu:"Ba'da Isya",   jam:'20.00 – 21.30', kegiatan:'Kajian Akidah Islamiyah',      pembina:'Ust. Salim Ibrahim',           tempat:'Ruang Utama',    ico:'book' },
    { hari:'Minggu',  waktu:'Pagi',         jam:'08.00 – 10.00', kegiatan:'Tahfidz Al-Quran',             pembina:'Ust. Hafidz Maulana',          tempat:'Ruang Belajar',  ico:'quran' },
    { hari:'Minggu',  waktu:'Siang',        jam:'14.00 – 15.30', kegiatan:'Olahraga & Silaturahmi',       pembina:'Pengurus DKM',                 tempat:'Halaman Masjid', ico:'sport' },
  ],

  agenda: [
    { tanggal: new Date(2026, 6, 5),  judul: 'Peringatan Tahun Baru Islam 1448H', deskripsi: "Menyambut 1 Muharram 1448H dengan kajian keutamaan tahun baru Islam, tausiyah, dan doa bersama seluruh jamaah.", lokasi: 'Ruang Utama & Halaman Masjid', pukul: '08.00 – Selesai', badge: 'Khusus' },
    { tanggal: new Date(2026, 6, 10), judul: 'Pengajian Akbar — Meraih Ridha Allah', deskripsi: 'Kajian umum terbuka bersama ustadz undangan nasional. Gratis, terbuka untuk seluruh masyarakat.', lokasi: 'Halaman Masjid Al Istiqomah', pukul: '19.00 – 22.00', badge: 'Terbuka Umum' },
    { tanggal: new Date(2026, 6, 20), judul: 'Wisuda TPA Angkatan ke-7', deskripsi: 'Acara wisuda dan penyerahan sertifikat santri TPA yang telah menyelesaikan program tahsin & tahfidz.', lokasi: 'Aula Masjid Al Istiqomah', pukul: '09.00 – 12.00', badge: 'TPA' },
    { tanggal: new Date(2026, 7, 15), judul: 'Bakti Sosial & Santunan Anak Yatim', deskripsi: 'Kegiatan sosial pemberian santunan kepada anak yatim dan kaum dhuafa di sekitar lingkungan masjid.', lokasi: 'Halaman Masjid Al Istiqomah', pukul: '10.00 – 13.00', badge: 'Sosial' },
  ],

  pengurus: [
    { nama:'H. Ahmad Ridwan, S.Ag.',  jabatan:'Ketua DKM',              periode:'2023–2026', wa:'628111234567',  inisial:'AR', bio:'Ahli ilmu keagamaan dengan pengalaman 15 tahun membina jamaah di Tangerang.' },
    { nama:'Dedi Kurniawan, S.E.',     jabatan:'Sekretaris',              periode:'2023–2026', wa:'628122345678',  inisial:'DK', bio:'Bertanggung jawab atas administrasi, surat-menyurat, dan dokumentasi DKM.' },
    { nama:'H. Rahmat Hidayat',        jabatan:'Bendahara',               periode:'2023–2026', wa:'628133456789',  inisial:'RH', bio:'Mengelola keuangan masjid dengan prinsip transparansi dan amanah penuh.' },
    { nama:'Ust. Ahmad Fauzi, Lc.',    jabatan:'Ketua Bid. Dakwah',       periode:'2023–2026', wa:null,            inisial:'AF', bio:'Lulusan Al-Azhar Kairo, koordinator seluruh program kajian dan dakwah masjid.' },
    { nama:'Ibu Siti Rahmah',          jabatan:'Ketua Bid. Sosial',       periode:'2023–2026', wa:null,            inisial:'SR', bio:'Koordinator kegiatan sosial, pemberdayaan jamaah, dan santunan dhuafa.' },
    { nama:'Bpk. Hendra Gunawan',      jabatan:'Ketua Bid. Pembangunan',  periode:'2023–2026', wa:null,            inisial:'HG', bio:'Mengawasi pemeliharaan, renovasi, dan pengembangan fasilitas masjid.' },
  ],

  kas: [
    {
      periode: 'Juni 2026',
      saldoAwal: 15200000,
      transaksi: [
        { tgl:'01/06', ket:"Infak Jum'at Minggu I",         kat:'Infak',        masuk:1250000, keluar:0       },
        { tgl:'05/06', ket:'Tagihan PLN (Mei 2026)',         kat:'Operasional',  masuk:0,       keluar:850000  },
        { tgl:'07/06', ket:'Donatur — H. Surya Wijaya',     kat:'Donasi',       masuk:2000000, keluar:0       },
        { tgl:'08/06', ket:"Infak Jum'at Minggu II",        kat:'Infak',        masuk:980000,  keluar:0       },
        { tgl:'10/06', ket:'Honor Imam & Muadzin',           kat:'Honor',        masuk:0,       keluar:2500000 },
        { tgl:'12/06', ket:'Biaya Kebersihan & Perawatan',   kat:'Operasional',  masuk:0,       keluar:750000  },
        { tgl:'15/06', ket:"Infak Jum'at Minggu III",       kat:'Infak',        masuk:1120000, keluar:0       },
        { tgl:'18/06', ket:'Pembelian Alat Kebersihan',      kat:'Perlengkapan', masuk:0,       keluar:450000  },
        { tgl:'20/06', ket:'Donatur Anonim',                 kat:'Donasi',       masuk:1500000, keluar:0       },
        { tgl:'22/06', ket:"Infak Jum'at Minggu IV",        kat:'Infak',        masuk:1350000, keluar:0       },
        { tgl:'25/06', ket:'Tagihan PDAM (Mei 2026)',        kat:'Operasional',  masuk:0,       keluar:200000  },
        { tgl:'25/06', ket:'Sedekah Kotak Amal',             kat:'Sedekah',      masuk:750000,  keluar:0       },
        { tgl:'27/06', ket:'Pembelian Sajadah (10 buah)',    kat:'Perlengkapan', masuk:0,       keluar:1200000 },
        { tgl:'28/06', ket:'Donasi Program TPA',             kat:'Donasi',       masuk:1800000, keluar:0       },
        { tgl:'28/06', ket:'Kegiatan TPA (Alat Tulis)',      kat:'Kegiatan',     masuk:0,       keluar:1500000 },
      ]
    },
    {
      periode: 'Mei 2026',
      saldoAwal: 13400000,
      transaksi: [
        { tgl:'02/05', ket:"Infak Jum'at Minggu I",         kat:'Infak',        masuk:1100000, keluar:0       },
        { tgl:'05/05', ket:'Tagihan PLN (April 2026)',       kat:'Operasional',  masuk:0,       keluar:820000  },
        { tgl:'08/05', ket:'Donatur — Hj. Fatimah',         kat:'Donasi',       masuk:1500000, keluar:0       },
        { tgl:'09/05', ket:"Infak Jum'at Minggu II",        kat:'Infak',        masuk:900000,  keluar:0       },
        { tgl:'10/05', ket:'Honor Imam & Muadzin',           kat:'Honor',        masuk:0,       keluar:2500000 },
        { tgl:'14/05', ket:'Perlengkapan Sholat',            kat:'Perlengkapan', masuk:0,       keluar:380000  },
        { tgl:'16/05', ket:"Infak Jum'at Minggu III",       kat:'Infak',        masuk:1050000, keluar:0       },
        { tgl:'22/05', ket:'Sedekah Kotak Amal',             kat:'Sedekah',      masuk:650000,  keluar:0       },
        { tgl:'23/05', ket:"Infak Jum'at Minggu IV",        kat:'Infak',        masuk:980000,  keluar:0       },
        { tgl:'25/05', ket:'Tagihan PDAM (April 2026)',      kat:'Operasional',  masuk:0,       keluar:180000  },
        { tgl:'26/05', ket:'Dekorasi & Renovasi Minor',      kat:'Perlengkapan', masuk:0,       keluar:700000  },
        { tgl:'28/05', ket:'Donatur Anonim',                 kat:'Donasi',       masuk:1200000, keluar:0       },
        { tgl:'30/05', ket:'Kegiatan Kemasyarakatan',        kat:'Kegiatan',     masuk:0,       keluar:620000  },
      ]
    },
    {
      periode: 'April 2026',
      saldoAwal: 11800000,
      transaksi: [
        { tgl:'03/04', ket:"Infak Jum'at Minggu I",         kat:'Infak',        masuk:1320000, keluar:0       },
        { tgl:'05/04', ket:'Tagihan PLN (Maret 2026)',       kat:'Operasional',  masuk:0,       keluar:910000  },
        { tgl:'08/04', ket:'Donatur — Bpk. Santoso',        kat:'Donasi',       masuk:3000000, keluar:0       },
        { tgl:'10/04', ket:'Honor Imam & Muadzin',           kat:'Honor',        masuk:0,       keluar:2500000 },
        { tgl:'11/04', ket:"Infak Jum'at Minggu II",        kat:'Infak',        masuk:1180000, keluar:0       },
        { tgl:'15/04', ket:'Pembelian Al-Quran (20 buah)',   kat:'Perlengkapan', masuk:0,       keluar:1200000 },
        { tgl:'18/04', ket:"Infak Jum'at Minggu III",       kat:'Infak',        masuk:1050000, keluar:0       },
        { tgl:'22/04', ket:'THR Staf Masjid',                kat:'Honor',        masuk:0,       keluar:1500000 },
        { tgl:'22/04', ket:'Donasi Idul Fitri',              kat:'Donasi',       masuk:2800000, keluar:0       },
        { tgl:'25/04', ket:'Tagihan PDAM (Maret 2026)',      kat:'Operasional',  masuk:0,       keluar:190000  },
        { tgl:'26/04', ket:'Sedekah Kotak Amal',             kat:'Sedekah',      masuk:850000,  keluar:0       },
      ]
    }
  ],

  gallery: [
    { src:'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=600&h=400&fit=crop&q=80', caption:'Arsitektur Masjid — Tampak Luar',    svgFallback:true },
    { src:'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=400&fit=crop&q=80', caption:'Suasana Sholat Berjamaah',           svgFallback:true },
    { src:'https://images.unsplash.com/photo-1585036156171-384164a8c675?w=600&h=400&fit=crop&q=80', caption:'Interior Masjid — Kubah & Ornamen',  svgFallback:true },
    { svgTheme:{ bg:'#1B6B47', accent:'#C8962F', ar:'اَلْقُرْآنُ الْكَرِيمُ', label:'Al-Quran Al-Karim' }, caption:"Al-Quran — Pedoman Kehidupan" },
    { svgTheme:{ bg:'#145C35', accent:'#E8B84B', ar:'التَّحْفِيظُ وَالتَّعْلِيمُ', label:'TPA & Tahfidz' }, caption:'Kegiatan TPA Anak-Anak' },
    { svgTheme:{ bg:'#0D3B22', accent:'#C8962F', ar:'مَجْلِسُ الذِّكْرِ', label:"Majelis Ta'lim" }, caption:"Majelis Ta'lim Jamaah" },
    { svgTheme:{ bg:'#8B6514', accent:'#F8F4EE', ar:'رَمَضَانُ الْكَرِيمُ', label:'Ramadhan Kareem' }, caption:'Kegiatan Ramadhan 1447H' },
    { svgTheme:{ bg:'#228A5A', accent:'#FDF3DC', ar:'الِاجْتِمَاعُ الِاجْتِمَاعِيُّ', label:'Bakti Sosial' }, caption:'Bakti Sosial Jamaah' },
  ],

  doa: [
    { ar:'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ', latin:"Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina 'adzabannar", arti:'Ya Tuhan kami, berilah kami kebaikan di dunia dan kebaikan di akhirat, dan lindungilah kami dari azab neraka.' },
    { ar:'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً', latin:"Rabbana la tuzigh qulubana ba'da idz hadaytana wahab lana milladunka rahmah", arti:'Ya Tuhan kami, janganlah Engkau jadikan hati kami condong kepada kesesatan setelah Engkau beri petunjuk, dan karuniakanlah kepada kami rahmat dari sisi-Mu.' },
    { ar:'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ فِي الدُّنْيَا وَالآخِرَةِ', latin:"Allahumma inni as'alukal-'afiyata fid-dunya wal-akhirah", arti:'Ya Allah, aku memohon kepada-Mu keselamatan di dunia dan di akhirat.' },
    { ar:'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي', latin:"Rabbish rahli sadri wa yassir li amri wahlul 'uqdatan min lisani", arti:'Ya Tuhanku, lapangkanlah dadaku, mudahkanlah urusanku, dan lepaskanlah kekakuan dari lidahku.' },
    { ar:'اللَّهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا وَقِنَا عَذَابَ النَّارِ', latin:"Allahumma barik lana fima razaqtana wa qina 'adzabannar", arti:'Ya Allah, berkahilah kami pada rezeki yang Engkau berikan kepada kami, dan lindungilah kami dari azab neraka.' },
  ]
};

/* ============================================================
   2. UTILITIES
============================================================ */
const $ = id => document.getElementById(id);
const $q = sel => document.querySelector(sel);
const $qa = sel => document.querySelectorAll(sel);
const fmt2 = n => String(n).padStart(2, '0');
const fmtRp = n => n.toLocaleString('id-ID');

/* ============================================================
   3. HIJRI CALENDAR CONVERSION
============================================================ */
function gregorianToHijri(year, month, day) {
  const a = Math.floor((14 - month) / 12);
  const y = year + 4800 - a;
  const m = month + 12 * a - 3;
  const jdn = day + Math.floor((153 * m + 2) / 5) + 365 * y
    + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) - 32045;

  let l = jdn - 1948440 + 10632;
  const n = Math.floor((l - 1) / 10631);
  l = l - 10631 * n + 354;
  const j = Math.floor((10985 - l) / 5316) * Math.floor((50 * l) / 17719)
    + Math.floor(l / 5670) * Math.floor((43 * l) / 15238);
  l = l - Math.floor((30 - j) / 15) * Math.floor((17719 * j) / 50)
    - Math.floor(j / 16) * Math.floor((15238 * j) / 43) + 29;
  const hMonth = Math.floor((24 * l) / 709);
  const hDay = l - Math.floor((709 * hMonth) / 24);
  const hYear = 30 * n + j - 30;
  return { year: hYear, month: hMonth, day: hDay };
}

/* ============================================================
   4. PRAYER TIMES
============================================================ */
function getPrayerTimes(date) {
  const m = date.getMonth() + 1;
  const base = DATA.prayerBase[m];
  // Small offset per day for variation (max ±3 min)
  const d = date.getDate();
  const off = [1,-1,2,-2,0];
  return base.map(([h, min], i) => {
    let totalMin = h * 60 + min + off[i % 5] + Math.round(Math.sin(d * 0.3 + i) * 1.5);
    return { h: Math.floor(totalMin / 60) % 24, m: totalMin % 60 };
  });
}

function formatTime(h, m) { return `${fmt2(h)}.${fmt2(m)}`; }

function getNextPrayer(times) {
  const now = new Date();
  const totalMin = now.getHours() * 60 + now.getMinutes();
  for (let i = 0; i < times.length; i++) {
    const t = times[i].h * 60 + times[i].m;
    if (t > totalMin) return { idx: i, name: DATA.prayerNames[i], time: times[i], minutesLeft: t - totalMin };
  }
  // After Isya — next is Subuh tomorrow
  const subuh = times[0];
  const minutesLeft = (24 * 60 - totalMin) + subuh.h * 60 + subuh.m;
  return { idx: 0, name: DATA.prayerNames[0], time: subuh, minutesLeft };
}

/* ============================================================
   5. DARK MODE
============================================================ */
function initDarkMode() {
  const btn = $('hwpDarkToggle');
  const saved = localStorage.getItem('hwp-theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
  btn.setAttribute('aria-pressed', saved === 'dark');

  btn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('hwp-theme', next);
    btn.setAttribute('aria-pressed', next === 'dark');
  });
}

/* ============================================================
   6. FONT SIZE CONTROLS
============================================================ */
function initFontSize() {
  const sizes = [13, 14, 15, 16, 17, 18, 20];
  let idx = parseInt(localStorage.getItem('hwp-font-idx') ?? '3');

  function apply() {
    document.documentElement.style.setProperty('--hwp-font-base', sizes[idx] + 'px');
    localStorage.setItem('hwp-font-idx', idx);
  }

  apply();
  $('hwpFontDec').addEventListener('click', () => { if (idx > 0) { idx--; apply(); } });
  $('hwpFontReset').addEventListener('click', () => { idx = 3; apply(); });
  $('hwpFontInc').addEventListener('click', () => { if (idx < sizes.length - 1) { idx++; apply(); } });
}

/* ============================================================
   7. HERO CANVAS — Islamic geometric pattern
============================================================ */
function initHeroCanvas() {
  const canvas = $('hwpHeroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    draw();
  }

  function draw() {
    const { width: W, height: H } = canvas;
    ctx.clearRect(0, 0, W, H);

    // 8-pointed star path in an 80×80 tile
    // M73,40 L55,34 L63,17 L46,25 L40,7 L34,25 L17,17 L25,34 L7,40 L25,46 L17,63 L34,55 L40,73 L46,55 L63,63 L55,46 Z
    const pts = [[73,40],[55,34],[63,17],[46,25],[40,7],[34,25],[17,17],[25,34],[7,40],[25,46],[17,63],[34,55],[40,73],[46,55],[63,63],[55,46]];
    const tileSize = 80;
    const cols = Math.ceil(W / tileSize) + 1;
    const rows = Math.ceil(H / tileSize) + 1;

    ctx.strokeStyle = 'rgba(200,150,47,0.7)';
    ctx.lineWidth = 0.7;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const ox = c * tileSize;
        const oy = r * tileSize;
        ctx.beginPath();
        pts.forEach(([x, y], i) => {
          i === 0 ? ctx.moveTo(ox + x, oy + y) : ctx.lineTo(ox + x, oy + y);
        });
        ctx.closePath();
        ctx.stroke();
      }
    }
  }

  new ResizeObserver(resize).observe(canvas);
  resize();
}

/* ============================================================
   8. LIVE CLOCK + HERO DATE
============================================================ */
function updateClock() {
  const now = new Date();
  const clockEl = $('hwpClock');
  const dateEl = $('hwpHeroDate');
  if (clockEl) clockEl.textContent = `${fmt2(now.getHours())}:${fmt2(now.getMinutes())}:${fmt2(now.getSeconds())}`;
  if (dateEl) {
    const hari = DATA.hariId[now.getDay()];
    const tgl = now.getDate();
    const bln = DATA.bulanId[now.getMonth()];
    const thn = now.getFullYear();
    dateEl.textContent = `${hari}, ${tgl} ${bln} ${thn}`;
  }
}

/* ============================================================
   9. TOPBAR — Hijri Date + Prayer Countdown
============================================================ */
function updateTopbar() {
  const now = new Date();

  // Hijri date
  const hijri = gregorianToHijri(now.getFullYear(), now.getMonth() + 1, now.getDate());
  const hijriEl = $('hwpHijriDate');
  if (hijriEl) hijriEl.textContent = `${hijri.day} ${DATA.hijriMonths[hijri.month - 1]} ${hijri.year} H`;

  // Gregorian date in topbar
  const gregEl = $('hwpGregorianDate');
  if (gregEl) {
    const hari = DATA.hariId[now.getDay()];
    gregEl.textContent = `${hari}, ${now.getDate()} ${DATA.bulanId[now.getMonth()]} ${now.getFullYear()}`;
  }

  // Prayer cards subtitle date
  const sholatDate = $('hwpSholatDate');
  if (sholatDate) {
    sholatDate.textContent = `${now.getDate()} ${DATA.bulanId[now.getMonth()]} ${now.getFullYear()}`;
  }
}

function updateCountdown() {
  const now = new Date();
  const times = getPrayerTimes(now);
  const next = getNextPrayer(times);
  const mins = next.minutesLeft;
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  const s = 59 - now.getSeconds();

  const label = $('hwpNextPrayerLabel');
  const time = $('hwpNextPrayerTime');
  const countdown = $('hwpCountdown');

  if (label) label.textContent = next.name;
  if (time) time.textContent = formatTime(next.time.h, next.time.m);
  if (countdown) countdown.textContent = `${fmt2(h)}:${fmt2(m)}:${fmt2(s)}`;
}

/* ============================================================
   10. RENDER — SHOLAT CARDS
============================================================ */
function renderSholatCards() {
  const grid = $('hwpSholatGrid');
  if (!grid) return;
  const now = new Date();
  const times = getPrayerTimes(now);
  const next = getNextPrayer(times);
  const total = now.getHours() * 60 + now.getMinutes();

  grid.innerHTML = DATA.prayerNames.map((name, i) => {
    const { h, m } = times[i];
    const tMin = h * 60 + m;
    const isActive = i === next.idx;
    const isPast = tMin <= total && !isActive;
    let badge = '';
    if (isActive) badge = `<span class="hwp-sholat-badge">Berikutnya</span>`;
    if (i === 0 && tMin < total && next.idx !== 0) badge = `<span class="hwp-sholat-badge" style="background:var(--hwp-c-text3)">Besok</span>`;

    return `<div class="hwp-sholat-card${isActive ? ' hwp-active' : ''}" role="listitem" ${isActive ? 'aria-current="true"' : ''}>
      <span class="hwp-sholat-ar" lang="ar">${DATA.prayerArabic[i]}</span>
      <div class="hwp-sholat-name">${name}</div>
      <div class="hwp-sholat-time" style="opacity:${isPast?'.45':'1'}">${formatTime(h, m)}</div>
      ${badge}
    </div>`;
  }).join('');
}

/* ============================================================
   11. RENDER — JADWAL KEGIATAN
============================================================ */
const ICONS = {
  book: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
  quran:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
  pray: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8a4 4 0 1 0-8 0"/><path d="M6 11V8a6 6 0 0 1 12 0v3"/><path d="M12 19v3"/><path d="M8.5 19h7"/></svg>`,
  mosque:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21V10l4-4V3h10v3l4 4v11H3z"/><path d="M12 3c0 2-2 3-2 5h4c0-2-2-3-2-5z"/><path d="M9 21v-4h6v4"/></svg>`,
  child:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="5" r="3"/><path d="M12 8v6"/><path d="M9 14l-2 6"/><path d="M15 14l2 6"/><path d="M9 11h6"/></svg>`,
  sport:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M4.93 4.93l4.24 4.24"/><path d="M14.83 9.17l4.24-4.24"/><path d="M14.83 14.83l4.24 4.24"/><path d="M9.17 14.83l-4.24 4.24"/><circle cx="12" cy="12" r="4"/></svg>`,
};

function renderJadwal(filter = 'all') {
  const list = $('hwpJadwalList');
  if (!list) return;

  list.innerHTML = DATA.jadwal.map((j, idx) => {
    const show = filter === 'all' || j.hari === filter;
    return `<div class="hwp-jadwal-item${show ? '' : ' hwp-hidden'}" role="listitem" data-hari="${j.hari}" data-idx="${idx}">
      <div class="hwp-jadwal-day-badge">
        <span class="hwp-jadwal-day">${j.hari}</span>
        <span class="hwp-jadwal-jam">${j.waktu}</span>
        <span class="hwp-jadwal-jam">${j.jam}</span>
      </div>
      <div class="hwp-jadwal-info">
        <h4>${j.kegiatan}</h4>
        <p>${j.pembina} · ${j.tempat}</p>
      </div>
      <div class="hwp-jadwal-icon" aria-hidden="true">${ICONS[j.ico] || ICONS.book}</div>
    </div>`;
  }).join('');
}

function initJadwalFilter() {
  $qa('.hwp-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      $qa('.hwp-filter-btn').forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected','false'); });
      btn.classList.add('active');
      btn.setAttribute('aria-selected','true');
      const filter = btn.dataset.filter;
      $qa('.hwp-jadwal-item').forEach(item => {
        const show = filter === 'all' || item.dataset.hari === filter;
        item.classList.toggle('hwp-hidden', !show);
      });
    });
  });
}

/* ============================================================
   12. RENDER — AGENDA
============================================================ */
function daysLeft(date) {
  const now = new Date(); now.setHours(0,0,0,0);
  const d = Math.round((date - now) / 86400000);
  if (d === 0) return 'Hari ini!';
  if (d === 1) return 'Besok';
  return `${d} hari lagi`;
}

function renderAgenda() {
  const list = $('hwpAgendaList');
  if (!list) return;
  const now = new Date(); now.setHours(0,0,0,0);
  const upcoming = DATA.agenda.filter(a => a.tanggal >= now);

  if (!upcoming.length) {
    list.innerHTML = '<p style="text-align:center;color:var(--hwp-c-text3)">Belum ada agenda mendatang.</p>';
    return;
  }

  list.innerHTML = upcoming.map(a => {
    const tgl = a.tanggal.getDate();
    const bln = DATA.bulanId[a.tanggal.getMonth()].slice(0,3).toUpperCase();
    return `<div class="hwp-agenda-item" role="listitem">
      <div class="hwp-agenda-date" aria-label="${tgl} ${DATA.bulanId[a.tanggal.getMonth()]} ${a.tanggal.getFullYear()}">
        <span class="hwp-agenda-tgl">${tgl}</span>
        <span class="hwp-agenda-bln">${bln}</span>
      </div>
      <div class="hwp-agenda-body">
        <div class="hwp-agenda-meta">
          <span class="hwp-agenda-badge">${a.badge}</span>
          <span class="hwp-agenda-countdown">⏰ ${daysLeft(a.tanggal)}</span>
        </div>
        <h3>${a.judul}</h3>
        <p>${a.deskripsi}</p>
        <div class="hwp-agenda-detail">
          <span>
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><circle cx="8" cy="8" r="7"/><polyline points="8 4 8 8 10.5 9.5"/></svg>
            ${a.pukul}
          </span>
          <span>
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M8 14s-6-4-6-8a6 6 0 0 1 12 0c0 4-6 8-6 8z"/><circle cx="8" cy="6" r="2"/></svg>
            ${a.lokasi}
          </span>
        </div>
      </div>
    </div>`;
  }).join('');
}

/* ============================================================
   13. RENDER — PENGURUS DKM
============================================================ */
const WA_ICON = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;

function renderPengurus() {
  const grid = $('hwpPengurusGrid');
  if (!grid) return;
  grid.innerHTML = DATA.pengurus.map(p => `
    <div class="hwp-pengurus-card${p.wa ? ' hwp-has-wa' : ''}" role="listitem">
      <div class="hwp-pengurus-avatar">${p.inisial}</div>
      <div>
        <p class="hwp-pengurus-jabatan">${p.jabatan}</p>
        <h3 class="hwp-pengurus-name">${p.nama}</h3>
        <p class="hwp-pengurus-periode">Periode ${p.periode}</p>
      </div>
      <p class="hwp-pengurus-bio">${p.bio}</p>
      ${p.wa ? `<a href="https://wa.me/${p.wa}?text=Assalamu'alaikum%2C%20saya%20ingin%20bertanya%20mengenai%20Masjid%20Al%20Istiqomah." target="_blank" rel="noopener" class="hwp-pengurus-wa" aria-label="Hubungi ${p.nama} via WhatsApp">${WA_ICON} WhatsApp</a>` : ''}
    </div>`).join('');
}

/* ============================================================
   14. RENDER — KAS/KEUANGAN
============================================================ */
let currentKasPeriod = 0;

function renderKas(period) {
  const data = DATA.kas[period];
  if (!data) return;

  // Update period title
  const title = $('hwpKasPeriodeTitle');
  if (title) title.textContent = `Laporan Keuangan — ${data.periode}`;

  // Calculate totals
  const masuk   = data.transaksi.reduce((s, t) => s + t.masuk, 0);
  const keluar  = data.transaksi.reduce((s, t) => s + t.keluar, 0);
  const saldo   = data.saldoAwal + masuk - keluar;

  // Summary cards
  const summary = $('hwpKasSummary');
  if (summary) {
    summary.innerHTML = `
      <div class="hwp-kas-card hwp-kas-saldo" role="listitem"><div class="hwp-kas-card-label">Saldo Awal</div><div class="hwp-kas-card-val">Rp ${fmtRp(data.saldoAwal)}</div></div>
      <div class="hwp-kas-card hwp-kas-masuk"  role="listitem"><div class="hwp-kas-card-label">Total Pemasukan</div><div class="hwp-kas-card-val">Rp ${fmtRp(masuk)}</div></div>
      <div class="hwp-kas-card hwp-kas-keluar" role="listitem"><div class="hwp-kas-card-label">Total Pengeluaran</div><div class="hwp-kas-card-val">Rp ${fmtRp(keluar)}</div></div>`;
  }

  // Table body
  const body = $('hwpKasBody');
  if (body) {
    body.innerHTML = data.transaksi.map(t => `
      <tr>
        <td style="white-space:nowrap;color:var(--hwp-c-text3)">${t.tgl}</td>
        <td>${t.ket}</td>
        <td class="hwp-td-cat"><span style="font-size:.72rem;background:var(--hwp-c-bg);border:1px solid var(--hwp-c-border);padding:1px 7px;border-radius:99px;white-space:nowrap">${t.kat}</span></td>
        <td class="hwp-text-r ${t.masuk  ? 'hwp-val-masuk'  : 'hwp-val-empty'}">${t.masuk  ? 'Rp ' + fmtRp(t.masuk)  : '—'}</td>
        <td class="hwp-text-r ${t.keluar ? 'hwp-val-keluar' : 'hwp-val-empty'}">${t.keluar ? 'Rp ' + fmtRp(t.keluar) : '—'}</td>
      </tr>`).join('');
  }

  // Table foot
  const foot = $('hwpKasFoot');
  if (foot) {
    foot.innerHTML = `
      <tr>
        <td colspan="3"><strong>Saldo Akhir Periode</strong></td>
        <td class="hwp-text-r"><strong class="hwp-val-masuk">Rp ${fmtRp(masuk)}</strong></td>
        <td class="hwp-text-r"><strong class="hwp-val-keluar">Rp ${fmtRp(keluar)}</strong></td>
      </tr>
      <tr>
        <td colspan="5" style="padding-top:0">
          <strong style="color:var(--hwp-c-primary)">Saldo Akhir: Rp ${fmtRp(saldo)}</strong>
          <span style="font-size:.75rem;color:var(--hwp-c-text3);margin-left:.5rem">(Saldo Awal + Masuk − Keluar)</span>
        </td>
      </tr>`;
  }
}

function initKasTabs() {
  $qa('.hwp-kas-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      $qa('.hwp-kas-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentKasPeriod = parseInt(tab.dataset.period);
      renderKas(currentKasPeriod);
    });
  });
}

/* ============================================================
   15. GALLERY RENDER + LIGHTBOX
============================================================ */
function makeIslamicSvg(theme, caption) {
  const { bg, accent, ar, label } = theme;
  const star = 'M73,40 L55,34 L63,17 L46,25 L40,7 L34,25 L17,17 L25,34 L7,40 L25,46 L17,63 L34,55 L40,73 L46,55 L63,63 L55,46 Z';
  let paths = '';
  for (let c = 0; c < 8; c++) {
    for (let r = 0; r < 6; r++) {
      paths += `<path d="${star}" transform="translate(${c*80-40},${r*80-40})" fill="none" stroke="${accent}" stroke-width="0.75" opacity="0.28"/>`;
    }
  }
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
    <rect width="600" height="400" fill="${bg}"/>
    ${paths}
    <defs>
      <linearGradient id="ov${encodeURIComponent(label)}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="30%" stop-color="${bg}" stop-opacity="0.1"/>
        <stop offset="100%" stop-color="${bg}" stop-opacity="0.85"/>
      </linearGradient>
    </defs>
    <rect width="600" height="400" fill="url(#ov${encodeURIComponent(label)})"/>
    <text x="300" y="185" text-anchor="middle" fill="${accent}" font-size="38" font-family="Amiri,serif" opacity="0.92">${ar}</text>
    <text x="300" y="230" text-anchor="middle" fill="white" font-size="18" font-family="sans-serif" font-weight="600" opacity="0.9">${label}</text>
    <rect x="250" y="246" width="100" height="2" fill="${accent}" opacity="0.55" rx="1"/>
  </svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

let lightboxIndex = 0;
const galleryImages = [];

function renderGallery() {
  const grid = $('hwpGaleriGrid');
  if (!grid) return;

  DATA.gallery.forEach((item, i) => {
    const isSvg = !!item.svgTheme;
    const src = isSvg ? makeIslamicSvg(item.svgTheme, item.caption) : item.src;
    galleryImages.push({ src, caption: item.caption, isSvg });

    const div = document.createElement('div');
    div.className = 'hwp-galeri-item';
    div.setAttribute('role', 'listitem');
    div.setAttribute('tabindex', '0');
    div.setAttribute('aria-label', item.caption);

    const img = document.createElement('img');
    img.alt = item.caption;
    img.loading = 'lazy';

    if (isSvg) {
      img.src = src;
    } else {
      img.src = item.src;
      // Fallback to SVG pattern if image fails to load (ensures Islamic-only imagery)
      img.onerror = function() {
        const fallbackSvg = makeIslamicSvg(
          { bg:'#1B6B47', accent:'#C8962F', ar:'مَسْجِدُ الإِسْتِقَامَة', label: item.caption.slice(0,24) },
          item.caption
        );
        this.src = fallbackSvg;
        galleryImages[i].src = fallbackSvg;
        this.onerror = null;
      };
    }

    const cap = document.createElement('div');
    cap.className = 'hwp-galeri-caption';
    cap.textContent = item.caption;

    div.appendChild(img);
    div.appendChild(cap);

    div.addEventListener('click', () => openLightbox(i));
    div.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(i); } });
    grid.appendChild(div);
  });
}

function openLightbox(idx) {
  lightboxIndex = idx;
  const lb = $('hwpLightbox');
  const img = $('hwpLbImg');
  const cap = $('hwpLbCap');
  img.src = galleryImages[idx].src;
  img.alt = galleryImages[idx].caption;
  cap.textContent = galleryImages[idx].caption;
  lb.hidden = false;
  lb.focus();
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  $('hwpLightbox').hidden = true;
  document.body.style.overflow = '';
}

function lightboxNav(dir) {
  lightboxIndex = (lightboxIndex + dir + galleryImages.length) % galleryImages.length;
  const img = $('hwpLbImg');
  const cap = $('hwpLbCap');
  img.src = galleryImages[lightboxIndex].src;
  img.alt = galleryImages[lightboxIndex].caption;
  cap.textContent = galleryImages[lightboxIndex].caption;
}

function initLightbox() {
  $('hwpLbClose').addEventListener('click', closeLightbox);
  $('hwpLbPrev').addEventListener('click', () => lightboxNav(-1));
  $('hwpLbNext').addEventListener('click', () => lightboxNav(1));
  $('hwpLightbox').addEventListener('click', e => { if (e.target === e.currentTarget) closeLightbox(); });
  document.addEventListener('keydown', e => {
    if ($('hwpLightbox').hidden) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') lightboxNav(-1);
    if (e.key === 'ArrowRight') lightboxNav(1);
  });
}

/* ============================================================
   16. RENDER — KONTAK WA + WA FAB
============================================================ */
function renderKontak() {
  const waList = $('hwpWaList');
  const fabMenu = $('hwpWaFabMenu');
  const waContacts = DATA.pengurus.filter(p => p.wa);

  if (waList) {
    waList.innerHTML = waContacts.map(p => `
      <li role="listitem">
        <a href="https://wa.me/${p.wa}?text=Assalamu'alaikum%2C%20saya%20ingin%20menghubungi%20${encodeURIComponent(p.jabatan)}." target="_blank" rel="noopener" class="hwp-wa-btn" aria-label="Chat WhatsApp dengan ${p.nama}, ${p.jabatan}">
          <span class="hwp-wa-btn-ico">${WA_ICON}</span>
          <div class="hwp-wa-btn-info">
            <strong>${p.nama}</strong>
            <span>${p.jabatan}</span>
          </div>
          <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" style="width:14px;height:14px;margin-left:auto;opacity:.5"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg>
        </a>
      </li>`).join('');
  }

  if (fabMenu) {
    fabMenu.innerHTML = waContacts.map(p => `
      <a href="https://wa.me/${p.wa}?text=Assalamu'alaikum" target="_blank" rel="noopener" class="hwp-wa-fab-item" aria-label="${p.jabatan} — ${p.nama}">
        <span class="hwp-wa-fab-item-ico">${WA_ICON}</span>
        <span class="hwp-wa-fab-item-label">
          <strong>${p.jabatan}</strong>
          <span>${p.nama}</span>
        </span>
      </a>`).join('');
  }
}

function initWaFab() {
  const btn = $('hwpWaFabBtn');
  const menu = $('hwpWaFabMenu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', !expanded);
    menu.hidden = expanded;
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('.hwp-wa-fab')) {
      btn.setAttribute('aria-expanded', 'false');
      menu.hidden = true;
    }
  });
}

/* ============================================================
   17. DOA WIDGET
============================================================ */
let doaIdx = new Date().getDate() % DATA.doa.length;

function renderDoa() {
  const d = DATA.doa[doaIdx % DATA.doa.length];
  const ar = $('hwpDoaAr'), lat = $('hwpDoaLatin'), arti = $('hwpDoaArti');
  if (ar) ar.textContent = d.ar;
  if (lat) lat.textContent = d.latin;
  if (arti) arti.textContent = d.arti;
}

function initDoa() {
  renderDoa();
  $('hwpDoaNext')?.addEventListener('click', () => {
    doaIdx = (doaIdx + 1) % DATA.doa.length;
    const card = $('hwpDoaCard');
    card.style.opacity = '0';
    card.style.transition = 'opacity .2s';
    setTimeout(() => {
      renderDoa();
      card.style.opacity = '1';
    }, 200);
  });
}

/* ============================================================
   18. HEADER SCROLL BEHAVIOR
============================================================ */
function initHeaderScroll() {
  const header = $('hwpHeader');
  let lastY = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    header.classList.toggle('hwp-scrolled', y > 40);
    lastY = y;
  }, { passive: true });
}

/* ============================================================
   19. HAMBURGER + NAV
============================================================ */
function initHamburger() {
  const btn = $('hwpHamburger');
  const nav = $('hwpNav');
  if (!btn || !nav) return;

  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', !expanded);
    nav.classList.toggle('hwp-open', !expanded);
  });

  // Close on nav link click
  nav.querySelectorAll('.hwp-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      btn.setAttribute('aria-expanded', 'false');
      nav.classList.remove('hwp-open');
    });
  });

  // Close on outside click
  document.addEventListener('click', e => {
    if (!e.target.closest('.hwp-header-inner')) {
      btn.setAttribute('aria-expanded', 'false');
      nav.classList.remove('hwp-open');
    }
  });
}

/* ============================================================
   20. ACTIVE NAV HIGHLIGHT
============================================================ */
function initActiveNav() {
  const sections = $qa('section[id]');
  const navLinks = $qa('.hwp-nav-link');

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle('hwp-active', link.getAttribute('href') === '#' + id);
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => obs.observe(s));
}

/* ============================================================
   21. BACK TO TOP
============================================================ */
function initBackTop() {
  const btn = $('hwpBackTop');
  window.addEventListener('scroll', () => {
    btn.hidden = window.scrollY < 400;
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ============================================================
   22. DEMO BANNER CLOSE
============================================================ */
function initDemoBar() {
  $('hwpDemoClose')?.addEventListener('click', () => {
    $('hwpDemoBar')?.classList.add('hwp-hidden');
  });
}

/* ============================================================
   23. FOOTER YEAR
============================================================ */
function setYear() {
  const el = $('hwpYear');
  if (el) el.textContent = new Date().getFullYear();
}

/* ============================================================
   24. TICK — runs every second
============================================================ */
function tick() {
  updateClock();
  updateCountdown();
}

/* ============================================================
   25. INIT
============================================================ */
function init() {
  // Theme & controls
  initDarkMode();
  initFontSize();

  // Hero
  initHeroCanvas();

  // Clock
  updateClock();
  updateTopbar();

  // Dynamic sections
  renderSholatCards();
  renderJadwal();
  renderAgenda();
  renderPengurus();
  renderKas(0);
  renderGallery();
  renderKontak();
  renderDoa();

  // Interactive widgets
  initJadwalFilter();
  initKasTabs();
  initLightbox();
  initWaFab();
  initDoa();

  // UI behavior
  initHeaderScroll();
  initHamburger();
  initActiveNav();
  initBackTop();
  initDemoBar();
  setYear();

  // Update prayer cards every minute (times might shift)
  setInterval(() => {
    updateTopbar();
    renderSholatCards();
  }, 60000);

  // Tick every second
  setInterval(tick, 1000);
}

// Start when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
