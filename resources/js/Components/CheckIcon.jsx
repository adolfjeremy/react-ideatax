import React from "react";
import { Box } from "@mui/material";
import { FaCheckCircle } from "react-icons/fa";

function CheckIcon() {
    return (
        <Box
            sx={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    width: "20px",
                    height: "20px",
                    backgroundColor: "#ffffff",
                }}
            ></Box>
            <Box
                sx={{
                    position: "relative",
                    svg: {
                        fontSize: "30px !important",
                    },
                }}
            >
                <FaCheckCircle />
            </Box>
        </Box>
    );
}

export default CheckIcon;
