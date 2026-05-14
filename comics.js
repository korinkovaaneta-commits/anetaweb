// Comic-style SVG illustrations for articles
const comicIllustrations = {
  cv: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#FF8C42;stop-opacity:1" /><stop offset="100%" style="stop-color:#FFA500;stop-opacity:1" /></linearGradient></defs>
    <rect width="200" height="200" fill="url(#grad1)"/>
    <circle cx="100" cy="60" r="22" fill="#F4A460" stroke="#000" stroke-width="3"/>
    <circle cx="92" cy="55" r="4" fill="#000"/><circle cx="108" cy="55" r="4" fill="#000"/>
    <path d="M 92 62 Q 100 68 108 62" stroke="#000" stroke-width="2" fill="none" stroke-linecap="round"/>
    <rect x="80" y="85" width="40" height="45" fill="#4A7BA7" stroke="#000" stroke-width="3" rx="3"/>
    <rect x="125" y="90" width="35" height="50" fill="#FFFFFF" stroke="#000" stroke-width="3" rx="2"/>
    <line x1="132" y1="100" x2="155" y2="100" stroke="#000" stroke-width="2"/>
    <line x1="132" y1="110" x2="155" y2="110" stroke="#000" stroke-width="2"/>
    <line x1="132" y1="120" x2="150" y2="120" stroke="#000" stroke-width="2"/>
    <text x="100" y="165" font-size="28" font-weight="bold" fill="#000" text-anchor="middle" font-family="Arial">CV!</text>
  </svg>`,

  calendar: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#E85E8A;stop-opacity:1" /><stop offset="100%" style="stop-color:#FF6BA6;stop-opacity:1" /></linearGradient></defs>
    <rect width="200" height="200" fill="url(#grad2)"/>
    <circle cx="100" cy="50" r="20" fill="#FFB6C1" stroke="#000" stroke-width="3"/>
    <circle cx="93" cy="46" r="3" fill="#000"/><circle cx="107" cy="46" r="3" fill="#000"/>
    <path d="M 93 52 Q 100 56 107 52" stroke="#000" stroke-width="2" fill="none" stroke-linecap="round"/>
    <rect x="75" y="72" width="50" height="55" fill="#F0A8D8" stroke="#000" stroke-width="3" rx="3"/>
    <rect x="110" y="75" width="50" height="60" fill="#FFF" stroke="#000" stroke-width="3" rx="2"/>
    <rect x="115" y="80" width="40" height="15" fill="#FF6BA6" stroke="#000" stroke-width="2"/>
    <circle cx="128" cy="105" r="4" fill="#FF6BA6"/><circle cx="145" cy="105" r="4" fill="#FF6BA6"/>
    <circle cx="128" cy="120" r="4" fill="#FF6BA6"/><circle cx="145" cy="120" r="4" fill="#FF6BA6"/>
    <text x="100" y="170" font-size="24" font-weight="bold" fill="#000" text-anchor="middle" font-family="Arial">!</text>
  </svg>`,

  nojob: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#3B82C4;stop-opacity:1" /><stop offset="100%" style="stop-color:#5BA3D0;stop-opacity:1" /></linearGradient></defs>
    <rect width="200" height="200" fill="url(#grad3)"/>
    <circle cx="100" cy="55" r="22" fill="#E0C4A0" stroke="#000" stroke-width="3"/>
    <path d="M 90 50 Q 92 48 95 50" stroke="#000" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M 105 50 Q 107 48 110 50" stroke="#000" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M 92 60 Q 100 58 108 60" stroke="#000" stroke-width="2" fill="none" stroke-linecap="round"/>
    <rect x="78" y="80" width="44" height="45" fill="#6B5B95" stroke="#000" stroke-width="3" rx="3"/>
    <line x1="130" y1="70" x2="160" y2="130" stroke="#FFF" stroke-width="8" stroke-linecap="round" opacity="0.9"/>
    <line x1="160" y1="70" x2="130" y2="130" stroke="#FFF" stroke-width="8" stroke-linecap="round" opacity="0.9"/>
    <text x="100" y="170" font-size="32" font-weight="bold" fill="#FFF" text-anchor="middle" font-family="Arial" stroke="#000" stroke-width="1">NO!</text>
  </svg>`,

  softskills: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#E85E8A;stop-opacity:1" /><stop offset="100%" style="stop-color:#FF6BA6;stop-opacity:1" /></linearGradient></defs>
    <rect width="200" height="200" fill="url(#grad4)"/>
    <circle cx="100" cy="55" r="20" fill="#FFB6C1" stroke="#000" stroke-width="3"/>
    <circle cx="92" cy="50" r="4" fill="#000"/><circle cx="92" cy="48" r="2" fill="#FFF"/>
    <circle cx="108" cy="50" r="4" fill="#000"/><circle cx="108" cy="48" r="2" fill="#FFF"/>
    <path d="M 92 58 Q 100 62 108 58" stroke="#000" stroke-width="2" fill="none" stroke-linecap="round"/>
    <rect x="75" y="75" width="50" height="50" fill="#F0A8D8" stroke="#000" stroke-width="3" rx="3"/>
    <circle cx="155" cy="50" r="25" fill="#FFF" stroke="#000" stroke-width="3"/>
    <path d="M 135 65 L 125 75 L 135 85" fill="#FFF" stroke="#000" stroke-width="2"/>
    <text x="155" y="58" font-size="20" font-weight="bold" fill="#000" text-anchor="middle" font-family="Arial">💡</text>
    <text x="100" y="170" font-size="24" font-weight="bold" fill="#000" text-anchor="middle" font-family="Arial">IDEA!</text>
  </svg>`,

  interview: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="grad5" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#FF8C42;stop-opacity:1" /><stop offset="100%" style="stop-color:#FFA500;stop-opacity:1" /></linearGradient></defs>
    <rect width="200" height="200" fill="url(#grad5)"/>
    <circle cx="60" cy="50" r="16" fill="#F4A460" stroke="#000" stroke-width="2.5"/>
    <rect x="48" y="70" width="24" height="35" fill="#4A7BA7" stroke="#000" stroke-width="2.5" rx="2"/>
    <circle cx="55" cy="47" r="2.5" fill="#000"/><circle cx="65" cy="47" r="2.5" fill="#000"/>
    <path d="M 55 52 Q 60 55 65 52" stroke="#000" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <circle cx="140" cy="50" r="16" fill="#FFB6C1" stroke="#000" stroke-width="2.5"/>
    <rect x="128" y="70" width="24" height="35" fill="#C5A8B8" stroke="#000" stroke-width="2.5" rx="2"/>
    <circle cx="135" cy="47" r="2.5" fill="#000"/><circle cx="145" cy="47" r="2.5" fill="#000"/>
    <path d="M 135 52 Q 140 55 145 52" stroke="#000" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <ellipse cx="60" cy="125" rx="20" ry="15" fill="#FFF" stroke="#000" stroke-width="2"/>
    <path d="M 50 110 L 45 100 L 55 110" fill="#FFF" stroke="#000" stroke-width="1.5"/>
    <ellipse cx="140" cy="125" rx="20" ry="15" fill="#FFF" stroke="#000" stroke-width="2"/>
    <path d="M 150 110 L 155 100 L 145 110" fill="#FFF" stroke="#000" stroke-width="1.5"/>
    <text x="100" y="170" font-size="28" font-weight="bold" fill="#000" text-anchor="middle" font-family="Arial">TALK!</text>
  </svg>`,

  social: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="grad6" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#00D4FF;stop-opacity:1" /><stop offset="100%" style="stop-color:#0080FF;stop-opacity:1" /></linearGradient></defs>
    <rect width="200" height="200" fill="url(#grad6)"/>
    <circle cx="100" cy="50" r="20" fill="#E0C4A0" stroke="#000" stroke-width="3"/>
    <circle cx="92" cy="47" r="3" fill="#000"/><circle cx="108" cy="47" r="3" fill="#000"/>
    <path d="M 92 54 Q 100 58 108 54" stroke="#000" stroke-width="2" fill="none" stroke-linecap="round"/>
    <rect x="75" y="72" width="50" height="48" fill="#6D7B9F" stroke="#000" stroke-width="3" rx="3"/>
    <path d="M 135 75 L 165 60 L 165 100 L 135 85 Z" fill="#FFF" stroke="#000" stroke-width="3"/>
    <circle cx="135" cy="80" r="8" fill="#000"/>
    <text x="100" y="170" font-size="26" font-weight="bold" fill="#FFF" text-anchor="middle" font-family="Arial">SHARE!</text>
  </svg>`,

  resilience: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="grad7" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#1C3F6E;stop-opacity:1" /><stop offset="100%" style="stop-color:#4A7BA7;stop-opacity:1" /></linearGradient></defs>
    <rect width="200" height="200" fill="url(#grad7)"/>
    <circle cx="100" cy="50" r="20" fill="#E0C4A0" stroke="#000" stroke-width="3"/>
    <circle cx="92" cy="48" r="3" fill="#000"/><circle cx="108" cy="48" r="3" fill="#000"/>
    <line x1="92" y1="56" x2="108" y2="56" stroke="#000" stroke-width="2" stroke-linecap="round"/>
    <rect x="75" y="72" width="50" height="50" fill="#5B7C99" stroke="#000" stroke-width="3" rx="3"/>
    <path d="M 135 60 L 160 70 L 160 100 Q 147 115 135 115 Q 123 100 123 70 Z" fill="#FFF" stroke="#000" stroke-width="3"/>
    <path d="M 142 80 L 150 90 L 158 75" stroke="#000" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <text x="100" y="170" font-size="24" font-weight="bold" fill="#FFF" text-anchor="middle" font-family="Arial">STRONG!</text>
  </svg>`,

  data: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="grad8" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#E85E8A;stop-opacity:1" /><stop offset="100%" style="stop-color:#FF6BA6;stop-opacity:1" /></linearGradient></defs>
    <rect width="200" height="200" fill="url(#grad8)"/>
    <circle cx="100" cy="55" r="20" fill="#FFB6C1" stroke="#000" stroke-width="3"/>
    <circle cx="92" cy="52" r="3" fill="#000"/><circle cx="108" cy="52" r="3" fill="#000"/>
    <path d="M 92 60 L 108 60" stroke="#000" stroke-width="2" stroke-linecap="round"/>
    <rect x="75" y="77" width="50" height="48" fill="#F0A8D8" stroke="#000" stroke-width="3" rx="3"/>
    <rect x="125" y="85" width="8" height="25" fill="#FFF" stroke="#000" stroke-width="2"/>
    <rect x="138" y="70" width="8" height="40" fill="#FFF" stroke="#000" stroke-width="2"/>
    <rect x="151" y="55" width="8" height="55" fill="#FFF" stroke="#000" stroke-width="2"/>
    <line x1="120" y1="112" x2="165" y2="112" stroke="#FFF" stroke-width="2.5"/>
    <text x="100" y="170" font-size="28" font-weight="bold" fill="#000" text-anchor="middle" font-family="Arial">DATA!</text>
  </svg>`,

  vacation: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="grad9" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#FFD700;stop-opacity:1" /><stop offset="100%" style="stop-color:#FFA500;stop-opacity:1" /></linearGradient></defs>
    <rect width="200" height="200" fill="url(#grad9)"/>
    <circle cx="100" cy="60" r="20" fill="#FFE4B5" stroke="#000" stroke-width="3"/>
    <path d="M 92 55 Q 94 58 96 55" stroke="#000" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M 104 55 Q 106 58 108 55" stroke="#000" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M 92 62 Q 100 66 108 62" stroke="#000" stroke-width="2" fill="none" stroke-linecap="round"/>
    <rect x="75" y="82" width="50" height="40" fill="#FF6B6B" stroke="#000" stroke-width="3" rx="3"/>
    <circle cx="150" cy="45" r="18" fill="#FFF" stroke="#000" stroke-width="2.5"/>
    <line x1="150" y1="15" x2="150" y2="5" stroke="#FFF" stroke-width="3" stroke-linecap="round"/>
    <line x1="150" y1="75" x2="150" y2="85" stroke="#FFF" stroke-width="3" stroke-linecap="round"/>
    <line x1="120" y1="45" x2="110" y2="45" stroke="#FFF" stroke-width="3" stroke-linecap="round"/>
    <line x1="180" y1="45" x2="190" y2="45" stroke="#FFF" stroke-width="3" stroke-linecap="round"/>
    <text x="100" y="170" font-size="28" font-weight="bold" fill="#FFF" text-anchor="middle" font-family="Arial">RELAX!</text>
  </svg>`,

  mommy: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="grad10" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#1C3F6E;stop-opacity:1" /><stop offset="100%" style="stop-color:#4A7BA7;stop-opacity:1" /></linearGradient></defs>
    <rect width="200" height="200" fill="url(#grad10)"/>
    <circle cx="100" cy="50" r="20" fill="#FFB6C1" stroke="#000" stroke-width="3"/>
    <circle cx="92" cy="48" r="3" fill="#000"/><circle cx="108" cy="48" r="3" fill="#000"/>
    <path d="M 92 47 Q 92 45 90 45" stroke="#FFF" stroke-width="1.5" fill="none"/>
    <path d="M 108 47 Q 108 45 110 45" stroke="#FFF" stroke-width="1.5" fill="none"/>
    <path d="M 92 57 Q 100 61 108 57" stroke="#000" stroke-width="2" fill="none" stroke-linecap="round"/>
    <rect x="75" y="72" width="50" height="48" fill="#C5A8B8" stroke="#000" stroke-width="3" rx="3"/>
    <path d="M 140 70 Q 140 60 150 60 Q 160 60 160 70 Q 160 85 145 95 Q 130 85 130 70 Q 130 60 140 60 Z" fill="#FF69B4" stroke="#000" stroke-width="2.5"/>
    <text x="100" y="170" font-size="26" font-weight="bold" fill="#FFF" text-anchor="middle" font-family="Arial">MOM!</text>
  </svg>`,

  pitch: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="grad11" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#E85E8A;stop-opacity:1" /><stop offset="100%" style="stop-color:#FF6BA6;stop-opacity:1" /></linearGradient></defs>
    <rect width="200" height="200" fill="url(#grad11)"/>
    <circle cx="100" cy="50" r="20" fill="#FFB6C1" stroke="#000" stroke-width="3"/>
    <circle cx="92" cy="48" r="3" fill="#000"/><circle cx="92" cy="46" r="1.5" fill="#FFF"/>
    <circle cx="108" cy="48" r="3" fill="#000"/><circle cx="108" cy="46" r="1.5" fill="#FFF"/>
    <path d="M 92 56 Q 100 61 108 56" stroke="#000" stroke-width="2" fill="none" stroke-linecap="round"/>
    <rect x="75" y="72" width="50" height="48" fill="#F0A8D8" stroke="#000" stroke-width="3" rx="3"/>
    <polygon points="155,110 145,85 150,90 140,90 150,95 145,85" fill="#FFF" stroke="#000" stroke-width="2.5"/>
    <line x1="150" y1="95" x2="150" y2="115" stroke="#FFF" stroke-width="3" stroke-linecap="round"/>
    <text x="100" y="170" font-size="24" font-weight="bold" fill="#000" text-anchor="middle" font-family="Arial">PITCH!</text>
  </svg>`,

  parttime: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="grad12" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#1C3F6E;stop-opacity:1" /><stop offset="100%" style="stop-color:#4A7BA7;stop-opacity:1" /></linearGradient></defs>
    <rect width="200" height="200" fill="url(#grad12)"/>
    <circle cx="100" cy="50" r="20" fill="#E0C4A0" stroke="#000" stroke-width="3"/>
    <circle cx="92" cy="48" r="3" fill="#000"/><circle cx="108" cy="48" r="3" fill="#000"/>
    <line x1="92" y1="58" x2="108" y2="58" stroke="#000" stroke-width="2" stroke-linecap="round"/>
    <rect x="75" y="72" width="50" height="48" fill="#5B7C99" stroke="#000" stroke-width="3" rx="3"/>
    <circle cx="155" cy="85" r="20" fill="#FFF" stroke="#000" stroke-width="3"/>
    <line x1="155" y1="70" x2="155" y2="80" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="155" y1="85" x2="168" y2="85" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="155" cy="85" r="3" fill="#000"/>
    <text x="100" y="170" font-size="26" font-weight="bold" fill="#FFF" text-anchor="middle" font-family="Arial">TIME!</text>
  </svg>`
};

// Article keywords mapping
const articleKeywords = {
  'cv': 'cv',
  'kalendář': 'calendar',
  'jak nezískat': 'nojob',
  'soft skills': 'softskills',
  'pohovoru': 'interview',
  'sociální': 'social',
  'odolnost': 'resilience',
  'data': 'data',
  'prázdnin': 'vacation',
  'mamink': 'mommy',
  'elevator': 'pitch',
  'zkrácen': 'parttime'
};

function getComicType(title) {
  const titleLower = title.toLowerCase();
  for (const [keyword, type] of Object.entries(articleKeywords)) {
    if (titleLower.includes(keyword)) {
      return type;
    }
  }
  return 'cv';
}

function generateComicSVG(type) {
  return comicIllustrations[type] || comicIllustrations.cv;
}

function createComicImageUrl(type) {
  const svg = generateComicSVG(type);
  return 'data:image/svg+xml;base64,' + btoa(svg);
}

// Apply comic illustrations to article cards
document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.article-card');
  cards.forEach(card => {
    const title = card.querySelector('.article-card__title');
    if (title) {
      const comicType = getComicType(title.textContent);
      const svgContent = generateComicSVG(comicType);

      const imageDiv = document.createElement('div');
      imageDiv.className = 'article-card__image';
      imageDiv.innerHTML = svgContent;
      card.insertBefore(imageDiv, card.firstChild);
    }
  });

  // Also apply to article header images
  const headerImage = document.querySelector('.article-header-image');
  if (headerImage) {
    const titleElement = document.querySelector('h1');
    if (titleElement) {
      const comicType = getComicType(titleElement.textContent);
      const svgContent = generateComicSVG(comicType);
      headerImage.innerHTML = svgContent;
    }
  }
});
