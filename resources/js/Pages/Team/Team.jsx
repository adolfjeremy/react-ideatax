import { Box, Typography, useTheme } from "@mui/material";
import { usePage } from "@inertiajs/react";
import { useTranslation } from "react-i18next";
import { useState } from "react"; // 1. Tambahkan useState
import Guest from "@/Layout/Guest";
import TeamItem from "./TeamItem";
import hero from "../../assets/images/team-hero.webp";
import checkLang from "@/utils/checkLang";
import ContactForm from "@/Components/ContactForm";
import CustomDropdown from "./Detail/CustomDropdown";

function Team() {
    const theme = useTheme();
    const { t } = useTranslation();
    const { locale, page, departments } = usePage().props;

    // 2. Buat state untuk menampung keahlian/departemen yang dipilih
    const [selectedExpertise, setSelectedExpertise] = useState("all");

    // 3. Proses filtering data berdasarkan dropdown
    const filteredDepartments = departments?.filter((department) => {
        if (selectedExpertise === "all") return true;

        // Filter mencocokkan id departemen dengan value yang dipilih di dropdown
        return department.id === selectedExpertise;
    });

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
            <Box className="position-relative">
                <Box
                    component="img"
                    src={hero}
                    alt=""
                    sx={{
                        width: "100%",
                        height: {
                            xs: "180px",
                            sm: "240px",
                            md: "320px",
                            lg: "auto",
                        },
                        objectFit: "cover",
                    }}
                />
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        padding: {
                            xs: "16px 20px",
                            sm: "24px 40px",
                            md: "40px 60px",
                            lg: "50px 80px",
                        },
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                    }}
                >
                    <Typography
                        as="h1"
                        sx={{
                            fontSize: {
                                xs: "1.25rem",
                                sm: "1.75rem",
                                md: "2.265rem",
                                lg: "3.5893rem",
                            },
                            letterSpacing: "0.009em",
                            lineHeight: "1.18641911em",
                            color: theme.palette.custom.white,
                        }}
                    >
                        {t("teamHead")}
                    </Typography>

                    {/* 4. Oper state dan setter-nya ke dalam komponen CustomDropdown */}
                    <CustomDropdown
                        departmentsList={departments}
                        value={selectedExpertise}
                        onChange={setSelectedExpertise}
                    />
                </Box>
            </Box>

            <Box>
                {/* 5. Ganti mapping yang tadinya 'departments' menjadi 'filteredDepartments' */}
                {filteredDepartments?.map((department) => (
                    <Box key={department.id} className="container-fluid">
                        <Box className="row text-center p-2">
                            <Box
                                className="col-12"
                                sx={{
                                    background:
                                        "linear-gradient(135deg, #99c7ebff 0%, #e2ebf5ff 50%, #fff 100%)",
                                    py: { xs: 2.5, sm: 3.5, md: 5, lg: 6 },
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: {
                                            xs: "1.15rem",
                                            sm: "1.35rem",
                                            md: "1.6rem",
                                            lg: "1.9375rem",
                                        },
                                        lineHeight: "1.43749551em",
                                        color: theme.palette.custom.darkBlue,
                                        fontWeight: "600",
                                    }}
                                    as="h2"
                                >
                                    {checkLang(
                                        locale,
                                        department.name_eng,
                                        department.name,
                                        department.name_jpn,
                                        department.name_ch,
                                    )}
                                </Typography>
                            </Box>
                        </Box>
                        <div className="row align-items-center justify-content-center">
                            {department?.teams?.map((item) => (
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
                    </Box>
                ))}
            </Box>
            <Box className="container-fluid mt-4">
                <ContactForm />
            </Box>
        </Guest>
    );
}

export default Team;
