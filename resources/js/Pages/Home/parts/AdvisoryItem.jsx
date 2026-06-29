import { Box, Typography, useTheme } from "@mui/material";
import RichText from "@/Components/RichText";
import truncate from "truncate-html";
import { Link, usePage } from "@inertiajs/react";
import checkLang from "@/utils/checkLang";

export default function AdvisoryItem ({advisory, image, position, name, title, highlight}) {
    const theme = useTheme();
    const { locale } = usePage().props;

    const href = advisory ? checkLang(
        locale,
        route("advisory-detail", { slug_eng: advisory.slug_eng }),
        route("advisory-detail.id", { slug: advisory.slug || advisory.slug_eng }),
        route("advisory-detail.jp", { slug_jpn: advisory.slug_jpn || advisory.slug_eng }),
        route("advisory-detail.ch", { slug: advisory.slug || advisory.slug_eng })
    ) : "#";

    return (
        <Link href={href} style={{ textDecoration: 'none' }}>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                p: 2,
                backgroundColor: theme.palette.custom.white,
                borderRadius: "24px",
                height: "100%",
                [theme.breakpoints.down("md")]: {
                    gap: 1,
                    p: 1,
                }
            }}>
                <Box sx={{ 
                    position: "relative",
                    display:"flex",
                    flexDirection:"column",
                    alignItems:"start",
                    justifyContent:"end",
                    
                }}>
                    <Box sx={{
                        borderRadius: "16px !important",
                        overflow:"hidden",
                        width: "100%",
                        img: {
                            objectFit: "cover",
                            minHeight: "250px",
                            objectPosition:"left",
                            borderRadius: "16px",
                            [theme.breakpoints.down("md")]: {
                                minHeight: "150px",
                            }

                        }
                    }}>
                        <img src={`/storage/${image}`} alt={position} className="w-100" />
                    </Box>
                    <Box sx={{
                        position:"absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        p:2,
                        background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%)",
                        [theme.breakpoints.down("md")]: {
                            p: 1,
                        }
                    }}>
                        <Typography variant="h3" sx={{
                            color: theme.palette.custom.white,
                            fontSize: "1.5rem",
                            fontWeight:700,
                            letterSpacing: "5%",
                            [theme.breakpoints.down("md")]: {
                                fontSize: "0.75rem",
                            }
                        }}>{name}</Typography>
                        <Typography variant="p" sx={{
                            color: theme.palette.custom.white,
                            fontSize: "1.5rem",
                            fontWeight:300,
                            letterSpacing: "5%",
                            [theme.breakpoints.down("md")]: {
                                fontSize: "0.5rem",
                            }
                        }}>{position}</Typography>
                    </Box>
                </Box>
                <Box>
                    <Typography as="h3" sx={{
                        color: theme.palette.custom.black,
                            fontSize: "1.5rem",
                            fontWeight:700,
                            letterSpacing: "5%",
                            [theme.breakpoints.down("md")]: {
                                fontSize: "0.625rem",
                                lineHeight: "15px !"
                            }
                    }}>Demurrage and Offshore VAT: How Operational</Typography>
                </Box>
                <Box sx={{
                    ".rich_container h3, .rich_container h4":{
                        fontSize:"1.125rem",
                        fontWeight: 300,
                        lineHeight: "15px",
                        letterSpacing:"11%",
                        [theme.breakpoints.down("md")]: {
                            fontSize: "0.5rem",
                        },
                        "strong" : {
                            fontWeight: 700
                        }
                    },
                    ".rich_container p": {
                        marginBottom: "0 !important",
                        fontWeight: 300,
                        color: theme.palette.custom.black,
                        fontFamily: "Lato, sans-serif",
                        lineHeight: "40px",
                        letterSpacing:"11%",
                        textAlign: "left",
                        textWrap: "balance",
                        [theme.breakpoints.down("md")]: {
                            fontSize: "0.5rem",
                            lineHeight: "15px",
                        },
                        strong: {
                            fontWeight: 700,
                            fontSize: "1.5rem",
                            [theme.breakpoints.down("md")]: {
                                fontSize: "0.5rem",
                            },
                            
                        }
                    }
                    }}>
                    <RichText className="rich_container" htmlContent={truncate(highlight,250)} />
                </Box>
            </Box>
        </Link>
    )
}