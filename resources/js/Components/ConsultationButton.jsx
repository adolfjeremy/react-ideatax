import arrowIcon from "../assets/images/icons/arrow.svg";
import { useTranslation } from "react-i18next";

function ConsultationButton({ center = false }) {
    const { t } = useTranslation();
    return (
        <div className="container consultation_cta">
            <div className="row py-4">
                <div
                    className={`col-12 mt-3 ${
                        center
                            ? "d-flex align-items-center justify-content-center"
                            : ""
                    }`}
                >
                    <a href="#">
                        {t("consult")}
                        <img src={arrowIcon} alt="Consultation Now" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ConsultationButton;
