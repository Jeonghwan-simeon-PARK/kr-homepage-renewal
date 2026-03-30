/**
 * Form Handler - Contact form validation and submission
 */
export function initFormHandler() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Basic validation
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

    // Email validation
    const email = form.querySelector('[type="email"]');
    if (email && email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      valid = false;
      email.closest('.form-group')?.classList.add('has-error');
    }

    if (valid) {
      // Show success state (in production, this would submit to API)
      const btn = form.querySelector('[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = 'Message Sent!';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = originalText;
        btn.disabled = false;
        form.reset();
      }, 3000);
    }
  });

  // Clear error on input
  form.querySelectorAll('.form-input, .form-select, .form-textarea').forEach(field => {
    field.addEventListener('input', () => {
      field.closest('.form-group')?.classList.remove('has-error');
    });
  });
}
