import { Typography, useTheme } from "@mui/material";

function TruncateRichText({ htmlContent, style }) {
    const theme = useTheme();
    return <Typography sx={style}>{htmlContent}</Typography>;
}

export default TruncateRichText;
