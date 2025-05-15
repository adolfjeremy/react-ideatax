import { Box, Typography, useTheme } from "@mui/material";

function ProblemsQuestioner({ question }) {
    const theme = useTheme();
    return (
        <Box mt={8}>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <Typography
                            as="h2"
                            sx={{
                                fontSize: "2rem",
                                letterSpacing: "0.009em",
                                color: theme.palette.custom.darkBlue,
                                fontWeight: "700",
                                mb: 2,
                                [theme.breakpoints.down("sm")]: {
                                    fontSize: "1.5rem",
                                },
                            }}
                        >
                            {question}
                        </Typography>
                    </div>
                </div>
            </div>
        </Box>
    );
}

export default ProblemsQuestioner;
