const checkLang = (lang, cEn, cId, cJp, cCn) =>
    lang == "en"
        ? cEn
        : lang == "id"
        ? cId
        : lang == "jp"
        ? cJp
        : cJp == ""
        ? cEn
        : lang == "zh-CN"
        ? cCn
        : cEn;
export default checkLang;
