import { useState, useContext } from "react";
import { Button, Modal, Typography, Box, TextField } from "@mui/material";
import AuthLayout from "@/Layout/AuthLayout";
import { usePage, useForm } from "@inertiajs/react";
import ActionModal from "@/Components/ActionModal";
import TableList from "@/Components/TableList";
import { SpinnerContext } from "@/Context/SpinnerContext";
import { AlertContext } from "@/Context/AlertContext";

function ArticleCategory() {
    const { categories } = usePage().props;
    const { toggleSpinner } = useContext(SpinnerContext);
    const { toggleAlert } = useContext(AlertContext);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        title: "",
        SEO_title: "",
        slug: "",
        description_eng: "",
        description: "",
        description_jpn: "",
    });

    const onHandleSubmit = (e) => {
        e.preventDefault();
        post(route("article-category.store"), {
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
            field: "title",
            headerName: "Title",
            flex: 0.6,
            headerAlign: "center",
            align: "center",
        },
        {
            field: "actions",
            headerName: "Actions",
            type: "actions",
            renderCell: (params) => (
                <ActionModal
                    param={params}
                    deleteRoute={route(
                        "article-category.destroy",
                        params.row.id
                    )}
                />
            ),
            headerAlign: "center",
            align: "center",
        },
    ];
    return (
        <AuthLayout sectionHeading="Article Category">
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex align-items-center justify-content-end">
                        <Button variant="contained" onClick={handleOpen}>
                            Create Category
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
                                            setData(
                                                "description_eng",
                                                e.target.value
                                            )
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
                                            setData(
                                                "description",
                                                e.target.value
                                            )
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
                                            setData(
                                                "description_jpn",
                                                e.target.value
                                            )
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
                        <TableList rows={categories} columns={columns} />
                    </div>
                </div>
            </div>
        </AuthLayout>
    );
}

export default ArticleCategory;
