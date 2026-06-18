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
    Tabs,
    Tab
} from "@mui/material";
import { BsThreeDotsVertical } from "react-icons/bs";
import { SpinnerContext } from "@/Context/SpinnerContext";
import { AlertContext } from "@/Context/AlertContext";
import a11yProps from "@/Components/a11yProps";
import CustomTabPanel from "@/Components/CustomTabPanel";


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
        description: param.row.description || "",
        description_eng: param.row.description_eng || "",
        description_jpn: param.row.description_jpn || "",
        description_ch: param.row.description_ch || "",
        order: param.row.order || "",
        oldImage: param.row.image
    });

    console.log(data)

    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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
        put(route("department.update", param.row.id), {
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
        },
        { forceFormData: true }
    );
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
        },
    );
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
                        width: 500,
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
                        <Box sx={{ borderBottom: 1, width:"100%", borderColor: "divider" }}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            variant="fullWidth"
                            textColor="inherit"
                            aria-label="basic tabs example"
                        >
                            <Tab label="English" {...a11yProps(0)} />
                            <Tab label="Indonesian" {...a11yProps(1)} />
                            <Tab label="Japanese" {...a11yProps(2)} />
                            <Tab label="Chinese" {...a11yProps(3)} />
                        </Tabs>
                        </Box>
                        <CustomTabPanel value={value} index={0}>
                            <TextField
                                label="Name English"
                                variant="outlined"
                                value={data.name_eng}
                                onChange={(e) => setData("name_eng", e.target.value)}
                                fullWidth
                                required
                            />
                            <TextField
                                label="Description English"
                                variant="outlined"
                                value={data.description_eng}
                                sx={{mt:2}}
                                onChange={(e) => setData("description_eng", e.target.value)}
                                fullWidth
                                required
                            />
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                            <TextField
                                label="Name Indonesian"
                                variant="outlined"
                                value={data.name}
                                onChange={(e) => setData("name", e.target.value)}
                                fullWidth
                            />
                            <TextField
                                label="Description Indonesian"
                                variant="outlined"
                                value={data.description}
                                sx={{mt:2}}
                                onChange={(e) => setData("description", e.target.value)}
                                fullWidth
                            />
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={2}>
                            <TextField
                                label="Name Japanese"
                                variant="outlined"
                                value={data.name_jpn}
                                onChange={(e) => setData("name_jpn", e.target.value)}
                                fullWidth
                            />
                            <TextField
                                label="Description Japanese"
                                variant="outlined"
                                value={data.description_jpn}
                                sx={{mt:2}}
                                onChange={(e) => setData("description_jpn", e.target.value)}
                                fullWidth
                            />
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={3}>
                            <TextField
                                label="Name Chinese"
                                variant="outlined"
                                value={data.name_ch}
                                onChange={(e) => setData("name_ch", e.target.value)}
                                fullWidth
                            />
                            <TextField
                                label="Description Chinese"
                                variant="outlined"
                                value={data.description_ch}
                                sx={{mt:2}}
                                onChange={(e) => setData("description_ch", e.target.value)}
                                fullWidth
                            />
                        </CustomTabPanel>
                        <TextField
                            id="image"
                            variant="outlined"
                            type="file"
                            onChange={(e) => setData("image", e.target.files[0])}
                            sx={{ width: "100%" }}
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
