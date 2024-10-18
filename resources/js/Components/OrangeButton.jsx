import { Button, useTheme, useMediaQuery } from "@mui/material";

function OrangeButton({ children }) {
    const theme = useTheme();
    const matches = useMediaQuery("(min-width:500px)");
    return (
        <Button
            variant="contained"
            size={matches ? "large" : "small"}
            sx={{
                backgroundColor: theme.palette.custom.orange,
                [theme.breakpoints.down("md")]: {
                    fontSize: "0.8rem",
                },
                [theme.breakpoints.up("md")]: {
                    fontSize: "1.1rem",
                },
                fontWeight: 700,
            }}
            href="#text-buttons"
        >
            {children}
        </Button>
    );
}

export default OrangeButton;
