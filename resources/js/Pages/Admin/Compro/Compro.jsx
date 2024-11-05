import { useState, useContext } from "react";
import { usePage, useForm, router } from "@inertiajs/react";
import {
    Button,
    Modal,
    TextField,
    Box,
    useTheme,
    Link,
    IconButton,
    Typography,
} from "@mui/material";
import AuthLayout from "@/Layout/AuthLayout";
import TableList from "@/Components/TableList";
import ActionButton from "@/Components/ActionButton";
import { SpinnerContext } from "@/Context/SpinnerContext";
import { AlertContext } from "@/Context/AlertContext";
import { FaTrash } from "react-icons/fa";

function Compro() {
    const { compro, comproDownloader } = usePage().props;
    const theme = useTheme();
    const { toggleSpinner } = useContext(SpinnerContext);
    const { toggleAlert } = useContext(AlertContext);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { data, setData, post, processing, errors, reset } = useForm({});

    const onHandleSubmit = (e) => {
        e.preventDefault();
        post(
            route("company-profile.store"),
            {
                onStart: () => {
                    toggleSpinner(true);
                },
                onSuccess: () => {
                    reset();
                    toggleSpinner(false);
                    toggleAlert(true);
                    handleClose();
                    reset();
                },
                onError: (error) => {
                    toggleSpinner(false);
                    console.log(error);
                },
            },
            { forceFormData: true }
        );
    };

    const handleDelete = () =>
        router.delete(route("company-profile.destroy", 1), {
            onBefore: () => confirm("Are you sure you want to delete this?"),
            onStart: () => {
                toggleSpinner(true);
            },
            onSuccess: () => {
                toggleSpinner(false);
                toggleAlert(true);
            },
        });

    const columns = [
        {
            field: "name",
            headerName: "Name",
            flex: 0.6,
            headerAlign: "center",
            align: "center",
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1,
            headerAlign: "center",
            align: "center",
        },
        {
            field: "tel",
            headerName: "Phone",
            flex: 0.5,
            headerAlign: "center",
            align: "center",
        },
        {
            field: "company",
            headerName: "Company",
            flex: 1,
            headerAlign: "center",
            align: "center",
        },
        {
            field: "actions",
            headerName: "",
            type: "actions",
            flex: 0.1,
            renderCell: (params) => (
                <ActionButton
                    param={params}
                    needEdit={false}
                    deleteRoute={route("photo-galery.destroy", params.row.id)}
                />
            ),
            headerAlign: "center",
            align: "center",
        },
    ];
    return (
        <AuthLayout sectionHeading="Company Profile">
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex align-items-center justify-content-between">
                        <Box
                            sx={{
                                backgroundColor: theme.palette.primary.main,
                                p: 3.5,
                                position: "relative",
                            }}
                        >
                            {compro[0] == undefined ? (
                                <Typography
                                    sx={{
                                        color: theme.palette.custom.white,
                                        textDecoration: "none",
                                    }}
                                >
                                    No company profile Added
                                </Typography>
                            ) : (
                                <>
                                    <Link
                                        sx={{
                                            color: theme.palette.custom.white,
                                            textDecoration: "none",
                                        }}
                                        href={`/storage/${compro[0].compro}`}
                                        target="_blank"
                                    >
                                        Current Company Profile
                                    </Link>
                                    <IconButton
                                        onClick={handleDelete}
                                        sx={{
                                            position: "absolute",
                                            top: "5px",
                                            right: "5px",
                                            svg: {
                                                color: "red",
                                                fontSize: "15px",
                                            },
                                        }}
                                    >
                                        <FaTrash />
                                    </IconButton>
                                </>
                            )}
                        </Box>
                        <Button
                            sx={{
                                textTransform: "none",
                                fontSize: "0.8rem",
                                fontWeight: 500,
                            }}
                            onClick={handleOpen}
                            variant="contained"
                        >
                            Add Compro
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
                                <form onSubmit={onHandleSubmit}>
                                    <label htmlFor="compro">
                                        Company Profile (pdf)
                                    </label>
                                    <TextField
                                        id="compro"
                                        type="file"
                                        onChange={(e) =>
                                            setData("compro", e.target.files[0])
                                        }
                                        variant="outlined"
                                        sx={{ width: "100%", mt: 1 }}
                                        required
                                    />
                                    <div className="d-flex align-items=center justify-content-end">
                                        <Button
                                            sx={{
                                                textTransform: "none",
                                                fontSize: "0.8rem",
                                                fontWeight: 500,
                                                mt: 2,
                                            }}
                                            variant="contained"
                                            type="submit"
                                        >
                                            Save
                                        </Button>
                                    </div>
                                </form>
                            </Box>
                        </Modal>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12 d-flex align-items-center justify-content-start">
                        <Typography sx={{ fontWeight: "600" }}>
                            Company Profile Downloader
                        </Typography>
                    </div>
                </div>
                <div className="row mt-2">
                    <TableList rows={comproDownloader} columns={columns} />
                </div>
            </div>
        </AuthLayout>
    );
}

export default Compro;
