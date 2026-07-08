document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // 1. MOBILE HAMBURGER MENU TOGGLE
  // ==========================================================================
  const navToggleBtn = document.getElementById('navToggleBtn');
  const mainNav = document.getElementById('mainNav');
  const navLinks = document.querySelectorAll('.nav-link');

  if (navToggleBtn && mainNav) {
    navToggleBtn.addEventListener('click', () => {
      const isExpanded = navToggleBtn.getAttribute('aria-expanded') === 'true';
      navToggleBtn.setAttribute('aria-expanded', !isExpanded);
      mainNav.classList.toggle('is-active');
      document.body.classList.toggle('overflow-hidden'); // Mencegah scrolling saat menu terbuka
    });

    // Menutup menu saat link navigasi di-klik (Sangat fungsional untuk satu halaman landing)
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navToggleBtn.setAttribute('aria-expanded', 'false');
        mainNav.classList.remove('is-active');
        document.body.classList.remove('overflow-hidden');
      });
    });
  }

  // ==========================================================================
  // 2. SMOOTH SCROLL WITH OFFSET FOR STICKY HEADER
  // ==========================================================================
  const header = document.getElementById('header');
  const internalLinks = document.querySelectorAll('a[href^="#"]');

  internalLinks.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');

      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        e.preventDefault();

        // Mengalkulasi tinggi header agar tidak menutupi judul section saat scroll selesai
        const headerHeight = header ? header.offsetHeight : 0;
        const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ==========================================================================
  // 3. FAQ ACCORDION TRANSITIONS
  // ==========================================================================
  const faqTriggers = document.querySelectorAll('.faq-trigger');

  faqTriggers.forEach(trigger => {
    trigger.addEventListener('click', function () {
      const parent = this.parentElement;
      const panel = this.nextElementSibling;
      const isExpanded = this.getAttribute('aria-expanded') === 'true';

      // Menutup accordion lainnya jika ingin satu panel terbuka saja (Opsional namun disukai)
      document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== parent && item.classList.contains('is-active')) {
          item.classList.remove('is-active');
          const itemTrigger = item.querySelector('.faq-trigger');
          const itemPanel = item.querySelector('.faq-panel');
          itemTrigger.setAttribute('aria-expanded', 'false');
          itemPanel.style.maxHeight = null;
        }
      });

      // Mengubah state aktif pada komponen target
      parent.classList.toggle('is-active');
      this.setAttribute('aria-expanded', !isExpanded);

      if (parent.classList.contains('is-active')) {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      } else {
        panel.style.maxHeight = null;
      }
    });
  });

  // ==========================================================================
  // 4. BACK TO TOP BUTTON DETECTOR
  // ==========================================================================
  const backToTopBtn = document.getElementById('backToTop');

  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      // Tombol muncul jika jarak scroll vertikal pengguna melewati 500px
      if (window.scrollY > 500) {
        backToTopBtn.classList.add('is-visible');
      } else {
        backToTopBtn.classList.remove('is-visible');
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
