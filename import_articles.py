#!/usr/bin/env python3
import xml.etree.ElementTree as ET
from datetime import datetime
import re
from html import unescape

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

# Extract all items (posts)
for item in root.findall('.//item'):
    # Check if it's a post (not a page or other type)
    post_type = item.find('wp:post_type', namespaces)
    if post_type is None or post_type.text != 'post':
        continue

    # Check if published
    status = item.find('wp:status', namespaces)
    if status is None or status.text != 'publish':
        continue

    title_elem = item.find('title')
    date_elem = item.find('wp:post_date', namespaces)
    content_elem = item.find('content:encoded', namespaces)

    if title_elem is None or date_elem is None:
        continue

    title = unescape(title_elem.text) if title_elem.text else 'Untitled'
    date_str = date_elem.text  # Format: 2026-04-28 14:30:00
    content = content_elem.text if content_elem is not None and content_elem.text else ''

    # Parse date
    try:
        post_date = datetime.strptime(date_str, '%Y-%m-%d %H:%M:%S')
    except:
        continue

    articles.append({
        'title': title,
        'date': post_date,
        'date_str': date_str,
        'content': content
    })

# Sort by date (newest first)
articles.sort(key=lambda x: x['date'], reverse=True)

# Take top 20
top_20 = articles[:20]

print(f"Found {len(articles)} articles total")
print(f"Processing {len(top_20)} newest articles\n")

# Display list
for i, article in enumerate(top_20, 1):
    print(f"{i}. {article['title']} ({article['date'].strftime('%Y-%m-%d')})")

print("\nDone!")
