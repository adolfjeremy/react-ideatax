import React from "react";
import { usePage } from "@inertiajs/react";
import { Typography, useTheme } from "@mui/material";
import checkLang from "@/utils/checkLang";

function RoleItems() {
    const theme = useTheme();
    const { locale } = usePage().props;
    return (
        <div className="row mt-4">
            <div className="col-12 col-lg-3">
                <Typography
                    as="h3"
                    sx={{
                        color: theme.palette.custom.darkBlue,
                        fontSize: "1.4rem",
                        letterSpacing: "0.009em",
                        fontWeight: "600",
                    }}
                >
                    {checkLang(locale, "Document Review", "Review Dokumen", "")}
                </Typography>
                <Typography
                    sx={{
                        color: theme.palette.custom.black,
                        fontSize: "1rem",
                        letterSpacing: "0.009em",
                        fontWeight: 500,
                        mt: 1,
                    }}
                >
                    {checkLang(
                        locale,
                        "Reviewing and analyzing financial statements and tax summaries.",
                        "Meninjau dan menganalisa laporan keuangan dan rekapitulasi pajak.",
                        ""
                    )}
                </Typography>
            </div>
            <div className="col-12 col-lg-3">
                <Typography
                    as="h3"
                    sx={{
                        color: theme.palette.custom.darkBlue,
                        fontSize: "1.4rem",
                        letterSpacing: "0.009em",
                        fontWeight: "600",
                    }}
                >
                    {checkLang(
                        locale,
                        "Tax Calculations",
                        "Melakukan Perhitungan Pajak",
                        ""
                    )}
                </Typography>
                <Typography
                    sx={{
                        color: theme.palette.custom.black,
                        fontSize: "1rem",
                        letterSpacing: "0.009em",
                        fontWeight: 500,
                        mt: 1,
                    }}
                >
                    {checkLang(
                        locale,
                        "Performing tax calculations and reconciliations according to applicable tax regulations.",
                        "Melakukan Rekapitulasi dan Perhitungan pajak berdasarkan aturan Perpajakan yang Berlaku.",
                        ""
                    )}
                </Typography>
            </div>
            <div className="col-12 col-lg-3">
                <Typography
                    as="h3"
                    sx={{
                        color: theme.palette.custom.darkBlue,
                        fontSize: "1.4rem",
                        letterSpacing: "0.009em",
                        fontWeight: "600",
                    }}
                >
                    {checkLang(
                        locale,
                        "Tax Return Preparation and Filing",
                        "Diskusi dan Menyiapkan SPT",
                        ""
                    )}
                </Typography>
                <Typography
                    sx={{
                        color: theme.palette.custom.black,
                        fontSize: "1rem",
                        letterSpacing: "0.009em",
                        fontWeight: 500,
                        mt: 1,
                    }}
                >
                    {checkLang(
                        locale,
                        "Reviewing accounts, Corporate Income Tax Returns, followed by discussions for filing preparation",
                        "Meninjau akun, SPT PPh Badan dan berdiskusi dalam persiapan pelaporan.",
                        ""
                    )}
                </Typography>
            </div>
            <div className="col-12 col-lg-3">
                <Typography
                    as="h3"
                    sx={{
                        color: theme.palette.custom.darkBlue,
                        fontSize: "1.4rem",
                        letterSpacing: "0.009em",
                        fontWeight: "600",
                    }}
                >
                    {checkLang(locale, "Stress Free!", "Bebas Stres!", "")}
                </Typography>
                <Typography
                    sx={{
                        color: theme.palette.custom.black,
                        fontSize: "1rem",
                        letterSpacing: "0.009em",
                        fontWeight: 500,
                        mt: 1,
                    }}
                >
                    {checkLang(
                        locale,
                        "We handle your tax return filing so you can focus on running your business worry-free",
                        "Kami urus pelaporan SPT Anda sehingga Anda bisa fokus ke bisnis tanpa khawatir pajak",
                        ""
                    )}
                </Typography>
            </div>
        </div>
    );
}

export default RoleItems;
