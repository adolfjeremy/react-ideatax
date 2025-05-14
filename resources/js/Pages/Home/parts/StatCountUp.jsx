import { Typography, Box } from "@mui/material";
import Counter from "../Counter";

function StatCountUp({ stats, theme, locale, checkLang, isMobile }) {
    return (
        <>
            {stats.map((stat) => (
                <Box
                    key={stat.id}
                    className="col-4 col-md-3"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "start",
                        flexDirection: "column",
                    }}
                >
                    <Counter target={stat.value} />

                    <Typography
                        sx={{
                            color: theme.palette.custom.orange,
                            fontSize: "1.25rem",
                            lineHeight: "1.390625em",
                            textAlign: "center",
                            fontWeight: "500",
                            textTransform: "capitalize",
                            [theme.breakpoints.down("md")]: {
                                fontSize: "1rem",
                            },
                        }}
                        className="stat_head m-0"
                    >
                        {isMobile && stat.id === 3
                            ? checkLang(
                                  locale,
                                  "Experience",
                                  "Pengalaman",
                                  "",
                                  stat.head_ch
                              )
                            : checkLang(
                                  locale,
                                  stat.head_eng,
                                  stat.head,
                                  stat.head_jpn,
                                  stat.head_ch
                              )}
                    </Typography>
                </Box>
            ))}
        </>
    );
}

export default StatCountUp;
