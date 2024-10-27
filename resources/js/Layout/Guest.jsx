import { useEffect } from "react";
import { Box } from "@mui/material";
import { usePage } from "@inertiajs/react";
import HeaderBar from "@/Components/HeaderBar";
import Footer from "@/Components/Footer";
import { changeLanguage } from "i18next";

function Guest({ children, en, id, jp }) {
    const { locale } = usePage().props;
    useEffect(() => {
        changeLanguage(locale);
    }, [locale]);
    return (
        <>
            <HeaderBar en={en} id={id} jp={jp} />
            <Box component="main" sx={{ minHeight: "100vh", width: "100%" }}>
                {children}
            </Box>
            <Footer />
        </>
    );
}

export default Guest;
