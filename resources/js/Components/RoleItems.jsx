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
                        fontSize: "1.25rem",
                        letterSpacing: "0.009em",
                        fontWeight: "600",
                    }}
                >
                    {checkLang(
                        locale,
                        "Document Review",
                        "Review Dokumen",
                        "書類レビュー"
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
                        "Review and analyze audit documents before submission to the tax examiner.",
                        "Meninjau dan menganalisa laporan keuangan dan rekapitulasi pajak",
                        "税務調査に提出する書類を確認し、分析します。"
                    )}
                </Typography>
            </div>
            <div className="col-12 col-lg-3">
                <Typography
                    as="h3"
                    sx={{
                        color: theme.palette.custom.darkBlue,
                        fontSize: "1.25rem",
                        letterSpacing: "0.009em",
                        fontWeight: "600",
                    }}
                >
                    {checkLang(
                        locale,
                        "Preparation of Formal Responses",
                        "Melakukan Pemeriksaan Pajak",
                        "正式な回答準備"
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
                        "Assist in preparing formal responses from initial findings to the issuance of the SPHP.",
                        "Melakukan Rekapitulasi dan Perhitungan pajak berdasarkan aturan Perpajakan yang Berlaku",
                        "税務調査の初期発見からSPHP発行までの正式な回答を準備します。"
                    )}
                </Typography>
            </div>
            <div className="col-12 col-lg-3">
                <Typography
                    as="h3"
                    sx={{
                        color: theme.palette.custom.darkBlue,
                        fontSize: "1.25rem",
                        letterSpacing: "0.009em",
                        fontWeight: "600",
                    }}
                >
                    {checkLang(
                        locale,
                        "Audit Assistance",
                        "Diskusi dan Menyiapkan SPT",
                        "調査中のサポート"
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
                        "Accompany, attend, and/or represent you during meetings with the tax office.",
                        "Meninjau Akun, SPT PPh Badan dan Berdiskusi dalam Persiapan Pelaporan",
                        "税務署への呼び出しに同席、代理、または出席します。"
                    )}
                </Typography>
            </div>
            <div className="col-12 col-lg-3">
                <Typography
                    as="h3"
                    sx={{
                        color: theme.palette.custom.darkBlue,
                        fontSize: "1.25rem",
                        letterSpacing: "0.009em",
                        fontWeight: "600",
                    }}
                >
                    {checkLang(
                        locale,
                        "Audit Assistance",
                        "Bebas Stres!",
                        "調査中のサポート"
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
                        "Stress-Free Tax Solutions",
                        "Kami urus pelaporan SPT Anda sehingga Anda bisa fokus ke bisnis tanpa khawatir pajak",
                        "ストレスフリー！"
                    )}
                </Typography>
            </div>
        </div>
    );
}

export default RoleItems;
