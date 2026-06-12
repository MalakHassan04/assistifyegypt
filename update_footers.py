import os
import re

footer_html = """<!-- Footer Section -->
<footer class="main-footer">
    <div class="container footer-grid">
        <!-- Column 1: Brand & Socials -->
        <div class="footer-col brand-col">
            <a href="index.html" class="logo footer-logo">Assistify<span>Egypt</span></a>
            <p class="footer-desc">Empowering accessibility through technology. We provide high-quality assistive tools and professional support to the Egyptian community.</p>
            <div class="social-links">
                <a href="#"><i class="fab fa-facebook-f"></i> Facebook</a>
                <a href="#"><i class="fab fa-instagram"></i> Instagram</a>
                <a href="#"><i class="fab fa-linkedin-in"></i> LinkedIn</a>
            </div>
        </div>

        <!-- Column 2: Quick Links -->
        <div class="footer-col">
            <h4>Quick Links</h4>
            <ul class="footer-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="shop.html">Shop</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="community.html">Community</a></li>
                <li><a href="chatbot.html">Chatbot</a></li>
                <li><a href="account.html">Account</a></li>
            </ul>
        </div>

        <!-- Column 3: Support -->
        <div class="footer-col">
            <h4>Support</h4>
            <ul class="footer-links">
                <li><a href="#">Help Center</a></li>
                <li><a href="services.html">Request Repair</a></li>
                <li><a href="chatbot.html">FAQs</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Use</a></li>
            </ul>
        </div>

        <!-- Column 4: Contact -->
        <div class="footer-col">
            <h4>Contact Us</h4>
            <ul class="footer-contact">
                <li><i class="fas fa-envelope"></i> support@assistify.com</li>
                <li><i class="fas fa-phone"></i> +20 100 000 0000</li>
                <li><i class="fas fa-map-marker-alt"></i> Cairo, Egypt</li>
            </ul>
        </div>
    </div>

    <div class="footer-bottom">
        <div class="container">
            <p>&copy; 2026 Assistify Egypt. All rights reserved.</p>
            <p>&copy; 2024 Assistify Egypt. All rights reserved.</p>
        </div>
    </div>
</footer>"""

directory = r"c:\Users\malak\OneDrive\Desktop\assitify"

for filename in os.listdir(directory):
    if filename.endswith(".html"):
        filepath = os.path.join(directory, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        # Remove all existing footers
        content = re.sub(r'<footer.*?</footer>', '', content, flags=re.DOTALL | re.IGNORECASE)
        # Also remove <!-- Footer Section --> or similar comments if they exist
        content = re.sub(r'<!--\s*FOOTER.*?\s*-->', '', content, flags=re.IGNORECASE | re.DOTALL)
        content = re.sub(r'<!--\s*Footer Section\s*-->', '', content, flags=re.IGNORECASE | re.DOTALL)

        # Ensure contactus.html (or any file without </body></html>) gets them
        if "</body>" not in content.lower():
            content += "\n</body>\n</html>"
            
        # We want to insert the footer right before the first script tag that comes before </body>, 
        # or right before </body> if no scripts are at the end.
        
        body_close_match = re.search(r'</body>', content, flags=re.IGNORECASE)
        if body_close_match:
            # Find the sequence of scripts right before body
            m = re.search(r'(?:\s*<script.*?</script>)+\s*</body>', content, flags=re.IGNORECASE | re.DOTALL)
            if m:
                insert_idx = m.start()
            else:
                insert_idx = body_close_match.start()
                
            # Add a couple of newlines for formatting
            new_content = content[:insert_idx] + "\n\n" + footer_html + "\n\n" + content[insert_idx:]
            
            # Clean up excessive newlines (more than 3 to just 2)
            new_content = re.sub(r'\n{4,}', '\n\n\n', new_content)
            
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated {filename}")
        else:
            print(f"Skipping {filename}: no </body> found even after appending")

print("Done")
