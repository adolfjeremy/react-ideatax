import aw from "@/assets/images/award/aw.webp";
import aw1 from "@/assets/images/award/aw-2025-2.png";
import aw2 from "@/assets/images/award/aw-2025.png";
import aw3 from "@/assets/images/award/aw-3.webp";
import aw4 from "@/assets/images/award/aw-4.webp";
import aw5 from "@/assets/images/award/aw-5.webp";
import aw6 from "@/assets/images/award/aw-6.webp";
import aw7 from "@/assets/images/award/aw-7.webp";

function AwardDesktop() {
    return (
        <div className="col-12 d-flex align-items-center justify-content-center gap-1">
            <img src={aw} className="award_image" />
            <img src={aw1} className="award_image" />
            <img src={aw2} className="award_image" />
            <img src={aw3} className="award_image" />
            <img src={aw4} className="award_image" />
            <img src={aw5} className="award_image" />
            <img src={aw6} className="award_image" />
            <img src={aw7} className="award_image" />
        </div>
    );
}

export default AwardDesktop;
