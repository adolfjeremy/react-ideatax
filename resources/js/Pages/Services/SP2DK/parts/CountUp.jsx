import { Box, Typography, useMediaQuery } from "@mui/material";
import CounterLg from "@/Components/CounterLg";
import circle from "@/assets/images/circle.png";
import circleOrange from "@/assets/images/circle-orange.png";

function CountUp({ locale, theme, checkLang, stats }) {
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
    return (
        <Box mt={8}>
            <div className="container">
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-12 col-md-7 text-center">
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
                            {checkLang(locale, "", "", "", "为什么 ")}
                            <Typography
                                as="span"
                                sx={{
                                    fontSize: "2rem",
                                    letterSpacing: "0.009em",
                                    color: theme.palette.custom.orange,
                                    fontWeight: "700",
                                    mb: 2,
                                    [theme.breakpoints.down("sm")]: {
                                        fontSize: "1.25rem",
                                    },
                                }}
                            >
                                Ideatax
                            </Typography>
                            {checkLang(
                                locale,
                                " Has a Proven Track Record in Resolving Tax Matters",
                                " Telah Dipercaya Menyelesaikan dan Membantu Permasalahan Pajak"
                            )}
                        </Typography>
                    </div>
                </div>
                <div className="row mt-5 d-flex align-items-center justify-content-center">
                    {stats.map((stat) => (
                        <div
                            key={stat.id}
                            className="col-6 col-md-3 d-flex flex-column gap-2 align-items-center justify-content-center"
                        >
                            <CounterLg target={stat.value} />
                            <Typography
                                sx={{
                                    color: theme.palette.custom.orange,
                                    fontSize: "1.25rem",
                                    lineHeight: "1.390625em",
                                    textAlign: "center",
                                    fontWeight: "600",
                                    textTransform: "capitalize",
                                }}
                                className="stat_head m-0"
                            >
                                {checkLang(
                                    locale,
                                    stat.head_eng,
                                    stat.head,
                                    stat.head_jpn
                                )}
                            </Typography>
                        </div>
                    ))}
                </div>
                <div className="row d-flex align-items-center justify-content-center">
                    <Box mt={7} className="col-12 text-center">
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
                                "Across Various Industries",
                                "Dari Berbagai Industri"
                            )}
                        </Typography>
                    </Box>
                </div>
                {!isMobile && (
                    <div className="row px-3">
                        <Box className="col-12">
                            <Box className="row py-3 mt-3">
                                <div className="col-12 d-flex justify-content-center align-items-center text-center">
                                    <Typography
                                        sx={{
                                            borderRight: `2px solid ${theme.palette.custom.orange}`,
                                            px: 2,
                                            fontWeight: 500,
                                            fontSize: "1.2rem",
                                            [theme.breakpoints.down("md")]: {
                                                fontSize: "0.8rem !important",
                                                px: 1,
                                            },
                                        }}
                                    >
                                        {checkLang(
                                            locale,
                                            "Mining and Quarrying",
                                            "Pertambangan dan Penggalian",
                                            "",
                                            "采矿业"
                                        )}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            borderRight: `2px solid ${theme.palette.custom.orange}`,
                                            px: 2,
                                            fontWeight: 500,
                                            fontSize: "1.2rem",
                                            [theme.breakpoints.down("md")]: {
                                                fontSize: "0.8rem !important",
                                                px: 1,
                                            },
                                        }}
                                    >
                                        {checkLang(
                                            locale,
                                            "Manufacturing",
                                            "Manufaktur",
                                            "",
                                            "制造业"
                                        )}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            borderRight: `2px solid ${theme.palette.custom.orange}`,
                                            px: 2,
                                            fontWeight: 500,
                                            fontSize: "1.2rem",
                                            [theme.breakpoints.down("md")]: {
                                                fontSize: "0.8rem !important",
                                                px: 1,
                                            },
                                        }}
                                    >
                                        {checkLang(
                                            locale,
                                            "Business Activities",
                                            "Kegiatan Bisnis",
                                            "",
                                            "商业活动"
                                        )}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            px: 2,
                                            fontWeight: 500,
                                            fontSize: "1.2rem",
                                            [theme.breakpoints.down("md")]: {
                                                fontSize: "0.8rem !important",
                                                px: 1,
                                            },
                                        }}
                                    >
                                        {checkLang(
                                            locale,
                                            "Agricultural, Forestry, and Fishery",
                                            "Pertanian, Kehutanan, dan Perikanan"
                                        )}
                                    </Typography>
                                </div>
                                <div className="col-12 mt-4 d-flex justify-content-center align-items-center text-center">
                                    <Typography
                                        sx={{
                                            borderRight: `2px solid ${theme.palette.custom.orange}`,
                                            px: 2,
                                            fontWeight: 500,
                                            fontSize: "1.2rem",
                                            [theme.breakpoints.down("md")]: {
                                                fontSize: "0.8rem !important",
                                                px: 1,
                                            },
                                        }}
                                    >
                                        {checkLang(
                                            locale,
                                            "Electricity and Gas",
                                            "Listrik dan Gas",
                                            "",
                                            "电力和燃气"
                                        )}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            borderRight: `2px solid ${theme.palette.custom.orange}`,
                                            px: 2,
                                            fontWeight: 500,
                                            fontSize: "1.2rem",
                                            [theme.breakpoints.down("md")]: {
                                                fontSize: "0.8rem !important",
                                                px: 1,
                                            },
                                        }}
                                    >
                                        {checkLang(
                                            locale,
                                            "Hospitality",
                                            "Perhotelan"
                                        )}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            borderRight: `2px solid ${theme.palette.custom.orange}`,
                                            px: 2,
                                            fontWeight: 500,
                                            fontSize: "1.2rem",
                                            [theme.breakpoints.down("md")]: {
                                                fontSize: "0.8rem !important",
                                                px: 1,
                                            },
                                        }}
                                    >
                                        {checkLang(
                                            locale,
                                            "Legal Services",
                                            "Jasa Hukum",
                                            "",
                                            "法律"
                                        )}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            px: 2,
                                            fontWeight: 500,
                                            fontSize: "1.2rem",
                                            [theme.breakpoints.down("md")]: {
                                                fontSize: "0.8rem !important",
                                                px: 1,
                                            },
                                        }}
                                    >
                                        {checkLang(
                                            locale,
                                            "Construction",
                                            "Konstruksi"
                                        )}
                                    </Typography>
                                </div>
                                <div className="col-12 mt-4 d-flex justify-content-center align-items-center text-center">
                                    <Typography
                                        sx={{
                                            borderRight: `2px solid ${theme.palette.custom.orange}`,
                                            px: 2,
                                            fontWeight: 500,
                                            fontSize: "1.2rem",
                                            [theme.breakpoints.down("md")]: {
                                                fontSize: "0.8rem !important",
                                                px: 1,
                                            },
                                        }}
                                    >
                                        {checkLang(
                                            locale,
                                            "Insurance and Financial Services",
                                            "Layanan Asuransi dan Keuangan"
                                        )}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            borderRight: `2px solid ${theme.palette.custom.orange}`,
                                            px: 2,
                                            fontWeight: 500,
                                            fontSize: "1.2rem",
                                            [theme.breakpoints.down("md")]: {
                                                fontSize: "0.8rem !important",
                                                px: 1,
                                            },
                                        }}
                                    >
                                        {checkLang(
                                            locale,
                                            "Transportation and Warehousing",
                                            "Transportasi dan Pergudangan"
                                        )}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            px: 2,
                                            fontWeight: 500,
                                            fontSize: "1.2rem",
                                            [theme.breakpoints.down("md")]: {
                                                fontSize: "0.8rem !important",
                                                px: 1,
                                            },
                                        }}
                                    >
                                        {checkLang(
                                            locale,
                                            "Information and Communication Technology",
                                            "Teknologi Informasi dan Komunikasi"
                                        )}
                                    </Typography>
                                </div>
                                <div className="col-12 mt-4 d-flex justify-content-center align-items-center text-center">
                                    <Typography
                                        sx={{
                                            borderRight: `2px solid ${theme.palette.custom.orange}`,
                                            px: 2,
                                            fontWeight: 500,
                                            fontSize: "1.2rem",
                                            [theme.breakpoints.down("md")]: {
                                                fontSize: "0.8rem !important",
                                                px: 1,
                                            },
                                        }}
                                    >
                                        {checkLang(
                                            locale,
                                            "Retail and Wholesale ",
                                            "Ritel dan Grosir"
                                        )}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            borderRight: `2px solid ${theme.palette.custom.orange}`,
                                            px: 2,
                                            fontWeight: 500,
                                            fontSize: "1.2rem",
                                            [theme.breakpoints.down("md")]: {
                                                fontSize: "0.8rem !important",
                                                px: 1,
                                            },
                                        }}
                                    >
                                        {checkLang(
                                            locale,
                                            "Motor Vehicle Repair",
                                            "Perbaikan Kendaraan Bermotor"
                                        )}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            borderRight: `2px solid ${theme.palette.custom.orange}`,
                                            px: 2,
                                            fontWeight: 500,
                                            fontSize: "1.2rem",
                                            [theme.breakpoints.down("md")]: {
                                                fontSize: "0.8rem !important",
                                                px: 1,
                                            },
                                        }}
                                    >
                                        {checkLang(
                                            locale,
                                            "Private",
                                            "Pribadi",
                                            "",
                                            "个人"
                                        )}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            px: 2,
                                            fontWeight: 500,
                                            fontSize: "1.2rem",
                                            [theme.breakpoints.down("md")]: {
                                                fontSize: "0.8rem !important",
                                                px: 1,
                                            },
                                        }}
                                    >
                                        {checkLang(
                                            locale,
                                            "Other Services",
                                            "Layanan Lainnya"
                                        )}
                                    </Typography>
                                </div>
                            </Box>
                        </Box>
                    </div>
                )}
                {isMobile && (
                    <div className="row">
                        <div className="col-6">
                            <ul style={{ listStyleType: "disc" }}>
                                <Typography component="li">
                                    {checkLang(
                                        locale,
                                        "Mining and Quarrying",
                                        "Pertambangan dan Penggalian"
                                    )}
                                </Typography>
                                <Typography component="li">
                                    {checkLang(
                                        locale,
                                        "Manufacturing",
                                        "Manufaktur"
                                    )}
                                </Typography>{" "}
                                <Typography component="li">
                                    {checkLang(
                                        locale,
                                        "Business Activities",
                                        "Kegiatan Bisnis"
                                    )}
                                </Typography>
                                <Typography component="li">
                                    {checkLang(
                                        locale,
                                        "Agriculture, Forestry, and Fisheries",
                                        "Pertanian, Kehutanan dan Perikanan"
                                    )}
                                </Typography>
                                <Typography component="li">
                                    {checkLang(
                                        locale,
                                        "Hospitality",
                                        "Perhotelan dan Pariwisata"
                                    )}
                                </Typography>
                                <Typography component="li">
                                    {checkLang(
                                        locale,
                                        "Electricity and Gas",
                                        "Listrik dan Gas"
                                    )}
                                </Typography>
                                <Typography component="li">
                                    {checkLang(
                                        locale,
                                        "Legal Services",
                                        "Hukum"
                                    )}
                                </Typography>
                                <Typography component="li">
                                    {checkLang(
                                        locale,
                                        "Construction",
                                        "Konstruksi"
                                    )}
                                </Typography>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul style={{ listStyleType: "disc" }}>
                                <Typography component="li">
                                    {checkLang(
                                        locale,
                                        "Insurance and Financial Services",
                                        "Layanan Asuransi dan Keuangan"
                                    )}
                                </Typography>
                                <Typography component="li">
                                    {checkLang(
                                        locale,
                                        "Transportation and Warehousing",
                                        "Transportasi dan Pergudangan"
                                    )}
                                </Typography>
                                <Typography component="li">
                                    {checkLang(
                                        locale,
                                        "Information and Communication Technology",
                                        "Teknologi Informasi dan Komunikasi"
                                    )}
                                </Typography>
                                <Typography component="li">
                                    {checkLang(
                                        locale,
                                        "Retail and Wholesale",
                                        "Ritel dan Grosir"
                                    )}
                                </Typography>
                                <Typography component="li">
                                    {checkLang(
                                        locale,
                                        "Motor Vehicle Repair",
                                        "Perbaikan Kendaraan Bermotor"
                                    )}
                                </Typography>
                                <Typography component="li">
                                    {checkLang(locale, "Private", "Pribadi")}
                                </Typography>
                                <Typography component="li">
                                    {checkLang(
                                        locale,
                                        "Other Services",
                                        "Layanan Lainnya"
                                    )}
                                </Typography>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </Box>
    );
}

export default CountUp;
