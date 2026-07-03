/* Header scroll state */
const header = document.getElementById("site-header");
window.addEventListener(
  "scroll",
  () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 40);
  },
  { passive: true },
);

/* Mobile nav toggle */
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.getElementById("nav-menu");

navToggle?.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute(
    "aria-label",
    isOpen ? "Tutup menu navigasi" : "Buka menu navigasi",
  );
});

navMenu?.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
    navToggle?.setAttribute("aria-label", "Buka menu navigasi");
  });
});

/* Scroll reveal */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 },
);

document.querySelectorAll("[data-reveal]").forEach((el) => {
  revealObserver.observe(el);
});

/* Stats counter animation */
const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const el = entry.target;
      const target = Number(el.dataset.count);
      if (!Number.isFinite(target)) return;

      const duration = 1500;
      const start = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(target * eased);
        el.textContent =
          target === 98 ? `${current}%` : `${current}+`;
        if (progress < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
      counterObserver.unobserve(el);
    });
  },
  { threshold: 0.5 },
);

document.querySelectorAll(".stat-number[data-count]").forEach((el) => {
  counterObserver.observe(el);
});

/* Contact form */
document.querySelector(".contact-form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const btn = e.target.querySelector('[type="submit"]');
  btn.disabled = true;
  btn.textContent = "Mengirim...";
  setTimeout(() => {
    e.target.innerHTML =
      '<p class="form-success">✅ Terima kasih! Pesan Anda telah kami terima. Kami akan menghubungi Anda segera.</p>';
  }, 800);
});

/* Footer year */
const yearEl = document.getElementById("ft-year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

/* FAQ aria-expanded sync */
document.querySelectorAll(".faq-item").forEach((item) => {
  const summary = item.querySelector(".faq-question");
  summary?.setAttribute("aria-expanded", String(item.open));

  item.addEventListener("toggle", () => {
    summary?.setAttribute("aria-expanded", String(item.open));
  });
});
