// ===========================
// ARTICLE COVER GENERATOR
// ===========================

const coverConfigs = {
  // Article 1: CV
  'cv': {
    category: 'KARIÉRA',
    title: 'Když firmy čtou CV, ale nevidí člověka',
    accentWord: 'člověka',
    author: 'Aneta Kořínková',
    variant: 'left'
  },

  // Article 2: Kalendář
  'calendar': {
    category: 'RODINA & PRÁCE',
    title: 'Kalendář školního roku pro pracující rodiče',
    accentWord: 'rodiče',
    author: 'Aneta Kořínková',
    variant: 'center'
  },

  // Article 3: Jak nezískat
  'nojob': {
    category: 'HUMOR',
    title: 'Jak nezískat práci',
    subtitle: '25 osvědčených tipů',
    author: 'Aneta Kořínková',
    variant: 'quote'
  }
};

/**
 * Generate article cover HTML
 * @param {Object} config - Cover configuration
 * @returns {HTMLElement} Cover element
 */
function generateCover(config) {
  const cover = document.createElement('div');
  cover.className = `article-cover variant-${config.variant}`;

  let html = '';

  // Label
  if (config.category) {
    html += `<div class="cover-label">${config.category}</div>`;
  }

  // Title with optional accent word
  let titleHtml = config.title;
  if (config.accentWord) {
    titleHtml = titleHtml.replace(
      new RegExp(`\\b${config.accentWord}\\b`, 'gi'),
      `<span class="accent">${config.accentWord}</span>`
    );
  }

  if (config.variant === 'quote') {
    html += `<div class="cover-content">
      <div class="cover-title">${titleHtml}</div>`;
    if (config.subtitle) {
      html += `<div class="cover-subtitle">${config.subtitle}</div>`;
    }
    html += `</div>`;
  } else {
    html += `<div class="cover-title">${titleHtml}</div>`;
    if (config.subtitle) {
      html += `<div class="cover-subtitle">${config.subtitle}</div>`;
    }
  }

  // Author
  if (config.author) {
    html += `<div class="cover-author">${config.author}</div>`;
  }

  cover.innerHTML = html;
  return cover;
}

/**
 * Apply cover to article element
 * @param {string} configKey - Key in coverConfigs
 * @param {HTMLElement} targetElement - Element to insert cover into
 */
function applyCover(configKey, targetElement) {
  if (!coverConfigs[configKey]) {
    console.warn(`Cover config not found for key: ${configKey}`);
    return;
  }

  const config = coverConfigs[configKey];
  const cover = generateCover(config);

  // Insert at the beginning of the target
  if (targetElement.firstChild) {
    targetElement.insertBefore(cover, targetElement.firstChild);
  } else {
    targetElement.appendChild(cover);
  }
}

/**
 * Initialize covers on page load
 */
document.addEventListener('DOMContentLoaded', function() {
  // Apply covers to article content sections
  const articleContents = document.querySelectorAll('article.article-content');

  articleContents.forEach((article, index) => {
    const h1 = article.querySelector('h1') || document.querySelector('.article-header h1');

    if (!h1) return;

    const titleLower = h1.textContent.toLowerCase();
    let configKey = null;

    // Match title to config key
    if (titleLower.includes('cv') || titleLower.includes('životopis')) {
      configKey = 'cv';
    } else if (titleLower.includes('kalendář') || titleLower.includes('školní rok')) {
      configKey = 'calendar';
    } else if (titleLower.includes('jak nezískat')) {
      configKey = 'nojob';
    }

    if (configKey) {
      applyCover(configKey, article);
    }
  });

  // Also apply to article header sections for preview
  const articleHeaders = document.querySelectorAll('.article-header');
  articleHeaders.forEach((header) => {
    const h1 = header.querySelector('h1');
    if (!h1) return;

    const titleLower = h1.textContent.toLowerCase();
    let configKey = null;

    if (titleLower.includes('cv') || titleLower.includes('životopis')) {
      configKey = 'cv';
    } else if (titleLower.includes('kalendář') || titleLower.includes('školní rok')) {
      configKey = 'calendar';
    } else if (titleLower.includes('jak nezískat')) {
      configKey = 'nojob';
    }

    if (configKey && !header.querySelector('.article-cover')) {
      const coverContainer = document.createElement('div');
      coverContainer.style.marginBottom = '2rem';
      applyCover(configKey, coverContainer);
      header.appendChild(coverContainer);
    }
  });
});

// Export for potential reuse
window.ArticleCover = {
  generateCover,
  applyCover,
  configs: coverConfigs
};
