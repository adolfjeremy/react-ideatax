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
        title: param.row.title || "",
        institution: param.row.institution || "",
        year: param.row.year || "",
        image: param.row.image || "",
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
        put(route("award.update", param.row.id), {
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
                            id="title"
                            variant="outlined"
                            label="Name"
                            value={data.title}
                            onChange={(e) => setData("title", e.target.value)}
                            sx={{ width: "100%" }}
                            required
                        />
                        <TextField
                            id="institution"
                            label="Institution"
                            variant="outlined"
                            value={data.institution}
                            onChange={(e) =>
                                setData("institution", e.target.value)
                            }
                            sx={{ width: "100%" }}
                            required
                        />
                        <TextField
                            id="year"
                            label="Year"
                            variant="outlined"
                            value={data.year}
                            onChange={(e) => setData("year", e.target.value)}
                            sx={{ width: "100%" }}
                            required
                        />
                        <Box>
                            <label className="text-left" htmlFor="image">
                                Image
                            </label>
                            <TextField
                                id="image"
                                type="file"
                                onChange={(e) =>
                                    setData("image", e.target.files[0])
                                }
                                variant="outlined"
                                sx={{ width: "100%", mt: 1 }}
                            />
                        </Box>
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
