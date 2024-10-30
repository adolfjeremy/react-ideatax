import "./bootstrap";
import "../css/app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./assets/sass/index.scss";

import { hydrateRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { ThemeProvider, createTheme } from "@mui/material";
import SpinnerContextProvider from "./Context/SpinnerContext";
import AlertContextProvider from "./Context/AlertContext";
import "@/utils/i18next";

const theme = createTheme({
    palette: {
        custom: {
            lightBlue: "#005b96",
            darkBlue: "#03396c",
            orange: "#ff844f",
            white: "#fafafa",
        },
    },
    typography: {
        fontFamily: "OpenSauce",
    },
});

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    title: (title) => `${title}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        hydrateRoot(
            el,
            <ThemeProvider theme={theme}>
                <SpinnerContextProvider>
                    <AlertContextProvider>
                        <App {...props} />
                    </AlertContextProvider>
                </SpinnerContextProvider>
            </ThemeProvider>
        );
    },
    progress: {
        color: "#4B5563",
    },
});
