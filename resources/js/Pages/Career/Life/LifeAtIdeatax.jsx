import { useState } from "react";
import { Box, Typography, useTheme, Button, TextField } from "@mui/material";
import { RowsPhotoAlbum } from "react-photo-album";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Lightbox from "yet-another-react-lightbox";
import { useTranslation } from "react-i18next";
import Guest from "@/Layout/Guest";
import "react-photo-album/rows.css";
import "yet-another-react-lightbox/styles.css";

import one from "@/assets/images/1.webp";
import two from "@/assets/images/2.webp";
import three from "@/assets/images/3.webp";
import four from "@/assets/images/4.webp";

function LifeAtIdeatax() {
    const theme = useTheme();
    const { t } = useTranslation();

    const photos = [
        {
            src: one,
            width: 1600,
            height: 1200,
        },
        {
            src: two,
            width: 1600,
            height: 1200,
        },
        {
            src: three,
            width: 1600,
            height: 1200,
        },
        {
            src: four,
            width: 1600,
            height: 1200,
        },
        {
            src: one,
            width: 1600,
            height: 1200,
        },
        {
            src: two,
            width: 1600,
            height: 1200,
        },
        {
            src: three,
            width: 1600,
            height: 1200,
        },
        {
            src: four,
            width: 1600,
            height: 1200,
        },
    ];

    const [index, setIndex] = useState(-1);
    return (
        <Guest>
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
