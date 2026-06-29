const root = document.documentElement;
const body = document.body;
const live = document.querySelector("#hwp-live");
const mode = document.querySelector("#hwp-mode");
const fval = document.querySelector("#hwp-font-val");
let size = 0;
let time = null;

const say = (msg) => {
  clearTimeout(time);
  live.textContent = msg;
  live.classList.add("hwp-show");
  time = setTimeout(() => {
    live.classList.remove("hwp-show");
  }, 2400);
};

const them = () => {
  const dark = !body.classList.contains("hwp-dark");
  body.classList.toggle("hwp-dark", dark);
  mode.setAttribute("aria-pressed", String(dark));
  mode.setAttribute("aria-label", dark ? "Aktifkan mode terang" : "Aktifkan mode gelap");
  mode.querySelector("span").textContent = dark ? "Terang" : "Gelap";
  try {
    localStorage.setItem("hwp-theme", dark ? "dark" : "light");
  } catch (err) {
    return;
  }
};

const font = (num) => {
  const next = Math.min(4, Math.max(-2, size + num));
  if (next === size) {
    return;
  }
  size = next;
  const pct = 100 + (size * 8);
  root.style.setProperty("--hwp-font", `${pct}%`);
  fval.textContent = `${pct}%`;
  try {
    localStorage.setItem("hwp-font", String(size));
  } catch (err) {
    return;
  }
  say(`Ukuran tulisan ${pct}%`);
};

const navs = () => {
  const menu = document.querySelector("#hwp-menu");
  const nav = document.querySelector("#hwp-nav");
  const link = nav.querySelectorAll("a");

  menu.addEventListener("click", () => {
    const open = nav.classList.toggle("hwp-open");
    menu.setAttribute("aria-expanded", String(open));
    menu.querySelector("span").textContent = open ? "Tutup" : "Menu";
  });

  link.forEach((item) => {
    item.addEventListener("click", () => {
      nav.classList.remove("hwp-open");
      menu.setAttribute("aria-expanded", "false");
      menu.querySelector("span").textContent = "Menu";
    });
  });
};

const filt = () => {
  const btns = document.querySelectorAll(".hwp-filter-btn");
  const card = document.querySelectorAll(".hwp-agenda-card");

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const cat = btn.dataset.cat;
      btns.forEach((item) => {
        const act = item === btn;
        item.classList.toggle("hwp-active", act);
        item.setAttribute("aria-pressed", String(act));
      });
      card.forEach((item) => {
        const show = cat === "all" || item.dataset.cat === cat;
        item.classList.toggle("hwp-hide", !show);
      });
      say(cat === "all" ? "Semua agenda ditampilkan" : `Agenda ${btn.textContent} ditampilkan`);
    });
  });
};

const copy = () => {
  const btns = document.querySelectorAll(".hwp-copy");
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const txt = btn.dataset.cp;
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(txt).then(() => {
          say(`Nomor ${txt} disalin`);
        }).catch(() => {
          say(`Salin nomor ini: ${txt}`);
        });
        return;
      }
      say(`Salin nomor ini: ${txt}`);
    });
  });
};

const init = () => {
  try {
    const pref = localStorage.getItem("hwp-theme");
    const font = Number(localStorage.getItem("hwp-font"));
    if (pref === "dark") {
      body.classList.add("hwp-dark");
      mode.setAttribute("aria-pressed", "true");
      mode.setAttribute("aria-label", "Aktifkan mode terang");
      mode.querySelector("span").textContent = "Terang";
    }
    if (Number.isFinite(font) && font >= -2 && font <= 4) {
      size = font;
      const pct = 100 + (size * 8);
      root.style.setProperty("--hwp-font", `${pct}%`);
      fval.textContent = `${pct}%`;
    }
  } catch (err) {
    return;
  }
};

init();
mode.addEventListener("click", them);
document.querySelector("#hwp-font-up").addEventListener("click", () => font(1));
document.querySelector("#hwp-font-down").addEventListener("click", () => font(-1));
navs();
filt();
copy();
