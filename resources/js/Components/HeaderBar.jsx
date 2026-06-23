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
    useMediaQuery
} from "@mui/material";
import { usePage } from "@inertiajs/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineArrowDropDown } from "react-icons/md";
import LangChange from "./LangChange";
import checkLang from "@/utils/checkLang";
import logo from "@/assets/images/logo.png";
import logoClear from "@/assets/images/logo-clear.png";
import { LiquidGlass } from "@liquidglass/react";

import "@/assets/sass/header.scss";

function HeaderBar({ en, id, jp, ch }) {
    const { locale } = usePage().props;
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = useState(null);
    const [anchor, setAnchor] = useState(null);
    const [state, setState] = useState(false);
    const [navbarStatus, setNavbarStatus] = useState(false);
    const [currentRoute, setCurrentRoute] = useState(false);
    const open = Boolean(anchorEl);
    const openCareerDekstop = Boolean(anchor);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleClickCareerDekstop = (event) => {
        setAnchor(event.currentTarget);
    };
    const handleCloseCareerDekstop = () => {
        setAnchor(null);
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

    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("lg"));
    console.log(state, isMobile)
    return (
        <>
            <Box sx={{
            position:"fixed",
            top:0,
            left: 0,
            right: 0,
            zIndex:30000,
        }}>
            <LiquidGlass
                borderRadius={0}
                blur={1.5}
                contrast={1.2}
                brightness={1.05}
                saturation={1.1}
                elasticity={0.5}
        >
            <Box sx={{
                display:"flex",
                alignItems: "center",
                justifyContent:"space-between",
                width: "100%",
                py: "1.5rem",
                px: "6%",
                backgroundColor: "rgba(0,0,0,.3)"
            }}>
                <Link
                    sx={{
                        img: {
                            width: "160px",
                            [theme.breakpoints.down("md")]: {
                                width: "120px",
                            },
                        },
                    }}
                    href={checkLang(
                        locale,
                        route("home"),
                        route("home.id"),
                        route("home.jp"),
                        route("home.ch")
                    )}
                >
                    <img
                        src={logoClear}
                        alt="Ideatax"
                    />
                </Link>
                <IconButton
                    onClick={toggleDrawer()}
                    aria-label="open side menu"
                    sx={{
                        position: "absolute",
                        right: "6%",
                        zIndex: "1202",
                        cursor:"pointer",
                        display:"flex",
                        [theme.breakpoints.up("lg")]: {
                            display: "none"
                        },
                        svg: {
                            fontSize: "1rem",
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
                <Box
                    sx={{
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"end",
                        gap:"1.625rem",
                        [theme.breakpoints.down("lg")]: {
                            display: "none"
                        },
                    }}
                >
                    <Link
                        href={checkLang(
                            locale,
                            route("home"),
                            route("home.id"),
                            route("home.jp"),
                            route("home.ch")
                        )}
                        className={route().current("home") ? "active" : ""}
                        sx={{
                            fontSize: "1.5rem",
                            color: theme.palette.custom.white,
                            fontWeight: 400,
                            letterSpacing: ".009em",
                            textTransform: "capitalize",
                            textDecoration: "none",
                            padding: "0.5rem 0",
                            "&:hover": {
                                color: theme.palette.custom.yellow,
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
                            fontSize: "1.5rem",
                            color: theme.palette.custom.white,
                            fontWeight: 400,
                            letterSpacing: ".009em",
                            textTransform: "capitalize",
                            textDecoration: "none",
                            padding: "0.5rem 0",
                            "&:hover": {
                                color: theme.palette.custom.yellow,
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
                            route("service.jp"),
                            route("service.ch")
                        )}
                        className={
                            route().current("service") ||
                            route().current("service-detail")
                                ? "active"
                                : ""
                        }
                        sx={{
                            fontSize: "1.5rem",
                            color: theme.palette.custom.white,
                            fontWeight: 400,
                            letterSpacing: ".009em",
                            textTransform: "capitalize",
                            textDecoration: "none",
                            padding: "0.5rem 0",
                            whiteSpace:"nowrap",
                            "&:hover": {
                                color: theme.palette.custom.yellow,
                            },
                        }}
                    >
                        Our Services
                    </Link>
                    <Link
                        href={checkLang(
                            locale,
                            route("publications"),
                            route("publications.id"),
                            route("publications.jp"),
                            route("publications.ch")
                        )}
                        className={
                            route().current("publications") ||
                            route().current("article-detail") ||
                            route().current("updates-detail")
                                ? "active"
                                : ""
                        }
                        sx={{
                            fontSize: "1.5rem",
                            color: theme.palette.custom.white,
                            fontWeight: 400,
                            letterSpacing: ".009em",
                            textTransform: "capitalize",
                            textDecoration: "none",
                            padding: "0.5rem 0",
                            whiteSpace:"nowrap",
                            "&:hover": {
                                color: theme.palette.custom.yellow,
                            },
                        }}
                    >
                        Publications
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
                        aria-controls={openCareerDekstop ? "dropdown-menu-career-dekstop" : undefined}
                        aria-haspopup="true"
                        aria-expanded={openCareerDekstop ? "true" : undefined}
                        onClick={handleClickCareerDekstop}
                        sx={{
                            fontSize: "1.5rem",
                            color: theme.palette.custom.white,
                            fontWeight: 400,
                            color: theme.palette.custom.white,
                            letterSpacing: ".009em",
                            textTransform: "capitalize",
                            textDecoration: "none",
                            padding: "0.5rem 0",
                            minWidth:"auto",
                            "&:hover": {
                                color: theme.palette.custom.yellow,
                            },
                        }}
                    >
                        Career
                        <MdOutlineArrowDropDown />
                    </Button>
                    <Menu
                        id="dropdown-menu-career-dekstop"
                        anchorEl={anchor}
                        open={openCareerDekstop}
                        onClose={handleCloseCareerDekstop}
                        className="dropdown-react"
                        MenuListProps={{
                            "aria-labelledby": "dropdown-menu-career-dekstop",
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
                                    fontSize: "1.5rem",
                                    color: theme.palette.custom.white,
                                    fontWeight: 400,
                                    letterSpacing: ".009em",
                                    textTransform: "capitalize",
                                    textDecoration: "none",
                                    padding: "0.5rem 0",
                                    "&:hover": {
                                        color: theme.palette.custom.yellow,
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
                                        color: theme.palette.custom.yellow,
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
                            route("contact.jp"),
                            route("contact.ch")
                        )}
                        className={route().current("contact") ? "active" : ""}
                        sx={{
                            fontSize: "1.5rem",
                            color: theme.palette.custom.white,
                            fontWeight: 400,
                            letterSpacing: ".009em",
                            textTransform: "capitalize",
                            textDecoration: "none",
                            padding: "0.5rem 0",
                            textWrap: "nowrap",
                            "&:hover": {
                                color: theme.palette.custom.yellow,
                            },
                        }}
                    >
                        Contact Us
                    </Link>
                    <LangChange en={en} id={id} jp={jp} ch={ch} />
                </Box>
            </Box>
        </LiquidGlass>
        </Box>
        <Drawer
            sx={{
                display: state && isMobile ? "" : "none",
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
                ".MuiDrawer-paper": {
                    border: "none",
                },
            }}
            variant="persistent"
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
                        color: `${theme.palette.custom.yellow} !important`,
                    },
                }}
            >
                <Link
                    href={checkLang(
                        locale,
                        route("home"),
                        route("home.id"),
                        route("home.jp"),
                        route("home.ch")
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
                            color: theme.palette.custom.yellow,
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
                            color: theme.palette.custom.yellow,
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
                        route("service.jp"),
                        route("service.ch")
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
                            color: theme.palette.custom.yellow,
                        },
                    }}
                >
                    Our Services
                </Link>
                <Link
                    href={checkLang(
                        locale,
                        route("publications"),
                        route("publications.id"),
                        route("publications.jp"),
                        route("publications.ch")
                    )}
                    className={
                        route().current("publications") ||
                        route().current("article-detail") ||
                        route().current("updates-detail")
                            ? "active"
                            : ""
                    }
                    sx={{
                        fontSize: "1.5rem",
                        color: theme.palette.custom.white,
                        fontWeight: 400,
                        letterSpacing: ".009em",
                        textTransform: "capitalize",
                        textDecoration: "none",
                        padding: "0.5rem 0",
                        whiteSpace:"nowrap",
                        "&:hover": {
                            color: theme.palette.custom.yellow,
                        },
                    }}
                >
                    Publications
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
                            color: theme.palette.custom.yellow,
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
                                    color: theme.palette.custom.yellow,
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
                                    color: theme.palette.custom.yellow,
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
                        route("contact.jp"),
                        route("contact.ch")
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
                            color: theme.palette.custom.yellow,
                        },
                    }}
                >
                    Contact Us
                </Link>
                <LangChange en={en} id={id} jp={jp} ch={ch} />
            </Box>
        </Drawer>
        </>
    );
}

export default HeaderBar;
