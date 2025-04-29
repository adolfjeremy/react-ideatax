import { Box, Typography, useTheme } from "@mui/material";
import { usePage } from "@inertiajs/react";
import { useTranslation } from "react-i18next";
import Guest from "@/Layout/Guest";
import TeamItem from "./TeamItem";
import hero from "../../assets/images/team-hero.webp";
import checkLang from "@/utils/checkLang";
import ContactForm from "@/Components/ContactForm";

function Team() {
    const theme = useTheme();
    const { t } = useTranslation();
    const { locale, page, teams } = usePage().props;
    return (
        <Guest
            en={route("team")}
            id={route("team.id")}
            jp={route("team.jp")}
            ch={route("team.ch")}
            description={checkLang(
                locale,
                page.description_eng,
                page.description,
                page.description_jpn
                // item.description_ch
            )}
            seo_title={checkLang(
                locale,
                page.SEO_title_eng,
                page.SEO_title,
                page.SEO_title_jpn
                // item.SEO_title_ch
            )}
            href={checkLang(
                locale,
                route("team"),
                route("team.id"),
                route("team.jp"),
                route("team.ch")
            )}
        >
            <Box className="position-relative">
                <img src={hero} alt="" className="w-100" />
                <Box
                    sx={{
                        position: "absolute",
                        top: "50px",
                        padding: "0 12px",
                    }}
                >
                    <Typography
                        as="h1"
                        sx={{
                            fontSize: "3.5893rem",
                            letterSpacing: "0.009em",
                            lineHeight: "1.18641911em",
                            color: theme.palette.custom.white,
                            [theme.breakpoints.down(";g")]: {
                                fontSize: "2.265rem",
                            },
                            [theme.breakpoints.down("md")]: {
                                fontSize: "1rem",
                            },
                        }}
                    >
                        {t("teamHead")}
                    </Typography>
                </Box>
            </Box>
            <Box>
                <div className="container-fluid">
                    <div className="row align-items-center justify-content-center">
                        {teams.map((item) => (
                            <TeamItem
                                key={item.id}
                                image={`/storage/${item.photo}`}
                                name={item.name}
                                position={checkLang(
                                    locale,
                                    item.position,
                                    item.position_id,
                                    item.position_jp,
                                    item.position_ch
                                )}
                                destination={
                                    locale == "en"
                                        ? route("team-detail", item.slug)
                                        : locale == "id"
                                        ? route("team-detail.id", item.slug)
                                        : locale == "jp"
                                        ? route("team-detail.jp", item.slug)
                                        : route("team-detail.ch", item.slug)
                                }
                            />
                        ))}
                    </div>
                </div>
            </Box>
            <Box className="container-fluid mt-4">
                <ContactForm />
            </Box>
        </Guest>
    );
}

export default Team;
