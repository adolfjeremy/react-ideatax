import { useState, useContext, useRef } from "react";
// import { useForm, usePage } from "@inertiajs/react";

import { Modal, Box, Typography, Button } from "@mui/material";
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

function ComproModal({ open, onClose }) {
    // const { flashMessage } = usePage().props;
    // const [open, setOpen] = useState(false);
    // const [isOpen, setIsOpen] = useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);
    // const { toggleSpinner } = useContext(SpinnerContext);
    // const { toggleAlert } = useContext(AlertContext);
    // const theme = useTheme();
    //     e.preventDefault();
    //     post(route("home-store"), {
    //         onStart: () => {
    //             toggleSpinner(true);
    //         },
    //         onSuccess: () => {
    //             reset();
    //             toggleSpinner(false);
    //             toggleAlert(true);
    //             reset();
    //             handleClose();
    //             setIsOpen(true);
    //         },
    //         onError: (error) => {
    //             toggleSpinner(false);
    //             console.log(error);
    //         },
    //     });
    // };

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-title" variant="h6" component="h2">
                    Ini Modal!
                </Typography>
                <Typography id="modal-description" sx={{ mt: 2 }}>
                    Ini adalah konten dari modal menggunakan Material UI.
                </Typography>
                <Button onClick={onClose} sx={{ mt: 3 }} variant="contained">
                    Tutup
                </Button>
            </Box>
        </Modal>
    );
}

export default ComproModal;
