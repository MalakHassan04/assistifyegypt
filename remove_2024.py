import os

directory = r"c:\Users\malak\OneDrive\Desktop\assitify"
target_line = "<p>&copy; 2024 Assistify Egypt. All rights reserved.</p>"

for filename in os.listdir(directory):
    if filename.endswith(".html"):
        filepath = os.path.join(directory, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            lines = f.readlines()
            
        new_lines = [line for line in lines if target_line not in line]
        
        if len(new_lines) != len(lines):
            with open(filepath, 'w', encoding='utf-8') as f:
                f.writelines(new_lines)
            print(f"Removed 2024 from {filename}")
        else:
            print(f"No 2024 line found in {filename}")

print("Done")
