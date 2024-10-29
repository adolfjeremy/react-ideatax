import { useState, useContext } from "react";
import { useForm, usePage } from "@inertiajs/react";
import { Box, Tabs, Tab, Button } from "@mui/material";
import AuthLayout from "@/Layout/AuthLayout";
import { TextField } from "@mui/material";
import CustomTabPanel from "@/Components/CustomTabPanel";
import a11yProps from "@/Components/a11yProps";
import { SpinnerContext } from "@/Context/SpinnerContext";
import { AlertContext } from "@/Context/AlertContext";
import RichEditor from "@/Components/RichEditor";

function CareerEdit() {
    const { item } = usePage().props;
    const [value, setValue] = useState(0);
    const { toggleSpinner } = useContext(SpinnerContext);
    const { toggleAlert } = useContext(AlertContext);

    const { data, setData, put, processing, errors, reset } = useForm({
        title: item.title,
        title_eng: item.title_eng,
        title_jpn: item.title_jpn,
        slug: item.slug,
        slug_eng: item.slug_eng,
        slug_jpn: item.slug_jpn,
        jobdesc: item.jobdesc,
        jobdesc_eng: item.jobdesc_eng,
        jobdesc_jpn: item.jobdesc_jpn,
        qualification: item.qualification,
        qualification_eng: item.qualification_eng,
        qualification_jpn: item.qualification_jpn,
        skill: item.skill,
        skill_eng: item.skill_eng,
        skill_jpn: item.skill_jpn,
        SEO_title: item.SEO_title,
        SEO_title_eng: item.SEO_title_eng,
        SEO_title_jpn: item.SEO_title_jpn,
        description: item.description,
        description_eng: item.description_eng,
        description_jpn: item.description_jpn,
    });

    const onHandleSubmit = (e) => {
        e.preventDefault();
        put(
            route("career.update", item.id),
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
        <AuthLayout sectionHeading="Edit Career">
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
                                <Tab label="Career En" {...a11yProps(0)} />
                                <Tab label="Career Id" {...a11yProps(1)} />
                                <Tab label="Career Jp" {...a11yProps(2)} />
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
                                placeholder="Job Desc English"
                                value={data.jobdesc_eng}
                                handleInput={(e) =>
                                    setData("jobdesc_eng", e.target.innerHTML)
                                }
                            />
                            <RichEditor
                                placeholder="Qualification English"
                                value={data.qualification_eng}
                                handleInput={(e) =>
                                    setData(
                                        "qualification_eng",
                                        e.target.innerHTML
                                    )
                                }
                            />
                            <RichEditor
                                placeholder="Skill English"
                                value={data.skill_eng}
                                handleInput={(e) =>
                                    setData("skill_eng", e.target.innerHTML)
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
                                placeholder="Job Desc Indonesia"
                                value={data.jobdesc}
                                handleInput={(e) =>
                                    setData("jobdesc", e.target.innerHTML)
                                }
                            />
                            <RichEditor
                                placeholder="Qualification Indonesia"
                                value={data.qualification}
                                handleInput={(e) =>
                                    setData("qualification", e.target.innerHTML)
                                }
                            />
                            <RichEditor
                                placeholder="Skill Indonesia"
                                value={data.skill}
                                handleInput={(e) =>
                                    setData("skill", e.target.innerHTML)
                                }
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
                                placeholder="Job Desc Japan"
                                value={data.jobdesc_jpn}
                                handleInput={(e) =>
                                    setData("jobdesc_jpn", e.target.innerHTML)
                                }
                            />
                            <RichEditor
                                placeholder="Qualification Japan"
                                value={data.qualification_jpn}
                                handleInput={(e) =>
                                    setData(
                                        "qualification_jpn",
                                        e.target.innerHTML
                                    )
                                }
                            />
                            <RichEditor
                                placeholder="Skill Japan"
                                value={data.skill_jpn}
                                handleInput={(e) =>
                                    setData("skill_jpn", e.target.innerHTML)
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

export default CareerEdit;
