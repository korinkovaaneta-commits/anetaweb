#!/usr/bin/env python3
import xml.etree.ElementTree as ET
from datetime import datetime
import re
from html import unescape
import os

# Parse WordPress XML
tree = ET.parse('/Users/anetakorinkova/Downloads/edumama.WordPress.2026-04-28 (1).xml')
root = tree.getroot()

# Define namespaces
namespaces = {
    'content': 'http://purl.org/rss/1.0/modules/content/',
    'wp': 'http://wordpress.org/export/1.2/',
    'dc': 'http://purl.org/dc/elements/1.1/'
}

articles = []

# Extract all published posts
for item in root.findall('.//item'):
    post_type = item.find('wp:post_type', namespaces)
    if post_type is None or post_type.text != 'post':
        continue

    status = item.find('wp:status', namespaces)
    if status is None or status.text != 'publish':
        continue

    title_elem = item.find('title')
    date_elem = item.find('wp:post_date', namespaces)
    content_elem = item.find('content:encoded', namespaces)

    if title_elem is None or date_elem is None:
        continue

    title = unescape(title_elem.text) if title_elem.text else 'Untitled'
    date_str = date_elem.text
    content = content_elem.text if content_elem is not None and content_elem.text else ''

    try:
        post_date = datetime.strptime(date_str, '%Y-%m-%d %H:%M:%S')
    except:
        continue

    articles.append({
        'title': title,
        'date': post_date,
        'date_str': date_str,
        'date_formatted': post_date.strftime('%d. %B %Y').replace('.', ''),
        'content': content
    })

# Sort by date (newest first)
articles.sort(key=lambda x: x['date'], reverse=True)

# Take top 20
top_20 = articles[:20]

def clean_divi_content(html_content):
    """Remove Divi builder markup and extract text content"""
    if not html_content:
        return ''

    # Remove Divi shortcodes but keep content inside
    content = re.sub(r'\[et_pb_[^\]]*\]', '', html_content)
    content = re.sub(r'\[/et_pb_[^\]]*\]', '', content)
    content = re.sub(r'\[/et_pb_code\]', '', content)

    # Clean up multiple newlines
    content = re.sub(r'\n\n+', '\n\n', content)
    content = content.strip()

    return content

def convert_to_html_paragraph(text):
    """Convert text to HTML paragraphs"""
    if not text:
        return ''

    # Split by double newlines to get paragraphs
    paragraphs = text.split('\n\n')
    html = ''

    for para in paragraphs:
        para = para.strip()
        if para:
            # Check if it's a heading (single line, relatively short)
            if len(para) < 100 and '\n' not in para:
                # Could be a heading - check if it looks like one
                if para.isupper() or (len(para.split()) <= 5 and not para.endswith('.')):
                    html += f'<h2>{para}</h2>\n    '
                else:
                    html += f'<p>{para}</p>\n    '
            else:
                # Regular paragraph
                para_html = para.replace('\n', ' ')
                html += f'<p>{para_html}</p>\n    '

    return html

# Create HTML files
for idx, article in enumerate(top_20, 1):
    filename = f'/Users/anetakorinkova/Web/article{idx}.html'

    # Clean content
    cleaned_content = clean_divi_content(article['content'])
    html_paragraphs = convert_to_html_paragraph(cleaned_content)

    # Create HTML
    html = f'''<!DOCTYPE html>
<html lang="cs">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{article['title']} – Aneta Kořínková</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="style.css" />
  <style>
    .article-header {{ background: var(--purple-dark); color: var(--white); padding: 4rem 0; margin-bottom: 3rem; }}
    .article-header h1 {{ font-family: var(--font-serif); font-size: 2.5rem; line-height: 1.2; margin-bottom: 1rem; }}
    .article-meta {{ display: flex; gap: 1.5rem; font-size: .9rem; color: rgba(255,255,255,.6); margin-bottom: 1rem; }}
    .article-content {{ max-width: 760px; margin: 0 auto 4rem; line-height: 1.8; color: var(--gray-800); }}
    .article-content h2 {{ font-family: var(--font-serif); font-size: 1.6rem; color: var(--purple-dark); margin: 2rem 0 1rem; }}
    .article-content p {{ margin-bottom: 1.25rem; }}
    .article-content strong {{ color: var(--purple-dark); }}
    .back-link {{ display: inline-block; margin-bottom: 2rem; color: var(--purple-main); font-weight: 600; }}
    .back-link:hover {{ color: var(--purple-mid); }}
  </style>
</head>
<body>

  <!-- NAVIGATION -->
  <header class="header" id="header">
    <nav class="nav container">
      <a href="index.html" class="nav__logo">Aneta Kořínková</a>
      <ul class="nav__list" id="navList">
        <li><a href="index.html" class="nav__link">Úvod</a></li>
        <li><a href="articles.html" class="nav__link">Články</a></li>
        <li><a href="index.html#podcast" class="nav__link">Podcast</a></li>
        <li><a href="index.html#omne" class="nav__link">O mně</a></li>
        <li><a href="index.html#kontakt" class="nav__link nav__link--cta">Kontakt</a></li>
      </ul>
      <button class="nav__burger" id="navBurger" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </nav>
  </header>

  <!-- ARTICLE HEADER -->
  <section class="article-header">
    <div class="container">
      <a href="articles.html" class="back-link">← Zpět na články</a>
      <h1>{article['title']}</h1>
      <div class="article-meta">
        <span>📅 {article['date'].strftime('%d. %B %Y').replace('á','á').replace('ř','ř').replace('ů','ů').replace('ě','ě').replace('č','č').replace('ž','ž').replace('š','š')}</span>
      </div>
    </div>
  </section>

  <!-- ARTICLE CONTENT -->
  <article class="article-content">
    {html_paragraphs}
  </article>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="container footer__inner">
      <p class="footer__copy">© 2026 Aneta Kořínková. Všechna práva vyhrazena.</p>
      <nav class="footer__nav">
        <a href="#">Ochrana osobních údajů</a>
        <a href="#">Cookies</a>
      </nav>
    </div>
  </footer>

  <script src="script.js"></script>
</body>
</html>'''

    # Write file
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(html)

    print(f"✓ Created article{idx}.html - {article['title']}")

print(f"\n✓ Created {len(top_20)} article files!")
