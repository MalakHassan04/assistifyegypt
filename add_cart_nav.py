import os
import glob

cart_link = '                <li><a href="cart.html"><i class="fas fa-shopping-cart"></i> Cart <span id="cart-count" class="badge">0</span></a></li>\n'
search_str = '<li><a href="account.html">'

html_files = glob.glob('*.html')

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        
    new_lines = []
    already_has_cart = False
    
    # Quick check if cart is already there
    for line in lines:
        if 'href="cart.html"' in line:
            already_has_cart = True
            break
            
    if already_has_cart:
        print(f"Skipping {file}, cart already exists.")
        continue
        
    for line in lines:
        if search_str in line:
            new_lines.append(cart_link)
        new_lines.append(line)
        
    with open(file, 'w', encoding='utf-8') as f:
        f.writelines(new_lines)
    print(f"Added cart nav to {file}")

print("Done")
