import { Typography, Box } from "@mui/material";
import tableID from "@/assets/images/table-sp2dk.png";
import tableEN from "@/assets/images/table-sp2dk-en.png";

function Cause({ theme, locale, checkLang }) {
    return (
        <Box mt={7}>
            <div className="container">
                <div className="row">
                    <div className="col-12 px-md-5">
                        <Typography
                            sx={{
                                fontSize: "2.125rem",
                                color: theme.palette.custom.darkBlue,
                                textAlign: "center",
                                marginBottom: "1rem",
                                [theme.breakpoints.down("sm")]: {
                                    fontSize: "1.25rem",
                                },
                            }}
                            component="h2"
                        >
                            {checkLang(
                                locale,
                                "What Triggers an SP2DK?",
                                "Apa Penyebab Diterbitkan SP2DK?"
                            )}
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "1.25rem",
                                textAlign: "center",
                                [theme.breakpoints.down("sm")]: {
                                    fontSize: "0.9rem",
                                },
                            }}
                        >
                            {checkLang(
                                locale,
                                "SP2DK is issued by the DGT when discrepancies arise between a taxpayer's filings and the data available to the DGT. Here are common reasons you might receive an SP2DK:",
                                "SP2DK diterbitkan oleh Direktorat Jenderal Pajak (DJP) ketika terdapat perbedaan antara data yang dilaporkan oleh Wajib Pajak dan data yang dimiliki oleh DJP. Beberapa penyebab umum SP2DK diterbitkan antara lain:"
                            )}
                        </Typography>
                    </div>
                </div>
                <div className="row d-flex justify-content-center align-items-center mt-4">
                    <div className="col-12 col-md-8 d-flex justify-content-center">
                        <img
                            src={checkLang(locale, tableEN, tableID)}
                            loading="lazy"
                            className="w-100"
                            alt={checkLang(
                                locale,
                                "What Are the Reasons for the Issuance of SP2DK?",
                                "Apa Penyebab Diterbitkan SP2DK?"
                            )}
                        />
                    </div>
                    <div className="col-12 mt-2">
                        <Typography
                            sx={{
                                fontSize: "1.25rem",
                                textAlign: "center",
                                fontWeight: "bolder",
                                [theme.breakpoints.down("sm")]: {
                                    fontSize: "0.9rem",
                                },
                            }}
                        >
                            {checkLang(
                                locale,
                                "and several other possible reasons...",
                                "Dan masih banyak lagi..."
                            )}
                        </Typography>
                    </div>
                </div>
            </div>
        </Box>
    );
}

export default Cause;
