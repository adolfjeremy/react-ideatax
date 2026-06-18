import ExpertiseItem from "@/Components/ExpertiseItem";
import { Box } from "@mui/material"
import { VscLaw } from "react-icons/vsc";
import { HiOutlineReceiptRefund } from "react-icons/hi2";
import { TbWorldDollar } from "react-icons/tb";
import { LuListChecks } from "react-icons/lu";

function ExpertiseList({ checkLang, locale, t, theme }) {
    return (
        <div className="row expertise mt-2 mt-md-4 py-2 px-4">
            <Box sx={{
                display:"grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gridTemplateRows: "repeat(2, 1fr)",
                gap: "1rem",
                [theme.breakpoints.down("md")]: {
                    gridTemplateColumns: "repeat(1, 1fr)",
                    gridTemplateRows: "repeat(1, 1fr)",
                },
            }} className="col-12">
                <ExpertiseItem
                    head="Tax Dispute Resolution"
                    desc="Representing corporate taxpayers throughout the tax controversy lifecycle including SP2DK responses, tax audits, objections, appeals, and tax court proceedings with structured defense and risk mitigation strategies at every stage."
                    image={<VscLaw />}
                    isEven={false}
                    route={checkLang(
                        locale,
                        route("tax-audit"),
                        route("tax-audit.id"),
                        route("tax-audit.jp"),
                        route("tax-audit.ch")
                    )}
                />
                <ExpertiseItem
                    head="Tax Refund Optimization"
                    desc="Assisting tax refund and overpayment recovery processes through compliance review, documentation readiness, and audit support to optimize restitution outcomes while ensuring full regulatory compliance and procedural accuracy."
                    image={<HiOutlineReceiptRefund />}
                    route={checkLang(
                        locale,
                        route("tax-refund"),
                        route("tax-refund.id"),
                        route("tax-refund.jp"),
                        route("tax-refund.ch")
                    )}
                />
                <ExpertiseItem
                    head={t("serviceThreeHead")}
                    desc={t("serviceThreeDesc")}
                    image={<TbWorldDollar />}
                    isEven={false}
                    route={checkLang(
                        locale,
                        route("service-detail", "transfer-pricing-documentation"),
                        route(
                            "service-detail.id",
                            "transfer-pricing-documentation-tp-doc"
                        ),
                        route(
                            "service-detail.jp",
                            "yi-zhuan-jia-ge-wen-shu-tp-doc"
                        ),
                        route("service-detail.ch", "transfer-pricing-documentation")
                    )}
                />
                <ExpertiseItem
                    head={t("serviceFourHead")}
                    desc={t("serviceFourDesc")}
                    image={<LuListChecks />}
                    route={checkLang(
                        locale,
                        route("service-detail", "monthly-tax-compliance"),
                        route("service-detail.id", "Kepatuhan Pajak Bulanan"),
                        route("service-detail.jp", "syue-ci-shui-wu-konpuraiansu"),
                        route("service-detail.ch", "monthly-tax-compliance")
                    )}
                />
            </Box>
        </div>
    );
}

export default ExpertiseList;
