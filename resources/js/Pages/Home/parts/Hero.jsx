import { Box, Typography } from "@mui/material";
import OrangeButton from "@/Components/OrangeButton";

function Hero({ heroes, t, theme, locale, checkLang }) {
    return (
        <Box
            component="section"
            sx={{
                position: "relative",
                [theme.breakpoints.up("md")]: {
                    maxHeight: "100vh",
                    overflow: "hidden",
                },
            }}
        >
            {heroes.map((hero, i) => (
                <div key={hero.id}>
                    <img
                        src={`/storage/${hero.hero}`}
                        loading="eager"
                        className="d-block w-100"
                    />
                </div>
            ))}
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "start",
                    padding: "0 4rem",
                    [theme.breakpoints.down("md")]: {
                        padding: "0 2rem",
                    },
                }}
            >
                <Box className="row">
                    <Box
                        className="col-12 col-md-8"
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "start",
                            gap: 2,
                        }}
                    >
                        <Typography
                            sx={{
                                color: theme.palette.custom.white,
                                fontWeight: 700,
                                [theme.breakpoints.down("md")]: {
                                    fontSize: "1.6rem",
                                    mt: 7,
                                },
                                [theme.breakpoints.up("md")]: {
                                    fontSize: "2.822rem",
                                },
                                [theme.breakpoints.up("lg")]: {
                                    fontSize: "4rem",
                                },
                                lineHeight: "1.01019687em",
                                letterSpacing: "-.054em",
                                textShadow:
                                    "0 .0375em .159375em rgba(0,0,0,.325)",
                            }}
                            variant="h1"
                        >
                            {t("hero")}
                        </Typography>
                        <OrangeButton
                            href={checkLang(
                                locale,
                                route("contact"),
                                route("contact.id"),
                                route("contact.jp"),
                                route("contact.ch")
                            )}
                        >
                            {t("heroButton")}
                        </OrangeButton>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Hero;
