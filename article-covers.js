// ===========================
// SHARED EDITORIAL ARTICLE HEADER
// ===========================

const coverConfigs = {
  // Article 1: CV
  'cv': {
    title: 'Když firmy čtou CV, ale nevidí člověka',
    accentWord: 'člověka',
    author: 'Aneta Kořínková'
  },

  // Article 2: Kalendář
  'calendar': {
    title: 'Kalendář školního roku pro pracující rodiče',
    accentWord: 'rodiče',
    author: 'Aneta Kořínková'
  },

  // Article 3: Jak nezískat
  'nojob': {
    title: 'Jak nezískat práci',
    subtitle: '25 osvědčených tipů',
    author: 'Aneta Kořínková'
  },

  // Article 4: Soft skills
  'softskills': {
    title: 'Soft skills budoucnosti',
    author: 'Aneta Kořínková'
  },

  // Article 5: Elevator pitch
  'elevator': {
    title: '30 vět které můžete říct na pohovoru i v posteli',
    accentWord: 'pohovoru',
    author: 'Aneta Kořínková'
  },

  // Article 6: Sociální sítě
  'socialmedia': {
    title: 'Jak využívat sociální sítě k profesnímu růstu',
    author: 'Aneta Kořínková'
  },

  // Article 7: Odolnost
  'resilience': {
    title: 'Jak budovat odolnost',
    subtitle: 'Zvládání neúspěchů a odmítnutí v kariéře',
    author: 'Aneta Kořínková'
  },

  // Article 8: Pracovní trh
  'jobmarket': {
    title: 'Data z pracovního trhu',
    author: 'Aneta Kořínková'
  },

  // Article 9: Prázdniny
  'vacation': {
    title: 'Prázdninový průvodce pro pracující rodiče',
    accentWord: 'rodiče',
    author: 'Aneta Kořínková'
  },

  // Article 10: Pracující maminky
  'moms': {
    title: '15 překvapujících faktů o pracujících maminkách',
    author: 'Aneta Kořínková'
  },

  // Article 11: Elevator pitch
  'pitch': {
    title: 'Připravte si svůj Elevator Pitch',
    author: 'Aneta Kořínková'
  },

  // Article 12: Zkrácený úvazek
  'parttime': {
    title: 'Jak si vyjednat práci na zkrácený úvazek',
    author: 'Aneta Kořínková'
  }
};

/** Build the same semantic header for every article. No visual variants. */
function generateCover(config) {
  const header = document.createElement('header');
  header.className = 'article-header article-header--editorial';

  const title = document.createElement('h1');
  title.className = 'article-header__title';
  const accentIndex = config.accentWord ? config.title.indexOf(config.accentWord) : -1;
  if (accentIndex >= 0) {
    const accent = document.createElement('span');
    accent.className = 'article-header__accent';
    accent.textContent = config.accentWord;
    title.append(config.title.slice(0, accentIndex), accent,
      config.title.slice(accentIndex + config.accentWord.length));
  } else {
    title.textContent = config.title;
  }
  // Preserve existing subtitles as part of the headline, before the author.
  if (config.subtitle) {
    const subtitle = document.createElement('span');
    subtitle.className = 'article-header__subtitle';
    subtitle.textContent = config.subtitle;
    title.append(' ', subtitle);
  }
  header.append(title);

  const author = document.createElement('div');
  author.className = 'article-header__author';
  author.textContent = config.author || 'Aneta Kořínková';
  header.append(author);
  return header;
}

/** Use a saved configuration key or a new article's own configuration. */
function applyCover(configKey, article) {
  const config = typeof configKey === 'string' ? coverConfigs[configKey] : configKey;
  if (!config || article.querySelector('.article-header--editorial')) return;

  article.classList.add('article-content--editorial');
  // Imports can contain empty wrapper paragraphs before the actual lead.
  const paragraphs = Array.from(article.querySelectorAll('p'));
  const lead = paragraphs.find(paragraph => paragraph.textContent.trim());
  if (lead) {
    for (const paragraph of paragraphs) {
      if (paragraph === lead) break;
      if (!paragraph.textContent.trim() && !paragraph.children.length) {
        paragraph.classList.add('article-intro-spacer');
      }
    }
    lead.classList.add('article-lead');
    lead.querySelectorAll('em, i').forEach(element => element.replaceWith(...element.childNodes));
  }
  article.prepend(generateCover(config));
}

function initializeArticleHeaders() {
  document.querySelectorAll('article.article-content[data-article], article.article-content[data-title]').forEach(article => {
    const config = article.dataset.article || {
      title: article.dataset.title,
      author: article.dataset.author || 'Aneta Kořínková',
      accentWord: article.dataset.accent,
      subtitle: article.dataset.subtitle
    };
    applyCover(config, article);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeArticleHeaders);
} else {
  initializeArticleHeaders();
}

window.ArticleCover = { generateCover, applyCover, configs: coverConfigs };
