import { useTheme } from "@mui/material";
import { usePage } from "@inertiajs/react";
import Guest from "@/Layout/Guest";
import Hero from "./parts/Hero";
import What from "./parts/What";
import Advantage from "./parts/Advantage";
import Role from "./parts/Role";
import checkLang from "@/utils/checkLang";

function TaxPlanning() {
    const theme = useTheme();
    const { locale, stats } = usePage().props;
    return (
        <Guest
            className="services"
            en={route("sp2dk")}
            id={route("sp2dk.id")}
            jp={route("sp2dk.jp")}
            ch={route("sp2dk.ch")}
            description={checkLang(
                locale,
                "Our service includes supporting companies in responding to and delivering replies to the Request for Explanation of Data and/or Information (SP2DK). We offer guidance and insights for resolving SP2DK issues, as well as represent companies in discussions regarding SP2DK responses with the tax office. Ideatax's assistance services help companies understand, anticipate, and strategically respond to SP2DK issued by the Directorate General of Taxes. With our experience in taxation, we ensure that every step complies with tax regulations to prevent potential risks.",
                "Jasa ini meliputi membantu Perusahaan dalam menjawab dan menyampaikan surat tanggapan atas SP2DK. Memberikan arahan dan masukan penyelesaian SP2DK. Serta mewakili perusahaan dalam pembahasan tanggapan SP2DK dengan kantor pajak. Layanan pendampingan dari Ideatax membantu perusahaan untuk memahami, mengantisipasi, dan merespons secara strategis terhadap Surat Permintaan Penjelasan Data dan/atau Informasi (SP2DK) dari Direktorat Jenderal Pajak. Dengan pengalaman kami di bidang perpajakan, kami memastikan setiap langkah sesuai dengan ketentuan perpajakan guna mencegah potensi risiko yang dapat muncul.",
                "このサービスでは、企業がSP2DK データおよび/または情報の説明要求書 に対して回答書を作成し、提出する際の支援を行います。また、SP2DKの解決方法について指導や助言を提供し、税務署とのSP2DKに関する議論において企業を代理します。 Ideataxの支援サービスは、企業が税務総局からのSP2DKを正確に理解し、予測し、戦略的に対応することをサポートします。税務の専門知識を活かし、各ステップが税務規定に則って進められるようにし、潜在的なリスクを回避します。",
                "该服务包括协助公司回复并向 SP2DK 提交回复信。为完成 SP2DK 提供指导和意见。并代表公司与税务局讨论 SP2DK 应对措施。 Ideatax 的协助服务可帮助公司了解、预测并战略性地响应税务总局要求解释数据和/或信息 (SP2DK) 的信件。凭借我们在税务领域的经验，我们确保每一步都符合税务法规，以防止可能出现的潜在风险。我们的服务优势：(1) 深入分析 SP2DK 的内容和所需数据，(2) 准备结构化且全面的回复，(3) 协助与税务机关讨论或澄清，(4) 支持最大限度降低税务风险并保持合规性。不要等到您的公司接受检查，立即申请免费咨询！"
            )}
            seo_title={checkLang(
                locale,
                "SP2DK Assistance | Service | Ideatax",
                "Pendampingan Surat Permintaan Penjelasan Data dan/atau Informasi (SP2DK) | Service | Ideatax",
                "SP2DK対応支援 | Service | Ideatax",
                "陪同解释数据和/或信息的随附信函 (SP2DK) | Service | Ideatax"
            )}
            href={checkLang(
                locale,
                route("sp2dk"),
                route("sp2dk.id"),
                route("sp2dk.jp"),
                route("sp2dk.ch")
            )}
        >
            <Hero locale={locale} checkLang={checkLang} theme={theme} />
            <What locale={locale} checkLang={checkLang} theme={theme} />
            <Advantage locale={locale} checkLang={checkLang} theme={theme} />
            <Role locale={locale} checkLang={checkLang} theme={theme} />
        </Guest>
    );
}

export default TaxPlanning;
