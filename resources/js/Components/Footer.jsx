import React from "react";
import { Box, useTheme } from "@mui/material";
import "@/assets/sass/footer.scss";
import checkLang from "@/utils/checkLang";
import { usePage } from "@inertiajs/react";

function Footer() {
    const { locale } = usePage().props;
    const theme = useTheme();
    return (
        <footer className="py-5">
            <div className="container">
                <div className="row">
                    <Box
                        sx={{
                            paddingRight: "200px",
                            [theme.breakpoints.down("md")]: {
                                padding: 0,
                            },
                        }}
                        className="col-12 col-md-8 left"
                    >
                        <h2>
                            {checkLang(
                                locale,
                                "PT Ide Solid Indonesia",
                                "PT Ide Solid Indonesia",
                                "PT インドネシアアイデアソリッド"
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
                            {locale === "jp" &&
                                "メナラ・カディン、南ジャカルタ、インドネシアレベル26 Jl. HR. ラスナ・サイード通り ブロック X-5 カブ2-3東クニンガン、セティアブディ、南ジャカルタ、ジャカルタ"}
                            {locale !== "jp" &&
                                "Menara Kadin Indonesia, Jl. H. R. Rasuna Said Blok X-5 No.Kav.2-3, RT.1/RW.2, Kuningan, Kuningan Tim., Kecamatan Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12950"}
                        </a>
                    </Box>
                    <div className="col-12 col-md-4 right d-flex flex-column align-items-end ps-md-5 pt-2 pt-md-0">
                        <div className="text-left w-100 b_border py-2">
                            <a
                                href={checkLang(
                                    locale,
                                    route("team"),
                                    route("team.id"),
                                    route("team.jp")
                                )}
                            >
                                {checkLang(locale, "Team", "Tim", "チーム")}
                            </a>
                        </div>
                        <div className="text-left w-100 b_border py-2">
                            <a
                                href={checkLang(
                                    locale,
                                    route("articles"),
                                    route("articles.id"),
                                    route("articles.jp")
                                )}
                            >
                                {checkLang(
                                    locale,
                                    "Articles",
                                    "Artikel",
                                    "記事"
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
                                )}
                            >
                                {checkLang(
                                    locale,
                                    "Career",
                                    "Karir",
                                    "キャリア"
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
                                )}
                            >
                                {checkLang(
                                    locale,
                                    "Contact Ideatax",
                                    "Hubungi Ideatax",
                                    "お問い合わせ"
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
