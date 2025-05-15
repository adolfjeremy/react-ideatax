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
                    {checkLang(
                        locale,
                        "Document Review",
                        "Review Dokumen",
                        "",
                        "审查文件"
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
                        "Reviewing and analyzing financial statements and tax summaries.",
                        "Meninjau dan menganalisa laporan keuangan dan rekapitulasi pajak.",
                        "",
                        "审查和分析财务报告和税务重述"
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
                        "",
                        "执行税收计算"
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
                        "",
                        "根据适用的税收法规进行税收重述和计算"
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
                        "",
                        "讨论和准备SPT"
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
                        "",
                        "审核账目、企业所得税申报表并讨论准备报告"
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
                        "Stress Free!",
                        "Bebas Stres!",
                        "",
                        "无压力！"
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
                        "We handle your tax return filing so you can focus on running your business worry-free",
                        "Kami urus pelaporan SPT Anda sehingga Anda bisa fokus ke bisnis tanpa khawatir pajak",
                        "",
                        "我们负责您的 SPT 报告，以便您可以专注于您的业务，而不必担心税务问题"
                    )}
                </Typography>
            </div>
        </div>
    );
}

export default RoleItems;
