import { useState, useContext } from "react";
import { router, useForm } from "@inertiajs/react";
import {
    IconButton,
    Menu,
    MenuItem,
    Button,
    Modal,
    Typography,
    Box,
    TextField,
} from "@mui/material";
import { BsThreeDotsVertical } from "react-icons/bs";
import { SpinnerContext } from "@/Context/SpinnerContext";
import { AlertContext } from "@/Context/AlertContext";

function ActionModalButton({ param, deleteRoute }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const openMenu = Boolean(anchorEl);
    const [isModalOpen, setModalOpen] = useState(false);

    const { toggleSpinner } = useContext(SpinnerContext);
    const { toggleAlert } = useContext(AlertContext);

    // Menggunakan field baru yang diminta
    const { data, setData, put, errors, reset } = useForm({
        name: param.row.name || "",
        name_eng: param.row.name_eng || "",
        name_jpn: param.row.name_jpn || "",
        name_ch: param.row.name_ch || "",
        order: param.row.order || "",
    });

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleEditClick = () => {
        setModalOpen(true);
        handleMenuClose();
    };

    const onHandleSubmit = (e) => {
        e.preventDefault();
        put(route("position.update", param.row.id), {
            onStart: () => {
                toggleSpinner(true);
            },
            onSuccess: () => {
                setModalOpen(false);
                reset();
                toggleSpinner(false);
                toggleAlert(true);
            },
            onError: () => {
                toggleSpinner(false);
                console.log(errors);
            },
        });
    };

    const handleDelete = () => {
        handleMenuClose();
        router.delete(deleteRoute, {
            onBefore: () => confirm("Are you sure you want to delete this?"),
            onStart: () => {
                toggleSpinner(true);
            },
            onSuccess: () => {
                toggleSpinner(false);
                toggleAlert(true);
            },
        });
    };

    return (
        <div>
            <IconButton onClick={handleMenuClick}>
                <BsThreeDotsVertical />
            </IconButton>

            <Menu anchorEl={anchorEl} open={openMenu} onClose={handleMenuClose}>
                <MenuItem onClick={handleEditClick}>Edit</MenuItem>
                <MenuItem onClick={handleDelete} sx={{ color: "error.main" }}>
                    Delete
                </MenuItem>
            </Menu>

            <Modal
                open={isModalOpen}
                onClose={() => setModalOpen(false)}
                aria-labelledby="modal-title"
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
                    <Typography id="modal-title" component="h2" variant="h6">
                        Edit Item
                    </Typography>

                    <form
                        onSubmit={onHandleSubmit}
                        className="d-flex flex-column gap-3 mt-4"
                    >
                        <TextField
                            label="Name (Default)"
                            variant="outlined"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            fullWidth
                            required
                        />
                        <TextField
                            label="Name (English)"
                            variant="outlined"
                            value={data.name_eng}
                            onChange={(e) =>
                                setData("name_eng", e.target.value)
                            }
                            fullWidth
                            required
                        />
                        <TextField
                            label="Name (Japanese)"
                            variant="outlined"
                            value={data.name_jpn}
                            onChange={(e) => setData("name_jp", e.target.value)}
                            fullWidth
                            required
                        />
                        <TextField
                            label="Name (Chinese)"
                            variant="outlined"
                            value={data.name_ch}
                            onChange={(e) => setData("name_ch", e.target.value)}
                            fullWidth
                            required
                        />
                        <TextField
                            id="order"
                            label="Order"
                            variant="outlined"
                            value={data.order}
                            onChange={(e) => setData("order", e.target.value)}
                            sx={{ width: "100%" }}
                            required
                        />
                        <Box className="w-100 d-flex justify-content-end mt-2">
                            <Button variant="contained" type="submit">
                                Submit
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}

export default ActionModalButton;
