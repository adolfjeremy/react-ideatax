import { useState, useContext } from "react";
import { useForm } from "@inertiajs/react";
import { Box, Modal, Button, Typography, TextField, Tabs, Tab, Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import { FaRegTrashAlt } from "react-icons/fa";
import { SpinnerContext } from "@/Context/SpinnerContext";
import { AlertContext } from "@/Context/AlertContext";
import CustomTabPanel from "@/Components/CustomTabPanel";
import a11yProps from "@/Components/a11yProps";

function HeroEdit({ hero, advisories = [], articles = [] }) {
    const {
        data,
        setData,
        post,
        delete: destroy,
        errors,
        reset,
    } = useForm({
        _method: "put",
        oldImage: hero.hero,
        title: hero.title || "",
        title_eng: hero.title_eng || "",
        title_jpn: hero.title_jpn || "",
        title_ch: hero.title_ch || "",
        subtitle: hero.subtitle || "",
        subtitle_eng: hero.subtitle_eng || "",
        subtitle_jpn: hero.subtitle_jpn || "",
        subtitle_ch: hero.subtitle_ch || "",
        advisory_id: hero.advisory_id || "",
        article_id: hero.article_id || "",
    });

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { toggleSpinner } = useContext(SpinnerContext);
    const { toggleAlert } = useContext(AlertContext);
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const onHandleSubmit = (e) => {
        e.preventDefault();
        post(
            route("hero.update", hero.id),
            {
                onStart: () => {
                    toggleSpinner(true);
                },
                onSuccess: () => {
                    reset();
                    handleClose();
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

    const onHandleDelete = () => {
        destroy(route("hero.destroy", hero.id), {
            onStart: () => {
                toggleSpinner(true);
            },
            onSuccess: () => {
                handleClose();
                toggleSpinner(false);
                toggleAlert(true);
            },
            onError: () => {
                handleClose();
                toggleSpinner(false);
            },
        });
    };
    return (
        <>
            <Button
                key={hero.id}
                onClick={handleOpen}
                className="col-4"
                sx={{
                    img: {
                        transition: "ease-in 250ms",
                        "&:hover": {
                            boxShadow: "1px 1px 5px grey",
                        },
                    },
                }}
            >
                <img src={`/storage/${hero.hero}`} className="w-100" />
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
                            Edit Hero Image
                        </Typography>
                        <Button
                            onClick={() => onHandleDelete(hero.id)}
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
                                id="title_eng"
                                value={data.title_eng}
                                onChange={(e) =>
                                    setData("title_eng", e.target.value)
                                }
                                label="Title English"
                                variant="outlined"
                                sx={{ width: "100%", mb: 2 }}
                            />

                            <TextField
                                id="subtitle_eng"
                                value={data.subtitle_eng}
                                onChange={(e) =>
                                    setData("subtitle_eng", e.target.value)
                                }
                                label="Subtitle English"
                                variant="outlined"
                                sx={{ width: "100%", mb: 2 }}
                            />
                        </CustomTabPanel>
                            <CustomTabPanel value={value} index={1}>
                            <TextField
                                id="title"
                                value={data.title}
                                onChange={(e) =>
                                    setData("title", e.target.value)
                                }
                                label="Title"
                                variant="outlined"
                                sx={{ width: "100%", mb: 2 }}
                            />

                            <TextField
                                id="subtitle"
                                value={data.subtitle}
                                onChange={(e) =>
                                    setData("subtitle", e.target.value)
                                }
                                label="Subtitle"
                                variant="outlined"
                                sx={{ width: "100%", mb: 2 }}
                            />
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={2}>
                            <TextField
                                id="title_jpn"
                                value={data.title_jpn}
                                onChange={(e) =>
                                    setData("title_jpn", e.target.value)
                                }
                                label="Title Japanese"
                                variant="outlined"
                                sx={{ width: "100%", mb: 2 }}
                            />

                            <TextField
                                id="subtitle_jpn"
                                value={data.subtitle_jpn}
                                onChange={(e) =>
                                    setData("subtitle_jpn", e.target.value)
                                }
                                label="Subtitle Japanese"
                                variant="outlined"
                                sx={{ width: "100%", mb: 2 }}
                            />
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={3}>
                            <TextField
                                id="title_ch"
                                value={data.title_ch}
                                onChange={(e) =>
                                    setData("title_ch", e.target.value)
                                }
                                label="Title Chinese"
                                variant="outlined"
                                sx={{ width: "100%", mb: 2 }}
                            />

                            <TextField
                                id="subtitle_ch"
                                value={data.subtitle_ch}
                                onChange={(e) =>
                                    setData("subtitle_ch", e.target.value)
                                }
                                label="Subtitle Chinese"
                                variant="outlined"
                                sx={{ width: "100%", mb: 2 }}
                            />
                        </CustomTabPanel>   
                        <TextField
                            id="hero"
                            variant="outlined"
                            type="file"
                            onChange={(e) => setData("hero", e.target.files[0])}
                            sx={{ width: "100%", mb: 2 }}
                        />
                        <FormControl fullWidth sx={{ mb: 2 }}>
                            <InputLabel id="edit-advisory-select-label">Select Tax Advisory (Optional)</InputLabel>
                            <Select
                                labelId="edit-advisory-select-label"
                                id="edit-advisory-select"
                                value={data.advisory_id || ""}
                                label="Select Tax Advisory (Optional)"
                                onChange={(e) => setData("advisory_id", e.target.value)}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {advisories.map((advisory) => (
                                    <MenuItem key={advisory.id} value={advisory.id}>
                                        {advisory.title_eng || advisory.title}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl fullWidth sx={{ mb: 2 }}>
                            <InputLabel id="edit-article-select-label">Select Article (Optional)</InputLabel>
                            <Select
                                labelId="edit-article-select-label"
                                id="edit-article-select"
                                value={data.article_id || ""}
                                label="Select Article (Optional)"
                                onChange={(e) => setData("article_id", e.target.value)}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {articles.map((article) => (
                                    <MenuItem key={article.id} value={article.id}>
                                        {article.title_eng || article.title}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
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

export default HeroEdit;
