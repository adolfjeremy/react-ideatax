import { useState, useContext } from "react";
import { useForm } from "@inertiajs/react";
import { Box, Modal, Button, Typography, TextField, Tabs, Tab, } from "@mui/material";
import { SpinnerContext } from "@/Context/SpinnerContext";
import { AlertContext } from "@/Context/AlertContext";
import CustomTabPanel from "@/Components/CustomTabPanel";
import a11yProps from "@/Components/a11yProps";

function HeroModal() {
    const { data, setData, post, processing, errors, reset } = useForm({
        hero: "",
        title: "",
        title_eng: "",
        title_jpn: "",
        title_ch: "",
        subtitle: "",
        subtitle_eng: "",
        subtitle_jpn: "",
        subtitle_ch: "",
        button_text: "",
        button_text_eng: "",
        button_text_jpn: "",
        button_text_ch: "",
        button_link: "",
        button_link_eng: "",
        button_link_jpn: "",
        button_link_ch: "",
    });
    
    const [value, setValue] = useState(0);
    const [edit, setEdit] = useState(false);
    const { toggleSpinner } = useContext(SpinnerContext);
    const { toggleAlert } = useContext(AlertContext);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const onHandleSubmit = (e) => {
        e.preventDefault();
        post(
            route("hero.store"),
            {
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
            },
            { forceFormData: true }
        );
    };
    return (
        <div className="col-12 d-flex align-items-center justify-content-end">
            <Button
                onClick={() => setEdit(true)}
                variant="contained"
                sx={{
                    textTransform: "none",
                    fontSize: "0.8rem",
                    fontWeight: 500,
                }}
            >
                Add hero
            </Button>
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
                        width: 450,
                        bgcolor: "background.paper",
                        border: "2px solid #000",
                        boxShadow: 24,
                        p: 4,
                    }}
                >
                    <Typography id="modal-modal-title" component="h2" mb={2}>
                        Select Hero Image
                    </Typography>
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
                            <TextField
                                id="button_link_eng"
                                value={data.button_link_eng}
                                onChange={(e) =>
                                    setData("button_link_eng", e.target.value)
                                }
                                label="Button Link English"
                                variant="outlined"
                                sx={{ width: "100%", mb: 2 }}
                            />

                            <TextField
                                id="button_text_eng"
                                value={data.button_text_eng}
                                onChange={(e) =>
                                    setData("button_text_eng", e.target.value)
                                }
                                label="Button Text English"
                                variant="outlined"
                                sx={{ width: "100%" }}
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
                            <TextField
                                id="button_link"
                                value={data.button_link}
                                onChange={(e) =>
                                    setData("button_link", e.target.value)
                                }
                                label="Button Link"
                                variant="outlined"
                                sx={{ width: "100%", mb: 2 }}
                            />

                            <TextField
                                id="button_text"
                                value={data.button_text}
                                onChange={(e) =>
                                    setData("button_text", e.target.value)
                                }
                                label="Button Text"
                                variant="outlined"
                                sx={{ width: "100%" }}
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
                            <TextField
                                id="button_link_jpn"
                                value={data.button_link_jpn}
                                onChange={(e) =>
                                    setData("button_link_jpn", e.target.value)
                                }
                                label="Button Link Japanese"
                                variant="outlined"
                                sx={{ width: "100%", mb: 2 }}
                            />

                            <TextField
                                id="button_text_jpn"
                                value={data.button_text_jpn}
                                onChange={(e) =>
                                    setData("button_text_jpn", e.target.value)
                                }
                                label="Button Text Japanese"
                                variant="outlined"
                                sx={{ width: "100%" }}
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
                            <TextField
                                id="button_link_ch"
                                value={data.button_link_ch}
                                onChange={(e) =>
                                    setData("button_link_ch", e.target.value)
                                }
                                label="Button Link Chinese"
                                variant="outlined"
                                sx={{ width: "100%", mb: 2 }}
                            />

                            <TextField
                                id="button_text_ch"
                                value={data.button_text_ch}
                                onChange={(e) =>
                                    setData("button_text_ch", e.target.value)
                                }
                                label="Button Text Chinese"
                                variant="outlined"
                                sx={{ width: "100%" }}
                            />
                        </CustomTabPanel>
                        <TextField
                            id="hero"
                            variant="outlined"
                            type="file"
                            onChange={(e) => setData("hero", e.target.files[0])}
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
        </div>
    );
}

export default HeroModal;
