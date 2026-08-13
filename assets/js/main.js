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

  const fallback = document.querySelector('.hero-media__play-fallback');
  let inView = true;

  video.muted = true;
  video.defaultMuted = true;
  video.autoplay = true;
  video.loop = true;
  video.playsInline = true;
  video.setAttribute('muted', '');
  video.setAttribute('autoplay', '');
  video.setAttribute('loop', '');
  video.setAttribute('playsinline', '');
  video.setAttribute('webkit-playsinline', '');

  const hideFallback = () => {
    if (fallback) fallback.hidden = true;
  };

  const showFallback = () => {
    if (fallback) fallback.hidden = false;
  };

  const tryPlay = async () => {
    if (document.hidden || !inView) return;
    try {
      await video.play();
      hideFallback();
    } catch (_) {
      showFallback();
    }
  };

  video.addEventListener('playing', hideFallback, { passive: true });
  video.addEventListener('canplay', tryPlay, { passive: true });
  video.addEventListener('loadeddata', tryPlay, { passive: true });
  video.addEventListener('ended', () => {
    video.currentTime = 0;
    tryPlay();
  });

  if (fallback) {
    fallback.addEventListener('click', async () => {
      video.muted = true;
      try { await video.play(); hideFallback(); } catch (_) { showFallback(); }
    });
  }

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      inView = Boolean(entry && entry.isIntersecting);
      if (inView) tryPlay();
      else video.pause();
    }, { rootMargin: '160px 0px', threshold: 0.01 });
    observer.observe(video);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', tryPlay, { once: true });
  } else {
    tryPlay();
  }

  window.addEventListener('load', tryPlay, { once: true });
  window.addEventListener('pageshow', tryPlay, { passive: true });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) video.pause();
    else tryPlay();
  });

  // A user gesture unlocks playback on browsers with stricter autoplay policies.
  const unlock = () => tryPlay();
  window.addEventListener('pointerdown', unlock, { once: true, passive: true });
  window.addEventListener('touchstart', unlock, { once: true, passive: true });
})();
