import os
import glob
import re

html_files = glob.glob('*.html')

# Pattern to find the logo link with AssistifyEgypt text
# We'll replace it with the img tag
pattern = r'class="logo[^"]*">Assistify<span>Egypt</span></a>'
replacement = 'class="logo"><img src="logo.png" alt="Assistify Egypt"></a>'

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_content = re.sub(pattern, replacement, content)
    
    if new_content != content:
        with open(file, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated logo in {file}")
    else:
        # Check if it was already updated or has a slightly different pattern
        print(f"No changes in {file}")
