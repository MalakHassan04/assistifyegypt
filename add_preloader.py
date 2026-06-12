import os
import glob

html_files = glob.glob('*.html')

preloader_html = """
    <!-- Global Preloader -->
    <div id="preloader"><div class="spinner"></div></div>
"""

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if '<div id="preloader">' not in content:
        # Replace <body> with <body> + preloader
        new_content = content.replace('<body>', f'<body>{preloader_html}')
        
        with open(file, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Injected into {file}")
    else:
        print(f"Preloader already exists in {file}")
