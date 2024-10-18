import { Button, useTheme } from "@mui/material";

function ReadMoreButton() {
    const theme = useTheme();
    return (
        <Button
            variant="contained"
            href="#"
            size="small"
            sx={{
                backgroundColor: "#000",
                fontSize: "0.9875rem",
                color: theme.palette.custom.white,
                lineHeight: "1.375em",
                textTransform: "none",
                padding: "0.75rem 1em",
                transition: "300ms ease",
                "&:hover": {
                    fontSize: "1rem",
                },
            }}
        >
            Read Full Article
        </Button>
    );
}

export default ReadMoreButton;
