import { useState, useContext } from "react";
import { useForm } from "@inertiajs/react";
import { Box, Modal, Button, Typography, TextField } from "@mui/material";
import { FaRegTrashAlt } from "react-icons/fa";
import { SpinnerContext } from "@/Context/SpinnerContext";
import { AlertContext } from "@/Context/AlertContext";

function HeroEdit({ hero }) {
    const {
        data,
        setData,
        post,
        delete: destroy,
        errors,
        reset,
    } = useForm({
        _method: "put",
        hero: "",
        oldImage: hero.hero,
    });

    console.log(data);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { toggleSpinner } = useContext(SpinnerContext);
    const { toggleAlert } = useContext(AlertContext);

    const onHandleSubmit = (e) => {
        e.preventDefault();
        post(
            route("hero.update", hero.id),
            {
                onStart: () => {
                    toggleSpinner(true);
                },
                onSuccess: () => {
                    reset();
                    handleClose();
                    toggleSpinner(false);
                    toggleAlert(true);
                },
                onError: () => {
                    toggleSpinner(false);
                    console.log(errors);
                },
            },
            { forceFormData: true }
        );
    };

    const onHandleDelete = () => {
        destroy(route("hero.destroy", hero.id), {
            onStart: () => {
                toggleSpinner(true);
            },
            onSuccess: () => {
                handleClose();
                toggleSpinner(false);
                toggleAlert(true);
            },
            onError: () => {
                handleClose();
                toggleSpinner(false);
            },
        });
    };
    return (
        <>
            <Button
                key={hero.id}
                onClick={handleOpen}
                className="col-4"
                sx={{
                    img: {
                        transition: "ease-in 250ms",
                        "&:hover": {
                            boxShadow: "1px 1px 5px grey",
                        },
                    },
                }}
            >
                <img src={`/storage/${hero.hero}`} className="w-100" />
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 400,
                        bgcolor: "background.paper",
                        border: "2px solid #000",
                        boxShadow: 24,
                        p: 4,
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            width: "100%",
                            mb: 2,
                        }}
                    >
                        <Typography id="modal-modal-title" component="h2">
                            Edit Hero Image
                        </Typography>
                        <Button
                            onClick={() => onHandleDelete(hero.id)}
                            title="Delete"
                            sx={{
                                svg: {
                                    color: "red",
                                    fontSize: "1.2rem",
                                },
                            }}
                        >
                            <FaRegTrashAlt />
                        </Button>
                    </Box>
                    <form
                        className="d-flex flex-column align-items-end justify-content-center gap-3"
                        onSubmit={onHandleSubmit}
                    >
                        <TextField
                            id="hero"
                            variant="outlined"
                            type="file"
                            onChange={(e) => setData("hero", e.target.files[0])}
                            required
                        />
                        <Button
                            component="button"
                            type="submit"
                            variant="contained"
                        >
                            Submit
                        </Button>
                    </form>
                </Box>
            </Modal>
        </>
    );
}

export default HeroEdit;
