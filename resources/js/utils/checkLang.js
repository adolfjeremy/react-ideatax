const checkLang = (lang, cEn, cId, cJp) =>
    lang == "en" ? cEn : lang == "id" ? cId : cJp == "" ? cEn : cJp;

export default checkLang;
