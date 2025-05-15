import { usePage } from "@inertiajs/react";
import { Typography, useTheme } from "@mui/material";

function RoleItem({ heading, subtitle }) {
    const { locale } = usePage().props;
    const theme = useTheme();
    return (
        <div className="col-12 col-lg-3">
            <Typography
                as="h3"
                sx={{
                    color: theme.palette.custom.darkBlue,
                    fontSize: "1.4rem",
                    letterSpacing: "0.009em",
                    fontWeight: "600",
                }}
            >
                {heading}
            </Typography>
            <Typography
                sx={{
                    color: theme.palette.custom.black,
                    fontSize: "1.125rem",
                    letterSpacing: "0.009em",
                    fontWeight: 500,
                    mt: 1,
                }}
            >
                {subtitle}
            </Typography>
        </div>
    );
}

export default RoleItem;
