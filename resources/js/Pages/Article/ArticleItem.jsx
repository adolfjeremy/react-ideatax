import { Typography, useTheme } from "@mui/material";
import ReadMoreButton from "./ReadMoreButton";

function ArticleItem() {
    const theme = useTheme();
    return (
        <div className="col-12 col-md-4  d-flex flex-column gap-4 align-items-start mt-5 px-4">
            <img
                src="https://ideatax.id/storage/article/RPQuiYd2fYkP60FxOLvCP3uYInqI9M7GQbiW3uZH.png"
                alt=""
                className="w-100"
            />
            <Typography
                sx={{
                    color: theme.palette.custom.darkBlue,
                    fontSize: "0.9751rem",
                    [theme.breakpoints.down("sm")]: {
                        fontSize: "0.9751rem",
                    },
                    lineHeight: "1.39240506em",
                    letterSpacing: "0.009em",
                    fontWeight: "600",
                }}
                variant="h3"
            >
                Getting to Know the Automatic Exchange of Information for Tax
                Purposes
            </Typography>
            <Typography
                sx={{
                    color: theme.palette.custom.lightBlue,
                    fontSize: "0.8939rem",
                    [theme.breakpoints.down("sm")]: {
                        fontSize: "0.8939rem",
                    },
                    lineHeight: "1.17857248em",
                    letterSpacing: "0.009em",
                    padding: 0,
                    margin: 0,
                }}
            >
                The Directorate General of Taxes announced that as of April
                2024, 112 tax jurisdictions have participated in the Auto...
            </Typography>
            <ReadMoreButton />
        </div>
    );
}

export default ArticleItem;
