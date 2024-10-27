import { useState, useContext } from "react";
import { useForm } from "@inertiajs/react";
import { Box, Tabs, Tab, Button } from "@mui/material";
import AuthLayout from "@/Layout/AuthLayout";
import { TextField } from "@mui/material";
import CustomTabPanel from "@/Components/CustomTabPanel";
import a11yProps from "@/Components/a11yProps";
import { SpinnerContext } from "@/Context/SpinnerContext";
import { AlertContext } from "@/Context/AlertContext";
import RichEditor from "@/Components/RichEditor";

function TaxEventCreate() {
    const [value, setValue] = useState(0);
    const { toggleSpinner } = useContext(SpinnerContext);
    const { toggleAlert } = useContext(AlertContext);
    const { data, setData, post, processing, errors, reset } = useForm({
        title: "",
        title_eng: "",
        title_jpn: "",
        slug: "",
        slug_eng: "",
        slug_jpn: "",
        body: "",
        body_eng: "",
        body_jpn: "",
        SEO_title: "",
        SEO_title_eng: "",
        SEO_title_jpn: "",
        meta_description: "",
        meta_description_eng: "",
        meta_description_jpn: "",
    });

    const onHandleSubmit = (e) => {
        e.preventDefault();
        post(
            route("tax-event.store"),
            {
                onStart: () => {
                    toggleSpinner(true);
                },
                onSuccess: () => {
                    reset();
                    toggleSpinner(false);
                    toggleAlert(true);
                },
                onError: (error) => {
                    toggleSpinner(false);
                    console.log(error);
                },
            },
            { forceFormData: true }
        );
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <AuthLayout sectionHeading="Create Tax Event">
            <div className="container">
                <div className="row">
                    <form onSubmit={onHandleSubmit} className="col-12 border-1">
                        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                variant="fullWidth"
                                textColor="inherit"
                                aria-label="basic tabs example"
                            >
                                <Tab label="Tax Event En" {...a11yProps(0)} />
                                <Tab label="Tax Event Id" {...a11yProps(1)} />
                                <Tab label="Tax Event Jp" {...a11yProps(2)} />
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
                                required
                            />

                            <TextField
                                id="SEO_title_eng"
                                value={data.SEO_title_eng}
                                onChange={(e) =>
                                    setData("SEO_title_eng", e.target.value)
                                }
                                label="SEO Title English"
                                variant="outlined"
                                sx={{ width: "100%", mb: 2 }}
                                required
                            />
                            <RichEditor
                                placeholder="Article Body English"
                                value={data.body_eng}
                                handleInput={(e) =>
                                    setData("body_eng", e.target.innerHTML)
                                }
                            />
                            <TextField
                                id="outlined-multiline-static"
                                label="Meta Description English"
                                multiline
                                rows={3}
                                value={data.meta_description_eng}
                                onChange={(e) =>
                                    setData(
                                        "meta_description_eng",
                                        e.target.value
                                    )
                                }
                                sx={{ width: "100%", mb: 2 }}
                                required
                            />
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                            <TextField
                                id="title"
                                value={data.title}
                                onChange={(e) =>
                                    setData("title", e.target.value)
                                }
                                label="Title Indonesia"
                                variant="outlined"
                                sx={{ width: "100%", mb: 2 }}
                                required
                            />

                            <TextField
                                id="SEO_title"
                                value={data.SEO_title}
                                onChange={(e) =>
                                    setData("SEO_title", e.target.value)
                                }
                                label="SEO Title Indonesia"
                                variant="outlined"
                                sx={{ width: "100%", mb: 2 }}
                                required
                            />
                            <RichEditor
                                placeholder="Article Body Indonesia"
                                value={data.body}
                                handleInput={(e) =>
                                    setData("body", e.target.innerHTML)
                                }
                            />
                            <TextField
                                id="outlined-multiline-static"
                                label="Meta Description Indonesia"
                                multiline
                                rows={3}
                                value={data.meta_description}
                                onChange={(e) =>
                                    setData("meta_description", e.target.value)
                                }
                                sx={{ width: "100%", mb: 2 }}
                                required
                            />
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={2}>
                            <TextField
                                id="title_jpn"
                                value={data.title_jpn}
                                onChange={(e) =>
                                    setData("title_jpn", e.target.value)
                                }
                                label="Title Japan"
                                variant="outlined"
                                sx={{ width: "100%", mb: 2 }}
                                required
                            />

                            <TextField
                                id="SEO_title_jpn"
                                value={data.SEO_title_jpn}
                                onChange={(e) =>
                                    setData("SEO_title_jpn", e.target.value)
                                }
                                label="SEO Title Japan"
                                variant="outlined"
                                sx={{ width: "100%", mb: 2 }}
                                required
                            />
                            <RichEditor
                                placeholder="Article Body Japan"
                                value={data.body_jpn}
                                handleInput={(e) =>
                                    setData("body_jpn", e.target.innerHTML)
                                }
                            />
                            <TextField
                                id="outlined-multiline-static"
                                label="Meta Description Japan"
                                multiline
                                rows={3}
                                value={data.meta_description_jpn}
                                onChange={(e) =>
                                    setData(
                                        "meta_description_jpn",
                                        e.target.value
                                    )
                                }
                                sx={{ width: "100%", mb: 2 }}
                                required
                            />
                        </CustomTabPanel>
                        <Box px={3}>
                            <label htmlFor="photo">Photo</label>
                            <TextField
                                id="photo"
                                type="file"
                                onChange={(e) =>
                                    setData("photo", e.target.files[0])
                                }
                                variant="outlined"
                                sx={{ width: "100%", mt: 1, mb: 2 }}
                                required
                            />
                            <Box
                                sx={{
                                    display: "flex",
                                    alignContent: "center",
                                    justifyContent: "flex-end",
                                }}
                            >
                                <Button
                                    sx={{ mt: 2 }}
                                    type="submit"
                                    component="button"
                                    variant="contained"
                                >
                                    Submit
                                </Button>
                            </Box>
                        </Box>
                    </form>
                </div>
            </div>
        </AuthLayout>
    );
}

export default TaxEventCreate;
