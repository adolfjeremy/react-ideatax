import { Link, useTheme, Typography } from "@mui/material";
import formatDate from "@/utils/formatDate";

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
                        color: theme.palette.custom.yellow,
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
                    fontSize: "1.25rem",
                    color: theme.palette.custom.black,
                    lineHeight: "1.42967633em",
                    letterSpacing: "0.009em",
                    fontWeight: "700",
                    marginTop: "10px",
                    transition: "all 300ms  e-in-out",
                    [theme.breakpoints.down("sm")]: {
                        fontSize: "1.875rem",
                    },
                }}
            >
                {formatDate(date)}
            </Typography>
            <Typography
                as="h3"
                sx={{
                    fontSize: "1.5rem",
                    color: theme.palette.custom.black,
                    lineHeight: "1.42967633em",
                    letterSpacing: "0.009em",
                    fontWeight: 700,
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
