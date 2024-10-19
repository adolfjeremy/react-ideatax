import { useState } from "react";
import {
    Backdrop,
    Box,
    Modal,
    Fade,
    Button,
    Typography,
    useTheme,
    TextField,
} from "@mui/material";

import { IoIosArrowRoundForward } from "react-icons/io";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

function SubsModal({ buttonText }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const theme = useTheme();
    return (
        <div>
            <Button
                sx={{
                    color: theme.palette.custom.white,
                    fontSize: "2.125rem",
                    lineHeight: "1.42967633em",
                    letterSpacing: "0.009em",
                    transition: "all 300ms ease-in-out",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textTransform: "none",
                    gap: "5px",
                    svg: {
                        fontSize: "3.2rem",
                    },
                    [theme.breakpoints.down("sm")]: {
                        fontSize: "1.75rem",
                        svg: {
                            fontSize: "2.2rem",
                        },
                    },
                    "&:hover": {
                        gap: "15px",
                    },
                }}
                onClick={handleOpen}
            >
                {buttonText}
                <IoIosArrowRoundForward />
            </Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography
                            id="transition-modal-title"
                            variant="h6"
                            component="h2"
                            sx={{ textAlign: "center" }}
                        >
                            Subscribe To Ideatax News and Articles
                        </Typography>
                        <form className="compro_form mt-3">
                            <TextField
                                sx={{ width: "100%" }}
                                label="Name"
                                variant="outlined"
                            />
                            <TextField
                                sx={{ width: "100%" }}
                                label="Email"
                                variant="outlined"
                            />
                            <Button variant="contained">Subscribe</Button>
                        </form>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}

export default SubsModal;
