import { Box, useTheme } from "@mui/material";

function Steps() {
    const theme = useTheme();
    return (
        <div className="row mt-4 position-relative">
            <div className="col-3 d-flex align-items-start justify-content-start position-relative">
                <Box
                    sx={{
                        height: "40px",
                        width: "40px",
                        borderRadius: "50%",
                        backgroundColor: theme.palette.custom.darkBlue,
                        position: "relative",
                        zIndex: 10,
                    }}
                ></Box>
            </div>
            <div className="col-3 d-flex align-items-start justify-content-start position-relative">
                <Box
                    sx={{
                        height: "40px",
                        width: "40px",
                        borderRadius: "50%",
                        backgroundColor: theme.palette.custom.darkBlue,
                        position: "relative",
                        zIndex: 10,
                    }}
                ></Box>
            </div>
            <div className="col-3 d-flex align-items-start justify-content-start position-relative">
                <Box
                    sx={{
                        height: "40px",
                        width: "40px",
                        borderRadius: "50%",
                        backgroundColor: theme.palette.custom.darkBlue,
                        position: "relative",
                        zIndex: 10,
                    }}
                ></Box>
            </div>
            <div className="col-3 d-flex align-items-start justify-content-start position-relative">
                <Box
                    sx={{
                        height: "40px",
                        width: "40px",
                        borderRadius: "50%",
                        backgroundColor: theme.palette.custom.orange,
                        position: "relative",
                        zIndex: 10,
                    }}
                ></Box>
            </div>
            <Box
                className="col-12"
                sx={{
                    position: "absolute",
                    top: "50%",
                    translate: "transformY(-50%)",
                    zIndex: 1,
                }}
            >
                <Box
                    sx={{
                        height: "4px",
                        backgroundColor: theme.palette.custom.darkBlue,
                        width: "100%",
                    }}
                ></Box>
            </Box>
        </div>
    );
}

export default Steps;
