import { useState, useContext, useRef } from "react";
import { useForm } from "@inertiajs/react";
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
import { SpinnerContext } from "@/Context/SpinnerContext";
import { AlertContext } from "@/Context/AlertContext";

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
    const { toggleSpinner } = useContext(SpinnerContext);
    const { toggleAlert } = useContext(AlertContext);
    const theme = useTheme();
    const recaptcha = useRef();
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        tel: "",
        company: "",
    });

    console.log(data);

    const onHandleSubmit = (e) => {
        e.preventDefault();
        post(route("home-store"), {
            onStart: () => {
                toggleSpinner(true);
            },
            onSuccess: () => {
                reset();
                toggleSpinner(false);
                toggleAlert(true);
                handleClose();
                reset();
            },
            onError: (error) => {
                toggleSpinner(false);
                console.log(error);
            },
        });
    };

    return (
        <div>
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
                        <form
                            onSubmit={onHandleSubmit}
                            className="compro_form mt-3"
                        >
                            <TextField
                                sx={{ width: "100%" }}
                                label="Name"
                                variant="outlined"
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                            />
                            <TextField
                                sx={{ width: "100%" }}
                                label="Email"
                                variant="outlined"
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />
                            <TextField
                                sx={{ width: "100%" }}
                                label="Handphone Number"
                                variant="outlined"
                                onChange={(e) => setData("tel", e.target.value)}
                            />
                            <TextField
                                sx={{ width: "100%" }}
                                label="Company"
                                variant="outlined"
                                onChange={(e) =>
                                    setData("company", e.target.value)
                                }
                            />
                            <Button variant="contained" type="submit">
                                Submit
                            </Button>
                        </form>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}

export default ComproModal;
