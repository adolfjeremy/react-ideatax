import { useState, useContext } from "react";
import { useForm } from "@inertiajs/react";
import {
    Box,
    Modal,
    Button,
    Typography,
    TextField,
    useTheme,
} from "@mui/material";
import { SpinnerContext } from "@/Context/SpinnerContext";
import { AlertContext } from "@/Context/AlertContext";
import { FaRegTrashAlt } from "react-icons/fa";

function StatModal({ stat }) {
    const theme = useTheme();
    const {
        data,
        setData,
        put,
        errors,
        reset,
        delete: destroy,
    } = useForm({
        value: stat.value || "",
        head: stat.head || "",
        head_eng: stat.head_eng || "",
        head_jpn: stat.head_jpn || "",
    });
    const [edit, setEdit] = useState(false);
    const { toggleSpinner } = useContext(SpinnerContext);
    const { toggleAlert } = useContext(AlertContext);

    const onHandleSubmit = (e) => {
        e.preventDefault();
        put(route("stat.update", stat.id), {
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
        });
    };

    const onHandleDelete = () => {
        destroy(route("stat.destroy", stat.id), {
            onStart: () => {
                toggleSpinner(true);
            },
            onSuccess: () => {
                setEdit(false);
                toggleSpinner(false);
                toggleAlert(true);
            },
            onError: () => {
                setEdit(false);
                toggleSpinner(false);
            },
        });
    };
    return (
        <>
            <Box
                sx={{ cursor: "pointer" }}
                onClick={() => setEdit(true)}
                className="col-12 col-md-4 mt-3 mt-md-0"
            >
                <Box
                    sx={{
                        backgroundColor: theme.palette.primary.light,
                        transition: "ease 250ms",
                        "&:hover": {
                            boxShadow: "1px 1px 5px grey",
                        },
                    }}
                    className="p-4 d-flex flex-column align-items-center justify-content-center gap-2"
                >
                    <Typography
                        sx={{
                            textTransform: "capitalize",
                            textAlign: "center",
                            fontWeight: "600",
                            fontSize: "1.1rem",
                        }}
                    >
                        {stat.head_eng}
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "1rem",
                            fontWeight: "500",
                            textAlign: "center",
                        }}
                    >
                        {stat.value}
                    </Typography>
                </Box>
            </Box>
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
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            width: "100%",
                            mb: 2,
                        }}
                    >
                        <Typography id="modal-modal-title" component="h2">
                            Edit Company Statistic
                        </Typography>
                        <Button
                            onClick={onHandleDelete}
                            title="Delete"
                            sx={{
                                svg: {
                                    color: "red",
                                    fontSize: "1.2rem",
                                },
                            }}
                        >
                            <FaRegTrashAlt />
                        </Button>
                    </Box>
                    <form
                        className="d-flex flex-column align-items-end justify-content-center gap-3"
                        onSubmit={onHandleSubmit}
                    >
                        <TextField
                            id="head"
                            variant="outlined"
                            label="Text Indonesia"
                            value={data.head}
                            onChange={(e) => setData("head", e.target.value)}
                            required
                            sx={{ width: "100%" }}
                        />
                        <TextField
                            id="head_eng"
                            variant="outlined"
                            label="Text English"
                            value={data.head_eng}
                            onChange={(e) =>
                                setData("head_eng", e.target.value)
                            }
                            required
                            sx={{ width: "100%" }}
                        />
                        <TextField
                            id="head_jpn"
                            variant="outlined"
                            label="Text Japan"
                            value={data.head_jpn}
                            onChange={(e) =>
                                setData("head_jpn", e.target.value)
                            }
                            required
                            sx={{ width: "100%" }}
                        />
                        <TextField
                            id="value"
                            variant="outlined"
                            label="Value"
                            type="number"
                            value={data.value}
                            onChange={(e) => setData("value", e.target.value)}
                            required
                            sx={{ width: "100%" }}
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
        </>
    );
}

export default StatModal;
