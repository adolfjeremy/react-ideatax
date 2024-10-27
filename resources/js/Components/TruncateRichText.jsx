import { Typography, useTheme } from "@mui/material";
import truncateRichText from "@/utils/truncateRichText";

function TruncateRichText({ htmlContent, maxLength = 250, style }) {
    const theme = useTheme();
    const truncatedText = truncateRichText(htmlContent, maxLength);
    return <Typography sx={style}>{truncatedText}</Typography>;
}

export default TruncateRichText;
