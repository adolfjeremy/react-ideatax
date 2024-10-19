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
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineArrowDropDown } from "react-icons/md";
import logo from "@/assets/images/logo.png";
import logoClear from "@/assets/images/logo-clear.png";

function HeaderBar() {
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = useState(null);
    const [state, setState] = useState(false);
    const [navbarStatus, setNavbarStatus] = useState(false);
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
    return (
        <Box
            component="header"
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: `${
                    !route().current("team") ? "space-between" : "flex-end"
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
            {!route().current("team") && (
                <Link
                    sx={{
                        img: {
                            width: "160px",
                        },
                    }}
                    href={route("home")}
                >
                    <img
                        src={route().current("home") ? logoClear : logo}
                        alt="Ideatax"
                    />
                </Link>
            )}
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
                        href={route("home")}
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
                        href={route("team")}
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
                        href={route("service")}
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
                    <Link
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
                    </Link>
                    <Link
                        href={route("articles")}
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
                        MenuListProps={{
                            "aria-labelledby": "dropdown-menu",
                        }}
                        sx={{
                            ".css-1xomo8h-MuiPaper-root-MuiPopover-paper-MuiMenu-paper":
                                {
                                    backgroundColor: "rgba(0,90,150,.8)",
                                },
                        }}
                    >
                        <MenuItem>
                            <Link
                                href={route("career")}
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
                                href={route("life-at-ideatax")}
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
                        href={route("contact")}
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
                </Box>
            </Drawer>
        </Box>
    );
}

export default HeaderBar;
