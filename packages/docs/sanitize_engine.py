import os
import re

DOCS_DIR = 'src/content/docs/engine'

def sanitize_file(filepath):
    try:
        with open(filepath, 'r') as f:
            content = f.read()
    except UnicodeDecodeError:
        print(f"Skipping binary file {filepath}")
        return

    # Check for frontmatter
    fm_match = re.match(r'^---\n(.*?)\n---', content, re.DOTALL)
    
    if fm_match:
        fm_content = fm_match.group(1)
        if 'title:' not in fm_content:
            # Find H1
            h1_match = re.search(r'\n# (.*?)\n', content)
            if index := content.find('\n# '):
                # found H1
                line_end = content.find('\n', index + 3)
                title = content[index + 3:line_end].strip()
            else:
                # Check first line if it's H1
                if content.startswith('# '):
                   line_end = content.find('\n')
                   title = content[2:line_end].strip()
                else:
                   title = os.path.basename(filepath).replace('.md', '').replace('-', ' ').title()
            
            # Escape quotes
            title = title.replace('"', '\\"')
            
            # Insert title
            new_fm = fm_content + f'\ntitle: "{title}"'
            content = content.replace(fm_content, new_fm, 1)
            with open(filepath, 'w') as f:
                f.write(content)
            print(f"Added title '{title}' to {filepath}")
    else:
        # No frontmatter, add it
        if content.startswith('# '):
             line_end = content.find('\n')
             title = content[2:line_end].strip()
        else:
             title = os.path.basename(filepath).replace('.md', '').replace('-', ' ').title()
            
        # Escape quotes
        title = title.replace('"', '\\"')

        new_content = f'---\ntitle: "{title}"\n---\n\n' + content
        with open(filepath, 'w') as f:
            f.write(new_content)
        print(f"Added frontmatter to {filepath}")

for root, dirs, files in os.walk(DOCS_DIR):
    for file in files:
        if file.endswith('.md') or file.endswith('.mdx'):
            sanitize_file(os.path.join(root, file))
