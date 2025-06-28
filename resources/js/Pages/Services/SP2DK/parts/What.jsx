import { Typography } from "@mui/material";
import image from "@/assets/images/what-is-sp2dk.png";

function What({ checkLang, locale, theme }) {
    return (
        <div className="mt-4">
            <div className="container">
                <div className="row">
                    <div className="col-8 d-flex flex-column gap-3 align-items-start justify-content-center">
                        <Typography
                            sx={{
                                fontSize: "2.25rem",
                                color: theme.palette.custom.darkBlue,
                                [theme.breakpoints.down("sm")]: {
                                    fontSize: "1.25rem",
                                },
                            }}
                            component="h2"
                        >
                            {checkLang(
                                locale,
                                "What is SP2DK?",
                                "Apa itu SP2DK?"
                            )}
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "1.25rem",
                                [theme.breakpoints.down("sm")]: {
                                    fontSize: "0.9rem",
                                },
                            }}
                        >
                            {checkLang(
                                locale,
                                "SP2DK stands for Surat Permintaan Penjelasan atas Data dan/atau Keterangan, which means a Request for Explanation of Data and/or Information Notice. SP2DK is a notice from the Directorate General of Taxes (DGT) asking taxpayers to clarify any mismatch between the reported data and the data available to the DGT.",
                                "SP2DK (Surat Permintaan Penjelasan atas Data dan/atau Keterangan) adalah surat yang diterbitkan oleh Direktorat Jenderal Pajak (DJP) kepada Wajib Pajak untuk meminta klarifikasi atas adanya perbedaan data perpajakan yang dimiliki DJP dengan data yang dilaporkan oleh Wajib Pajak."
                            )}
                        </Typography>
                    </div>
                    <div className="col-4 d-flex align-items-center align-items-md-start">
                        <img src={image} alt="what is sp2dk" className="w-80" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default What;
