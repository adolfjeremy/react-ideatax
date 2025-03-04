import { useState } from "react";
import { Button, Menu, MenuItem, useTheme, Box } from "@mui/material";
import { usePage } from "@inertiajs/react";
import idf from "@/assets/images/flag/id.svg";
import jpf from "@/assets/images/flag/jp.svg";
import usf from "@/assets/images/flag/us.svg";
import cnf from "@/assets/images/flag/cn.png";
import LanguageOption from "./LanguageOption";

function LangChange({ en, id, jp, ch }) {
    const { locale } = usePage().props;
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                sx={{ backgroundColor: theme.palette.custom.orange }}
            >
                {locale === "en" && (
                    <LanguageOption
                        locale={locale}
                        currentLocale
                        label="English"
                        flag={usf}
                    />
                )}
                {locale === "id" && (
                    <LanguageOption
                        locale={locale}
                        currentLocale
                        label="Indonesia"
                        flag={idf}
                    />
                )}
                {locale === "jp" && (
                    <LanguageOption
                        locale={locale}
                        currentLocale
                        label="Japan"
                        flag={jpf}
                    />
                )}
                {locale === "zh-CN" && (
                    <LanguageOption
                        locale={locale}
                        currentLocale
                        label="China"
                        flag={cnf}
                    />
                )}
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                width="200px"
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}
            >
                {locale !== "en" && (
                    <MenuItem onClick={handleClose}>
                        <LanguageOption
                            locale={locale}
                            href={en}
                            label="English"
                            flag={usf}
                        />
                    </MenuItem>
                )}
                {locale !== "id" && (
                    <MenuItem onClick={handleClose}>
                        <LanguageOption
                            locale={locale}
                            href={id}
                            label="Indonesia"
                            flag={idf}
                        />
                    </MenuItem>
                )}
                {locale !== "jp" && (
                    <MenuItem onClick={handleClose}>
                        <LanguageOption
                            locale={locale}
                            href={jp}
                            label="Japan"
                            flag={jpf}
                        />
                    </MenuItem>
                )}
                {locale !== "zh-CN" && (
                    <MenuItem onClick={handleClose}>
                        <LanguageOption
                            locale={locale}
                            href={ch}
                            label="China"
                            flag={cnf}
                        />
                    </MenuItem>
                )}
            </Menu>
        </>
    );
}

export default LangChange;
