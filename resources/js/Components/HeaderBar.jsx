import { useState, useEffect } from "react";
import {
    Box,
    IconButton,
    Drawer,
    Link,
    useTheme,
    Menu,
    MenuItem,
    Button,
} from "@mui/material";
import { usePage } from "@inertiajs/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineArrowDropDown } from "react-icons/md";
import LangChange from "./LangChange";
import checkLang from "@/utils/checkLang";
import logo from "@/assets/images/logo.png";
import logoClear from "@/assets/images/logo-clear.png";

import "@/assets/sass/header.scss";

function HeaderBar({ en, id, jp, ch }) {
    const { locale } = usePage().props;
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = useState(null);
    const [state, setState] = useState(false);
    const [navbarStatus, setNavbarStatus] = useState(false);
    const [currentRoute, setCurrentRoute] = useState(false);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const toggleDrawer = () => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState(!state);
    };
    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 100
                ? setNavbarStatus(true)
                : setNavbarStatus(false);
        });
        return () => {
            window.removeEventListener("scroll", null);
        };
    }, []);

    const checkRoute = () => {
        if (
            !route().current("team") ||
            !route().current("team.id") ||
            !route().current("team.jp")
        ) {
            setCurrentRoute(true);
        } else {
            setCurrentRoute(false);
        }
    };
    return (
        <Box
            component="header"
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: `${
                    !route().current("team") &&
                    !route().current("team.id") &&
                    !route().current("team.id")
                        ? "space-between"
                        : "flex-end"
                }`,
                padding: `${navbarStatus ? "1.5rem 6% 0 6%" : "3rem 6% 0 6%"}`,
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: "1201",
                backgroundColor: `${
                    navbarStatus ? "rgba(0,0,0,.2)" : "transparent"
                }`,
                transition: "all ease 350ms",
            }}
        >
            {(() => {
                if (
                    !route().current("team") &&
                    !route().current("team.id") &&
                    !route().current("team.jp")
                ) {
                    return (
                        <Link
                            sx={{
                                img: {
                                    width: "160px",
                                },
                            }}
                            href={checkLang(
                                locale,
                                route("home"),
                                route("home.id"),
                                route("home.jp")
                            )}
                        >
                            <img
                                src={
                                    route().current("home") ||
                                    route().current("home.id") ||
                                    route().current("home.jp")
                                        ? logoClear
                                        : logo
                                }
                                alt="Ideatax"
                            />
                        </Link>
                    );
                }
            })()}
            <IconButton
                onClick={toggleDrawer()}
                aria-label="open side menu"
                sx={{
                    svg: {
                        fontSize: "2.5rem",
                        color: `${
                            route().current("home")
                                ? theme.palette.custom.white
                                : theme.palette.custom.darkBlue
                        }`,
                    },
                }}
            >
                {state ? <AiOutlineClose /> : <RxHamburgerMenu />}
            </IconButton>
            <Drawer
                sx={{
                    ".css-i9fmh8-MuiBackdrop-root-MuiModal-backdrop": {
                        backgroundColor: "transparent",
                    },
                    ".MuiDrawer-paperAnchorRight": {
                        background:
                            "linear-gradient(90deg,rgba(165,114,240,0),rgba(0,90,150,.72),#005b96 90%)",
                        width: "50vw",

                        boxShadow: "none",
                        [theme.breakpoints.down("md")]: {
                            width: "75vw",
                        },
                    },
                }}
                anchor="right"
                open={state}
                onClose={toggleDrawer(false)}
            >
                <Box
                    sx={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-end",
                        justifyContent: "center",
                        padding: "0 12%",
                        ".active": {
                            color: `${theme.palette.custom.orange} !important`,
                        },
                    }}
                >
                    <Link
                        href={checkLang(
                            locale,
                            route("home"),
                            route("home.id"),
                            route("home.jp")
                        )}
                        className={route().current("home") ? "active" : ""}
                        sx={{
                            fontSize: "1.7rem",
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
                        Home
                    </Link>
                    <Link
                        href={checkLang(
                            locale,
                            route("team"),
                            route("team.id"),
                            route("team.jp"),
                            route("team.ch")
                        )}
                        className={
                            route().current("team") ||
                            route().current("team-detail")
                                ? "active"
                                : ""
                        }
                        sx={{
                            fontSize: "1.7rem",
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
                        Team
                    </Link>
                    <Link
                        href={checkLang(
                            locale,
                            route("service"),
                            route("service.id"),
                            route("service.jp")
                        )}
                        className={
                            route().current("service") ||
                            route().current("service-detail")
                                ? "active"
                                : ""
                        }
                        sx={{
                            fontSize: "1.7rem",
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
                        Our Services
                    </Link>
                    {/* <Link
                        href={route("team")}
                        sx={{
                            fontSize: "1.7rem",
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
                        Updates
                    </Link> */}
                    <Link
                        href={checkLang(
                            locale,
                            route("articles"),
                            route("articles.id"),
                            route("articles.jp")
                        )}
                        className={
                            route().current("articles") ||
                            route().current("article-detail")
                                ? "active"
                                : ""
                        }
                        sx={{
                            fontSize: "1.7rem",
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
                        Articles
                    </Link>
                    <Button
                        className={
                            route().current("career") ||
                            route().current("career-detail") ||
                            route().current("life-at-ideatax")
                                ? "active"
                                : ""
                        }
                        id="basic-button"
                        aria-controls={open ? "dropdown-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                        sx={{
                            fontSize: "1.7rem",
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
                        Career
                        <MdOutlineArrowDropDown />
                    </Button>
                    <Menu
                        id="dropdown-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        className="dropdown-react"
                        MenuListProps={{
                            "aria-labelledby": "dropdown-menu",
                        }}
                    >
                        <MenuItem>
                            <Link
                                href={checkLang(
                                    locale,
                                    route("career"),
                                    route("career.id"),
                                    route("career.jp")
                                )}
                                className={
                                    route().current("career") ? "active" : ""
                                }
                                sx={{
                                    fontSize: "1.7rem",
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
                                Career
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link
                                href={checkLang(
                                    locale,
                                    route("life-at-ideatax"),
                                    route("life-at-ideatax.id"),
                                    route("life-at-ideatax.jp")
                                )}
                                className={
                                    route().current("life-at-ideatax")
                                        ? "active"
                                        : ""
                                }
                                sx={{
                                    fontSize: "1.7rem",
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
                                Life at Ideatax
                            </Link>
                        </MenuItem>
                    </Menu>
                    <Link
                        href={checkLang(
                            locale,
                            route("contact"),
                            route("contact.id"),
                            route("contact.jp")
                        )}
                        className={route().current("contact") ? "active" : ""}
                        sx={{
                            fontSize: "1.7rem",
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
                        Contact Us
                    </Link>
                    <LangChange en={en} id={id} jp={jp} ch={ch} />
                </Box>
            </Drawer>
        </Box>
    );
}

export default HeaderBar;
