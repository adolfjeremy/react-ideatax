// import { useState } from "react";
import { Button, useTheme } from "@mui/material";
import ComproModal from "./ComproModal";

function ButtonModal() {
    // const [open, setOpen] = useState(false);
    const theme = useTheme();

    return (
        <>
            <Button
                variant="contained"
                size="large"
                sx={{
                    backgroundColor: theme.palette.custom.orange,
                    textTransform: "none",
                    [theme.breakpoints.down("md")]: {
                        fontSize: "0.8rem",
                    },
                    [theme.breakpoints.up("md")]: {
                        fontSize: "1.1rem",
                    },
                    fontWeight: 700,
                }}
                // onClick={() => setOpen(true)}
            >
                Buka Modal
            </Button>
            {/* <ComproModal open={open} onClose={() => setOpen(false)} /> */}
        </>
    );
}

export default ButtonModal;
