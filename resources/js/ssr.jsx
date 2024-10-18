import ReactDOMServer from "react-dom/server";
import { createInertiaApp } from "@inertiajs/react";
import createServer from "@inertiajs/react/server";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { route } from "../../vendor/tightenco/ziggy";
import { ThemeProvider, createTheme } from "@mui/material";
import "bootstrap/scss/bootstrap.scss";
import "./assets/sass/index.scss";

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

createServer((page) =>
    createInertiaApp({
        page,
        render: ReactDOMServer.renderToString,
        title: (title) => `${title} - ${appName}`,
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
                    <App {...props} />
                </ThemeProvider>
            );
        },
    })
);
