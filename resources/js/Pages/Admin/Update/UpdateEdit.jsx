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

function UpdateEdit() {
    const { item, categories } = usePage().props;
    const [value, setValue] = useState(0);
    const { toggleSpinner } = useContext(SpinnerContext);
    const { toggleAlert } = useContext(AlertContext);

    const { data, setData, post, processing, errors, reset } = useForm({
        title: item.title,
        title_eng: item.title_eng,
        title_jpn: item.title_jpn,
        slug: item.slug,
        slug_eng: item.slug_eng,
        slug_jpn: item.slug_jpn,
        body: item.body,
        body_eng: item.body_eng,
        body_jpn: item.body_jpn,
        SEO_title: item.SEO_title,
        SEO_title_eng: item.SEO_title_eng,
        SEO_title_jpn: item.SEO_title_jpn,
        description: item.description,
        description_eng: item.description_eng,
        description_jpn: item.description_jpn,
        oldPhoto: item.photo,
        oldThumbnail: item.thumbnail,
        oldPdf: item.pdf,
        tax_update_categories_id: item.tax_update_categories_id,
        _method: "put",
    });

    const onHandleSubmit = (e) => {
        e.preventDefault();
        post(
            route("updates.update", item.id),
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
        <AuthLayout sectionHeading="Edit Tax Update">
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
                                <Tab label="Tax Update En" {...a11yProps(0)} />
                                <Tab label="Tax Update Id" {...a11yProps(1)} />
                                <Tab label="Tax Update Jp" {...a11yProps(2)} />
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
                                placeholder="Tax Update Body English"
                                value={data.body_eng}
                                handleInput={(data) =>
                                    setData("body_eng", data)
                                }
                            />
                            <TextField
                                id="outlined-multiline-static"
                                label="Meta Description English"
                                multiline
                                rows={3}
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
                                placeholder="Tax Update Body Indonesia"
                                value={data.body}
                                handleInput={(data) => setData("body", data)}
                            />
                            <TextField
                                id="outlined-multiline-static"
                                label="Meta Description Indonesia"
                                multiline
                                rows={3}
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
                                placeholder="Tax Update Body Japan"
                                value={data.body_jpn}
                                handleInput={(data) =>
                                    setData("body_jpn", data)
                                }
                            />
                            <TextField
                                id="outlined-multiline-static"
                                label="Meta Description Japan"
                                multiline
                                rows={3}
                                value={data.description_jpn}
                                onChange={(e) =>
                                    setData("description_jpn", e.target.value)
                                }
                                sx={{ width: "100%", mb: 2 }}
                                required
                            />
                        </CustomTabPanel>
                        <Box px={3}>
                            <Box sx={{ minWidth: 120, mb: 2 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">
                                        Category
                                    </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={data.tax_update_categories_id}
                                        label="Category"
                                        onChange={(e) =>
                                            setData(
                                                "tax_update_categories_id",
                                                e.target.value
                                            )
                                        }
                                    >
                                        {categories.map((item) => (
                                            <MenuItem
                                                key={item.id}
                                                value={item.id}
                                            >
                                                {item.title}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Box>
                            <TextField
                                id="author"
                                value={data.author}
                                onChange={(e) =>
                                    setData("author", e.target.value)
                                }
                                label="Author"
                                variant="outlined"
                                sx={{ width: "100%", mb: 2 }}
                            />
                            <label htmlFor="photo">Photo</label>
                            <TextField
                                id="photo"
                                type="file"
                                onChange={(e) =>
                                    setData("photo", e.target.files[0])
                                }
                                variant="outlined"
                                sx={{ width: "100%", mt: 1, mb: 2 }}
                            />
                            <label htmlFor="thumbnail">thumbnail</label>
                            <TextField
                                id="thumbnail"
                                type="file"
                                onChange={(e) =>
                                    setData("thumbnail", e.target.files[0])
                                }
                                variant="outlined"
                                sx={{ width: "100%", mt: 1, mb: 2 }}
                            />
                            <label htmlFor="pdf">Attachment</label>
                            <TextField
                                id="pdf"
                                type="file"
                                onChange={(e) =>
                                    setData("pdf", e.target.files[0])
                                }
                                variant="outlined"
                                sx={{ width: "100%", mt: 1 }}
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

export default UpdateEdit;
