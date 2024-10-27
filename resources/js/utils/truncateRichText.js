const truncateRichText = (htmlContent, maxLength = 250) => {
    // Menghapus tag HTML menggunakan DOMParser
    const parser = new DOMParser();
    const parsedDocument = parser.parseFromString(htmlContent, "text/html");
    const plainText = parsedDocument.body.textContent || "";

    // Memotong teks jika melebihi batas karakter
    return plainText.length > maxLength
        ? `${plainText.slice(0, maxLength)}...`
        : plainText;
};

export default truncateRichText;
