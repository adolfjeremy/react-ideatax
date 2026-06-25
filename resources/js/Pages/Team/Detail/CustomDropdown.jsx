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
        border: "1px solid #191919",
        fontFamily: "sans-serif",
        color: "#191919",
        fontWeight: 500,
        display: "inline-flex",
        alignItems: "center",
        lineHeight: "normal",
        fontSize: 16,
        padding: "8px 28px 8px 10px",
        backgroundColor: "#ffffff"
    },
}));

export default function CustomDropdown({ list, value, onChange, menuDropdown="Practice Area" }) {
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
                fontSize: 26,
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
                    style: {
                        zIndex: 500, // <--- Naikkan zIndex melewati nilai zIndex container sticky induk (3000)
                    },
                    PaperProps: {
                        sx: {
                            mt: "4px",
                            borderRadius: "0px",
                            boxShadow: "0px 8px 32px rgba(0,0,0,0.12)",
                            border: "1px solid #ffffff",
                            minWidth: "100%",
                            zIndex: 4000,

                            "& .MuiMenu-list": {
                                paddingTop: 0,
                                paddingBottom: 0,
                            },
                            "& .MuiMenuItem-root": {
                                color: "#191919",
                                fontWeight: 500,
                                whiteSpace: "normal",
                                border: `1px solid ${theme.palette.custom.black}`,
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
                                    // borderBottom: "none",
                                },
                                "&:focus": {
                                    background: "transparent",
                                },
                                "&.Mui-selected": {
                                    fontWeight: 600,
                                },
                            },
                        },
                    },
                }}
            >
                <MenuItem
                    value="all"
                >
                    {menuDropdown}
                </MenuItem>

                {list?.map((item, index) => (
                    <MenuItem key={index} value={item.id}>
                        {item.name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}
