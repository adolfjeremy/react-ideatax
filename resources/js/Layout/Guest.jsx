import { Box } from "@mui/material";

function Guest({ children }) {
    return (
        <Box component="main" sx={{ minHeight: "100vh", width: "100%" }}>
            {children}
        </Box>
    );
}

export default Guest;
