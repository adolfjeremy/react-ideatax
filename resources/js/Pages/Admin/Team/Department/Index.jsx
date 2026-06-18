import { useState, useContext } from "react";
import { Button, Modal, Typography, Box, TextField, 
    Tabs,
    Tab } from "@mui/material";
import AuthLayout from "@/Layout/AuthLayout";
import { usePage, useForm, Link } from "@inertiajs/react";
import ActionModalButton from "./comp/ActionModalButton";
import TableList from "@/Components/TableList";
import { SpinnerContext } from "@/Context/SpinnerContext";
import { AlertContext } from "@/Context/AlertContext";
import a11yProps from "@/Components/a11yProps";
import CustomTabPanel from "@/Components/CustomTabPanel";

function Index() {
    const { departments } = usePage().props;
    const { toggleSpinner } = useContext(SpinnerContext);
    const { toggleAlert } = useContext(AlertContext);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        name_eng: "",
        name_jpn: "",
        name_ch: "",
        description: "",
        description_eng: "",
        description_jpn: "",
        description_ch: "",
        order: "",
    });
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const onHandleSubmit = (e) => {
        e.preventDefault();
        post(route("department.store"), {
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
    const columns = [
        {
            field: "name_eng",
            headerName: "Name",
            flex: 0.6,
            headerAlign: "center",
            align: "center",
        },
        {
            field: "order",
            headerName: "Order",
            flex: 1,
            headerAlign: "center",
            align: "center",
        },
        {
            field: "actions",
            headerName: "Actions",
            type: "actions",
            renderCell: (params) => (
                <ActionModalButton
                    param={params}
                    deleteRoute={route("department.destroy", params.row.id)}
                />
            ),
            headerAlign: "center",
            align: "center",
        },
    ];
    return (
        <AuthLayout sectionHeading="Department">
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex align-items-center justify-content-between">
                        <p>
                            <Link href={route("team.index")}>Team</Link> /
                            Department
                        </p>
                        <Button variant="contained" onClick={handleOpen}>
                            Create Department
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
                                    width: 500,
                                    bgcolor: "background.paper",
                                    border: "2px solid #000",
                                    boxShadow: 24,
                                    p: 4,
                                }}
                            >
                                <Typography
                                    id="modal-modal-title"
                                    component="h2"
                                >
                                    Create Department
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
                                        required
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
                </div>
                <div className="row">
                    <div className="col-12 mt-5">
                        <TableList rows={departments} columns={columns} />
                    </div>
                </div>
            </div>
        </AuthLayout>
    );
}

export default Index;
