import { useState, useContext } from "react";
import { Button, Modal, Typography, Box, TextField } from "@mui/material";
import AuthLayout from "@/Layout/AuthLayout";
import { usePage, useForm, Link } from "@inertiajs/react";
import ActionModalButton from "./comp/ActionModalButton";
import TableList from "@/Components/TableList";
import { SpinnerContext } from "@/Context/SpinnerContext";
import { AlertContext } from "@/Context/AlertContext";

function Index() {
    const { awards } = usePage().props;
    const { toggleSpinner } = useContext(SpinnerContext);
    const { toggleAlert } = useContext(AlertContext);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        title: "",
        institution: "",
        year: "",
        image: "",
    });

    const onHandleSubmit = (e) => {
        e.preventDefault();
        post(
            route("award.store"),
            {
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
            },
            { forceFormData: true },
        );
    };
    const columns = [
        {
            field: "title",
            headerName: "Title",
            flex: 0.6,
            headerAlign: "center",
            align: "center",
        },
        {
            field: "institution",
            headerName: "Institution",
            flex: 0.6,
            headerAlign: "center",
            align: "center",
        },
        {
            field: "year",
            headerName: "Year",
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
                    deleteRoute={route("award.destroy", params.row.id)}
                />
            ),
            headerAlign: "center",
            align: "center",
        },
    ];
    return (
        <AuthLayout sectionHeading="Award">
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex align-items-center justify-content-between">
                        <p>
                            <Link href={route("team.index")}>Team</Link> / Award
                        </p>
                        <Button variant="contained" onClick={handleOpen}>
                            Create Award
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
                                    Create Award
                                </Typography>
                                <form
                                    onSubmit={onHandleSubmit}
                                    className="d-flex flex-column align-items-center justify-content-center gap-2 mt-5"
                                >
                                    <TextField
                                        id="title"
                                        variant="outlined"
                                        label="Name"
                                        value={data.title}
                                        onChange={(e) =>
                                            setData("title", e.target.value)
                                        }
                                        sx={{ width: "100%" }}
                                        required
                                    />
                                    <TextField
                                        id="institution"
                                        label="Institution"
                                        variant="outlined"
                                        value={data.institution}
                                        onChange={(e) =>
                                            setData(
                                                "institution",
                                                e.target.value,
                                            )
                                        }
                                        sx={{ width: "100%" }}
                                        required
                                    />
                                    <TextField
                                        id="year"
                                        label="Year"
                                        variant="outlined"
                                        value={data.year}
                                        onChange={(e) =>
                                            setData("year", e.target.value)
                                        }
                                        sx={{ width: "100%" }}
                                        required
                                    />
                                    <Box>
                                        <label
                                            className="text-left"
                                            htmlFor="image"
                                        >
                                            Image
                                        </label>
                                        <TextField
                                            id="image"
                                            type="file"
                                            onChange={(e) =>
                                                setData(
                                                    "image",
                                                    e.target.files[0],
                                                )
                                            }
                                            variant="outlined"
                                            sx={{ width: "100%", mt: 1 }}
                                            required
                                        />
                                    </Box>
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
                        <TableList rows={awards} columns={columns} />
                    </div>
                </div>
            </div>
        </AuthLayout>
    );
}

export default Index;
