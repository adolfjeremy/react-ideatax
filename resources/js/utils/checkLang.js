const checkLang = (lang, cEn, cId, cJp) =>
    lang == "en" ? cEn : lang == "id" ? cId : lang == "jp" ? cJp : cCN == "" ? cEn : cCn;
export default checkLang;
