import { useState, useEffect, useRef, useContext } from "react";
import { useForm, usePage } from "@inertiajs/react";
import {
    Divider,
    Box,
    useTheme,
    Button,
    Typography,
    Modal,
    IconButton,
} from "@mui/material";
import CommentItem from "./CommentItem";
import ShareButton from "./ShareButton";
import { AiOutlineLike } from "react-icons/ai";
import { SpinnerContext } from "@/Context/SpinnerContext";

function CommentSection({ article_id, comment, shareUrl, likeCount }) {
    const { auth } = usePage().props;
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const textbox = useRef(null);
    const { toggleSpinner } = useContext(SpinnerContext);

    const { data, setData, post, reset } = useForm({
        comment: "",
        article_id,
        user_id: auth.user?.id,
    });

    // Auto resize textarea
    function adjustHeight() {
        if (textbox.current) {
            textbox.current.style.height = "inherit";
            textbox.current.style.height = `${textbox.current.scrollHeight}px`;
        }
    }

    useEffect(adjustHeight, [data.comment]);

    const handleChange = (e) => {
        setData("comment", e.target.value);
    };

    const handleTextClick = () => {
        if (!auth.user) setOpen(true);
    };

    const onHandleSubmit = (e) => {
        e.preventDefault();
        if (!auth.user) {
            setOpen(true);
            return;
        }
        post(route("articles-comment"), {
            onStart: () => toggleSpinner(true),
            onSuccess: () => {
                toggleSpinner(false);
                reset();
            },
            onError: () => toggleSpinner(false),
            preserveScroll: true,
        });
    };

    const onHandleLike = (e) => {
        e.preventDefault();
        if (!auth.user) {
            setOpen(true);
            return;
        }
        post(route("articles-like", article_id), {
            onStart: () => toggleSpinner(true),
            onSuccess: () => toggleSpinner(false),
            onError: () => toggleSpinner(false),
            preserveScroll: true,
        });
    };

    return (
        <Box mt={4}>
            <div className="container">
                <div className="row">
                    <Box
                        sx={{ backgroundColor: theme.palette.grey[200] }}
                        className="col-12 col-lg-8 px-5 py-3"
                    >
                        <div className="row">
                            {/* Like + Share */}
                            <div className="col-12 mt-4 d-flex align-items-center justify-content-between">
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 1,
                                    }}
                                >
                                    <Box sx={{ position: "relative" }}>
                                        {likeCount > 0 && (
                                            <Box
                                                sx={{
                                                    width: 20,
                                                    height: 20,
                                                    position: "absolute",
                                                    top: 0,
                                                    left: 25,
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    borderRadius: "50%",
                                                    bgcolor:
                                                        theme.palette.custom
                                                            .white,
                                                }}
                                            >
                                                <Typography
                                                    sx={{ fontSize: "12px" }}
                                                >
                                                    {likeCount}
                                                </Typography>
                                            </Box>
                                        )}
                                        <IconButton
                                            onClick={onHandleLike}
                                            sx={{
                                                svg: {
                                                    color: theme.palette.custom
                                                        .darkBlue,
                                                },
                                            }}
                                        >
                                            <AiOutlineLike />
                                        </IconButton>
                                    </Box>
                                </Box>
                                <ShareButton shareUrl={shareUrl} />
                            </div>

                            {/* Comment Count */}
                            <div className="col-12 mt-4">
                                <Typography sx={{ fontSize: "1rem" }}>
                                    Comments ({comment.length})
                                </Typography>
                            </div>

                            {/* Divider */}
                            <div className="col-12">
                                <Divider
                                    sx={{
                                        backgroundColor:
                                            theme.palette.grey[600],
                                        mt: 3,
                                    }}
                                />
                            </div>

                            {/* Comment Form */}
                            <Box className="col-12 mt-4">
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "start",
                                        gap: 2,
                                        width: "100%",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 36,
                                            height: 36,
                                            borderRadius: "50%",
                                            border: `1px solid ${theme.palette.custom.darkBlue}`,
                                            overflow: "hidden",
                                        }}
                                    >
                                        <img
                                            src="https://news.ddtc.co.id/_next/image?url=https%3A%2F%2Fddtc-cdn1.sgp1.digitaloceanspaces.com%2Fnews%2Fprofile%2Fpic_profile.png&w=750&q=75"
                                            alt="profile"
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                            }}
                                        />
                                    </Box>
                                    <form
                                        onSubmit={onHandleSubmit}
                                        className="w-100 d-flex flex-column align-items-end"
                                    >
                                        <Box className="form-floating w-100">
                                            <textarea
                                                ref={textbox}
                                                onChange={handleChange}
                                                value={data.comment}
                                                onClick={handleTextClick}
                                                required
                                                style={{
                                                    resize: "none",
                                                    borderRadius: "10px",
                                                    overflow: "hidden",
                                                    paddingTop: "40px",
                                                }}
                                                className="form-control"
                                                id="floatingTextarea"
                                            />
                                            <label htmlFor="floatingTextarea">
                                                Leave a comment here
                                            </label>
                                        </Box>
                                        <Button
                                            sx={{
                                                mt: 2,
                                                textTransform: "none",
                                            }}
                                            type="submit"
                                            variant="contained"
                                        >
                                            Send
                                        </Button>
                                    </form>
                                </Box>

                                {/* Login Modal */}
                                <Modal
                                    open={open}
                                    onClose={() => setOpen(false)}
                                    aria-labelledby="login-modal-title"
                                    aria-describedby="login-modal-description"
                                >
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            top: "50%",
                                            left: "50%",
                                            transform: "translate(-50%, -50%)",
                                            width: 400,
                                            bgcolor: "background.paper",
                                            border: "2px solid #000",
                                            boxShadow: 24,
                                            p: 4,
                                        }}
                                    >
                                        <Typography
                                            id="login-modal-title"
                                            sx={{
                                                fontSize: "1.25rem",
                                                fontWeight: 700,
                                                color: theme.palette.custom
                                                    .darkBlue,
                                            }}
                                        >
                                            Masuk ke Akun Ideatax
                                        </Typography>
                                        <Typography
                                            sx={{ fontSize: "0.875rem", mt: 1 }}
                                        >
                                            Masuk untuk menyampaikan komentarmu.
                                        </Typography>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                justifyContent: "flex-end",
                                                gap: 2,
                                                mt: 2,
                                            }}
                                        >
                                            <Button
                                                variant="contained"
                                                color="error"
                                                onClick={() => setOpen(false)}
                                                sx={{
                                                    textTransform: "none",
                                                    fontSize: "0.8125rem",
                                                }}
                                            >
                                                Cancel
                                            </Button>
                                            <Button
                                                href={route("user-login")}
                                                variant="contained"
                                                sx={{
                                                    textTransform: "none",
                                                    backgroundColor:
                                                        theme.palette.custom
                                                            .darkBlue,
                                                    fontSize: "0.8125rem",
                                                }}
                                            >
                                                Masuk
                                            </Button>
                                        </Box>
                                    </Box>
                                </Modal>
                            </Box>

                            {/* Comment List */}
                            {comment.map((item) => (
                                <CommentItem
                                    key={item.id}
                                    name={item.user?.name}
                                    time={item.updated_at}
                                    comment={item.comment}
                                    id={item.id}
                                />
                            ))}
                        </div>
                    </Box>
                </div>
            </div>
        </Box>
    );
}

export default CommentSection;
