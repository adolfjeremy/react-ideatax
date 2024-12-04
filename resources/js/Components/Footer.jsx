import React from "react";
import "@/assets/sass/footer.scss";
import checkLang from "@/utils/checkLang";
import { usePage } from "@inertiajs/react";

function Footer() {
    const { locale } = usePage().props;
    return (
        <footer className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-8 left">
                        <h2>PT Ide Solid Indonesia</h2>
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
                            Menara Kadin, South Jakarta, Indonesia
                            <br />
                            Level 26 Jl. HR. Rasuna Said Blok X-5 Kav.2-3, East
                            <br />
                            Kuningan, Setiabudi, South Jakarta, Jakarta
                        </a>
                    </div>
                    <div className="col-12 col-md-4 right d-flex flex-column align-items-end ps-md-5 pt-2 pt-md-0">
                        <div className="text-left w-100 b_border py-2">
                            <a href="{{ route('our-team') }}">
                                {checkLang(locale, "Team", "Tim", "チーム")}
                            </a>
                        </div>
                        <div className="text-left w-100 b_border py-2">
                            <a href="{{ route('articles') }}">
                                {checkLang(
                                    locale,
                                    "Articles",
                                    "Artikel",
                                    "記事"
                                )}
                            </a>
                        </div>
                        <div className="text-left w-100 b_border py-2">
                            <a href="{{ route('careers') }}">
                                {checkLang(
                                    locale,
                                    "Career",
                                    "Karir",
                                    "キャリア"
                                )}
                            </a>
                        </div>
                        <div className="text-left w-100 b_border py-2">
                            <a href="{{ route('contact') }}">
                                {checkLang(
                                    locale,
                                    "Contact Ideatax",
                                    "Hubungi Ideatax",
                                    "Ideataxへのお問い合わせ"
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
