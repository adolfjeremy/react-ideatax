import { Typography, useTheme } from "@mui/material";
import ReadMoreButton from "@/Pages/Article/ReadMoreButton";
import checkLang from "@/utils/checkLang";

function UpdateItem({ image, title, desc, destination, locale }) {
    const theme = useTheme();
    return (
        <div className="col-12 col-md-4  d-flex flex-column gap-4 align-items-start mt-5 px-4">
            <img src={image} alt={title} loading="lazy" className="w-100" />
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
                {title}
            </Typography>
            {desc}
            <ReadMoreButton
                destination={checkLang(
                    locale,
                    route("update-detail", destination),
                    route("update-detail.id", destination),
                    route("update-detail.jp", destination),
                    route("update-detail.ch", destination)
                )}
            />
        </div>
    );
}

export default UpdateItem;
