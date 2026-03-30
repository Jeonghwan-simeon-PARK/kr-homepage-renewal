/**
 * Article Loader - Loads blog article content from JSON data
 */
export function initArticleLoader() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('slug');
  if (!slug) return;

  loadArticle(slug);
}

async function loadArticle(slug) {
  try {
    // Load blog posts data
    const postsRes = await fetch('data/blog-posts.json');
    const postsData = await postsRes.json();
    const post = postsData.posts.find(p => p.slug === slug);

    if (!post) {
      window.location.href = 'resources.html';
      return;
    }

    // Load translations
    const lang = localStorage.getItem('hicarenet-lang') || 'en';
    const i18nRes = await fetch(`data/i18n/${lang}.json`);
    const i18n = await i18nRes.json();

    // Find the post index (post1, post2, etc.)
    const postIndex = postsData.posts.indexOf(post) + 1;
    const postKey = `post${postIndex}`;
    const postData = i18n.resources?.blog?.[postKey];

    if (!postData) return;

    // Set article content
    document.getElementById('article-title').textContent = postData.title;
    document.getElementById('article-category').textContent = postData.category;
    document.getElementById('article-date').textContent = postData.date;
    document.getElementById('article-readtime').textContent = `${post.read_time} ${i18n.article?.readTime || 'min read'}`;
    document.title = `${postData.title} | HicareNet`;

    // Set article body from i18n
    const articleContent = i18n.articles?.[postKey];
    if (articleContent) {
      document.getElementById('article-body').innerHTML = articleContent.body;
    } else {
      // Fallback: show excerpt with a placeholder message
      const comingSoonText = i18n.article?.comingSoon || 'Full article content coming soon.';
      document.getElementById('article-body').innerHTML = `
        <p class="article__excerpt">${postData.excerpt}</p>
        <p style="margin-top: 2rem; color: var(--neutral-500); font-style: italic;">${comingSoonText}</p>
      `;
    }

    // Load related articles
    const related = postsData.posts
      .filter(p => p.slug !== slug && p.category === post.category)
      .slice(0, 3);

    const relatedContainer = document.getElementById('related-articles');
    if (related.length > 0 && relatedContainer) {
      related.forEach((rPost) => {
        const rIndex = postsData.posts.indexOf(rPost) + 1;
        const rData = i18n.resources?.blog?.[`post${rIndex}`];
        if (rData) {
          const card = document.createElement('a');
          card.href = `article.html?slug=${rPost.slug}`;
          card.className = 'article__related-card';
          card.innerHTML = `
            <span class="article__related-category">${rData.category}</span>
            <h4>${rData.title}</h4>
          `;
          relatedContainer.appendChild(card);
        }
      });
    }
  } catch (err) {
    console.error('Failed to load article:', err);
  }
}
