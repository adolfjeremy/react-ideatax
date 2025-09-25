import { Typography } from "@mui/material";
import image from "@/assets/images/what-is-aeo.png";

function What({ checkLang, locale, theme }) {
    return (
        <div className="mt-4">
            <div className="container">
                <div className="row">
                    <div className="col-6 d-flex align-items-center align-items-md-start">
                        <img src={image} alt="what is aeo" className="w-100" />
                    </div>
                    <div className="col-6 d-flex flex-column gap-3 align-items-start justify-content-center">
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
                            {checkLang(locale, "What is AEO", "Apa itu AEO?")}
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
                                "Authorized Economic Operator (AEO) is an economic operator recognized by the Directorate General of Customs and Excise (DGCE) for meeting international security standards.",
                                "Authorized Economic Operator (AEO) adalah operator ekonomi yang mendapat pengakuan dari Direktorat Jenderal Bea dan Cukai (DJBC) karena memenuhi standar keamanan internasional. "
                            )}
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default What;
