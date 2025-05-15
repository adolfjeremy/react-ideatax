import { Typography, Link, useTheme, Box } from "@mui/material";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useTranslation } from "react-i18next";

function ExpertiseItem({ head, desc, image, route, isEven = true }) {
    const theme = useTheme();
    const { t } = useTranslation();
    return (
        <Box
            className="col-12 col-md-6 mt-2 mt-md-4 py-2"
            sx={{
                img: {
                    [theme.breakpoints.down("md")]: {
                        display: "none",
                    },
                },
                [theme.breakpoints.down("md")]: {
                    backgroundColor: `${isEven ? "" : "rgba(0,0,0,.1)"}`,
                },
            }}
        >
            <img src={image} alt={head} />
            <Typography
                className="mt-3"
                sx={{
                    fontWeight: 700,
                    color: theme.palette.custom.darkBlue,
                    lineHeight: "1.42856633em",
                    letterSpacing: "0.009em",
                    fontSize: "1.6875rem",
                    [theme.breakpoints.down("md")]: {
                        textAlign: "center",
                        fontSize: "1.4rem",
                    },
                }}
                as="h3"
            >
                {head}
            </Typography>
            <Typography
                sx={{
                    color: theme.palette.custom.darkBlue,
                    lineHeight: "1.42856633em",
                    letterSpacing: "0.009em",
                    fontSize: "1.15rem",
                    margin: "20px 0 10px 0",
                    [theme.breakpoints.down("md")]: {
                        textAlign: "center",
                        fontSize: "0.9rem",
                    },
                }}
            >
                {desc}
            </Typography>
            <Link
                href={route}
                underline="none"
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "starts",
                    gap: 1,
                    fontSize: "0.75rem",
                    fontWeight: "600",
                    color: theme.palette.custom.orange,
                    transition: "all 300ms ease-in-out",
                    svg: {
                        color: theme.palette.custom.orange,
                        fontSize: "1.4rem",
                    },
                    "&:hover": {
                        color: theme.palette.custom.lightBlue,
                        fontSize: "0.8rem",
                        svg: {
                            color: theme.palette.custom.lightBlue,
                            fontSize: "1.5rem",
                        },
                    },
                    [theme.breakpoints.down("md")]: {
                        justifyContent: "center",
                    },
                }}
            >
                {t("read")}
                <IoIosArrowRoundForward />
            </Link>
        </Box>
    );
}

export default ExpertiseItem;
