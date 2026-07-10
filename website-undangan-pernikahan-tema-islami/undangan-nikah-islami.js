/**
 * Undangan Pernikahan Islami — Ahmad & Aisyah
 * Vanilla JS · no external libraries
 */
(function () {
  "use strict";

  document.documentElement.classList.remove("no-js");
  document.documentElement.classList.add("js");

  var EVENT = {
    title: "Pernikahan Ahmad & Aisyah",
    description:
      "Undangan pernikahan Ahmad Fauzan dan Aisyah Zahra. Mohon doa restu dan kehadirannya.",
    location: "Masjid Al Ikhlas, Jl. Melati Raya No. 45, Jakarta Selatan",
    start: new Date("2050-10-20T09:00:00+07:00"),
    end: new Date("2050-10-20T14:00:00+07:00"),
    waBase: "https://wa.me/6281234567890?text=",
  };

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function pad(n) {
    return String(n).padStart(2, "0");
  }

  function qs(sel, root) {
    return (root || document).querySelector(sel);
  }

  function qsa(sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  /* Footer year */
  var yearEl = qs("#ft-year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  var revealObserver = null;

  function revealInView() {
    qsa("[data-reveal]").forEach(function (el) {
      var rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add("is-in");
        if (revealObserver) revealObserver.unobserve(el);
      }
    });
  }

  /* Scroll progress */
  var progressBar = qs("#scroll-progress");
  if (progressBar) {
    window.addEventListener(
      "scroll",
      function () {
        var docHeight = document.documentElement.scrollHeight - window.innerHeight;
        var pct = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
        progressBar.style.width = pct + "%";
      },
      { passive: true }
    );
  }

  /* Smooth scroll */
  qsa('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      var id = link.getAttribute("href");
      if (!id || id === "#") return;
      var target = qs(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
      closeNav();
    });
  });

  /* Nav */
  var navToggle = qs("#nav-toggle");
  var navMenu = qs("#nav-menu");
  var siteNav = qs("#site-nav");

  function closeNav() {
    if (!navToggle || !navMenu) return;
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Buka menu navigasi");
    navMenu.classList.remove("is-open");
  }

  function openNav() {
    if (!navToggle || !navMenu) return;
    navToggle.setAttribute("aria-expanded", "true");
    navToggle.setAttribute("aria-label", "Tutup menu navigasi");
    navMenu.classList.add("is-open");
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      if (navToggle.getAttribute("aria-expanded") === "true") closeNav();
      else openNav();
    });
  }

  if (siteNav) {
    function updateNavState() {
      siteNav.classList.toggle("is-scrolled", window.scrollY > 24);
    }
    updateNavState();
    window.addEventListener("scroll", updateNavState, { passive: true });
  }

  /* Countdown */
  var cdGrid = qs("#countdown-grid");
  var cdDone = qs("#countdown-done");
  var elDays = qs("#cd-days");
  var elHours = qs("#cd-hours");
  var elMinutes = qs("#cd-minutes");
  var elSeconds = qs("#cd-seconds");
  var prevSeconds = -1;
  var countdownTimer = null;

  function tickPulse(el) {
    if (!el || prefersReducedMotion) return;
    el.classList.remove("is-tick");
    void el.offsetWidth;
    el.classList.add("is-tick");
  }

  function updateCountdown() {
    if (!elDays) return;

    var distance = EVENT.start.getTime() - Date.now();

    if (distance <= 0) {
      if (cdGrid) cdGrid.classList.add("is-hidden");
      if (cdDone) cdDone.classList.add("is-visible");
      if (countdownTimer) clearInterval(countdownTimer);
      return;
    }

    if (cdGrid) cdGrid.classList.remove("is-hidden");
    if (cdDone) cdDone.classList.remove("is-visible");

    var days = Math.floor(distance / 86400000);
    var hours = Math.floor((distance % 86400000) / 3600000);
    var minutes = Math.floor((distance % 3600000) / 60000);
    var seconds = Math.floor((distance % 60000) / 1000);

    elDays.textContent = pad(days);
    elHours.textContent = pad(hours);
    elMinutes.textContent = pad(minutes);
    elSeconds.textContent = pad(seconds);

    if (seconds !== prevSeconds) {
      tickPulse(elSeconds);
      prevSeconds = seconds;
    }
  }

  updateCountdown();
  countdownTimer = setInterval(updateCountdown, 1000);

  /* ICS download */
  function formatIcsUtc(date) {
    return (
      date.getUTCFullYear() +
      pad(date.getUTCMonth() + 1) +
      pad(date.getUTCDate()) +
      "T" +
      pad(date.getUTCHours()) +
      pad(date.getUTCMinutes()) +
      pad(date.getUTCSeconds()) +
      "Z"
    );
  }

  function escapeIcsText(text) {
    return String(text)
      .replace(/\\/g, "\\\\")
      .replace(/;/g, "\\;")
      .replace(/,/g, "\\,")
      .replace(/\n/g, "\\n");
  }

  function formatJakartaIcs(date) {
    var parts = {};
    new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Jakarta",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }).formatToParts(date).forEach(function (part) {
      if (part.type !== "literal") parts[part.type] = part.value;
    });
    return (
      parts.year +
      parts.month +
      parts.day +
      "T" +
      parts.hour +
      parts.minute +
      parts.second
    );
  }

  function buildIcsContent() {
    var icsStart = formatJakartaIcs(EVENT.start);
    var icsEnd = formatJakartaIcs(EVENT.end);
    var lines = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//HardaWebPro//Undangan Pernikahan Islami//ID",
      "CALSCALE:GREGORIAN",
      "METHOD:PUBLISH",
      "BEGIN:VTIMEZONE",
      "TZID:Asia/Jakarta",
      "X-LIC-LOCATION:Asia/Jakarta",
      "BEGIN:STANDARD",
      "TZOFFSETFROM:+0700",
      "TZOFFSETTO:+0700",
      "TZNAME:WIB",
      "DTSTART:19700101T000000",
      "END:STANDARD",
      "END:VTIMEZONE",
      "BEGIN:VEVENT",
      "UID:wedding-ahmad-aisyah-" + icsStart.slice(0, 8) + "@hardawebpro.github.io",
      "DTSTAMP:" + formatIcsUtc(new Date()),
      "DTSTART;TZID=Asia/Jakarta:" + icsStart,
      "DTEND;TZID=Asia/Jakarta:" + icsEnd,
      "SUMMARY:" + escapeIcsText(EVENT.title),
      "DESCRIPTION:" + escapeIcsText(EVENT.description),
      "LOCATION:" + escapeIcsText(EVENT.location),
      "STATUS:CONFIRMED",
      "SEQUENCE:0",
      "END:VEVENT",
      "END:VCALENDAR",
    ];
    return lines.join("\r\n");
  }

  function downloadIcs() {
    var content = buildIcsContent();
    var filename = "pernikahan-ahmad-aisyah.ics";
    var blob = new Blob([content], { type: "text/calendar;charset=utf-8" });

    if (window.URL && URL.createObjectURL) {
      var url = URL.createObjectURL(blob);
      var a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      try {
        a.click();
      } catch (err) {
        window.open("data:text/calendar;charset=utf-8," + encodeURIComponent(content), "_blank");
      }
      setTimeout(function () {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }, 250);
      return;
    }

    window.open("data:text/calendar;charset=utf-8," + encodeURIComponent(content), "_blank");
  }

  var btnIcs = qs("#btn-ics");
  if (btnIcs) {
    btnIcs.addEventListener("click", function () {
      try {
        downloadIcs();
      } catch (err) {
        window.alert("Unduhan otomatis tidak didukung. Gunakan tombol Google Calendar.");
      }
    });
  }

  /* RSVP */
  var rsvpForm = qs("#rsvp-form");
  if (rsvpForm) {
    rsvpForm.addEventListener("submit", function (e) {
      e.preventDefault();

      var namaInput = qs("#rsvp-nama");
      var jumlahInput = qs("#rsvp-jumlah");
      var pesanInput = qs("#rsvp-pesan");
      var namaError = qs("#rsvp-nama-error");
      var jumlahError = qs("#rsvp-jumlah-error");
      var kehadiranEl = qs('input[name="kehadiran"]:checked');

      var nama = namaInput ? namaInput.value.trim() : "";
      var jumlah = jumlahInput ? parseInt(jumlahInput.value, 10) : 0;
      var pesan = pesanInput ? pesanInput.value.trim() : "";
      var kehadiran = kehadiranEl ? kehadiranEl.value : "Hadir";
      var valid = true;

      if (namaInput) namaInput.classList.remove("is-invalid");
      if (jumlahInput) jumlahInput.classList.remove("is-invalid");
      if (namaError) namaError.classList.remove("is-visible");
      if (jumlahError) jumlahError.classList.remove("is-visible");

      if (!nama) {
        valid = false;
        if (namaInput) namaInput.classList.add("is-invalid");
        if (namaError) namaError.classList.add("is-visible");
      }

      if (kehadiran === "Hadir" && (!jumlah || jumlah < 1)) {
        valid = false;
        if (jumlahInput) jumlahInput.classList.add("is-invalid");
        if (jumlahError) jumlahError.classList.add("is-visible");
      }

      if (!valid) return;

      var message =
        "Assalamualaikum, saya ingin konfirmasi kehadiran undangan pernikahan Ahmad dan Aisyah.\n\n" +
        "Nama: " + nama + "\n" +
        "Kehadiran: " + kehadiran + "\n" +
        "Jumlah tamu: " + (jumlah || 1) + "\n" +
        "Pesan: " + (pesan || "-");

      window.open(EVENT.waBase + encodeURIComponent(message), "_blank", "noopener,noreferrer");
    });
  }

  /* Ucapan */
  var ucapanForm = qs("#ucapan-form");
  var ucapanList = qs("#ucapan-list");

  if (ucapanForm && ucapanList) {
    ucapanForm.addEventListener("submit", function (e) {
      e.preventDefault();

      var namaInput = qs("#ucapan-nama");
      var pesanInput = qs("#ucapan-pesan");
      var namaError = qs("#ucapan-nama-error");
      var pesanError = qs("#ucapan-pesan-error");

      var nama = namaInput ? namaInput.value.trim() : "";
      var pesan = pesanInput ? pesanInput.value.trim() : "";
      var valid = true;

      if (namaInput) namaInput.classList.remove("is-invalid");
      if (pesanInput) pesanInput.classList.remove("is-invalid");
      if (namaError) namaError.classList.remove("is-visible");
      if (pesanError) pesanError.classList.remove("is-visible");

      if (!nama) {
        valid = false;
        if (namaInput) namaInput.classList.add("is-invalid");
        if (namaError) namaError.classList.add("is-visible");
      }

      if (!pesan) {
        valid = false;
        if (pesanInput) pesanInput.classList.add("is-invalid");
        if (pesanError) pesanError.classList.add("is-visible");
      }

      if (!valid) return;

      var article = document.createElement("article");
      article.className = "wish";
      article.innerHTML =
        '<p class="wish__author">' + escapeHtml(nama) + "</p>" +
        '<p class="wish__text">“' + escapeHtml(pesan) + "”</p>";

      ucapanList.insertBefore(article, ucapanList.firstChild);
      ucapanForm.reset();
    });
  }

  /* Lightbox */
  var lightbox = qs("#lightbox");
  var lightboxImg = qs("#lightbox-img");
  var lightboxCaption = qs("#lightbox-caption");
  var lightboxClose = qs("#lightbox-close");
  var lastFocus = null;

  function openLightbox(img) {
    if (!lightbox || !lightboxImg || !img) return;
    lastFocus = document.activeElement;
    lightboxImg.src = img.currentSrc || img.src;
    lightboxImg.alt = img.alt || "Foto galeri";
    if (lightboxCaption) lightboxCaption.textContent = img.alt || "";
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    if (lightboxClose) lightboxClose.focus();
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lightboxImg) {
      lightboxImg.src = "";
      lightboxImg.alt = "";
    }
    if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
  }

  qsa("[data-lightbox]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      openLightbox(btn.querySelector("img"));
    });
  });

  if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
  if (lightbox) {
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) closeLightbox();
    });
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeLightbox();
      closeNav();
    }
  });

  /* Back to top */
  var backToTop = qs("#back-to-top");
  if (backToTop) {
    window.addEventListener(
      "scroll",
      function () {
        backToTop.classList.toggle("is-visible", window.scrollY > 480);
      },
      { passive: true }
    );
    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
    });
  }

  /* Scroll reveal — restrained */
  var revealEls = qsa("[data-reveal]");
  if ("IntersectionObserver" in window && revealEls.length && !prefersReducedMotion) {
    revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -24px 0px" }
    );
    revealEls.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("is-in");
    });
  }

  revealInView();
})();
