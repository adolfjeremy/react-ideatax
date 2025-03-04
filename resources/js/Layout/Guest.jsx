import { useEffect, useContext } from "react";
import { Box, SpeedDial, SpeedDialAction, useTheme, Fab } from "@mui/material";
import { usePage, Head, router } from "@inertiajs/react";
import HeaderBar from "@/Components/HeaderBar";
import Footer from "@/Components/Footer";
import { changeLanguage } from "i18next";
import { SpinnerContext } from "@/Context/SpinnerContext";
import { AlertContext } from "@/Context/AlertContext";
import AlertBar from "@/Components/AlertBar";
import Spinner from "@/Components/Spinner";
import { IoLogOutSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { IoLogIn } from "react-icons/io5";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

function Guest({
    children,
    en,
    id,
    jp,
    ch,
    description,
    seo_title,
    href,
    className,
}) {
    const { locale, auth } = usePage().props;
    const { spinnerState } = useContext(SpinnerContext);
    const { alertState } = useContext(AlertContext);
    const { toggleSpinner } = useContext(SpinnerContext);
    const theme = useTheme();
    useEffect(() => {
        changeLanguage(locale);
    }, [locale]);

    const handleLogOut = (e) => {
        e.preventDefault();
        router.post(route("user-logout"), {
            onStart: () => {
                toggleSpinner(true);
            },
            onSuccess: () => {
                reset();
                toggleSpinner(false);
                reset();
            },
            onError: (error) => {
                toggleSpinner(false);
                console.log(error);
            },
            preserveScroll: true,
        });
        e.preventDefault();
    };
    console.log(locale);
    return (
        <>
            <Head>
                <meta name="description" content={description} />
                <meta property="og:description" content={description} />
                <meta property="og:title" content={seo_title} />
                <link rel="canonical" href={href}></link>
                <title>{seo_title}</title>
            </Head>
            <HeaderBar en={en} id={id} jp={jp} ch={ch} />
            <Box
                component="main"
                sx={{ minHeight: "100vh", width: "100%", position: "relative" }}
                className={className}
            >
                {alertState && <AlertBar />}
                {spinnerState && <Spinner />}
                {children}
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    position: "fixed",
                    bottom: 20,
                    right: 20,
                    svg: {
                        fontSize: "1.4rem",
                    },
                }}
            >
                <SpeedDial
                    ariaLabel="SpeedDial basic example"
                    icon={<FaUser />}
                >
                    {auth.user ? (
                        [
                            <SpeedDialAction
                                key="logout"
                                onClick={handleLogOut}
                                sx={{
                                    svg: {
                                        color: "red",
                                        fontSize: "20px",
                                    },
                                }}
                                icon={<IoLogOutSharp />}
                                tooltipTitle="Sign Out"
                            />,
                            auth.user.role === 2 && (
                                <SpeedDialAction
                                    key="admin"
                                    href={route("page.index")}
                                    sx={{
                                        svg: {
                                            color: theme.palette.custom
                                                .darkBlue,
                                            fontSize: "20px",
                                        },
                                    }}
                                    icon={<MdAdminPanelSettings />}
                                    tooltipTitle="Admin Page"
                                />
                            ),
                        ]
                    ) : (
                        <SpeedDialAction
                            href={route("user-login")}
                            sx={{
                                svg: {
                                    color: "green",
                                    fontSize: "20px",
                                },
                            }}
                            icon={<IoLogIn />}
                            tooltipTitle="Login"
                        />
                    )}
                </SpeedDial>
                <Fab
                    href="https://wa.me/62811195708?text=Hello%20Ideatax"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="primary"
                    aria-label="add"
                    sx={{
                        backgroundColor: "#25D366",
                    }}
                >
                    <FaWhatsapp />
                </Fab>
            </Box>
            <Footer />
        </>
    );
}

export default Guest;
