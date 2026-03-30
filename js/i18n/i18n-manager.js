/**
 * i18n Manager - Language switching and translation loading
 */

const STORAGE_KEY = 'hicare-lang';
const SUPPORTED_LANGS = ['en', 'ko'];
const DEFAULT_LANG = 'en';

let translations = {};
let currentLang = DEFAULT_LANG;

export async function initI18n() {
  currentLang = detectLanguage();
  await loadTranslations(currentLang);
  applyTranslations();
  initLanguageToggle();
}

function detectLanguage() {
  // Check localStorage first
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && SUPPORTED_LANGS.includes(stored)) return stored;

  // Check browser language
  const browserLang = navigator.language?.substring(0, 2);
  if (SUPPORTED_LANGS.includes(browserLang)) return browserLang;

  return DEFAULT_LANG;
}

async function loadTranslations(lang) {
  try {
    const response = await fetch(`/data/i18n/${lang}.json`);
    if (!response.ok) throw new Error(`Failed to load ${lang}.json`);
    translations = await response.json();
  } catch (err) {
    console.warn(`i18n: Could not load ${lang}.json, falling back to defaults`);
    translations = {};
  }
}

function getNestedValue(obj, path) {
  return path.split('.').reduce((current, key) => current?.[key], obj);
}

function applyTranslations() {
  document.documentElement.lang = currentLang;

  // Text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const value = getNestedValue(translations, key);
    if (value) el.textContent = value;
  });

  // Placeholder attributes
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const value = getNestedValue(translations, key);
    if (value) el.placeholder = value;
  });

  // Alt attributes
  document.querySelectorAll('[data-i18n-alt]').forEach(el => {
    const key = el.getAttribute('data-i18n-alt');
    const value = getNestedValue(translations, key);
    if (value) el.alt = value;
  });

  // Update language toggle active state
  document.querySelectorAll('.lang-toggle__btn').forEach(btn => {
    btn.classList.toggle('is-active', btn.dataset.lang === currentLang);
  });
}

function initLanguageToggle() {
  document.querySelectorAll('.lang-toggle__btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const lang = btn.dataset.lang;
      if (lang === currentLang) return;

      currentLang = lang;
      localStorage.setItem(STORAGE_KEY, lang);
      await loadTranslations(lang);
      applyTranslations();
    });
  });
}

export function getCurrentLang() {
  return currentLang;
}
