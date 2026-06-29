import { Box, Typography, useTheme, Link } from "@mui/material";
import RichText from "@/Components/RichText";
import { MdKeyboardArrowRight } from "react-icons/md";
import { usePage } from "@inertiajs/react";
import checkLang from "@/utils/checkLang";

export default function AdvisoryHighlight({advisory, idx}) {
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
       <>
        {
            idx < 1 && (
                <div className="row d-flex flex-column-reverse flex-md-row align-items-center justify-content-between">
                    <Box className="col-12 col-md-6" sx={{
                        display:"flex",
                        flexDirection:"column",
                        justifyContent:"center",
                        alignItems:"start",
                        gap:"1.5625rem",
                        [theme.breakpoints.down("md")]: {
                            mt: 6
                        },
                        
                    }}>
                        <Typography
                            variant="h2"
                            component="h2"
                            sx={{
                                color: theme.palette.custom.black,
                                textAlign: "start",
                                fontSize: "3rem",
                                fontWeight: "700",
                                lineHeight: "107.3%",
                                [theme.breakpoints.down("md")]: {
                                    fontSize: "2.5rem",
                                },
                                [theme.breakpoints.down("sm")]: {
                                    fontSize: "2rem",
                                },
                            }}
                        >
                        <Typography as="span" sx={{fontWeight:300, color: theme.palette.custom.black,
                                textAlign: "start",
                                fontSize: "3rem",
                                lineHeight: "107.3%",
                                letterSpacing: "4%",
                                [theme.breakpoints.down("md")]: {
                                    fontSize: "1.5rem",
                                },}}> Advisory</Typography><br />Perspective
                        </Typography>
                         <Box sx={{
                            ".rich_container p": {
                                marginBottom: "0 !important",
                                fontWeight: 300,
                                color: theme.palette.custom.black,
                                fontFamily: "Lato, sans-serif",
                                lineHeight: "30px",
                                letterSpacing:"14%",
                                [theme.breakpoints.down("md")]: {
                                    fontSize: "0.625rem",
                                lineHeight: "15px",
                                },
                                strong: {
                                    fontWeight: 700,
                                    fontSize: "1.5rem",
                                    [theme.breakpoints.down("md")]: {
                                        fontSize: "0.625rem",
                                    },
                                    
                                }
                            }
                         }}>
                            <Typography sx={{
                                fontSize:"1.5rem",
                                fontWeight: 300,
                                lineHeight: "160%",
                                letterSpacing:"5%",
                                [theme.breakpoints.down("md")]: {
                                    fontSize: "0.625rem",
                                },
                            }}>
                                <Typography as="span" 
                                sx={{
                                    fontWeight: 700,
                                    fontSize: "1.5rem",
                                    [theme.breakpoints.down("md")]: {
                                        fontSize: "0.625rem",
                                    },
                                }}>{advisory.title}</Typography>: {advisory.subtitle}
                            </Typography>
                            <RichText className="rich_container mt-4 text-justify" htmlContent={advisory.highlight} />
                         </Box>
                        <Link className="text-decoration-none" href={href}>
                            <Typography variant="h6" component="h6" sx={{
                                color: theme.palette.custom.black,
                                textAlign: "start",
                                fontSize: "1.5rem",
                                fontWeight: "700",
                                lineHeight: "28px",
                                letterSpacing:"12%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent:"start",
                                gap: "0.5rem",
                                transition: "all 0.3s ease-in-out",
                                "&:hover": {
                                    color: theme.palette.custom.yellow,
                                },
                                [theme.breakpoints.down("md")]: {
                                    fontSize: "0.625rem",
                                },
                            }}>
                                Read More <MdKeyboardArrowRight />
                            </Typography>
                        </Link>
                    </Box>
                    <Box className="col-10 p-0 col-md-4 d-flex align-items-center justify-content-center relative" sx={{
                        img: {
                            maxWidth: "100%",
                            borderRadius:"0.875rem",
                        }
                    }}>
                        <img src={`/storage/${advisory?.team?.photo}`} alt={advisory.team?.name} />
                        <Box sx={{
                            display:"flex",
                            flexDirection:"column",
                            alignItems:"start",
                            justifyContent:"end",
                            position:"absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            p:2,
                            borderRadius:"0 0 0.875rem 0.875rem",
                            background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%)"
                        }}>
                            <Typography sx={{
                                fontSize: "2rem",
                                letterSpacing:"7%",
                                fontWeight: 700,
                                color: theme.palette.custom.white

                            }}>{advisory?.team?.name}</Typography>
                            <Typography sx={{
                                fontSize: "1.25rem",
                                letterSpacing:"7%",
                                fontWeight: 300,
                                color: theme.palette.custom.white

                            }}>{advisory?.team?.position?.name}</Typography>
                        </Box>
                    </Box>
                </div>
            )
        }
       </>
    )
}