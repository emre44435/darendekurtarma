(() => {
  'use strict';

  const header = document.getElementById('site-header');
  const menu = document.getElementById('mobile-menu');
  const toggle = document.querySelector('.menu-toggle');
  const closeBtn = document.querySelector('.menu-close');
  const panel = menu?.querySelector('.mobile-menu__panel');
  let lastFocused = null;
  let ticking = false;

  const closeMenu = ({ restoreFocus = false } = {}) => {
    if (!menu || !toggle) return;
    menu.hidden = true;
    document.body.classList.remove('menu-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Menüyü aç');
    if (restoreFocus && lastFocused instanceof HTMLElement) lastFocused.focus();
  };

  const openMenu = () => {
    if (!menu || !toggle) return;
    lastFocused = document.activeElement;
    menu.hidden = false;
    document.body.classList.add('menu-open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Menüyü kapat');
    closeBtn?.focus();
  };

  toggle?.addEventListener('click', () => {
    if (menu?.hidden) openMenu(); else closeMenu({ restoreFocus: true });
  });
  closeBtn?.addEventListener('click', () => closeMenu({ restoreFocus: true }));

  menu?.addEventListener('click', (event) => {
    if (event.target === menu) closeMenu({ restoreFocus: true });
  });

  panel?.addEventListener('click', (event) => {
    const link = event.target.closest('a[href^="#"]');
    if (link) closeMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu && !menu.hidden) closeMenu({ restoreFocus: true });
  });

  window.addEventListener('pageshow', () => closeMenu());
  window.addEventListener('pagehide', () => closeMenu());
  window.addEventListener('popstate', () => closeMenu());
  window.addEventListener('hashchange', () => closeMenu());

  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        header?.classList.toggle('is-scrolled', window.scrollY > 16);
        ticking = false;
      });
      ticking = true;
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      event.preventDefault();
      closeMenu();
      target.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
      history.replaceState(null, '', href);
    });
  });
})();

(() => {
  'use strict';

  const video = document.getElementById('hero-video');
  if (!video) return;

  // Mobile Safari / Chrome autoplay requirements.
  video.muted = true;
  video.defaultMuted = true;
  video.playsInline = true;
  video.setAttribute('muted', '');
  video.setAttribute('playsinline', '');
  video.setAttribute('webkit-playsinline', '');

  const tryPlay = () => {
    if (document.hidden) return;
    const playPromise = video.play();
    if (playPromise && typeof playPromise.catch === 'function') {
      playPromise.catch(() => {
        // If the browser blocks autoplay, the poster remains visible instead of a blank frame.
      });
    }
  };

  if (video.readyState >= 2) {
    tryPlay();
  } else {
    video.addEventListener('canplay', tryPlay, { once: true });
  }

  window.addEventListener('pageshow', tryPlay);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      video.pause();
    } else {
      tryPlay();
    }
  });
})();
