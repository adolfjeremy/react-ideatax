import { FormControl, Select, MenuItem, InputBase } from "@mui/material";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { styled } from "@mui/material/styles";
import checkLang from "@/utils/checkLang"; // Import ini jika ingin nama dropdown multilingual
import { usePage } from "@inertiajs/react";

const CustomInput = styled(InputBase)(({ theme }) => ({
    "& .MuiInputBase-input": {
        position: "relative",
        backgroundColor: "#e3f2fd",
        background: "linear-gradient(to right, #8dcfffff, #ffffff)",
        border: "1px solid #ffffff",
        fontSize: 16,
        padding: "12px 26px 12px 16px",
        color: "#263238",
        fontWeight: 500,
        fontFamily: "sans-serif",
        "&:focus": {
            backgroundColor: "#e3f2fd",
        },
    },
}));

// Ambil props value dan onChange dari parrent
export default function CustomDropdown({ departmentsList, value, onChange }) {
    const { locale } = usePage().props;

    const handleChange = (event) => {
        onChange(event.target.value); // Jalankan fungsi onChange bawaan parent
    };

    return (
        <FormControl
            sx={{
                m: 1,
                minWidth: 100,
                display: "flex",
                alignItems: "start",
                fontSize: 20,
            }}
        >
            <Select
                labelId="custom-dropdown-label"
                id="custom-dropdown"
                value={value} // Ambil nilai dari props parent
                onChange={handleChange}
                input={<CustomInput />}
                IconComponent={(props) => (
                    <IoIosArrowDropdownCircle
                        {...props}
                        sx={{
                            color: "#ffffff !important",
                            backgroundColor: "black",
                            borderRadius: "50%",
                            fontSize: "20px !important",
                            right: "12px !important",
                            top: "calc(50% - 10px) !important",
                        }}
                    />
                )}
                MenuProps={{
                    PaperProps: {
                        sx: {
                            mt: "4px",
                            borderRadius: "0px",
                            boxShadow: "0px 4px 20px rgba(0,0,0,0.08)",
                            border: "1px solid #ffffff",
                            "& .MuiMenu-list": {
                                paddingTop: 0,
                                paddingBottom: 0,
                            },
                            "& .MuiMenuItem-root": {
                                padding: "14px 16px",
                                fontSize: 16,
                                color: "#37474f",
                                fontWeight: 500,
                                background:
                                    "linear-gradient(to right, #aeddffff, #ffffff)",
                                borderBottom: "1px solid #ffffff",
                                whiteSpace: "normal",
                                "&:last-child": {
                                    borderBottom: "none",
                                },
                                "&:hover": {
                                    background: "#bbdefb !important",
                                },
                                "&.Mui-selected": {
                                    background: "#bbdefb",
                                    "&:hover": {
                                        background: "#bbdefb",
                                    },
                                },
                            },
                        },
                    },
                }}
            >
                <MenuItem
                    sx={{
                        background:
                            "linear-gradient(to right, #aeddffff, #ffffff)",
                    }}
                    value="all"
                >
                    All Expertises
                </MenuItem>

                {departmentsList?.map((item, index) => (
                    <MenuItem key={index} value={item.id}>
                        {/* Menggunakan helper checkLang agar nama di dalam dropdown menyesuaikan bahasa aktif */}
                        {checkLang(
                            locale,
                            item.name_eng,
                            item.name,
                            item.name_jpn,
                            item.name_ch,
                        )}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}
