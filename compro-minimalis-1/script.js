(function () {
	'use strict';

	var WA_URL = 'https://wa.me/62XXXXXXXXXX';
	var FORM_ENDPOINT = '[FORM_ENDPOINT_URL]';

	var header = document.getElementById('mm-header');
	var menuBtn = document.getElementById('mm-menu-btn');
	var drawer = document.getElementById('mm-drawer');
	var overlay = document.getElementById('mm-overlay');
	var drawerClose = document.getElementById('mm-drawer-close');
	var form = document.getElementById('mm-form');
	var formStatus = document.getElementById('mm-form-status');
	var drawerLinks = drawer ? drawer.querySelectorAll('.mm-drawer__link, .mm-drawer__cta') : [];

	function mm_lockScroll(lock) {
		document.body.classList.toggle('mm-menu-open', lock);
	}

	function mm_openMenu() {
		if (!drawer || !overlay || !menuBtn) return;
		drawer.classList.add('is-open');
		overlay.classList.add('is-visible');
		overlay.removeAttribute('hidden');
		drawer.setAttribute('aria-hidden', 'false');
		menuBtn.classList.add('is-active');
		menuBtn.setAttribute('aria-expanded', 'true');
		mm_lockScroll(true);
	}

	function mm_closeMenu() {
		if (!drawer || !overlay || !menuBtn) return;
		drawer.classList.remove('is-open');
		overlay.classList.remove('is-visible');
		overlay.setAttribute('hidden', '');
		drawer.setAttribute('aria-hidden', 'true');
		menuBtn.classList.remove('is-active');
		menuBtn.setAttribute('aria-expanded', 'false');
		mm_lockScroll(false);
		menuBtn.focus();
	}

	function mm_toggleMenu() {
		if (drawer && drawer.classList.contains('is-open')) {
			mm_closeMenu();
		} else {
			mm_openMenu();
		}
	}

	function mm_handleScroll() {
		if (!header) return;
		header.classList.toggle('is-scrolled', window.scrollY > 20);
	}

	function mm_isValidEmail(val) {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
	}

	function mm_isValidPhone(val) {
		return /^[\d\s\-+()]{8,20}$/.test(val.trim());
	}

	function mm_clearErrors() {
		if (!form) return;
		var fields = form.querySelectorAll('.mm-form__input');
		for (var i = 0; i < fields.length; i++) {
			fields[i].classList.remove('is-invalid');
		}
		if (formStatus) {
			formStatus.textContent = '';
			formStatus.className = 'mm-form__status';
		}
	}

	function mm_showStatus(msg, type) {
		if (!formStatus) return;
		formStatus.textContent = msg;
		formStatus.className = 'mm-form__status is-' + type;
	}

	function mm_buildWaMessage(data) {
		var lines = [
			'Halo, saya ingin konsultasi timbangan digital.',
			'Nama: ' + data.nama,
			'Perusahaan: ' + (data.perusahaan || '-'),
			'WhatsApp: ' + data.whatsapp,
			'Email: ' + data.email,
			'Kebutuhan: ' + data.kebutuhan,
			'Pesan: ' + data.pesan
		];
		return encodeURIComponent(lines.join('\n'));
	}

	function mm_validateForm(e) {
		e.preventDefault();
		mm_clearErrors();

		var nama = document.getElementById('mm-nama');
		var wa = document.getElementById('mm-wa');
		var email = document.getElementById('mm-email');
		var kebutuhan = document.getElementById('mm-kebutuhan');
		var pesan = document.getElementById('mm-pesan');
		var perusahaan = document.getElementById('mm-perusahaan');
		var valid = true;

		if (!nama || !nama.value.trim()) {
			if (nama) nama.classList.add('is-invalid');
			valid = false;
		}

		if (!wa || !mm_isValidPhone(wa.value)) {
			if (wa) wa.classList.add('is-invalid');
			valid = false;
		}

		if (!email || !mm_isValidEmail(email.value)) {
			if (email) email.classList.add('is-invalid');
			valid = false;
		}

		if (!kebutuhan || !kebutuhan.value) {
			if (kebutuhan) kebutuhan.classList.add('is-invalid');
			valid = false;
		}

		if (!pesan || !pesan.value.trim()) {
			if (pesan) pesan.classList.add('is-invalid');
			valid = false;
		}

		if (!valid) {
			mm_showStatus('Mohon lengkapi semua field yang wajib diisi dengan format yang benar.', 'error');
			return;
		}

		var data = {
			nama: nama.value.trim(),
			perusahaan: perusahaan ? perusahaan.value.trim() : '',
			whatsapp: wa.value.trim(),
			email: email.value.trim(),
			kebutuhan: kebutuhan.options[kebutuhan.selectedIndex].text,
			pesan: pesan.value.trim()
		};

		if (FORM_ENDPOINT && FORM_ENDPOINT.indexOf('[') === -1) {
			fetch(FORM_ENDPOINT, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data)
			}).then(function (res) {
				if (res.ok) {
					mm_showStatus('Permintaan konsultasi berhasil dikirim. Kami akan menghubungi Anda segera.', 'success');
					form.reset();
				} else {
					mm_showStatus('Terjadi kesalahan saat mengirim. Silakan coba lagi atau hubungi WhatsApp.', 'error');
				}
			}).catch(function () {
				mm_showStatus('Tidak dapat terhubung ke server. Silakan hubungi WhatsApp langsung.', 'error');
			});
		} else {
			var waLink = WA_URL + '?text=' + mm_buildWaMessage(data);
			mm_showStatus('Form valid. Mengarahkan ke WhatsApp untuk melanjutkan konsultasi...', 'success');
			setTimeout(function () {
				window.open(waLink, '_blank', 'noopener,noreferrer');
			}, 800);
		}
	}

	function mm_initMenu() {
		if (menuBtn) {
			menuBtn.addEventListener('click', mm_toggleMenu);
		}
		if (drawerClose) {
			drawerClose.addEventListener('click', mm_closeMenu);
		}
		if (overlay) {
			overlay.addEventListener('click', mm_closeMenu);
		}
		document.addEventListener('keydown', function (e) {
			if (e.key === 'Escape' && drawer && drawer.classList.contains('is-open')) {
				mm_closeMenu();
			}
		});
		for (var i = 0; i < drawerLinks.length; i++) {
			drawerLinks[i].addEventListener('click', mm_closeMenu);
		}
	}

	function mm_initScroll() {
		mm_handleScroll();
		window.addEventListener('scroll', mm_handleScroll, { passive: true });
	}

	function mm_initForm() {
		if (form) {
			form.addEventListener('submit', mm_validateForm);
		}
	}

	document.addEventListener('DOMContentLoaded', function () {
		mm_initMenu();
		mm_initScroll();
		mm_initForm();
	});
})();
