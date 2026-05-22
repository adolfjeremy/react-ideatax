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
    const { locale, page, teams, departments, partners } = usePage().props;

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
                <img src={hero} alt="" className="w-100" />
                <Box
                    sx={{
                        position: "absolute",
                        top: "50px",
                        bottom: "50px",
                        padding: "0 12px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                    }}
                >
                    <Typography
                        as="h1"
                        sx={{
                            fontSize: "3.5893rem",
                            letterSpacing: "0.009em",
                            lineHeight: "1.18641911em",
                            color: theme.palette.custom.white,
                            [theme.breakpoints.down("lg")]: {
                                fontSize: "2.265rem",
                            }, // Typo fix: ';g' menjadi 'lg'
                            [theme.breakpoints.down("md")]: {
                                fontSize: "1rem",
                            },
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
                                className="col-12 py-6"
                                sx={{
                                    background:
                                        "linear-gradient(135deg, #99c7ebff 0%, #e2ebf5ff 50%, #fff 100%)",
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: "1.9375rem",
                                        lineHeight: "1.43749551em",
                                        color: theme.palette.custom.darkBlue,
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
