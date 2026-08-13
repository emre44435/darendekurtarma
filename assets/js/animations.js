(() => {
  'use strict';

  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    items.forEach((item) => item.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      obs.unobserve(entry.target);
    });
  }, { rootMargin: '180px 0px 120px 0px', threshold: 0.01 });

  items.forEach((item) => observer.observe(item));
})();


(() => {
  'use strict';

  const counters = document.querySelectorAll('.counter[data-target]');
  if (!counters.length) return;

  const animateCounter = (el) => {
    const target = Number(el.dataset.target || 0);
    const suffix = el.dataset.suffix || '';
    const duration = window.matchMedia('(max-width: 640px)').matches ? 850 : 1100;
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(target * eased);
      el.textContent = `${value}${suffix}`;
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = `${target}${suffix}`;
        el.classList.add('is-done');
      }
    };

    requestAnimationFrame(step);
  };

  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    counters.forEach((counter) => {
      counter.textContent = `${counter.dataset.target || 0}${counter.dataset.suffix || ''}`;
      counter.classList.add('is-done');
    });
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      animateCounter(entry.target);
      obs.unobserve(entry.target);
    });
  }, { rootMargin: '100px 0px', threshold: 0.2 });

  counters.forEach((counter) => observer.observe(counter));
})();
