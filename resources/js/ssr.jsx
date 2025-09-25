import ReactDOMServer from "react-dom/server";
import { createInertiaApp } from "@inertiajs/react";
import createServer from "@inertiajs/react/server";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { route } from "../../vendor/tightenco/ziggy";
import { ThemeProvider, createTheme } from "@mui/material";
import SpinnerContextProvider from "./Context/SpinnerContext";
import AlertContextProvider from "./Context/AlertContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/sass/index.scss";

import "@/utils/i18next";
const theme = createTheme({
    palette: {
        custom: {
            lightBlue: "#005b96",
            darkBlue: "#03396c",
            orange: "#ff844f",
            white: "#fafafa",
            black: "#191919",
        },
    },
    typography: {
        fontFamily: "OpenSauce",
    },
});

createServer((page) =>
    createInertiaApp({
        page,
        render: ReactDOMServer.renderToString,
        title: (title) => `${title}`,
        resolve: (name) =>
            resolvePageComponent(
                `./Pages/${name}.jsx`,
                import.meta.glob("./Pages/**/*.jsx", { eager: true })
            ),
        setup: ({ App, props }) => {
            global.route = (name, params, absolute) =>
                route(name, params, absolute, {
                    ...page.props.ziggy,
                    location: new URL(page.props.ziggy.location),
                });

            return (
                <ThemeProvider theme={theme}>
                    <SpinnerContextProvider>
                        <AlertContextProvider>
                            <App {...props} />
                        </AlertContextProvider>
                    </SpinnerContextProvider>
                </ThemeProvider>
            );
        },
    })
);
