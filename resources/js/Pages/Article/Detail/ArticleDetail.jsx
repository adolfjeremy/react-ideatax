import { useState } from "react";
import {
    Box,
    Typography,
    useTheme,
    Link,
    Menu,
    MenuItem,
    IconButton,
} from "@mui/material";
import { usePage } from "@inertiajs/react";
import Guest from "@/Layout/Guest";
import ConsultationButton from "@/Components/ConsultationButton";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdLink } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import checkLang from "@/utils/checkLang";
import RichText from "@/Components/RichText";
import formatDate from "@/utils/formatDate";

import "../article.scss";

function ArticleDetail() {
    const { locale, item } = usePage().props;
    console.log(item);
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleCopy = () => {
        navigator.clipboard.writeText(route("article-detail"));
        handleClose();
    };
    return (
        <Guest
            en={route("article-detail", item.slug_eng)}
            id={route("article-detail.id", item.slug)}
            jp={route("article-detail.jp", item.slug_jpn)}
        >
            <Box
                component="section"
                sx={{
                    position: "relative",
                    [theme.breakpoints.up("md")]: {
                        maxHeight: "100vh",
                        overflow: "hidden",
                    },
                }}
            >
                <div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                src={`/storage/${item.photo}`}
                                className="d-block w-100"
                                alt="title"
                            />
                            <Box
                                sx={{
                                    position: "absolute",
                                    left: 0,
                                    bottom: 0,
                                    top: 0,
                                    right: "35vw",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                    justifyContent: "center",
                                    paddingLeft: "3rem",
                                    gap: "0.5rem",
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: theme.palette.custom.darkBlue,
                                        fontSize: "4.0325rem",
                                        [theme.breakpoints.down("md")]: {
                                            fontSize: "3rem",
                                        },
                                        [theme.breakpoints.down("sm")]: {
                                            fontSize: " 1.125rem",
                                        },
                                        lineHeight: "1.01561707em",
                                        letterSpacing: "0.009em",
                                        fontWeight: "700",
                                    }}
                                    variant="h1"
                                >
                                    {checkLang(
                                        locale,
                                        item.title_eng,
                                        item.title,
                                        item.title_jpn
                                    )}
                                </Typography>
                                <Link
                                    sx={{
                                        fontSize: "1.9751rem",
                                        color: theme.palette.custom.orange,
                                        textDecoration: "none",
                                        lineHeight: "1.1875em",
                                        letterSpacing: "-0.054em",
                                        fontWeight: "700",
                                        [theme.breakpoints.down("sm")]: {
                                            fontSize: "0.8",
                                        },
                                    }}
                                    href="#"
                                >
                                    {item.article_category.title}
                                </Link>
                                <Typography
                                    sx={{
                                        color: theme.palette.custom.lightBlue,
                                        fontSize: "1.4459rem",
                                        [theme.breakpoints.down("sm")]: {
                                            fontSize: "0.8rem",
                                        },
                                        margin: 0,
                                        padding: 0,
                                        lineHeight: "1.42498753em",
                                        letterSpacing: "0.009em",
                                    }}
                                >
                                    {formatDate(item.created_at)}
                                </Typography>
                            </Box>
                        </div>
                    </div>
                </div>
            </Box>
            <Box component="article">
                <div className="container">
                    <div className="row px-md-5">
                        <Box
                            sx={{
                                ol: {
                                    listStyle: "auto",
                                },
                                ul: {
                                    listStyle: "auto",
                                },
                            }}
                            className="col-12 px-md-4 mt-5 article_body"
                        >
                            {
                                <RichText
                                    htmlContent={checkLang(
                                        locale,
                                        item.body_eng,
                                        item.body,
                                        item.body_jpn
                                    )}
                                />
                            }
                        </Box>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12 gap-4 d-flex align-items-center justify-content-center">
                            <IconButton
                                id="basic-button"
                                aria-controls={open ? "basic-menu" : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? "true" : undefined}
                                onClick={handleClick}
                                sx={{
                                    svg: {
                                        fontSize: "2rem",
                                        color: theme.palette.custom.lightBlue,
                                    },
                                }}
                            >
                                <FiSend />
                            </IconButton>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                sx={{
                                    ul: {
                                        display: "flex",
                                        padding: 0,
                                    },
                                }}
                                MenuListProps={{
                                    "aria-labelledby": "basic-button",
                                }}
                            >
                                <MenuItem
                                    component="a"
                                    href="https://api.whatsapp.com/send?text=https://ideatax.id/articles/getting-to-know-the-automatic-exchange-of-information-for-tax-purposes"
                                    target="_blank"
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexDirection: "column",
                                        gap: 1,
                                        paddingTop: 2,
                                        svg: {
                                            color: "#25D366",
                                            fontSize: "1.8rem",
                                        },
                                    }}
                                >
                                    <FaWhatsapp />
                                    <Typography sx={{ fontSize: "1rem" }}>
                                        Whatsapp
                                    </Typography>
                                </MenuItem>
                                <MenuItem
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexDirection: "column",
                                        gap: 1,
                                        paddingTop: 2,
                                        svg: {
                                            fontSize: "1.8rem",
                                        },
                                    }}
                                    onClick={() => handleCopy()}
                                >
                                    <IoMdLink />
                                    <Typography sx={{ fontSize: "1rem" }}>
                                        Copy Link
                                    </Typography>
                                </MenuItem>
                            </Menu>
                            <IconButton
                                href="https://www.linkedin.com/company/89691805/admin/feed/posts/"
                                target="_blank"
                                aria-label="delete"
                                sx={{
                                    svg: {
                                        fontSize: "2rem",
                                        color: theme.palette.custom.lightBlue,
                                    },
                                }}
                            >
                                <FaLinkedin />
                            </IconButton>
                        </div>
                    </div>
                </div>
            </Box>
            <ConsultationButton />
        </Guest>
    );
}

export default ArticleDetail;
