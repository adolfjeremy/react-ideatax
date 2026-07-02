import re

with open('resources/js/Pages/Contact/Contact.jsx', 'r') as f:
    content = f.read()

# Replace disablePortal: true with disableScrollLock: true
content = content.replace(
    'disablePortal: true,',
    'disableScrollLock: true,'
)

with open('resources/js/Pages/Contact/Contact.jsx', 'w') as f:
    f.write(content)

print("Done")
