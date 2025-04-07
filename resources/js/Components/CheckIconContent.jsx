import React from "react";
import { usePage } from "@inertiajs/react";
import { Box } from "@mui/material";
import CheckIcon from "./CheckIcon";
import checkLang from "@/utils/checkLang";

function CheckIconContent({ eng, id, jp, ch }) {
    const { locale } = usePage().props;
    return (
        <Box
            sx={{
                display: "flex",
                gap: 2,
                alignItems: "center",
                justifyContent: "start",
                padding: "0 10px",
                svg: {
                    color: "#45A834",
                    fontSize: "1.2rem !important",
                },
            }}
        >
            <CheckIcon />
            <p className="m-0 text-xl text-white">
                {checkLang(locale, eng, id, jp, ch)}
            </p>
        </Box>
    );
}

export default CheckIconContent;
