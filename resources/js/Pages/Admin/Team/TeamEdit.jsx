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

function TeamEdit() {
    const { item } = usePage().props;
    const [value, setValue] = useState(0);
    const { toggleSpinner } = useContext(SpinnerContext);
    const { toggleAlert } = useContext(AlertContext);

    const { data, setData, post, processing, errors, reset } = useForm({
        name: item.name,
        position: item.position,
        position_id: item.position_id,
        position_jp: item.position_jp,
        position_ch: item.position_ch,
        linkedin: item.linkedin || "",
        email: item.email || "",
        phone: item.phone || "",
        biography: item.biography,
        biography_eng: item.biography_eng,
        biography_jpn: item.biography_jpn,
        biography_ch: item.biography_ch,
        area_of_expertise: item.area_of_expertise,
        area_of_expertise_eng: item.area_of_expertise_eng,
        area_of_expertise_jpn: item.area_of_expertise_jpn,
        area_of_expertise_ch: item.area_of_expertise_ch,
        SEO_title: item.SEO_title,
        SEO_title_eng: item.SEO_title_eng,
        SEO_title_jpn: item.SEO_title_jpn,
        SEO_title_ch: item.SEO_title_ch,
        description: item.description,
        description_eng: item.description_eng,
        description_jpn: item.description_jpn,
        description_ch: item.description_ch,
        oldPhoto: item.photo,
        oldProfilePicture: item.profile_picture,
        _method: "put",
    });

    const onHandleSubmit = (e) => {
        e.preventDefault();
        post(
            route("team.update", item.id),
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
        <AuthLayout sectionHeading="Edit Team">
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
                                <Tab label="Team En" {...a11yProps(0)} />
                                <Tab label="Team Id" {...a11yProps(1)} />
                                <Tab label="Team Jp" {...a11yProps(2)} />
                                <Tab label="Team Ch" {...a11yProps(3)} />
                            </Tabs>
                        </Box>
                        <CustomTabPanel value={value} index={0}>
                            <RichEditor
                                placeholder="Biography English"
                                value={data.biography_eng}
                                handleInput={(data) =>
                                    setData("biography_eng", data)
                                }
                            />
                            <RichEditor
                                placeholder="Area of Expertise English"
                                value={data.area_of_expertise_eng}
                                handleInput={(data) =>
                                    setData("area_of_expertise_eng", data)
                                }
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
                            <TextField
                                id="position"
                                value={data.position}
                                onChange={(e) =>
                                    setData("position", e.target.value)
                                }
                                label="Position"
                                variant="outlined"
                                sx={{ width: "100%", mb: 2 }}
                                required
                            />
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                            <RichEditor
                                placeholder="Biography Indonesia"
                                value={data.biography}
                                handleInput={(data) =>
                                    setData("biography", data)
                                }
                            />
                            <RichEditor
                                placeholder="Area of Expertise Indonesia"
                                value={data.area_of_expertise}
                                handleInput={(data) =>
                                    setData("area_of_expertise", data)
                                }
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
                            <TextField
                                id="position_id"
                                value={data.position_id}
                                onChange={(e) =>
                                    setData("position_id", e.target.value)
                                }
                                label="Position Id"
                                variant="outlined"
                                sx={{ width: "100%", mb: 2 }}
                            />
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={2}>
                            <RichEditor
                                placeholder="Biography Japan"
                                value={data.biography_jpn}
                                handleInput={(data) =>
                                    setData("biography_jpn", data)
                                }
                            />
                            <RichEditor
                                placeholder="Area of Expertise Japan"
                                value={data.area_of_expertise_jpn}
                                handleInput={(data) =>
                                    setData("area_of_expertise_jpn", data)
                                }
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
                            <TextField
                                id="position_jp"
                                value={data.position_jp}
                                onChange={(e) =>
                                    setData("position_jp", e.target.value)
                                }
                                label="Position Jp"
                                variant="outlined"
                                sx={{ width: "100%", mb: 2 }}
                                required
                            />
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={3}>
                            <RichEditor
                                placeholder="Biography China"
                                value={data.biography_ch}
                                handleInput={(data) =>
                                    setData("biography_ch", data)
                                }
                            />
                            <RichEditor
                                placeholder="Area of Expertise China"
                                value={data.area_of_expertise_ch}
                                handleInput={(data) =>
                                    setData("area_of_expertise_ch", data)
                                }
                            />
                            <TextField
                                id="SEO_title_ch"
                                value={data.SEO_title_ch}
                                onChange={(e) =>
                                    setData("SEO_title_ch", e.target.value)
                                }
                                label="SEO Title China"
                                variant="outlined"
                                sx={{ width: "100%", mb: 2 }}
                                required
                            />
                            <TextField
                                id="outlined-multiline-static"
                                label="Meta Description China"
                                multiline
                                rows={3}
                                value={data.description_ch}
                                onChange={(e) =>
                                    setData("description_ch", e.target.value)
                                }
                                sx={{ width: "100%", mb: 2 }}
                                required
                            />
                            <TextField
                                id="position_ch"
                                value={data.position_ch}
                                onChange={(e) =>
                                    setData("position_ch", e.target.value)
                                }
                                label="Position Ch"
                                variant="outlined"
                                sx={{ width: "100%", mb: 2 }}
                                required
                            />
                        </CustomTabPanel>
                        <Box px={3}>
                            <TextField
                                id="name"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                label="Name"
                                variant="outlined"
                                sx={{ width: "100%", mb: 2 }}
                                required
                            />
                            <TextField
                                id="linkedin"
                                value={data.linkedin}
                                onChange={(e) =>
                                    setData("linkedin", e.target.value)
                                }
                                label="Linkedin"
                                variant="outlined"
                                sx={{ width: "100%", mb: 2 }}
                            />
                            <TextField
                                id="email"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                label="Email"
                                type="email"
                                variant="outlined"
                                sx={{ width: "100%", mb: 2 }}
                            />
                            <TextField
                                id="phone"
                                value={data.phone}
                                onChange={(e) =>
                                    setData("phone", e.target.value)
                                }
                                label="Phone"
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
                            <label htmlFor="profile_picture">
                                Profile Picture
                            </label>
                            <TextField
                                id="profile_picture"
                                type="file"
                                onChange={(e) =>
                                    setData(
                                        "profile_picture",
                                        e.target.files[0]
                                    )
                                }
                                variant="outlined"
                                sx={{ width: "100%", mt: 1, mb: 2 }}
                            />
                            <Box
                                sx={{
                                    display: "flex",
                                    alignContent: "center",
                                    justifyContent: "flex-end",
                                }}
                            >
                                <Button
                                    disabled={processing}
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

export default TeamEdit;
