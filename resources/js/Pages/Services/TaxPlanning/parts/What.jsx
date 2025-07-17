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
                                "What Is Tax Planning?",
                                "Apa itu Perencanaan Pajak (Tax Planning)"
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
                                "Tax planning is a strategic process of minimizing tax liability by ensuring that taxes paid do not exceed the amount actually due. This tax management practice is conducted through legal and compliant methods under prevailing tax regulations.",
                                "Tax planning atau perencanaan pajak adalah upaya mencegah atau meminimalkan beban pajak yang harus dibayarkan kepada negara sehingga pajak yang dibayar tidak melebihi jumlah yang sebenarnya. Salah satu praktik dalam manajemen perpajakan ini dilakukan dengan tetap mematuhi perturan perpajakan yang berlaku."
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
