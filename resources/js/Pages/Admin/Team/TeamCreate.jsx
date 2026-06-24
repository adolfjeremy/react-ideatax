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
    Autocomplete,
    Chip,
} from "@mui/material";
import AuthLayout from "@/Layout/AuthLayout";
import { TextField } from "@mui/material";
import CustomTabPanel from "@/Components/CustomTabPanel";
import a11yProps from "@/Components/a11yProps";
import { SpinnerContext } from "@/Context/SpinnerContext";
import { AlertContext } from "@/Context/AlertContext";
import RichEditor from "@/Components/RichEditor";

function TeamCreate() {
    const { positions, departments, awards } = usePage().props;
    const [value, setValue] = useState(0);
    const { toggleSpinner } = useContext(SpinnerContext);
    const { toggleAlert } = useContext(AlertContext);
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        position_id: "",
        award_ids: [],
        department_id: "",
        linkedin: "",
        email: "",
        phone: "",
        biography: "",
        biography_eng: "",
        biography_jpn: "",
        biography_ch: "",
        area_of_expertise: "",
        area_of_expertise_eng: "",
        area_of_expertise_jpn: "",
        area_of_expertise_ch: "",
        capabilities: "",
        capabilities_eng: "",
        capabilities_jpn: "",
        capabilities_ch: "",
        credentials: "",
        credentials_eng: "",
        credentials_jpn: "",
        credentials_ch: "",
        education: "",
        education_eng: "",
        education_jpn: "",
        education_ch: "",
        SEO_title: "",
        SEO_title_eng: "",
        SEO_title_jpn: "",
        SEO_title_ch: "",
        description: "",
        description_eng: "",
        description_jpn: "",
        description_ch: "",
    });

    const onHandleSubmit = (e) => {
        e.preventDefault();
        post(
            route("team.store"),
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
            { forceFormData: true },
        );
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <AuthLayout sectionHeading="Create Team">
            <div className="container">
                <div className="row">
                    <form
                        onSubmit={onHandleSubmit}
                        encType="multipart/form-data"
                        className="col-12 border-1"
                    >
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
                            <RichEditor
                                placeholder="Capabilities English"
                                value={data.capabilities_eng}
                                handleInput={(data) =>
                                    setData("capabilities_eng", data)
                                }
                            />
                            <RichEditor
                                placeholder="Credentials English"
                                value={data.credentials_eng}
                                handleInput={(data) =>
                                    setData("credentials_eng", data)
                                }
                            />
                            <RichEditor
                                placeholder="Education English"
                                value={data.education_eng}
                                handleInput={(data) =>
                                    setData("education_eng", data)
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
                            <RichEditor
                                placeholder="Capabilities Indonesia"
                                value={data.capabilities}
                                handleInput={(data) =>
                                    setData("capabilities", data)
                                }
                            />
                            <RichEditor
                                placeholder="Credentials Indonesia"
                                value={data.credentials}
                                handleInput={(data) =>
                                    setData("credentials", data)
                                }
                            />
                            <RichEditor
                                placeholder="Education Indonesia"
                                value={data.education}
                                handleInput={(data) =>
                                    setData("education", data)
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
                            <RichEditor
                                placeholder="Capabilities Japan"
                                value={data.capabilities_jpn}
                                handleInput={(data) =>
                                    setData("capabilities_jpn", data)
                                }
                            />
                            <RichEditor
                                placeholder="Credentials Japan"
                                value={data.credentials_jpn}
                                handleInput={(data) =>
                                    setData("credentials_jpn", data)
                                }
                            />
                            <RichEditor
                                placeholder="Education Japan"
                                value={data.education_jpn}
                                handleInput={(data) =>
                                    setData("education_jpn", data)
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
                            <RichEditor
                                placeholder="Capabilities China"
                                value={data.capabilities_ch}
                                handleInput={(data) =>
                                    setData("capabilities_ch", data)
                                }
                            />
                            <RichEditor
                                placeholder="Credentials China"
                                value={data.credentials_ch}
                                handleInput={(data) =>
                                    setData("credentials_ch", data)
                                }
                            />
                            <RichEditor
                                placeholder="Education China"
                                value={data.education_ch}
                                handleInput={(data) =>
                                    setData("education_ch", data)
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
                        </CustomTabPanel>
                        <Box>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">
                                    Department
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={data.department_id}
                                    label="Department"
                                    onChange={(e) =>
                                        setData("department_id", e.target.value)
                                    }
                                >
                                    {departments.map((item) => (
                                        <MenuItem key={item.id} value={item.id}>
                                            {item.name_eng}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControl fullWidth sx={{ marginTop: 2 }}>
                                <InputLabel id="demo-simple-select-label">
                                    Position
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={data.position_id}
                                    label="Position"
                                    onChange={(e) =>
                                        setData("position_id", e.target.value)
                                    }
                                >
                                    {positions.map((item) => (
                                        <MenuItem key={item.id} value={item.id}>
                                            {item.name_eng}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <TextField
                                id="name"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                label="Name"
                                variant="outlined"
                                sx={{ width: "100%", my: 2 }}
                                required
                            />
                            <Box sx={{ mt: 3, mb: 2 }}>
                                <label
                                    className="text-left block mb-1 font-medium"
                                    htmlFor="awards-select"
                                >
                                    Assign Awards to Team Member
                                </label>

                                <Autocomplete
                                    multiple
                                    id="awards-select"
                                    options={awards} // Daftar pilihan dari backend
                                    // Filter berdasarkan kecocokan ID
                                    getOptionLabel={(option) =>
                                        `${option.title} (${option.year}) - ${option.institution || ""}`
                                    }
                                    // Menentukan data apa yang di-render saat opsi dipilih (menggunakan Chip/Tags)
                                    renderTags={(value, getTagProps) =>
                                        value.map((option, index) => (
                                            <Chip
                                                variant="outlined"
                                                label={`${option.title} (${option.year})`}
                                                {...getTagProps({ index })}
                                                key={option.id}
                                            />
                                        ))
                                    }
                                    // Render input utama
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            variant="outlined"
                                            placeholder={
                                                data.award_ids.length === 0
                                                    ? "Choose awards..."
                                                    : ""
                                            }
                                        />
                                    )}
                                    // Logika mendeteksi perubahan saat user memilih/menghapus award
                                    onChange={(event, newValue) => {
                                        // newValue berisi array of object award utuh yang dipilih.
                                        // Kita hanya butuh mengambil ID-nya saja untuk dikirim ke Laravel.
                                        const selectedIds = newValue.map(
                                            (award) => award.id,
                                        );
                                        setData("award_ids", selectedIds);
                                    }}
                                    // Memastikan opsi dropdown dicocokkan berdasarkan ID, bukan referensi object memory
                                    isOptionEqualToValue={(option, value) =>
                                        option.id === value.id
                                    }
                                    sx={{
                                        width: "100%",
                                        bgcolor: "background.paper",
                                    }}
                                />
                            </Box>
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
                                required
                            />
                            <label htmlFor="profile_picture">
                                Hero Image
                            </label>
                            <TextField
                                id="profile_picture"
                                type="file"
                                onChange={(e) =>
                                    setData(
                                        "profile_picture",
                                        e.target.files[0],
                                    )
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

export default TeamCreate;
