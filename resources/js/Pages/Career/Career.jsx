import { Box, Typography, useTheme, Link } from "@mui/material";
import { usePage } from "@inertiajs/react";
import { useTranslation } from "react-i18next";
import { IoIosArrowRoundForward } from "react-icons/io";
import Guest from "@/Layout/Guest";
import hero from "@/assets/images/career.png";
import checkLang from "@/utils/checkLang";

function Career() {
    const { locale, page, careers } = usePage().props;
    const theme = useTheme();
    const { t } = useTranslation();
    return (
        <Guest
            en={route("career")}
            id={route("career.id")}
            jp={route("career.jp")}
            description={checkLang(
                locale,
                page.description_eng,
                page.description,
                page.description_jpn
            )}
            seo_title={checkLang(
                locale,
                page.SEO_title_eng,
                page.SEO_title,
                page.SEO_title_jpn
            )}
            href={checkLang(
                locale,
                route("career"),
                route("career.id"),
                route("career.jp")
            )}
        >
            <Box className="position-relative">
                <img src={hero} alt="" className="w-100" />
                <Box
                    sx={{
                        position: "absolute",
                        bottom: "50%",
                        left: "50%",
                        transform: "translate(-50%)",
                        padding: "0 12px",
                        width: "90vw",
                    }}
                >
                    <Typography
                        as="h1"
                        sx={{
                            fontSize: "calc(1.375rem + 1.5vw)",
                            letterSpacing: "0.009em",
                            lineHeight: "1.18641911em",
                            fontWeight: "700",
                            color: theme.palette.custom.white,
                            textAlign: "center",
                        }}
                    >
                        {t("careerHero")}
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ backgroundColor: "#1e27391a", padding: "40px 0" }}>
                <div className="container">
                    <div className="row">
                        {careers.map((item) => (
                            <Box
                                key={item.id}
                                className="col-12 col-md-3 col-lg-4 mt-2 mb-2"
                            >
                                <Link
                                    href={
                                        locale == "en"
                                            ? route(
                                                  "career-detail",
                                                  item.slug_eng
                                              )
                                            : locale == "id"
                                            ? route(
                                                  "career-detail.id",
                                                  item.slug
                                              )
                                            : route(
                                                  "career-detail.jp",
                                                  item.slug_jpn
                                              )
                                    }
                                    sx={{
                                        textDecoration: "none",
                                        padding: "40px 30px",
                                        backgroundColor:
                                            theme.palette.custom.white,
                                        display: "flex",
                                        flexDirection: "column",
                                        "&:hover": {
                                            boxShadow:
                                                "2px 1px 15px 1px rgb(168, 166, 166)",
                                            transition: "ease-in 100ms",
                                        },
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: "18px",
                                            textAlign: "left",
                                            fontWeight: "600",
                                            color: theme.palette.custom
                                                .darkBlue,
                                        }}
                                    >
                                        {checkLang(
                                            locale,
                                            item.title_eng,
                                            item.title,
                                            item.title_jpn
                                        )}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: "13px",
                                            textAlign: "left",
                                            margin: "15px 0 0 ",
                                            color: theme.palette.custom
                                                .darkBlue,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "flex-start",
                                            fontWeight: "600",
                                            gap: 1,
                                            svg: {
                                                fontSize: "2rem",
                                            },
                                        }}
                                    >
                                        {t("careerButton")}
                                        <IoIosArrowRoundForward />
                                    </Typography>
                                </Link>
                            </Box>
                        ))}
                    </div>
                </div>
            </Box>
        </Guest>
    );
}

export default Career;
