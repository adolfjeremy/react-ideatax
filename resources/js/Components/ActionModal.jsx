import { useState, useContext } from "react";
import { router, useForm, usePage } from "@inertiajs/react";
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

function ActionModal({ param, deleteRoute }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const [isOpen, setOpen] = useState(false);

    const { toggleSpinner } = useContext(SpinnerContext);
    const { toggleAlert } = useContext(AlertContext);

    const { data, setData, put, processing, errors, reset } = useForm({
        title: param.row.title || "",
        SEO_title: param.row.SEO_title || "",
        slug: param.row.slug || "",
        description_eng: param.row.description_eng || "",
        description: param.row.description || "",
        description_jpn: param.row.description_jpn || "",
    });

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const onHandleSubmit = (e) => {
        e.preventDefault();
        put(route("article-category.update", param.row.id), {
            onStart: () => {
                toggleSpinner(true);
            },
            onSuccess: () => {
                handleClose();
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
    const handleDelete = () =>
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
    return (
        <div>
            <IconButton
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
            >
                <BsThreeDotsVertical />
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}
            >
                <MenuItem onClick={() => setOpen(true)}>Edit</MenuItem>
                <Modal
                    open={isOpen}
                    onClose={() => setOpen(false)}
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
                        <Typography id="modal-modal-title" component="h2">
                            Create Category
                        </Typography>
                        <form
                            onSubmit={onHandleSubmit}
                            className="d-flex flex-column align-items-center justify-content-center gap-2 mt-5"
                        >
                            <TextField
                                id="title"
                                variant="outlined"
                                label="Title"
                                value={data.title}
                                onChange={(e) =>
                                    setData("title", e.target.value)
                                }
                                sx={{ width: "100%" }}
                                required
                            />
                            <TextField
                                id="SEO_title"
                                label="SEO Title"
                                variant="outlined"
                                value={data.SEO_title}
                                onChange={(e) =>
                                    setData("SEO_title", e.target.value)
                                }
                                sx={{ width: "100%" }}
                                required
                            />
                            <TextField
                                id="outlined-multiline-static"
                                label="Meta Description English"
                                multiline
                                rows={3}
                                value={data.description_eng}
                                onChange={(e) =>
                                    setData("description_eng", e.target.value)
                                }
                                sx={{ width: "100%" }}
                                required
                            />
                            <TextField
                                id="outlined-multiline-static"
                                label="Meta Description Indonesia"
                                multiline
                                rows={3}
                                value={data.description}
                                onChange={(e) =>
                                    setData("description", e.target.value)
                                }
                                sx={{ width: "100%" }}
                                required
                            />
                            <TextField
                                id="outlined-multiline-static"
                                label="Meta Description Japan"
                                multiline
                                rows={3}
                                value={data.description_jpn}
                                onChange={(e) =>
                                    setData("description_jpn", e.target.value)
                                }
                                sx={{ width: "100%" }}
                                required
                            />
                            <Box className="w-100 d-flex justify-content-end">
                                <Button variant="contained" type="submit">
                                    Submit
                                </Button>
                            </Box>
                        </form>
                    </Box>
                </Modal>
                <MenuItem onClick={handleDelete}>Delete</MenuItem>
            </Menu>
        </div>
    );
}

export default ActionModal;
