import { Box, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import Guest from "@/Layout/Guest";
import TeamItem from "./TeamItem";
import hero from "../../assets/images/team-hero.webp";

function Team() {
    const theme = useTheme();
    const { t } = useTranslation();
    return (
        <Guest>
            <Box className="position-relative">
                <img src={hero} alt="" className="w-100" />
                <Box
                    sx={{
                        position: "absolute",
                        top: "50px",
                        padding: "0 12px",
                    }}
                >
                    <Typography
                        as="h1"
                        sx={{
                            fontSize: "3.5893rem",
                            letterSpacing: "0.009em",
                            lineHeight: "1.18641911em",
                            color: theme.palette.custom.white,
                        }}
                    >
                        {t("teamHead")}
                    </Typography>
                </Box>
            </Box>
            <Box>
                <div className="container-fluid">
                    <div className="row align-items-center justify-content-center">
                        {[1, 2, 3, 4].map((num, i) => (
                            <TeamItem i={i} key={i} />
                        ))}
                    </div>
                </div>
            </Box>
        </Guest>
    );
}

export default Team;
