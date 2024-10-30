import { useState, useContext } from "react";
import { useForm } from "@inertiajs/react";
import { Box, Tabs, Tab, Button } from "@mui/material";
import AuthLayout from "@/Layout/AuthLayout";
import { TextField } from "@mui/material";
import CustomTabPanel from "@/Components/CustomTabPanel";
import a11yProps from "@/Components/a11yProps";
import { SpinnerContext } from "@/Context/SpinnerContext";
import { AlertContext } from "@/Context/AlertContext";

function PhotoGaleryCreate() {
    const [value, setValue] = useState(0);
    const { toggleSpinner } = useContext(SpinnerContext);
    const { toggleAlert } = useContext(AlertContext);

    const { data, setData, post, processing, errors, reset } = useForm({
        title: "",
        title_eng: "",
        title_jpn: "",
    });

    const onHandleSubmit = (e) => {
        e.preventDefault();
        post(
            route("photo-galery.store"),
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
        <AuthLayout sectionHeading="Life at Idetax - add image">
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
                                <Tab
                                    label="Life at Ideatax En"
                                    {...a11yProps(0)}
                                />
                                <Tab
                                    label="Life at Ideatax Id"
                                    {...a11yProps(1)}
                                />
                                <Tab
                                    label="Life at Ideatax Jp"
                                    {...a11yProps(2)}
                                />
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
                        </CustomTabPanel>
                        <Box px={3}>
                            <label htmlFor="image">Image</label>
                            <TextField
                                id="image"
                                type="file"
                                onChange={(e) =>
                                    setData("image", e.target.files[0])
                                }
                                variant="outlined"
                                sx={{ width: "100%", mt: 1 }}
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

export default PhotoGaleryCreate;
