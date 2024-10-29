import { useState, useContext } from "react";
import { useForm, usePage } from "@inertiajs/react";
import { Box, Tabs, Tab, Button } from "@mui/material";
import AuthLayout from "@/Layout/AuthLayout";
import { TextField } from "@mui/material";
import CustomTabPanel from "@/Components/CustomTabPanel";
import a11yProps from "@/Components/a11yProps";
import { SpinnerContext } from "@/Context/SpinnerContext";
import { AlertContext } from "@/Context/AlertContext";

function PageEdit() {
    const [value, setValue] = useState(0);
    const { toggleSpinner } = useContext(SpinnerContext);
    const { toggleAlert } = useContext(AlertContext);
    const { item } = usePage().props;

    const { data, setData, put, processing, errors, reset } = useForm({
        title: item.title,
        SEO_title: item.SEO_title,
        SEO_title_eng: item.SEO_title_eng,
        SEO_title_jpn: item.SEO_title_jpn,
        description: item.description,
        description_eng: item.description_eng,
        description_jpn: item.description_jpn,
    });

    const onHandleSubmit = (e) => {
        e.preventDefault();
        put(route("page.update", item.id), {
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
        });
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <AuthLayout sectionHeading="Edit Services">
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
                                <Tab label="Service En" {...a11yProps(0)} />
                                <Tab label="Service Id" {...a11yProps(1)} />
                                <Tab label="Service Jp" {...a11yProps(2)} />
                            </Tabs>
                        </Box>
                        <CustomTabPanel value={value} index={0}>
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
                            <TextField
                                id="outlined-multiline-static"
                                label="Description English"
                                multiline
                                rows={4}
                                value={data.description_eng}
                                onChange={(e) =>
                                    setData("description_eng", e.target.value)
                                }
                                sx={{ width: "100%", mb: 2 }}
                                required
                            />
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
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

                            <TextField
                                id="outlined-multiline-static"
                                label="Description Indonesia"
                                multiline
                                rows={4}
                                value={data.description}
                                onChange={(e) =>
                                    setData("description", e.target.value)
                                }
                                sx={{ width: "100%", mb: 2 }}
                                required
                            />
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={2}>
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

                            <TextField
                                id="outlined-multiline-static"
                                label="Description Japan"
                                multiline
                                rows={4}
                                value={data.description_jpn}
                                onChange={(e) =>
                                    setData("description_jpn", e.target.value)
                                }
                                sx={{ width: "100%", mb: 2 }}
                                required
                            />
                        </CustomTabPanel>
                        <Box px={3}>
                            <TextField
                                id="title"
                                value={data.title}
                                onChange={(e) =>
                                    setData("title", e.target.value)
                                }
                                label="Page Name"
                                variant="outlined"
                                sx={{ width: "100%", mb: 2 }}
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

export default PageEdit;
