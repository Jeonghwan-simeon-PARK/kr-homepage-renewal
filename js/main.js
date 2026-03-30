/**
 * HicareNet Main Entry Point
 * Initializes all JavaScript modules
 */

import { initNavigation } from './components/navigation.js';
import { initScrollObserver } from './animations/scroll-observer.js';
import { initI18n } from './i18n/i18n-manager.js';
import { initFaqAccordion } from './components/faq-accordion.js';
import { initFormHandler } from './components/form-handler.js';
import { initBlogFilter } from './components/blog-filter.js';

document.addEventListener('DOMContentLoaded', () => {
  // Core components
  initNavigation();

  // Scroll animations
  initScrollObserver();

  // Internationalization
  initI18n();

  // Page-specific components
  initFaqAccordion();
  initFormHandler();
  initBlogFilter();

  // Back to top button
  initBackToTop();
});

function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('is-visible', window.scrollY > 500);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
