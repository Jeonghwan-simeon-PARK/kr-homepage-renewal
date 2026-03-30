/**
 * FAQ Accordion - Handles accordion behavior for FAQ sections
 * Uses native <details>/<summary> elements
 */
export function initFaqAccordion() {
  // Optional: close other items when one opens (single-open mode)
  document.querySelectorAll('.faq__category').forEach(category => {
    const items = category.querySelectorAll('.faq__item');
    items.forEach(item => {
      item.addEventListener('toggle', () => {
        if (item.open) {
          items.forEach(other => {
            if (other !== item && other.open) other.open = false;
          });
        }
      });
    });
  });
}
