// Mobile navigation toggle
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Auto update footer year
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

// Language switch logic (English / Bangla)
const langToggle = document.getElementById('langToggle');
const langCode = document.getElementById('langCode');
const translatableElements = document.querySelectorAll('[data-en][data-bn]');

let currentLang = localStorage.getItem('site_lang') || 'bn';

function updateLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('site_lang', lang);
  document.documentElement.lang = lang;

  if (langCode) {
    langCode.textContent = lang === 'en' ? 'BN' : 'EN';
  }

  translatableElements.forEach(el => {
    const newText = el.getAttribute(`data-${lang}`);
    if (newText) {
      el.innerHTML = newText;
    }
  });
}

if (langToggle) {
  langToggle.addEventListener('click', () => {
    const nextLang = currentLang === 'en' ? 'bn' : 'en';
    updateLanguage(nextLang);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  updateLanguage(currentLang);
});
