import { Button, useTheme, useMediaQuery } from "@mui/material";

function OrangeButton({ children, href }) {
    const theme = useTheme();
    const matches = useMediaQuery("(min-width:500px)");
    return (
        <Button
            variant="outlined"
            size={matches ? "large" : "small"}
            sx={{
                backgroundColor: theme.palette.custom.yellow,
                letterSpacing: "2%",
                lineHeight: "100%",
                color: theme.palette.custom.black,
                fontWeight: 500,
                textTransform: "capitalize",
                borderRadius: "16px",
                [theme.breakpoints.down("md")]: {
                    fontSize: "0.625rem",
                    padding: "0.35rem 0.65rem",
                },
                [theme.breakpoints.up("md")]: {
                    fontSize: "1rem",
                    padding: "0.6875rem 1.5625rem",
                },
                [theme.breakpoints.up("lg")]: {
                    fontSize: "1.2rem",
                },
            }}
            href={href}
        >
            {children}
        </Button>
    );
}

export default OrangeButton;
