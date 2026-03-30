/**
 * Blog Filter - Category filtering for blog post grid
 */
export function initBlogFilter() {
  const filterBar = document.querySelector('.filter-bar');
  const grid = document.querySelector('.blog-grid');
  if (!filterBar || !grid) return;

  filterBar.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;

    // Update active state
    filterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');

    const category = btn.dataset.filter;

    // Filter cards
    grid.querySelectorAll('.blog-card').forEach(card => {
      if (category === 'all' || card.dataset.category === category) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
}
