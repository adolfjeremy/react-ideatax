import { Box, useTheme, Typography, Divider } from "@mui/material";
import postedAt from "@/utils/postedAt";
import ActionButton from "./ActionButton";
import { usePage } from "@inertiajs/react";

function CommentItem({ name, time, comment, id }) {
    const theme = useTheme();
    const { auth } = usePage().props;
    return (
        <>
            <div className="col-12">
                <Divider
                    sx={{
                        backgroundColor: theme.palette.grey[600],
                        mt: 1,
                    }}
                />
            </div>
            <Box className="col-12">
                <div className="row">
                    <Box
                        sx={{ gap: 2 }}
                        className="col-11 p-3 d-flex align-items-center justify-content-center"
                    >
                        <Box
                            sx={{
                                width: "36px",
                                height: "36px",
                                borderRadius: "50%",
                                border: `1px solid ${theme.palette.custom.darkBlue}`,
                            }}
                        >
                            <img
                                src="https://news.ddtc.co.id/_next/image?url=https%3A%2F%2Fddtc-cdn1.sgp1.digitaloceanspaces.com%2Fnews%2Fprofile%2Fpic_profile.png&w=750&q=75"
                                alt="profile image"
                            />
                        </Box>
                        <Box className="d-flex flex-column align-items-start justify-content-start w-100">
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "start",
                                    gap: 2,
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontWeight: "600",
                                        fontSize: "0.875rem",
                                    }}
                                >
                                    {name}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontWeight: "300",
                                        fontSize: "0.75rem",
                                    }}
                                    component="span"
                                >
                                    {postedAt(time)}
                                </Typography>
                            </Box>
                            <Box>
                                <Typography
                                    sx={{
                                        fontWeight: "500",
                                        fontSize: "0.9375rem",
                                    }}
                                >
                                    {comment}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <div className="col-1 d-flex align-items-center justify-content-center">
                        {auth.user?.role === 2 && (
                            <ActionButton
                                deleteRoute={route("comment-delete", id)}
                                needEdit={false}
                            />
                        )}
                    </div>
                </div>
            </Box>
        </>
    );
}

export default CommentItem;
