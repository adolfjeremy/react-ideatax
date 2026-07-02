import re

with open('/Users/macbook/Pixby/react-ideatax/resources/js/Components/HeaderBar.jsx', 'r') as f:
    content = f.read()

# Add navColor definition
old_active = """    const isActive = (routes) => {
        if (!Array.isArray(routes)) {
            routes = [routes];
        }
        return routes.some((r) => route().current(r) || route().current(`${r}.*`));
    };"""

new_active = """    const isActive = (routes) => {
        if (!Array.isArray(routes)) {
            routes = [routes];
        }
        return routes.some((r) => route().current(r) || route().current(`${r}.*`));
    };

    const isDarkNav = isActive(["life-at-ideatax", "contact"]) && !navbarStatus;
    const navColor = isDarkNav ? theme.palette.custom.black : theme.palette.custom.white;"""

content = content.replace(old_active, new_active)

# Replace logo
old_logo = """                    <img
                        src={logoClear}
                        alt="Ideatax"
                    />"""
new_logo = """                    <img
                        src={isDarkNav ? logo : logoClear}
                        alt="Ideatax"
                    />"""
content = content.replace(old_logo, new_logo)

# Replace hamburger color
old_hamburger = """                        svg: {
                            fontSize: "2rem",
                            color: theme.palette.custom.white
                        },"""
new_hamburger = """                        svg: {
                            fontSize: "2rem",
                            color: navColor
                        },"""
content = content.replace(old_hamburger, new_hamburger)


# We want to replace theme.palette.custom.white with navColor
# only inside the desktop Box element (which starts around line 157 and ends around 385)
# Let's find the substring from "alignItems:\"center\"," (desktop box) to "<LangChange"
start_str = 'alignItems:"center",'
end_str = '<LangChange'
# find the exact box
start_pos = content.find('display:"flex",\n                        alignItems:"center",\n                        justifyContent:"end",')
if start_pos != -1:
    start_idx = content.find(start_str, start_pos)
    end_idx = content.find(end_str, start_idx)
    
    if start_idx != -1 and end_idx != -1:
        desktop_nav_block = content[start_idx:end_idx]
        new_desktop_nav_block = desktop_nav_block.replace('color: theme.palette.custom.white,', 'color: navColor,')
        content = content[:start_idx] + new_desktop_nav_block + content[end_idx:]
    else:
        print("Could not find desktop nav block indices")
else:
    print("Could not find display flex etc")

with open('/Users/macbook/Pixby/react-ideatax/resources/js/Components/HeaderBar.jsx', 'w') as f:
    f.write(content)

print("Done")
