import React from "react";
import { Box, useTheme } from "@mui/material";
import "@/assets/sass/footer.scss";
import checkLang from "@/utils/checkLang";
import { usePage } from "@inertiajs/react";
import { useTranslation } from "react-i18next";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";

function Footer() {
    const { locale } = usePage().props;
    const theme = useTheme();
    const { t } = useTranslation();
    return (
        <footer className="py-5">
            <div className="container">
                <div className="row">
                    <Box
                        sx={{
                            paddingRight: "200px",
                            [theme.breakpoints.down("md")]: {
                                padding: 2,
                            },
                        }}
                        className="col-12 col-md-8 left"
                    >
                        <h2>
                            {checkLang(
                                locale,
                                "PT Ide Solid Indonesia",
                                "PT Ide Solid Indonesia",
                                "PT インドネシアアイデアソリッド",
                                "Ide Solid Indonesia 有限责任公司"
                            )}
                        </h2>
                        <a
                            target="_blank"
                            className="mt-1"
                            href="mailto:consultant@ideatax.id"
                        >
                            Consultant@ideatax.id
                        </a>
                        <p className="m-0 mt-1">
                            <a target="_blank" href="tel:+622127883327">
                                +62 21 27883327
                            </a>{" "}
                            or{" "}
                            <a target="_blank" href="tel:0811195708">
                                +62 811 195 708
                            </a>
                        </p>
                        <a
                            target="_blank"
                            href="https://www.google.com/maps/place/Menara+Kadin+Indonesia,+Jl.+H.+R.+Rasuna+Said+Blok+X-5+No.Kav.+2-3,+RT.1%2FRW.2,+Kuningan,+Kuningan+Tim.,+Kecamatan+Setiabudi,+Kota+Jakarta+Selatan,+Daerah+Khusus+Ibukota+Jakarta+12950/data=!4m2!3m1!1s0x2e69f3e8cbb9e497:0xc9b90fc0ac3963bc?sa=X&ved=1t:242&ictx=111"
                            rel="noopener noreferrer"
                            className="mt-1"
                        >
                            {t("address")}
                        </a>
                    </Box>
                    <div className="col-12 col-md-4 right d-flex flex-column align-items-start ps-md-5 pt-2 pt-md-0">
                        <Box
                            sx={{
                                display: "flex",
                                gap: 2,
                                justifyContent: "center",
                                alignItems: "center",
                                a: {
                                    svg: {
                                        color: theme.palette.custom.darkBlue,
                                        fontSize: "2.2rem",
                                    },
                                },
                            }}
                        >
                            <a
                                href="https://www.instagram.com/ideatax_idn/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaInstagram className="social_icon" />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/idea-tax/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedin className="social_icon" />
                            </a>
                            <a
                                href="https://www.tiktok.com/@ideatax_idn"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillTikTok className="social_icon" />
                            </a>
                            <a
                                href="https://www.youtube.com/@Ideatax"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaYoutube className="social_icon" />
                            </a>
                        </Box>
                        <div className="text-left w-100 b_border py-2">
                            <a
                                href={checkLang(
                                    locale,
                                    route("team"),
                                    route("team.id"),
                                    route("team.jp")
                                )}
                            >
                                {checkLang(
                                    locale,
                                    "Team",
                                    "Tim",
                                    "チーム",
                                    "团队"
                                )}
                            </a>
                        </div>
                        <div className="text-left w-100 b_border py-2">
                            <a
                                href={checkLang(
                                    locale,
                                    route("articles"),
                                    route("articles.id"),
                                    route("articles.jp"),
                                    route("articles.ch")
                                )}
                            >
                                {checkLang(
                                    locale,
                                    "Articles",
                                    "Artikel",
                                    "記事",
                                    "文章"
                                )}
                            </a>
                        </div>
                        <div className="text-left w-100 b_border py-2">
                            <a
                                href={checkLang(
                                    locale,
                                    route("career"),
                                    route("career.id"),
                                    route("career.jp")
                                    // route("career.jp"),
                                )}
                            >
                                {checkLang(
                                    locale,
                                    "Career",
                                    "Karir",
                                    "キャリア",
                                    "职业"
                                )}
                            </a>
                        </div>
                        <div className="text-left w-100 b_border py-2">
                            <a
                                href={checkLang(
                                    locale,
                                    route("contact"),
                                    route("contact.id"),
                                    route("contact.jp")
                                    // route("contact.ch"),
                                )}
                            >
                                {checkLang(
                                    locale,
                                    "Contact Ideatax",
                                    "Hubungi Ideatax",
                                    "お問い合わせ",
                                    "联系Ideatax"
                                )}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
