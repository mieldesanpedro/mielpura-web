// Miel Pura · interacciones

(function () {
  // Año dinámico en el footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Menú móvil
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      toggle.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
    });
    // Cerrar al hacer click en un link
    nav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        nav.classList.remove('is-open');
        toggle.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Reveal on scroll
  const revealTargets = document.querySelectorAll(
    '.section__head, .card, .info-card, .nosotros__text, .nosotros__media, .videos-grid, .contacto__text, .contacto__map'
  );
  revealTargets.forEach(el => el.classList.add('reveal'));

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealTargets.forEach(el => io.observe(el));
  } else {
    revealTargets.forEach(el => el.classList.add('is-visible'));
  }

  // Meta Pixel · evento Contact al ir a WhatsApp
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href*="wa.me"]');
    if (!link || typeof window.fbq !== 'function') return;

    // Etiqueta para distinguir qué botón se usó en el Administrador de Anuncios
    const card = link.closest('.card');
    const label =
      (card && card.querySelector('h3') && card.querySelector('h3').textContent.trim()) ||
      link.getAttribute('aria-label') ||
      link.textContent.trim() ||
      'WhatsApp';

    window.fbq('track', 'Contact', {
      content_name: label,
      content_category: 'WhatsApp'
    });
  });

  // Pausar videos fuera de viewport (autoplay friendly)
  const videos = document.querySelectorAll('video');
  if ('IntersectionObserver' in window && videos.length) {
    const vio = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting && !entry.target.paused) {
          entry.target.pause();
        }
      });
    }, { threshold: 0.2 });
    videos.forEach(v => vio.observe(v));
  }
})();
