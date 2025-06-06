import { Box, Typography, useTheme } from "@mui/material";
import checkLang from "@/utils/checkLang";

function ServiceDetailBox({
    children,
    locale,
    headingEng,
    headingId,
    headingJp,
    headingCh,
    tagLineEng,
    tagLineId,
    tagLineJp,
    tagLineCh,
}) {
    const theme = useTheme();
    return (
        <Box
            sx={{
                boxShadow:
                    "inset 10px 10px 20px rgba(0, 0, 0, 0.4), inset -10px -10px 20px rgba(255, 255, 255, 0.6)",
                borderRadius: "50px",
                padding: "30px",
            }}
        >
            <Typography
                variant="h3"
                sx={{
                    color: theme.palette.custom.white,
                    fontSize: "1.675rem",
                }}
                className="text-center "
            >
                {locale == "en" && (
                    <>
                        <Typography
                            variant="span"
                            sx={{
                                background: theme.palette.custom.darkBlue,
                                padding: "1px 7px",
                            }}
                        >
                            {checkLang(
                                locale,
                                tagLineEng,
                                tagLineId,
                                tagLineJp,
                                tagLineCh
                            )}
                        </Typography>
                    </>
                )}
                {locale == "zh-CN" && (
                    <>
                        <Typography
                            variant="span"
                            sx={{
                                background: theme.palette.custom.darkBlue,
                                padding: "1px 7px",
                            }}
                        >
                            {checkLang(
                                locale,
                                tagLineEng,
                                tagLineId,
                                tagLineJp,
                                tagLineCh
                            )}
                        </Typography>
                    </>
                )}
                {checkLang(locale, headingEng, headingId, headingJp, headingCh)}
            </Typography>
            <hr />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                }}
            >
                {children}
            </Box>
        </Box>
    );
}

export default ServiceDetailBox;
