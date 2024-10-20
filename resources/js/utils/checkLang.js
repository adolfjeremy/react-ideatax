const checkLang = (lang, cEn, cId, cJp) =>
    lang == "en" ? cEn : lang == "id" ? cId : cJp;

export default checkLang;
