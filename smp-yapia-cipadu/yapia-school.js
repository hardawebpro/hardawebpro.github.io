document.addEventListener('DOMContentLoaded', () => {

    // ==========================================================================
    // 1. MOBILE MENU DRAWER CONTROLLER
    // ==========================================================================
    const navToggleBtn = document.getElementById('navToggleBtn');
    const mainNav = document.getElementById('mainNav');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggleBtn && mainNav) {
        navToggleBtn.addEventListener('click', () => {
            const isExpanded = navToggleBtn.getAttribute('aria-expanded') === 'true';
            navToggleBtn.setAttribute('aria-expanded', !isExpanded);
            mainNav.classList.toggle('is-active');

            // Mencegah overflow gulir pada body saat drawer menu mobile terbuka
            if (!isExpanded) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });

        // Menutup menu mobile saat salah satu menu navigasi internal di-klik
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggleBtn.setAttribute('aria-expanded', 'false');
                mainNav.classList.remove('is-active');
                document.body.style.overflow = '';
            });
        });
    }

    // ==========================================================================
    // 2. STICKY HEADER OFFSET & SMOOTH SCROLLING
    // ==========================================================================
    const header = document.getElementById('header');
    const internalAnchors = document.querySelectorAll('a[href^="#"]');

    internalAnchors.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');

            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                e.preventDefault();

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
    // 3. TABBED JENJANG PENDIDIKAN CONTROLLER
    // ==========================================================================
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('aria-controls');

            // Nonaktifkan semua button tab
            tabButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-selected', 'false');
            });

            // Sembunyikan seluruh panel
            tabPanels.forEach(panel => {
                panel.classList.remove('active');
            });

            // Aktifkan tab yang di-klik
            button.classList.add('active');
            button.setAttribute('aria-selected', 'true');

            // Tampilkan panel target
            const targetPanel = document.getElementById(targetId);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });

    // ==========================================================================
    // 4. ACCORDION FAQ SYSTEM
    // ==========================================================================
    const faqTriggers = document.querySelectorAll('.faq-trigger');

    faqTriggers.forEach(trigger => {
        trigger.addEventListener('click', function () {
            const parentItem = this.parentElement;
            const associatedPanel = this.nextElementSibling;
            const isExpanded = this.getAttribute('aria-expanded') === 'true';

            // Tutup semua FAQ accordion yang sedang aktif/terbuka lainnya
            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== parentItem && item.classList.contains('is-active')) {
                    item.classList.remove('is-active');
                    const otherTrigger = item.querySelector('.faq-trigger');
                    const otherPanel = item.querySelector('.faq-panel');
                    if (otherTrigger && otherPanel) {
                        otherTrigger.setAttribute('aria-expanded', 'false');
                        otherPanel.style.maxHeight = null;
                    }
                }
            });

            // Toggle state item yang di-klik
            parentItem.classList.toggle('is-active');
            this.setAttribute('aria-expanded', !isExpanded);

            if (parentItem.classList.contains('is-active')) {
                associatedPanel.style.maxHeight = associatedPanel.scrollHeight + 'px';
            } else {
                associatedPanel.style.maxHeight = null;
            }
        });
    });

    // ==========================================================================
    // 5. BACK TO TOP VISIBILITY CONTROLLER
    // ==========================================================================
    const backToTopBtn = document.getElementById('backToTop');

    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            // Tampilkan tombol saat pengguna menggulir melewati 600px
            if (window.scrollY > 600) {
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
