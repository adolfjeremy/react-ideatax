import { useEffect } from "react";
import { Box } from "@mui/material";
import { usePage, Head } from "@inertiajs/react";
import HeaderBar from "@/Components/HeaderBar";
import Footer from "@/Components/Footer";
import { changeLanguage } from "i18next";

function Guest({ children, en, id, jp, description, seo_title, href }) {
    const { locale } = usePage().props;
    useEffect(() => {
        changeLanguage(locale);
    }, [locale]);
    return (
        <>
            <Head>
                <meta name="description" content={description} />
                <meta property="og:description" content={description} />
                <meta property="og:title" content={seo_title} />
                <link rel="canonical" href={href}></link>
                <title>{seo_title}</title>
            </Head>
            <HeaderBar en={en} id={id} jp={jp} />
            <Box component="main" sx={{ minHeight: "100vh", width: "100%" }}>
                {children}
            </Box>
            <Footer />
        </>
    );
}

export default Guest;
