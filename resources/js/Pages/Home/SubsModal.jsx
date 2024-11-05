import { useState, useContext } from "react";
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
import { IoIosArrowRoundForward } from "react-icons/io";
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

function SubsModal({ buttonText }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const theme = useTheme();
    const { toggleSpinner } = useContext(SpinnerContext);
    const { toggleAlert } = useContext(AlertContext);
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
    });
    const onHandleSubmit = (e) => {
        e.preventDefault();
        post(route("home-subscribe"), {
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
            preserveScroll: true,
        });
    };
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
                        <form
                            onSubmit={onHandleSubmit}
                            className="compro_form mt-3"
                        >
                            <TextField
                                sx={{ width: "100%" }}
                                label="Name"
                                variant="outlined"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                            />
                            <TextField
                                sx={{ width: "100%" }}
                                label="Email"
                                variant="outlined"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />
                            <Button variant="contained" type="submit">
                                Subscribe
                            </Button>
                        </form>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}

export default SubsModal;
