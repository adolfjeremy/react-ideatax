import { useState, useContext } from "react";
import { Button, Modal, Typography, Box, TextField } from "@mui/material";
import AuthLayout from "@/Layout/AuthLayout";
import { usePage, useForm, Link } from "@inertiajs/react";
import ActionModalButton from "./comp/ActionModalButton";
import TableList from "@/Components/TableList";
import { SpinnerContext } from "@/Context/SpinnerContext";
import { AlertContext } from "@/Context/AlertContext";

function Index() {
    const { positions } = usePage().props;
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
        order: "",
    });

    const onHandleSubmit = (e) => {
        e.preventDefault();
        post(route("position.store"), {
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
            field: "name",
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
                    deleteRoute={route("position.destroy", params.row.id)}
                />
            ),
            headerAlign: "center",
            align: "center",
        },
    ];
    return (
        <AuthLayout sectionHeading="Position">
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex align-items-center justify-content-between">
                        <p>
                            <Link href={route("team.index")}>Team</Link> /
                            Position
                        </p>
                        <Button variant="contained" onClick={handleOpen}>
                            Create Position
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
                                <Typography
                                    id="modal-modal-title"
                                    component="h2"
                                >
                                    Create Position
                                </Typography>
                                <form
                                    onSubmit={onHandleSubmit}
                                    className="d-flex flex-column align-items-center justify-content-center gap-2 mt-5"
                                >
                                    <TextField
                                        id="name"
                                        variant="outlined"
                                        label="Name"
                                        value={data.name}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        sx={{ width: "100%" }}
                                        required
                                    />
                                    <TextField
                                        id="name_eng"
                                        label="Name (English)"
                                        variant="outlined"
                                        value={data.name_eng}
                                        onChange={(e) =>
                                            setData("name_eng", e.target.value)
                                        }
                                        sx={{ width: "100%" }}
                                        required
                                    />
                                    <TextField
                                        id="name_jpn"
                                        label="Name (Japanese)"
                                        variant="outlined"
                                        value={data.name_jpn}
                                        onChange={(e) =>
                                            setData("name_jpn", e.target.value)
                                        }
                                        sx={{ width: "100%" }}
                                        required
                                    />
                                    <TextField
                                        id="name_ch"
                                        label="Name (Chinese)"
                                        variant="outlined"
                                        value={data.name_ch}
                                        onChange={(e) =>
                                            setData("name_ch", e.target.value)
                                        }
                                        sx={{ width: "100%" }}
                                        required
                                    />
                                    <TextField
                                        id="order"
                                        label="Order"
                                        variant="outlined"
                                        value={data.order}
                                        onChange={(e) =>
                                            setData("order", e.target.value)
                                        }
                                        sx={{ width: "100%" }}
                                        required
                                    />
                                    <Box className="w-100 d-flex justify-content-end">
                                        <Button
                                            variant="contained"
                                            type="submit"
                                        >
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
                        <TableList rows={positions} columns={columns} />
                    </div>
                </div>
            </div>
        </AuthLayout>
    );
}

export default Index;
