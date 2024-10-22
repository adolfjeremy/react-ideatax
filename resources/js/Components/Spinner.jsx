import { Box, CircularProgress } from "@mui/material";

function Spinner() {
    return (
        <Box
            sx={{
                position: "fixed",
                inset: 0,
                backgroundColor: "rgba(21, 21, 21, 0.2)",
                zIndex: 1400,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <CircularProgress />
        </Box>
    );
}

export default Spinner;
