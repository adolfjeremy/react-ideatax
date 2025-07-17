import { Typography, Box } from "@mui/material";
import benefit1 from "@/assets/images/benefit-1.png";
import benefit2 from "@/assets/images/benefit-2.png";
import benefit3 from "@/assets/images/benefit-3.png";

function Advantage({ theme, locale, checkLang }) {
    return (
        <div>
            <Box mt={5}>
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
                                        fontSize: "1.25rem",
                                    },
                                }}
                            >
                                {checkLang(
                                    locale,
                                    "Benefits of Tax Planning",
                                    "Manfaat Melakukan Tax Planning"
                                )}
                            </Typography>
                        </div>
                    </div>
                </div>
            </Box>
            <Box className="container" mt={5}>
                <div className="row">
                    <Box className="col-12 col-md-4">
                        <Box
                            className="d-flex flex-column align-items-center justify-content-end p-4"
                            sx={{
                                backgroundImage: `url(${benefit1})`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                height: "35vh",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                [theme.breakpoints.down("md")]: {
                                    height: "20vh",
                                },
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: "1.5rem",
                                    letterSpacing: "0.009em",
                                    lineHeight: "1.3em",
                                    color: theme.palette.custom.white,
                                    textAlign: "center",
                                    fontWeight: "500",
                                    height: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: "0.9rem",
                                    },
                                }}
                            >
                                {checkLang(
                                    locale,
                                    "Optimize the Amount of Tax Payable by Individuals or Companies",
                                    "Mengoptimalkan Beban Pajak yang Harus Dibayarkan oleh Individu atau Perusahaan"
                                )}
                            </Typography>
                        </Box>
                    </Box>
                    <Box className="col-12 col-md-4 mt-3 mt-md-0">
                        <Box
                            className="d-flex flex-column align-items-center justify-content-end p-4"
                            sx={{
                                backgroundImage: `url(${benefit2})`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                height: "35vh",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                [theme.breakpoints.down("md")]: {
                                    height: "20vh",
                                },
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: "1.5rem",
                                    letterSpacing: "0.009em",
                                    lineHeight: "1.3em",
                                    color: theme.palette.custom.white,
                                    textAlign: "center",
                                    fontWeight: "500",
                                    height: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: "0.9rem",
                                    },
                                }}
                            >
                                {checkLang(
                                    locale,
                                    "Improve Cash Flow Management",
                                    "Prevent Potential Tax Issues"
                                )}
                            </Typography>
                        </Box>
                    </Box>
                    <Box className="col-12 col-md-4 mt-3 mt-md-0">
                        <Box
                            className="d-flex flex-column align-items-center justify-content-end p-4"
                            sx={{
                                backgroundImage: `url(${benefit3})`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                height: "35vh",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                [theme.breakpoints.down("md")]: {
                                    height: "20vh",
                                },
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: "1.5rem",
                                    letterSpacing: "0.009em",
                                    lineHeight: "1.3em",
                                    color: theme.palette.custom.white,
                                    textAlign: "center",
                                    fontWeight: "500",
                                    height: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: "0.9rem",
                                    },
                                }}
                            >
                                {checkLang(
                                    locale,
                                    "Prevent Potential Tax Issues",
                                    " Kurangi Risiko Masalah Pajak"
                                )}
                            </Typography>
                        </Box>
                    </Box>
                </div>
            </Box>
        </div>
    );
}

export default Advantage;
