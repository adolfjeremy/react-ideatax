const checkLang = (lang, cEn, cId, cJp, cCn) => {
    if (lang === "en") return cEn;
    if (lang === "id") return cId;
    if (lang === "jp") return cJp || cEn; // Jika cJp kosong atau null, gunakan cEn
    if (lang === "zh-CN") return cCn || cEn; // Jika cCn kosong atau null, gunakan cEn
    return cEn; // Default ke bahasa Inggris jika tidak ada yang cocok
};
export default checkLang;
