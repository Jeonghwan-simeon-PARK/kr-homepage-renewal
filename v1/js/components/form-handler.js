/**
 * Form Handler - Contact form validation and mailto submission
 */
export function initFormHandler() {
  initContactForm();
  initNewsletterForm();
}

function initContactForm() {
  const form = document.querySelector('.contact-form form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const required = form.querySelectorAll('[required]');
    let valid = true;

    required.forEach(field => {
      const group = field.closest('.form-group');
      if (!field.value.trim()) {
        valid = false;
        group?.classList.add('has-error');
      } else {
        group?.classList.remove('has-error');
      }
    });

    const email = form.querySelector('[type="email"]');
    if (email && email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      valid = false;
      email.closest('.form-group')?.classList.add('has-error');
    }

    if (valid) {
      const name = form.querySelector('#contact-name')?.value || '';
      const emailVal = form.querySelector('#contact-email')?.value || '';
      const phone = form.querySelector('#contact-phone')?.value || '';
      const org = form.querySelector('#contact-org')?.value || '';
      const provider = form.querySelector('#contact-provider')?.value || '';
      const interests = Array.from(form.querySelectorAll('input[name="interest"]:checked'))
        .map(cb => cb.value.toUpperCase()).join(', ');
      const message = form.querySelector('#contact-message')?.value || '';

      const subject = encodeURIComponent('HicareNet Contact Inquiry');
      const body = encodeURIComponent(
        `Name: ${name}\n` +
        `Email: ${emailVal}\n` +
        `Phone: ${phone}\n` +
        `Organization: ${org}\n` +
        `Provider Type: ${provider}\n` +
        `Areas of Interest: ${interests}\n` +
        `\nMessage:\n${message}`
      );

      window.location.href = `mailto:info@hicare.net?subject=${subject}&body=${body}`;

      const btn = form.querySelector('[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = '\u2713 Opening Email Client...';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = originalText;
        btn.disabled = false;
      }, 3000);
    }
  });

  form.querySelectorAll('.form-input, .form-select, .form-textarea').forEach(field => {
    field.addEventListener('input', () => {
      field.closest('.form-group')?.classList.remove('has-error');
    });
  });
}

function initNewsletterForm() {
  const forms = document.querySelectorAll('.newsletter-form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const emailInput = form.querySelector('input[type="email"]');
      if (!emailInput || !emailInput.value.trim()) return;

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
        emailInput.classList.add('has-error');
        return;
      }

      const subject = encodeURIComponent('HicareNet Newsletter Subscription');
      const body = encodeURIComponent(`I would like to subscribe to the HicareNet newsletter.\n\nEmail: ${emailInput.value}`);
      window.location.href = `mailto:info@hicare.net?subject=${subject}&body=${body}`;

      const btn = form.querySelector('[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = '\u2713 Subscribed!';
      btn.disabled = true;
      emailInput.value = '';
      setTimeout(() => {
        btn.textContent = originalText;
        btn.disabled = false;
      }, 3000);
    });
  });
}
