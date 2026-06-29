import re

with open('resources/js/Components/HeaderBar.jsx', 'r') as f:
    content = f.read()

# Add isActive function
func = """
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("lg"));

    const isActive = (routes) => {
        if (!Array.isArray(routes)) {
            routes = [routes];
        }
        return routes.some((r) => route().current(r) || route().current(`${r}.*`));
    };
"""
content = content.replace('    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("lg"));', func)

# Replace all variants
replacements = [
    (r'className=\{route\(\)\.current\("home"\) \? "active" : ""\}', r'className={isActive("home") ? "active" : ""}'),
    (r'className=\{\s*route\(\)\.current\("team"\) \|\|\s*route\(\)\.current\("team-detail"\)\s*\? "active"\s*: ""\s*\}', r'className={isActive(["team", "team-detail"]) ? "active" : ""}'),
    (r'className=\{\s*route\(\)\.current\("service"\) \|\|\s*route\(\)\.current\("service-detail"\)\s*\? "active"\s*: ""\s*\}', r'className={isActive(["service", "service-detail"]) ? "active" : ""}'),
    (r'className=\{\s*route\(\)\.current\("publications"\) \|\|\s*route\(\)\.current\("article-detail"\) \|\|\s*route\(\)\.current\("updates-detail"\)\s*\? "active"\s*: ""\s*\}', r'className={isActive(["publications", "article-detail", "updates-detail"]) ? "active" : ""}'),
    (r'className=\{\s*route\(\)\.current\("career"\) \|\|\s*route\(\)\.current\("career-detail"\) \|\|\s*route\(\)\.current\("life-at-ideatax"\)\s*\? "active"\s*: ""\s*\}', r'className={isActive(["career", "career-detail", "life-at-ideatax"]) ? "active" : ""}'),
    (r'className=\{\s*route\(\)\.current\("career"\) \? "active" : ""\s*\}', r'className={isActive("career") ? "active" : ""}'),
    (r'className=\{\s*route\(\)\.current\("life-at-ideatax"\)\s*\? "active"\s*: ""\s*\}', r'className={isActive("life-at-ideatax") ? "active" : ""}'),
    (r'className=\{route\(\)\.current\("contact"\) \? "active" : ""\}', r'className={isActive("contact") ? "active" : ""}'),
]

for pattern, repl in replacements:
    content = re.sub(pattern, repl, content)

with open('resources/js/Components/HeaderBar.jsx', 'w') as f:
    f.write(content)
