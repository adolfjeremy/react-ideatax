import { Box, Typography, useTheme, Breadcrumbs, Link } from "@mui/material";
import { useTranslation } from "react-i18next";
import Guest from "@/Layout/Guest";
import ConsultationButton from "@/Components/ConsultationButton";

function TeamDetail() {
    const theme = useTheme();
    const { t } = useTranslation();
    return (
        <Guest>
            <Box className="position-relative">
                <img
                    src="https://ideatax.id/storage/team-pp/WLNwJ9Srm0oOZXOfBRm5hrkLJh6K0QMIzZ8iEtN4.png"
                    alt=""
                    className="w-100"
                />
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        transform: "translateY(-50%)",
                        left: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        padding: "0 12px",
                    }}
                >
                    <Typography
                        as="h1"
                        sx={{
                            fontSize: "2.6334rem",
                            letterSpacing: "0.009em",
                            lineHeight: "1.07812416em",
                            color: theme.palette.custom.darkBlue,
                            fontWeight: "700",
                            paddingBottom: "20px",
                            borderBottom: `2px solid ${theme.palette.custom.darkBlue}`,
                            textAlign: "center",
                            [theme.breakpoints.down("sm")]: {
                                fontSize: "0.8rem",
                            },
                        }}
                    >
                        Jonathan Nainggolan
                    </Typography>
                    <Typography
                        as="h1"
                        sx={{
                            fontSize: "2.1603rem",
                            letterSpacing: "0.009em",
                            lineHeight: "1.09375em",
                            color: theme.palette.custom.orange,
                            fontWeight: "400",
                            fontStyle: "italic",
                            marginTop: "15px",
                            textAlign: "center",
                            [theme.breakpoints.down("sm")]: {
                                fontSize: "0.6rem",
                            },
                        }}
                    >
                        Managing Partner
                    </Typography>
                </Box>
            </Box>
            <Box className="py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Breadcrumbs aria-label="breadcrumb">
                                <Link
                                    underline="hover"
                                    color="inherit"
                                    href={route("team")}
                                    sx={{
                                        color: theme.palette.custom.darkBlue,
                                        fontSize: "1.5636rem",
                                        letterSpacing: "0.009em",
                                        lineHeight: "line-height",
                                    }}
                                >
                                    Team
                                </Link>
                                <Typography
                                    sx={{
                                        color: theme.palette.custom.orange,
                                        fontSize: "1.5636rem",
                                        letterSpacing: "0.009em",
                                        lineHeight: "line-height",
                                    }}
                                >
                                    Breadcrumbs
                                </Typography>
                            </Breadcrumbs>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center">
                            <Typography
                                as="h2"
                                sx={{
                                    color: theme.palette.custom.darkBlue,
                                    fontSize: "1.7282rem",
                                    letterSpacing: "0.009em",
                                    lineHeight: "line-height",
                                    fontWeight: "700",
                                    marginBottom: "1.5rem",
                                }}
                            >
                                {t("teamDetailHead1")}
                            </Typography>
                        </div>
                        <Box
                            sx={{
                                p: {
                                    fontSize: "1.15215rem",
                                    lineHeight: "1.44642599em",
                                    letterSpacing: "0.009em",
                                    textAlign: "justify",
                                    color: theme.palette.custom.lightBlue,
                                    fontFamily: "OpenSauce",
                                },
                            }}
                            className="col-12"
                        >
                            <p>
                                Jonathan is Ideatax's partner with 10 years of
                                experience in several tax-related fields. He is
                                an alumnus of Sekolah Tinggi Akuntansi Negara
                                (STAN), who eventually continued his education
                                to University of Indonesia. He later pursued his
                                education in Universitas Bung Karno, majoring in
                                law.
                            </p>
                            <p>
                                Prior to establishing Ideatax, he had been
                                working in a natural resource company and moved
                                to various Tax Consulting Firms. Then, Jonathan
                                worked for 8 years straight in Tax Authorities
                                where he was assigned to Oil and Gas Taxes
                                Office, Jakarta Madya Tax Office, as well as in
                                the Head Office of Directorate General of Taxes.
                                His latest career is in Setiabudi Tax Office
                                with the role of Strategic Account
                                Representative, whose tasks include managing
                                various business sectors such as coal and nickel
                                mining, fintech, manufacture, e-commerce,
                                trading and dealing with business conglomerates
                                in Indonesia.
                            </p>
                        </Box>
                        <div className="col-12 text-center">
                            <Typography
                                as="h2"
                                sx={{
                                    color: theme.palette.custom.darkBlue,
                                    fontSize: "1.7282rem",
                                    letterSpacing: "0.009em",
                                    lineHeight: "line-height",
                                    fontWeight: "700",
                                    marginBottom: "1.5rem",
                                }}
                            >
                                {t("teamDetailHead2")}
                            </Typography>
                        </div>
                        <Box
                            sx={{
                                p: {
                                    fontSize: "1.15215rem",
                                    lineHeight: "1.44642599em",
                                    letterSpacing: "0.009em",
                                    textAlign: "justify",
                                    color: theme.palette.custom.lightBlue,
                                    fontFamily: "OpenSauce",
                                },
                            }}
                            className="col-12"
                        >
                            <p>
                                Jonathan is Ideatax's partner with 10 years of
                                experience in several tax-related fields. He is
                                an alumnus of Sekolah Tinggi Akuntansi Negara
                                (STAN), who eventually continued his education
                                to University of Indonesia. He later pursued his
                                education in Universitas Bung Karno, majoring in
                                law.
                            </p>
                            <p>
                                Prior to establishing Ideatax, he had been
                                working in a natural resource company and moved
                                to various Tax Consulting Firms. Then, Jonathan
                                worked for 8 years straight in Tax Authorities
                                where he was assigned to Oil and Gas Taxes
                                Office, Jakarta Madya Tax Office, as well as in
                                the Head Office of Directorate General of Taxes.
                                His latest career is in Setiabudi Tax Office
                                with the role of Strategic Account
                                Representative, whose tasks include managing
                                various business sectors such as coal and nickel
                                mining, fintech, manufacture, e-commerce,
                                trading and dealing with business conglomerates
                                in Indonesia.
                            </p>
                        </Box>
                    </div>
                </div>
                <ConsultationButton />
            </Box>
        </Guest>
    );
}

export default TeamDetail;
