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
import Guest from "@/Layout/Guest";
import ConsultationButton from "@/Components/ConsultationButton";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdLink } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import SendIcon from "@mui/icons-material/Send";

import "../article.scss";

function ArticleDetail() {
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
        <Guest>
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
                <div
                    id="carouselExampleSlidesOnly"
                    className="carousel slide"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                src="https://ideatax.id/storage/article/WYSAb70JXlFvUHHmMPSLkOnxxsjdgQNACFWyEVCc.png"
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
                                    Keeping Cash Flow Fair with Accelerated
                                    Restitution
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
                                    PPN
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
                                    15 Aug, 2024 16:08 WIB
                                </Typography>
                            </Box>
                        </div>
                    </div>
                </div>
            </Box>
            <Box component="article">
                <div className="container">
                    <div className="row px-md-5">
                        <div className="col-12 px-md-4 mt-5 article_body">
                            <p>
                                The Directorate General of Taxes announced that
                                as of April 2024, 112 tax jurisdictions have
                                participated in the Automatic Exchange of
                                Information (AEOI) cooperation with Indonesia.
                                Among these tax jurisdictions are Albania,
                                Andora, Australia, the Bahamas, Bermuda,
                                Gibraltar, Portugal, Qatar, and so on. This
                                number has increased by two jurisdictions
                                compared to April 2023.
                            </p>
                            <p>
                                In addition, in its official release, the
                                Directorate General of Taxes also announced that
                                there are 83 countries for reporting Indonesian
                                tax information, including Croatia, Finland,
                                France, Malta, Mauritius, and so on. The
                                countries participating in Indonesia's
                                information exchange and reporting destinations
                                are as follows:
                            </p>
                            <p>
                                It should be noted that the automatic exchange
                                of data for tax purposes is a tax standard that
                                regulates how tax authorities participate in the
                                exchange of information with the tax authorities
                                of other countries (EFG 2024). According to the
                                OECD (2015), the initiation of the Automatic
                                Exchange of Information (AEOI) occurred in 2012.
                                At that time, there was a political will among
                                the leaders of the G20 countries to exchange tax
                                information. In 2013, the Finance Ministers of
                                the G20 countries agreed to encourage the
                                automatic exchange of information as a new
                                standard. This was followed by the commitment of
                                G8 leaders, who approved the OECD Secretary
                                General's report entitled “A Step Change in Tax
                                Transparency” (OECD 2015).
                            </p>
                        </div>
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
