import ExpertiseItem from "@/Components/ExpertiseItem";

import audit from "@/assets/images/icons/audit.svg";
import refund from "@/assets/images/icons/refund.svg";
import transfer from "@/assets/images/icons/transfer.svg";
import compliance from "@/assets/images/icons/compliance.svg";

function ExpertiseList({ checkLang, locale, t }) {
    return (
        <div className="row expertise mt-1">
            <ExpertiseItem
                head={t("serviceOneHead")}
                desc={t("serviceOneDesc")}
                image={audit}
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
                head={t("serviceTwoHead")}
                desc={t("serviceTwoDesc")}
                image={refund}
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
                image={transfer}
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
                image={compliance}
                route={checkLang(
                    locale,
                    route("service-detail", "monthly-tax-compliance"),
                    route("service-detail.id", "Kepatuhan Pajak Bulanan"),
                    route("service-detail.jp", "syue-ci-shui-wu-konpuraiansu"),
                    route("service-detail.ch", "monthly-tax-compliance")
                )}
            />
        </div>
    );
}

export default ExpertiseList;
