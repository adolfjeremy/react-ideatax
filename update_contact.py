import re

with open('resources/js/Pages/Contact/Contact.jsx', 'r') as f:
    content = f.read()

# 1. Add TextField to imports
content = content.replace(
    '    Select,\n} from "@mui/material";',
    '    Select,\n    TextField,\n} from "@mui/material";'
)

# 2. Replace all inputs
input_pattern = r'<input\s+type="([^"]+)"\s+name="([^"]+)"\s+className="form-control"\s+id="[^"]+"\s+value=\{data\.([^\}]+)\}\s+onChange=\{([^\}]+)\}\s+required\s*/>'
def repl_input(m):
    type_attr, name_attr, value_attr, onchange_attr = m.groups()
    return f"""<TextField
                                    fullWidth
                                    size="small"
                                    type="{type_attr}"
                                    name="{name_attr}"
                                    value={{data.{value_attr}}}
                                    onChange={{{onchange_attr}}}
                                    required
                                />"""

content = re.sub(input_pattern, repl_input, content)

# 3. Replace textarea
textarea_pattern = r'<textarea\s+className="form-control"\s+id="[^"]+"\s+name="([^"]+)"\s+rows="6"\s+value=\{data\.([^\}]+)\}\s+onChange=\{([^\}]+)\}\s+required\s*/>'
def repl_textarea(m):
    name_attr, value_attr, onchange_attr = m.groups()
    return f"""<TextField
                                    fullWidth
                                    multiline
                                    rows={{6}}
                                    name="{name_attr}"
                                    value={{data.{value_attr}}}
                                    onChange={{{onchange_attr}}}
                                    required
                                />"""

content = re.sub(textarea_pattern, repl_textarea, content)

# 4. Update FormControl to have size="small"
content = content.replace('<FormControl fullWidth>', '<FormControl fullWidth size="small">')

# 5. Update Select to have white text
content = content.replace(
    '<Select\n                                        id="demo-simple-select"',
    '<Select\n                                        id="demo-simple-select"\n                                        sx={{ color: theme.palette.custom.white }}'
)

content = content.replace(
    '<Select\n                                        id="source-select"',
    '<Select\n                                        id="source-select"\n                                        sx={{ color: theme.palette.custom.white }}'
)

with open('resources/js/Pages/Contact/Contact.jsx', 'w') as f:
    f.write(content)

print("Done")
