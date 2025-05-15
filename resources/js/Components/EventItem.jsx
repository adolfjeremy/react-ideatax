import { Link, useTheme, Typography } from "@mui/material";

function EventItem({ route, date, title, image }) {
    const theme = useTheme();
    return (
        <Link
            underline="none"
            href={route}
            className="col-6 col-md-3 d-flex flex-column event_item mt-4"
            sx={{
                cursor: "pointer",
                "&:hover": {
                    h3: {
                        color: theme.palette.custom.orange,
                    },
                },
            }}
        >
            <img
                src={`/storage/${image}`}
                alt={title}
                loading="lazy"
                className="w-100"
            />
            <Typography
                sx={{
                    fontSize: "1.48125rem",
                    color: theme.palette.custom.darkBlue,
                    lineHeight: "1.42967633em",
                    letterSpacing: "0.009em",
                    fontWeight: "600",
                    marginTop: "10px",
                    transition: "all 300ms  e-in-out",
                    [theme.breakpoints.down("sm")]: {
                        fontSize: "1.875rem",
                    },
                }}
            >
                {date}
            </Typography>
            <Typography
                as="h3"
                sx={{
                    fontSize: "1.48125rem",
                    color: theme.palette.custom.lightkBlue,
                    lineHeight: "1.42967633em",
                    letterSpacing: "0.009em",
                    transition: "all 300ms ease-in-out",
                    [theme.breakpoints.down("sm")]: {
                        fontSize: "0.9rem",
                    },
                }}
            >
                {title}
            </Typography>
        </Link>
    );
}

export default EventItem;
