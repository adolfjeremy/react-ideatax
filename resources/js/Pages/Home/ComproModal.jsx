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

function ComproModal({ buttonText }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const theme = useTheme();
    return (
        <div>
            <Button
                variant="contained"
                size="large"
                sx={{
                    backgroundColor: theme.palette.custom.orange,
                    [theme.breakpoints.down("md")]: {
                        fontSize: "0.8rem",
                    },
                    [theme.breakpoints.up("md")]: {
                        fontSize: "1.1rem",
                    },
                    fontWeight: 700,
                }}
                onClick={handleOpen}
            >
                {buttonText}
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
                        >
                            Download Company Profile
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
                            <TextField
                                sx={{ width: "100%" }}
                                label="Handphone Number"
                                variant="outlined"
                            />
                            <TextField
                                sx={{ width: "100%" }}
                                label="Company"
                                variant="outlined"
                            />
                            <Button variant="contained">Submit</Button>
                        </form>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}

export default ComproModal;
