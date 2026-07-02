import re

with open('resources/js/Pages/Contact/Contact.jsx', 'r') as f:
    content = f.read()

# Replace Service Select
old_service = """                                <FormControl fullWidth size="small">
                                    <Select
                                        id="demo-simple-select"
                                        sx={{ color: theme.palette.custom.white }}
                                        value={data.service_id}
                                        onChange={(e) =>
                                            setData(
                                                "service_id",
                                                e.target.value,
                                            )
                                        }
                                        MenuProps={{
                                            disableScrollLock: true,
                                            sx: { zIndex: 6000 }
                                        }}
                                    >"""
new_service = """                                <TextField
                                    select
                                    fullWidth
                                    size="small"
                                    id="demo-simple-select"
                                    value={data.service_id}
                                    onChange={(e) =>
                                        setData(
                                            "service_id",
                                            e.target.value,
                                        )
                                    }
                                    SelectProps={{
                                        MenuProps: {
                                            disableScrollLock: true,
                                            sx: { zIndex: 6000 }
                                        }
                                    }}
                                >"""
content = content.replace(old_service, new_service)

# Replace Source Select
old_source = """                                <FormControl fullWidth size="small">
                                    <Select
                                        id="source-select"
                                        sx={{ color: theme.palette.custom.white }}
                                        value={data.source}
                                        onChange={(e) =>
                                            setData(
                                                "source",
                                                e.target.value,
                                            )
                                        }
                                        MenuProps={{
                                            disableScrollLock: true,
                                            sx: { zIndex: 6000 }
                                        }}
                                    >"""
new_source = """                                <TextField
                                    select
                                    fullWidth
                                    size="small"
                                    id="source-select"
                                    value={data.source}
                                    onChange={(e) =>
                                        setData(
                                            "source",
                                            e.target.value,
                                        )
                                    }
                                    SelectProps={{
                                        MenuProps: {
                                            disableScrollLock: true,
                                            sx: { zIndex: 6000 }
                                        }
                                    }}
                                >"""
content = content.replace(old_source, new_source)

# Replace closing tags
content = content.replace(
    """                                    </Select>\n                                </FormControl>""",
    """                                </TextField>"""
)

with open('resources/js/Pages/Contact/Contact.jsx', 'w') as f:
    f.write(content)

print("Done")
