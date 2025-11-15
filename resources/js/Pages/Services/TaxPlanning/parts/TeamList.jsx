import { Box, Button } from "@mui/material";
import TeamItem from "./TeamItem";
import jovita from "@/assets/images/jovita.png";
import arianta from "@/assets/images/arianta.png";
import taufikurrahman from "@/assets/images/taufikurrahman.png";
import jo from "@/assets/images/jo.png";
import markus from "@/assets/images/markus.png";
import cecilia from "@/assets/images/cecilia.png";

function TeamList({ locale, checkLang, theme, isMobile }) {
    return (
        <Box>
            <div className="container-fluid">
                <Box className="row d-flex align-items-center justify-content-center">
                    <TeamItem
                        theme={theme}
                        name="Jovita Budianto"
                        role="Partner"
                        desc={checkLang(
                            locale,
                            "11+ Years of Experience in Taxation.",
                            "11+ Tahun Pengalaman di Bidang Perpajakan."
                        )}
                        image={jovita}
                        index={1}
                    />
                    <TeamItem
                        theme={theme}
                        name="Arianta john bangun"
                        role="Partner"
                        desc={checkLang(
                            locale,
                            "20+ Years of Experience in Taxation.",
                            "20+ Tahun Pengalaman di Bidang Perpajakan."
                        )}
                        image={arianta}
                        index={2}
                    />
                    <TeamItem
                        theme={theme}
                        name="taufikur-rahman"
                        role="Advisor"
                        desc={checkLang(
                            locale,
                            "30+ Years of Experience in Business and Management.",
                            "30+ Tahun Pengalaman Bisnis dan Management."
                        )}
                        image={taufikurrahman}
                        index={3}
                    />
                    <TeamItem
                        locale={locale}
                        checkLang={checkLang}
                        theme={theme}
                        name="Jonathan Nainggolan"
                        role="Partner"
                        desc={checkLang(
                            locale,
                            "11+ Years of Experience in Taxation.",
                            "11+ Tahun Pengalaman di Bidang Perpajakan."
                        )}
                        image={jo}
                        index={4}
                    />
                    <TeamItem
                        locale={locale}
                        checkLang={checkLang}
                        theme={theme}
                        name="markus iwandi"
                        role="Partner"
                        desc={checkLang(
                            locale,
                            "17+ Years of Experience in Taxation.",
                            "17+ Tahun Pengalaman di Bidang Perpajakan."
                        )}
                        image={markus}
                        index={5}
                    />
                    <TeamItem
                        locale={locale}
                        checkLang={checkLang}
                        theme={theme}
                        name="cecilia kartono"
                        role="Partner"
                        desc={checkLang(
                            locale,
                            "20+ Years of Experience in Taxation.",
                            "20+ Tahun Pengalaman di Bidang Perpajakan."
                        )}
                        image={cecilia}
                        index={6}
                    />
                </Box>
                <div className="row">
                    <div className="col-12 mt-5 d-flex justify-content-center align-items-center">
                        <Button
                            href="https://wa.me/62811195708?text=Hello%20Ideatax"
                            rel="noopener noreferrer"
                            target="_blank"
                            sx={{
                                color: theme.palette.custom.white,
                                fontWeight: "500",
                                backgroundColor: theme.palette.custom.darkBlue,
                                padding: "15px",
                                fontSize: "1.2rem",
                                textTransform: "none",
                                [theme.breakpoints.down("sm")]: {
                                    padding: "7px",
                                    fontSize: "0.8rem",
                                    fontWeight: "500",
                                },
                            }}
                        >
                            {checkLang(
                                locale,
                                "Book a Consultation",
                                "Jadwalkan Konsultasi"
                            )}
                        </Button>
                    </div>
                </div>
            </div>
        </Box>
    );
}

export default TeamList;
