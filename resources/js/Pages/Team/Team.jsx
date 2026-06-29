import { Box, Typography, useTheme, Button } from "@mui/material";
import { usePage, router } from "@inertiajs/react";
import { useTranslation } from "react-i18next";
import { useState } from "react"; // 1. Tambahkan useState
import Guest from "@/Layout/Guest";
import TeamItem from "./TeamItem";
import hero from "../../assets/images/team-hero.webp";
import checkLang from "@/utils/checkLang";
import ContactForm from "@/Components/ContactForm";
import teamHero from "../../assets/images/hero_team.png"
import OrangeButton from "@/Components/OrangeButton";
import CustomDropdown from "./Detail/CustomDropdown";
import ComplexPaginaton from "@/Components/ComplexPaginaton";

function Team() {
    const theme = useTheme();
    const { t } = useTranslation();
     const {
        locale,
        page,
        departments,
        positions,
        teams,
        filters, // 👈 kirim dari backend
    } = usePage().props;
    // ✅ sync dari backend (biar tidak reset saat reload)
    const [selectedExpertise, setSelectedExpertise] = useState(
        filters?.department_id || "all"
    );

    const [selectedPosition, setSelectedPosition] = useState(
        filters?.position_id || "all"
    );

    const handleDepartmentChange = (value) => {
        setSelectedExpertise(value);

        router.get(
            route("team"),
            {
                department_id: value,
                position_id: selectedPosition,
                page: 1,
            },
            {
                preserveState: true,
                replace: true,
            }
        );
    };

    const handlePositionChange = (value) => {
        setSelectedPosition(value);

        router.get(
            route("team"),
            {
                department_id: selectedExpertise,
                position_id: value,
                page: 1,
            },
            {
                preserveState: true,
                replace: true,
            }
        );
    };
  

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
                page.description_jpn,
            )}
            seo_title={checkLang(
                locale,
                page.SEO_title_eng,
                page.SEO_title,
                page.SEO_title_jpn,
            )}
            href={checkLang(
                locale,
                route("team"),
                route("team.id"),
                route("team.jp"),
                route("team.ch"),
            )}
        >
            
            <Box sx={{
                height: "70svh",
                [theme.breakpoints.up("md")]: {
                    height: "100svh",
                },
                overflow: "hidden",
                position:"relative"
            }}>
                <img
                    src={teamHero}
                    alt={page.title_eng}
                    sx={{
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                    }}
                    loading="lazy"
                    className="w-100 h-100 object-fit-cover"
                />
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        flexDirection:"column",
                        alignItems: "start",
                        justifyContent: "center",
                        padding: "0 6rem",
                        zIndex: 100,
                        [theme.breakpoints.down("md")]: {
                            padding: "0 2rem",
                        },
                    }}
            >
                    <Typography
                        sx={{
                            color: theme.palette.custom.white,
                            fontWeight: 300,
                            fontSize: "4rem",
                            lineHeight: "100%",
                            letterSpacing: "2px",
                            mb: 4,
                            [theme.breakpoints.down("md")]: {
                                fontSize: "1.5rem",
                                mb: 0   
                            },
                        }}
                    >
                        Turning tax complexity <br /><strong> into strategic opportunities.</strong>
                    </Typography>
                    <div className="flex items-center justify-start gap-0 gap-md-3 mt-4 mt-lg-3">
                       <OrangeButton
                            href={checkLang(
                                locale,
                                route("contact"),
                                route("contact.id"),
                                route("contact.jp"),
                                route("contact.ch")
                            )}
                        >
                            {t("consult")}
                        </OrangeButton>
                        <Button
                            as="a"
                            variant="outlined"
                            sx={{
                                backgroundColor: "transparent",
                                letterSpacing: "2%",
                                lineHeight: "100%",
                                color: theme.palette.custom.white,
                                fontWeight: 700,
                                border: `0.7px solid ${theme.palette.custom.white}`,
                                borderRadius: "16px",
                                textTransform: "capitalize",
                                textDecoration: "none",
                                "&:hover": {
                                    backgroundColor: theme.palette.custom.white,
                                    color: theme.palette.custom.black,
                                },
                                    [theme.breakpoints.down("md")]: {
                                        fontSize: "0.625rem",
                                        padding: "0.35rem 0.65rem",
                                    },
                                    [theme.breakpoints.up("md")]: {
                                        fontSize: "1rem",
                                        padding: "0.6875rem 1.5625rem",
                                    },
                                    [theme.breakpoints.up("lg")]: {
                                        fontSize: "1.2rem",
                                    },
                            }}
                            href={checkLang(
                                locale,
                                route("contact"),
                                route("contact.id"),
                                route("contact.jp"),
                                route("contact.ch")
                            )}
                        >
                            {t("contactHead")}
                        </Button>
                    </div>
                </Box>
            </Box>
            <Box sx={{
                position:"sticky",
                top:"100px",
                zIndex:3000,
                backgroundColor: theme.palette.custom.white,
                [theme.breakpoints.down("lg")]: {
                    top: "60px",
                },
                [theme.breakpoints.down("md")]: {
                    top: "50px",
                },
            }}>
                <div className="container">
                    <div className="row py-4">
                        <div className="col-12 d-flex align-items-center justify-content-center">
                            <CustomDropdown
                                list={departments}
                                value={selectedExpertise}
                                onChange={handleDepartmentChange}
                            />
                            <CustomDropdown
                                list={positions}
                                value={selectedPosition}
                                onChange={handlePositionChange}
                                menuDropdown="Title"
                            />
                        </div>
                    </div>
                </div>
            </Box>
            <Box>
                <Box className="container-fluid">
                    <div className="row align-items-center justify-content-start justify-content-md-center gap-md-2">
                    {teams.data?.map((item) => (
                        <TeamItem
                                key={item.id}
                                image={`/storage/${item.photo}`}
                                name={item.name}
                                position={checkLang(
                                    locale,
                                    item?.position?.name_eng,
                                    item?.position?.name,
                                    item?.position?.name_jp,
                                    item?.position?.name_ch,
                                )}
                                destination={
                                    locale == "en"
                                        ? route("team-detail", item.slug)
                                        : locale == "id"
                                            ? route(
                                                "team-detail.id",
                                                item.slug,
                                            )
                                            : locale == "jp"
                                            ? route(
                                                    "team-detail.jp",
                                                    item.slug,
                                                )
                                            : route(
                                                    "team-detail.ch",
                                                    item.slug,
                                            )
                                }
                            />
                        ))}
                    </div>
                    <div className="row mt-5">
                        <div className="col-12">
                            <ComplexPaginaton 
                                currentPage={teams.current_page}
                                lastPage={teams.last_page}
                                onPageChange={(page) => {
                                    router.get(
                                        checkLang(
                                            locale,
                                            route("team"),
                                            route("team.id"),
                                            route("team.jp"),
                                        ),
                                        { page },
                                        {
                                            preserveState: true,
                                        }
                                    );
                                }}
                            />
                        </div>
                    </div>
                </Box>
            </Box>
        </Guest>
    );
}

export default Team;
