import { useState } from "react";
import { usePage } from "@inertiajs/react";
import { Box, Typography, useTheme } from "@mui/material";
import { RowsPhotoAlbum } from "react-photo-album";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Lightbox from "yet-another-react-lightbox";
import { useTranslation } from "react-i18next";
import Guest from "@/Layout/Guest";
import "react-photo-album/rows.css";
import "yet-another-react-lightbox/styles.css";
import checkLang from "@/utils/checkLang";

import one from "@/assets/images/1.webp";
import two from "@/assets/images/2.webp";
import three from "@/assets/images/3.webp";
import four from "@/assets/images/4.webp";

function LifeAtIdeatax() {
    const { locale, page, galeries } = usePage().props;
    const theme = useTheme();
    const { t } = useTranslation();

    const photos = galeries.map((item) => {
        return {
            src: `/storage/${item.image}`,
            ...item,
        };
    });

    console.log(photos);

    const [index, setIndex] = useState(-1);
    return (
        <Guest
            en={route("life-at-ideatax")}
            id={route("life-at-ideatax.id")}
            jp={route("life-at-ideatax.jp")}
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
                route("life-at-ideatax"),
                route("life-at-ideatax.id"),
                route("life-at-ideatax.jp")
            )}
        >
            <Box sx={{ paddingTop: "120px" }}>
                <div className="container">
                    <div className="row">
                        <Typography
                            variant="h1"
                            sx={{
                                fontSize: "calc(1.375rem + 1.5vw)",
                                fontWeight: "700",
                                letterSpacing: "0.009em",
                                textAlign: "center",
                                color: theme.palette.custom.darkBlue,
                            }}
                        >
                            {t("ideataxLife")}
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "1rem",
                                fontWeight: "400",
                                letterSpacing: "0.009em",
                                textAlign: "center",
                                color: theme.palette.custom.lightBlue,
                            }}
                        >
                            {t("ideataxText")}
                        </Typography>
                    </div>
                </div>
            </Box>
            <Box sx={{ mt: 5, backgroundColor: "#1e27391a" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 py-5">
                            <RowsPhotoAlbum
                                photos={photos}
                                onClick={({ index }) => setIndex(index)}
                                defaultContainerWidth={1024}
                            />
                            <Lightbox
                                slides={photos}
                                open={index >= 0}
                                index={index}
                                close={() => setIndex(-1)}
                                plugins={[Fullscreen, Slideshow, Zoom]}
                            />
                        </div>
                    </div>
                </div>
            </Box>
        </Guest>
    );
}

export default LifeAtIdeatax;
