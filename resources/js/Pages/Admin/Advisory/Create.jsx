import { useState, useContext } from "react";
import { useForm, usePage } from "@inertiajs/react";
import {
    Box,
    Tabs,
    Tab,
    Button,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
} from "@mui/material";
import AuthLayout from "@/Layout/AuthLayout";
import { TextField } from "@mui/material";
import CustomTabPanel from "@/Components/CustomTabPanel";
import a11yProps from "@/Components/a11yProps";
import { SpinnerContext } from "@/Context/SpinnerContext";
import { AlertContext } from "@/Context/AlertContext";
import RichEditor from "@/Components/RichEditor";

function Create() {
    const { teams } = usePage().props;
    const [value, setValue] = useState(0);
    const { toggleSpinner } = useContext(SpinnerContext);
    const { toggleAlert } = useContext(AlertContext);
    const { data, setData, post, processing, errors, reset } = useForm({
        author: "",
        title: "",
        title_eng: "",
        title_jpn: "",
        subtitle: "",
        subtitle_eng: "",
        subtitle_jpn: "",
        slug: "",
        slug_eng: "",
        slug_jpn: "",
        body: "",
        body_eng: "",
        body_jpn: "",
        highlight_eng: "",
        highlight: "",
        highlight_jpn: "",
        SEO_title: "",
        SEO_title_eng: "",
        SEO_title_jpn: "",
        meta_description: "",
        meta_description_eng: "",
        meta_description_jpn: "",
        team_id: "",
    });

    const onHandleSubmit = (e) => {
        e.preventDefault();
        post(
            route("advisories.store"),
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
        <AuthLayout sectionHeading="Create Advisory">
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
                                <Tab label="Advisory Eng" {...a11yProps(0)} />
                                <Tab label="Advisory Id" {...a11yProps(1)} />
                                <Tab label="Advisory Jp" {...a11yProps(2)} />
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
                                id="subtitle_eng"
                                value={data.subtitle_eng}
                                onChange={(e) =>
                                    setData("subtitle_eng", e.target.value)
                                }
                                label="Subtitle English"
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
                                sx={{ width: "100%", mb: 1 }}
                                required
                            />
                            <RichEditor
                                placeholder="Advisory Body English"
                                value={data.body_eng}
                                handleInput={(data) =>
                                    setData("body_eng", data)
                                }
                            />
                            <RichEditor
                                placeholder="Advisory Highlight English"
                                value={data.highlight_eng}
                                handleInput={(data) =>
                                    setData("highlight_eng", data)
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
                            />
                            <TextField
                                id="subtitle"
                                value={data.subtitle}
                                onChange={(e) =>
                                    setData("subtitle", e.target.value)
                                }
                                label="Subtitle Indonesia"
                                variant="outlined"
                                sx={{ width: "100%", mb: 2 }}
                            />
                            <TextField
                                id="SEO_title"
                                value={data.SEO_title}
                                onChange={(e) =>
                                    setData("SEO_title", e.target.value)
                                }
                                label="SEO Title Indonesia"
                                variant="outlined"
                                sx={{ width: "100%", mb: 1 }}
                            />
                            <RichEditor
                                placeholder="Advisory Body Indonesia"
                                value={data.body}
                                handleInput={(data) => setData("body", data)}
                            />
                            <RichEditor
                                placeholder="Advisory Highlight Indonesia"
                                value={data.highlight}
                                handleInput={(data) => setData("highlight", data)}
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
                            />
                            <TextField
                                id="subtitle_jpn"
                                value={data.subtitle_jpn}
                                onChange={(e) =>
                                    setData("subtitle_jpn", e.target.value)
                                }
                                label="Subtitle Japan"
                                variant="outlined"
                                sx={{ width: "100%", mb: 2 }}
                            />
                            <TextField
                                id="SEO_title_jpn"
                                value={data.SEO_title_jpn}
                                onChange={(e) =>
                                    setData("SEO_title_jpn", e.target.value)
                                }
                                label="SEO Title Japan"
                                variant="outlined"
                                sx={{ width: "100%", mb: 1 }}
                            />
                            <RichEditor
                                placeholder="Advisory Body Japan"
                                value={data.body_jpn}
                                handleInput={(data) =>
                                    setData("body_jpn", data)
                                }
                            />
                            <RichEditor
                                placeholder="Advisory Highlight Japan"
                                value={data.highlight_jpn}
                                handleInput={(data) =>
                                    setData("highlight_jpn", data)
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
                            />
                        </CustomTabPanel>
                        <Box sx={{ minWidth: 120, mb: 2 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">
                                    Team Name
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={data.team_id}
                                    label="Team Name"
                                    onChange={(e) =>
                                        setData("team_id", e.target.value)
                                    }
                                >
                                    {teams.map((item) => (
                                        <MenuItem
                                            key={item.id}
                                            value={item.id}
                                        >
                                            {`${item.name} - ${item.position_eng} - ${item.department?.name_eng}`}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
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

export default Create;
