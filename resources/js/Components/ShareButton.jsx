import {
    EmailShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    WhatsappShareButton,
    TwitterShareButton,
    EmailIcon,
    FacebookIcon,
    LinkedinIcon,
    WhatsappIcon,
    XIcon,
} from "react-share";
import { Box, Typography } from "@mui/material";

function ShareButton({ shareUrl }) {
    return (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Typography sx={{ fontSize: "0.9375rem", fontWeight: "600", m: 0 }}>
                Share:
            </Typography>
            <FacebookShareButton url={shareUrl}>
                <FacebookIcon size={30} round />
            </FacebookShareButton>
            <TwitterShareButton url={shareUrl}>
                <XIcon size={30} round />
            </TwitterShareButton>
            <LinkedinShareButton url={shareUrl}>
                <LinkedinIcon size={30} round />
            </LinkedinShareButton>
            <WhatsappShareButton url={shareUrl}>
                <WhatsappIcon size={30} round />
            </WhatsappShareButton>
            <EmailShareButton url={shareUrl}>
                <EmailIcon size={30} round />
            </EmailShareButton>
        </Box>
    );
}

export default ShareButton;
