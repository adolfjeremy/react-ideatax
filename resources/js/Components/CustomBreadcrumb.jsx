import React from "react";
import { Breadcrumbs } from "@mui/material";

function CustomBreadcrumb({ children, separator }) {
    return (
        <Breadcrumbs
            sx={{
                ".MuiBreadcrumbs-li": {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                },
                ".MuiBreadcrumbs-separator": {
                    fontSize: "0.6rem",
                },
                ".css-1wuw8dw-MuiBreadcrumbs-separator": {
                    fontSize: "0.6rem",
                },
            }}
            separator={separator}
            aria-label="breadcrumb"
        >
            {children}
        </Breadcrumbs>
    );
}

export default CustomBreadcrumb;
