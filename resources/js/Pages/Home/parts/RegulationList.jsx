import { Box, Link, useTheme } from "@mui/material";

export default function RegulationList({ regulations }) {
    const theme = useTheme();
    return (
        <div className="row d-flex justify-content-between mt-4">
            {regulations.map((regulation) => (
                <div className="col-12 col-md-6 py-0 py-md-4" key={regulation.id}>
                    <Link href={`/storage/${regulation.document}`} target="_blank" sx={{
                        color: theme.palette.custom.white,
                        fontSize: "1.5rem",
                        fontWeight: "300",
                        letterSpacing: "7%",
                        lineHeight: "29px",
                        textDecoration: "none",
                        "&:hover" : {
                            color: theme.palette.custom.yellow
                        },
                        [theme.breakpoints.down("md")]: {
                            fontSize: "1rem",
                        },
                    }}>{regulation.title}</Link>
                    <hr style={{
                        height: "1px",
                        widht: "100%",
                        color: theme.palette.custom.white,
                    }}/>
                </div>
            ))}
        </div>
    );
}