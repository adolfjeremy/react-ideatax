import { useState, useContext } from "react";
import { useForm } from "@inertiajs/react";
import { Box, Modal, Button, Typography, TextField } from "@mui/material";
import { SpinnerContext } from "@/Context/SpinnerContext";
import { AlertContext } from "@/Context/AlertContext";

function HeroModal() {
    const { data, setData, post, processing, errors, reset } = useForm({
        hero: "",
    });
    const [edit, setEdit] = useState(false);
    const { toggleSpinner } = useContext(SpinnerContext);
    const { toggleAlert } = useContext(AlertContext);

    const onHandleSubmit = (e) => {
        e.preventDefault();
        post(
            route("hero.store"),
            {
                onStart: () => {
                    toggleSpinner(true);
                },
                onSuccess: () => {
                    reset();
                    setEdit(false);
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
    return (
        <div className="col-12 d-flex align-items-center justify-content-end">
            <Button
                onClick={() => setEdit(true)}
                variant="contained"
                sx={{
                    textTransform: "none",
                    fontSize: "0.8rem",
                    fontWeight: 500,
                }}
            >
                Add hero
            </Button>
            <Modal
                open={edit}
                onClose={() => setEdit(false)}
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
                    <Typography id="modal-modal-title" component="h2" mb={2}>
                        Select Hero Image
                    </Typography>
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
        </div>
    );
}

export default HeroModal;
