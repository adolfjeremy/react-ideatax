import { Typography, Box } from "@mui/material";
import benefit1 from "@/assets/images/clearance.png";
import benefit2 from "@/assets/images/pemeriksaan.png";
import benefit3 from "@/assets/images/penghematan.png";
import benefit4 from "@/assets/images/mutual.png";
import benefit5 from "@/assets/images/reputasi.png";
import benefit6 from "@/assets/images/kompetitif.png";

function Benefit({ locale, checkLang, theme }) {
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
                                    fontWeight: "500",
                                    mb: 2,
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: "1.25rem",
                                    },
                                }}
                            >
                                {checkLang(
                                    locale,
                                    "Benefits of AEO Certification",
                                    "Manfaat Sertifikasi AEO"
                                )}
                            </Typography>
                        </div>
                    </div>
                </div>
            </Box>
            <Box className="container" mt={3}>
                <div className="row">
                    <Box className="col-12 col-md-4">
                        <Box
                            className="d-flex flex-column align-items-center justify-content-center p-4"
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
                                    "Faster Clearance Process",
                                    "Proses Clearance Lebih Cepat"
                                )}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: "1rem",
                                    letterSpacing: "0.009em",
                                    lineHeight: "1.3em",
                                    color: theme.palette.custom.orange,
                                    textAlign: "center",
                                    fontWeight: "500",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    mt: 2,
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: "0.9rem",
                                    },
                                }}
                            >
                                {checkLang(
                                    locale,
                                    "Priority treatment and expedited inspections at ports and airports.",
                                    "Prioritas penanganan dan pemeriksaan yang lebih cepat di pelabuhan dan bandara."
                                )}
                            </Typography>
                        </Box>
                    </Box>
                    <Box className="col-12 col-md-4 mt-3 mt-md-0">
                        <Box
                            className="d-flex flex-column align-items-center justify-content-center p-4"
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
                                    "Minimized Physical Inspections",
                                    "Pemeriksaan Fisik Berkurang"
                                )}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: "1rem",
                                    letterSpacing: "0.009em",
                                    lineHeight: "1.3em",
                                    color: theme.palette.custom.orange,
                                    textAlign: "center",
                                    fontWeight: "500",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    mt: 2,
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: "0.9rem",
                                    },
                                }}
                            >
                                {checkLang(
                                    locale,
                                    "Minimizes physical inspections by up to 80% for import and export operations.",
                                    "Mengurangi tingkat pemeriksaan fisik barang hingga 80% untuk ekspor-impor."
                                )}
                            </Typography>
                        </Box>
                    </Box>
                    <Box className="col-12 col-md-4 mt-3 mt-md-0">
                        <Box
                            className="d-flex flex-column align-items-center justify-content-center p-4"
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
                                    "Operational Cost Savings",
                                    "Penghematan Biaya Operasional"
                                )}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: "1rem",
                                    letterSpacing: "0.009em",
                                    lineHeight: "1.3em",
                                    color: theme.palette.custom.orange,
                                    textAlign: "center",
                                    fontWeight: "500",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    mt: 2,
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: "0.9rem",
                                    },
                                }}
                            >
                                {checkLang(
                                    locale,
                                    "Priority treatment and expedited inspections at ports and airports.",
                                    "Efisiensi proses yang signifikan menghemat waktu dan biaya operasional."
                                )}
                            </Typography>
                        </Box>
                    </Box>
                </div>
                <div className="row mt-4">
                    <Box className="col-12 col-md-4">
                        <Box
                            className="d-flex flex-column align-items-center justify-content-center p-4"
                            sx={{
                                backgroundImage: `url(${benefit4})`,
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
                                    "Mutual Recognition Access",
                                    "Akses Mutual Recognition"
                                )}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: "1rem",
                                    letterSpacing: "0.009em",
                                    lineHeight: "1.3em",
                                    color: theme.palette.custom.orange,
                                    textAlign: "center",
                                    fontWeight: "500",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    mt: 2,
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: "0.9rem",
                                    },
                                }}
                            >
                                {checkLang(
                                    locale,
                                    "Facilitated trade with countries that have Mutual Recognition Agreements (MRAs).",
                                    "Kemudahan perdagangan dengan negara yang memiliki perjanjian MRA"
                                )}
                            </Typography>
                        </Box>
                    </Box>
                    <Box className="col-12 col-md-4 mt-3 mt-md-0">
                        <Box
                            className="d-flex flex-column align-items-center justify-content-center p-4"
                            sx={{
                                backgroundImage: `url(${benefit5})`,
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
                                    "Company Reputation",
                                    "Reputasi Perusahaan"
                                )}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: "1rem",
                                    letterSpacing: "0.009em",
                                    lineHeight: "1.3em",
                                    color: theme.palette.custom.orange,
                                    textAlign: "center",
                                    fontWeight: "500",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    mt: 2,
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: "0.9rem",
                                    },
                                }}
                            >
                                {checkLang(
                                    locale,
                                    "Minimizes physical inspections by up to 80% for import and export operations.",
                                    "Enhances credibility and trust among international business partners."
                                )}
                            </Typography>
                        </Box>
                    </Box>
                    <Box className="col-12 col-md-4 mt-3 mt-md-0">
                        <Box
                            className="d-flex flex-column align-items-center justify-content-center p-4"
                            sx={{
                                backgroundImage: `url(${benefit6})`,
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
                                    "Competitive Advantage",
                                    "Keunggulan Kompetitif"
                                )}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: "1rem",
                                    letterSpacing: "0.009em",
                                    lineHeight: "1.3em",
                                    color: theme.palette.custom.orange,
                                    textAlign: "center",
                                    fontWeight: "500",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    mt: 2,
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: "0.9rem",
                                    },
                                }}
                            >
                                {checkLang(
                                    locale,
                                    "Better positioning in global business competition.",
                                    "Positioning yang lebih baik dalam persaingan bisnis global."
                                )}
                            </Typography>
                        </Box>
                    </Box>
                </div>
            </Box>
        </div>
    );
}

export default Benefit;
