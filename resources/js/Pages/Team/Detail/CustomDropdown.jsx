import {
    FormControl,
    Select,
    MenuItem,
    InputBase,
    useTheme,
} from "@mui/material";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { styled } from "@mui/material/styles";
import checkLang from "@/utils/checkLang";
import { usePage } from "@inertiajs/react";

const CustomInput = styled(InputBase)(({ theme }) => ({
    "& .MuiInputBase-input": {
        position: "relative",
        backgroundColor: "#e3f2fd",
        background: "linear-gradient(to right, #8dcfffff, #ffffff)",
        border: "1px solid #ffffff",
        fontFamily: "sans-serif",
        color: "#263238",
        fontWeight: 600,
        display: "inline-flex",
        alignItems: "center",
        lineHeight: "normal",
        fontSize: 24,
        padding: "18px 60px 18px 28px",
        [theme.breakpoints.down("xl")]: {
            fontSize: 22,
            padding: "16px 52px 16px 24px",
        },
        [theme.breakpoints.down("lg")]: {
            fontSize: 18,
            padding: "14px 44px 14px 20px",
        },
        [theme.breakpoints.down("md")]: {
            fontSize: 15,
            padding: "11px 36px 11px 14px",
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: 13,
            padding: "8px 28px 8px 10px",
        },
        "&:focus": {
            backgroundColor: "#e3f2fd",
        },
    },
}));

export default function CustomDropdown({ departmentsList, value, onChange }) {
    const theme = useTheme();
    const { locale } = usePage().props;

    const handleChange = (event) => {
        onChange(event.target.value);
    };

    return (
        <FormControl
            sx={{
                m: 1,
                display: "flex",
                alignItems: "start",

                minWidth: 340,
                fontSize: 26,

                [theme.breakpoints.down("xl")]: { minWidth: 300 },
                [theme.breakpoints.down("lg")]: { minWidth: 250 },
                [theme.breakpoints.down("md")]: { minWidth: 190 },
                [theme.breakpoints.down("sm")]: { minWidth: 150 },
            }}
        >
            <Select
                labelId="custom-dropdown-label"
                id="custom-dropdown"
                value={value}
                onChange={handleChange}
                input={<CustomInput />}
                IconComponent={(props) => (
                    <IoIosArrowDropdownCircle
                        {...props}
                        sx={{
                            color: "#ffffff !important",
                            backgroundColor: "black",
                            borderRadius: "50%",

                            // --- KUNCI DEAD CENTER IKON ---
                            position: "absolute",
                            top: "50% !important",
                            transform: "translateY(-50%) !important", // Geser ke atas setengah dari tinggi ikon itu sendiri

                            // --- UKURAN DESKTOP JUMBO ---
                            fontSize: "32px !important",
                            right: "18px !important",

                            // --- RESPONSIVE DOWN-SCALING ---
                            [theme.breakpoints.down("xl")]: {
                                fontSize: "28px !important",
                                right: "14px !important",
                            },
                            [theme.breakpoints.down("lg")]: {
                                fontSize: "22px !important",
                                right: "12px !important",
                            },
                            [theme.breakpoints.down("md")]: {
                                fontSize: "18px !important",
                                right: "10px !important",
                            },
                            [theme.breakpoints.down("sm")]: {
                                fontSize: "15px !important",
                                right: "6px !important",
                            },
                        }}
                    />
                )}
                MenuProps={{
                    anchorOrigin: {
                        vertical: "bottom",
                        horizontal: "left",
                    },
                    transformOrigin: {
                        vertical: "top",
                        horizontal: "left",
                    },
                    PaperProps: {
                        sx: {
                            mt: "4px",
                            borderRadius: "0px",
                            boxShadow: "0px 8px 32px rgba(0,0,0,0.12)",
                            border: "1px solid #ffffff",
                            minWidth: "100%",

                            "& .MuiMenu-list": {
                                paddingTop: 0,
                                paddingBottom: 0,
                            },
                            "& .MuiMenuItem-root": {
                                color: "#37474f",
                                fontWeight: 500,
                                background:
                                    "linear-gradient(to right, #aeddffff, #ffffff)",
                                borderBottom: "1px solid #ffffff",
                                whiteSpace: "normal",

                                padding: "22px 28px",
                                fontSize: 20,

                                [theme.breakpoints.down("xl")]: {
                                    padding: "18px 24px",
                                    fontSize: 18,
                                },
                                [theme.breakpoints.down("lg")]: {
                                    padding: "14px 20px",
                                    fontSize: 16,
                                },
                                [theme.breakpoints.down("md")]: {
                                    padding: "10px 14px",
                                    fontSize: 14,
                                },
                                [theme.breakpoints.down("sm")]: {
                                    padding: "8px 10px",
                                    fontSize: 12,
                                },
                                "&:last-child": {
                                    borderBottom: "none",
                                },
                                "&:hover": {
                                    background: "#bbdefb !important",
                                },
                                "&:focus": {
                                    background: "transparent",
                                },
                                "&.Mui-selected": {
                                    background: "#bbdefb",
                                    fontWeight: 600,
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
                    Practice Areas
                </MenuItem>

                {departmentsList?.map((item, index) => (
                    <MenuItem key={index} value={item.id}>
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
