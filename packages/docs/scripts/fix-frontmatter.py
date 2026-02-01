#!/usr/bin/env python3
"""
Script to add missing 'title:' frontmatter to all engine docs.
Starlight requires a title field in frontmatter.
"""

import os
import re

DOCS_DIR = "/Users/sean/WIP/Antigravity-Workspace/claw/packages/docs/src/content/docs/engine"

def get_title_from_filename(filepath):
    """Convert filename to a human-readable title."""
    basename = os.path.basename(filepath)
    name = os.path.splitext(basename)[0]
    # Handle special cases
    if name.upper() == name:
        # All caps file like RELEASING.md -> "Releasing"
        return name.title()
    # Replace underscores and hyphens with spaces
    name = name.replace('-', ' ').replace('_', ' ')
    # Title case
    return name.title()

def add_title_to_frontmatter(filepath):
    """Add title to frontmatter if missing."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check if file has frontmatter
    if not content.startswith('---'):
        # No frontmatter, add it
        title = get_title_from_filename(filepath)
        new_content = f'---\ntitle: "{title}"\n---\n\n{content}'
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True
    
    # Check if title exists in frontmatter
    frontmatter_end = content.find('---', 3)
    if frontmatter_end == -1:
        return False
    
    frontmatter = content[3:frontmatter_end]
    
    # Check for title
    if re.search(r'^title:', frontmatter, re.MULTILINE):
        return False  # Already has title
    
    # Add title to frontmatter
    title = get_title_from_filename(filepath)
    # Insert title as first line of frontmatter
    new_frontmatter = f'title: "{title}"\n{frontmatter}'
    new_content = f'---\n{new_frontmatter}---{content[frontmatter_end+3:]}'
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    return True

def main():
    count = 0
    for root, dirs, files in os.walk(DOCS_DIR):
        for file in files:
            if file.endswith('.md'):
                filepath = os.path.join(root, file)
                if add_title_to_frontmatter(filepath):
                    print(f"Added title to: {filepath}")
                    count += 1
    
    print(f"\n✅ Added title to {count} files")

if __name__ == "__main__":
    main()
