/**
 * Scroll Observer - IntersectionObserver-based scroll animation system
 * Triggers animations when elements with [data-animate] enter the viewport.
 */

export function initScrollObserver() {
  // Skip if IntersectionObserver not supported
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('[data-animate]').forEach(el => {
      el.classList.add('is-visible');
    });
    return;
  }

  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  // Observe all animated elements
  document.querySelectorAll('[data-animate]').forEach(el => {
    // Apply custom delay if specified
    const delay = el.getAttribute('data-animate-delay');
    if (delay) {
      el.style.transitionDelay = `${delay}ms`;
    }
    observer.observe(el);
  });

  function handleIntersection(entries) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const el = entry.target;
      const animationType = el.getAttribute('data-animate');

      if (animationType === 'counter') {
        animateCounter(el);
      }

      // Add visible class to trigger CSS transition
      el.classList.add('is-visible');

      // One-shot: stop observing after animation
      observer.unobserve(el);
    });
  }
}

/**
 * Animate a number from 0 to target value
 */
function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-count-target'), 10);
  if (isNaN(target)) return;

  const duration = 2000;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);

    // Ease-out curve
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(eased * target);

    el.textContent = current.toLocaleString();

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}
