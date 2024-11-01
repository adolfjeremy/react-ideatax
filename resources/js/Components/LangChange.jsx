import { useState } from "react";
import {
    Button,
    Menu,
    MenuItem,
    useTheme,
    Box,
    Typography,
    Link,
} from "@mui/material";
import { usePage } from "@inertiajs/react";
import idf from "@/assets/images/flag/id.svg";
import jpf from "@/assets/images/flag/jp.svg";
import usf from "@/assets/images/flag/us.svg";

function LangChange({ en, id, jp }) {
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
                {locale == "en" ? (
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 1,
                            img: {
                                width: "20px",
                            },
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: "0.8rem",
                                color: theme.palette.custom.white,
                                letterSpacing: ".009em",
                                textTransform: "capitalize",
                                textDecoration: "none",
                                padding: "0.5rem 0",
                                "&:hover": {
                                    color: theme.palette.custom.orange,
                                },
                            }}
                        >
                            English
                        </Typography>
                        <img src={usf} alt="US flag" />
                    </Box>
                ) : locale == "id" ? (
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 1,
                            img: {
                                width: "20px",
                            },
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: "0.8rem",
                                color: theme.palette.custom.white,
                                letterSpacing: ".009em",
                                textTransform: "capitalize",
                                textDecoration: "none",
                                padding: "0.5rem 0",
                                "&:hover": {
                                    color: theme.palette.custom.orange,
                                },
                            }}
                        >
                            Indonesia
                        </Typography>
                        <img src={idf} alt="Indonesian flag" />
                    </Box>
                ) : (
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 1,
                            img: {
                                width: "20px",
                            },
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: "0.8rem",
                                color: theme.palette.custom.white,
                                letterSpacing: ".009em",
                                textTransform: "capitalize",
                                textDecoration: "none",
                                padding: "0.5rem 0",
                                "&:hover": {
                                    color: theme.palette.custom.orange,
                                },
                            }}
                        >
                            Japan
                        </Typography>
                        <img src={jpf} alt="Japan flag" />
                    </Box>
                )}
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}
                sx={{
                    ".css-1xomo8h-MuiPaper-root-MuiPopover-paper-MuiMenu-paper":
                        {
                            backgroundColor: "rgba(0,90,150,.8)",
                        },
                    ".css-d1xm6m": {
                        backgroundColor: "rgba(0,90,150,.8)",
                    },
                }}
            >
                {locale !== "en" && (
                    <MenuItem
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 1,
                            img: {
                                width: "20px",
                            },
                        }}
                    >
                        <Link
                            href={en}
                            sx={{
                                fontSize: "0.8rem",
                                color: theme.palette.custom.white,
                                letterSpacing: ".009em",
                                textTransform: "capitalize",
                                textDecoration: "none",
                                padding: "0.5rem 0",
                                "&:hover": {
                                    color: theme.palette.custom.orange,
                                },
                            }}
                        >
                            English
                        </Link>
                        <img src={usf} alt="US flag" />
                    </MenuItem>
                )}
                {locale !== "id" && (
                    <MenuItem
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 1,
                            img: {
                                width: "20px",
                            },
                        }}
                    >
                        <Link
                            href={id}
                            sx={{
                                fontSize: "0.8rem",
                                color: theme.palette.custom.white,
                                letterSpacing: ".009em",
                                textTransform: "capitalize",
                                textDecoration: "none",
                                padding: "0.5rem 0",
                                "&:hover": {
                                    color: theme.palette.custom.orange,
                                },
                            }}
                        >
                            Indonesia
                        </Link>
                        <img src={idf} alt="Indonesian flag" />
                    </MenuItem>
                )}
                {locale !== "jp" && (
                    <MenuItem
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 1,
                            img: {
                                width: "20px",
                            },
                        }}
                    >
                        <Link
                            href={jp}
                            sx={{
                                fontSize: "0.8rem",
                                color: theme.palette.custom.white,
                                letterSpacing: ".009em",
                                textTransform: "capitalize",
                                textDecoration: "none",
                                padding: "0.5rem 0",
                                "&:hover": {
                                    color: theme.palette.custom.orange,
                                },
                            }}
                        >
                            Japan
                        </Link>
                        <img src={jpf} alt="Japan flag" />
                    </MenuItem>
                )}
            </Menu>
        </>
    );
}

export default LangChange;
