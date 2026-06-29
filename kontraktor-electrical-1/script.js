/**
 * PT. CAHAYA TEKNIK ELEKTRIK TANGERANG
 * Interactive Features
 */

document.addEventListener('DOMContentLoaded', function () {

    // ============================================
    // 1. MOBILE MENU TOGGLE
    // ============================================
    const menuToggle = document.querySelector('.hwp-menu-toggle');
    const nav = document.querySelector('.hwp-nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function () {
            const isOpen = nav.classList.toggle('is-open');
            menuToggle.classList.toggle('is-active');
            menuToggle.setAttribute('aria-expanded', isOpen);
        });

        // Close menu on link click (mobile)
        nav.querySelectorAll('.hwp-nav__link').forEach(function (link) {
            link.addEventListener('click', function () {
                nav.classList.remove('is-open');
                menuToggle.classList.remove('is-active');
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // ============================================
    // 2. STATS COUNTER ANIMATION (Intersection Observer)
    // ============================================
    const statsNumbers = document.querySelectorAll('.hwp-stats__number');

    if (statsNumbers.length) {
        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = parseInt(el.getAttribute('data-count'), 10);
                    if (!isNaN(target) && !el.dataset.counted) {
                        el.dataset.counted = 'true';
                        animateCounter(el, target);
                    }
                }
            });
        }, { threshold: 0.5 });

        statsNumbers.forEach(function (el) {
            observer.observe(el);
        });
    }

    function animateCounter(el, target) {
        let current = 0;
        const duration = 1200;
        const startTime = performance.now();

        function updateCounter(time) {
            const progress = Math.min((time - startTime) / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            current = Math.round(eased * target);

            if (target === 24) {
                el.textContent = current;
            } else {
                el.textContent = current;
            }

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                el.textContent = target;
            }
        }

        requestAnimationFrame(updateCounter);
    }

    // ============================================
    // 3. SMOOTH SCROLL FOR ANCHOR LINKS
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetEl = document.querySelector(targetId);
            if (targetEl) {
                e.preventDefault();
                const headerHeight = document.querySelector('.hwp-header')?.offsetHeight || 0;
                const top = targetEl.getBoundingClientRect().top + window.pageYOffset - headerHeight - 16;
                window.scrollTo({ top: top, behavior: 'smooth' });
            }
        });
    });

    // ============================================
    // 4. CONTACT FORM HANDLING
    // ============================================
    const form = document.getElementById('hwp-contact-form');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            // Basic validation
            const name = document.getElementById('hwp-name');
            const email = document.getElementById('hwp-email');
            const message = document.getElementById('hwp-message');
            let isValid = true;

            // Reset error states
            [name, email, message].forEach(function (field) {
                field.style.borderColor = '';
            });

            if (!name.value.trim()) {
                name.style.borderColor = '#D32F2F';
                isValid = false;
            }

            if (!email.value.trim() || !isValidEmail(email.value)) {
                email.style.borderColor = '#D32F2F';
                isValid = false;
            }

            if (!message.value.trim()) {
                message.style.borderColor = '#D32F2F';
                isValid = false;
            }

            if (!isValid) {
                // Simple alert — in production, show inline errors
                alert('Mohon lengkapi kolom yang wajib diisi (Nama, Email, Pesan).');
                return;
            }

            // Simulate form submission
            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            btn.textContent = 'Mengirim...';
            btn.disabled = true;

            setTimeout(function () {
                btn.textContent = '✓ Terkirim!';
                btn.style.background = '#2E7D32';
                btn.style.color = '#fff';

                // Reset form
                form.reset();

                setTimeout(function () {
                    btn.textContent = originalText;
                    btn.style.background = '';
                    btn.style.color = '';
                    btn.disabled = false;
                }, 3000);
            }, 1500);
        });
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // ============================================
    // 5. FAQ ACCORDION — smooth open/close
    // ============================================
    document.querySelectorAll('.hwp-faq__item').forEach(function (item) {
        const summary = item.querySelector('.hwp-faq__question');
        if (summary) {
            summary.addEventListener('click', function () {
                // Close other open items (optional — keep only one open)
                // Uncomment below for accordion behavior (only one open at a time)
                /*
                document.querySelectorAll('.hwp-faq__item[open]').forEach(function (openItem) {
                    if (openItem !== item) {
                        openItem.removeAttribute('open');
                    }
                });
                */
            });
        }
    });

    // ============================================
    // 6. HEADER SCROLL EFFECT (optional shadow)
    // ============================================
    const header = document.querySelector('.hwp-header');
    let lastScroll = 0;

    window.addEventListener('scroll', function () {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
        } else {
            header.style.boxShadow = 'none';
        }
        lastScroll = currentScroll;
    }, { passive: true });

    // ============================================
    // 7. SERVICE CARD ANIMATION (scroll reveal)
    // ============================================
    const serviceCards = document.querySelectorAll('.hwp-service-card');

    if (serviceCards.length && 'IntersectionObserver' in window) {
        const cardObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry, index) {
                if (entry.isIntersecting) {
                    // Stagger animation
                    setTimeout(function () {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 60);
                    cardObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        serviceCards.forEach(function (card, i) {
            card.style.opacity = '0';
            card.style.transform = 'translateY(24px)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            cardObserver.observe(card);
        });
    }
});
