import React from "react";
import { Box } from "@mui/material";
// import aw25 from "@/assets/images/aw-2025.png";
import aw from "@/assets/images/aw.webp";
import aw1 from "@/assets/images/aw-1.webp";
import aw2 from "@/assets/images/aw-2.webp";
import aw3 from "@/assets/images/aw-3.webp";
import aw4 from "@/assets/images/aw-4.webp";
import aw5 from "@/assets/images/aw-5.webp";

function AwardImage() {
    return (
        <Box className="d-flex align-items-center justify-content-center py-5 mt-2">
            {/* <img src={aw25} className="award_image-2" /> */}
            <img src={aw} className="award_image-2" />
            <img src={aw1} className="award_image-2" />
            <img src={aw2} className="award_image-2" />
            <img src={aw3} className="award_image-2" />
            <img src={aw4} className="award_image-2" />
            <img src={aw5} className="award_image-2" />
        </Box>
    );
}

export default AwardImage;
