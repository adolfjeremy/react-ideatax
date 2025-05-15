import { useState, useLayoutEffect, useRef, useContext } from "react";
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
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const textbox = useRef(null);
    const { toggleSpinner } = useContext(SpinnerContext);

    const { data, setData, post, reset } = useForm({
        comment: "",
        article_id: article_id,
        user_id: auth.user?.id,
    });

    function adjustHeight() {
        textbox.current.style.height = "inherit";
        textbox.current.style.height = `${textbox.current.scrollHeight}px`;
    }

    useLayoutEffect(adjustHeight, []);

    function handleKeyDown(e) {
        setData("comment", e.target.value);
        adjustHeight();
    }

    const handleTextCLick = () => {
        auth.user ? "" : handleOpen();
    };
    const onHandleSubmit = (e) => {
        e.preventDefault();
        post(route("articles-comment"), {
            onStart: () => {
                toggleSpinner(true);
            },
            onSuccess: () => {
                toggleSpinner(false);
                reset();
            },
            onError: (error) => {
                toggleSpinner(false);
                console.log(error);
            },
            preserveScroll: true,
        });
    };

    const onHandleLike = (e) => {
        e.preventDefault();
        post(route("articles-like", article_id), {
            onStart: () => {
                toggleSpinner(true);
            },
            onSuccess: () => {
                toggleSpinner(false);
                reset();
            },
            onError: (error) => {
                toggleSpinner(false);
                console.log(error);
            },
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
                            <div className="col-12 mt-4 d-flex align-items-center justify-content-between">
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        gap: 1,
                                    }}
                                >
                                    <Box sx={{ position: "relative" }}>
                                        {likeCount > 0 && (
                                            <Box
                                                sx={{
                                                    width: "20px",
                                                    height: "20px",
                                                    position: "absolute",
                                                    top: "0",
                                                    left: "25px",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    borderRadius: "50%",
                                                    backgroundColor:
                                                        theme.palette.custom
                                                            .white,
                                                }}
                                            >
                                                <Typography
                                                    sx={{
                                                        fontSize: "12px",
                                                    }}
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
                            <div className="col-12 mt-4">
                                <Typography sx={{ fontSize: "1rem" }}>
                                    Comments ({comment.length})
                                </Typography>
                            </div>
                            <div className="col-12">
                                <Divider
                                    sx={{
                                        backgroundColor:
                                            theme.palette.grey[600],
                                        mt: 3,
                                    }}
                                />
                            </div>
                            <Box className="col-12 mt-4">
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "start",
                                        justifyContent: "start",
                                        gap: 2,
                                        width: "100%",
                                    }}
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
                                    <form
                                        onSubmit={onHandleSubmit}
                                        className="w-100 d-flex flex-column align-items-end justify-content-center"
                                    >
                                        <Box className="form-floating w-100">
                                            <textarea
                                                ref={textbox}
                                                onChange={handleKeyDown}
                                                value={data.comment}
                                                onClick={handleTextCLick}
                                                required
                                                style={{
                                                    resize: "vertical",
                                                    fieldSizing: "content",
                                                    borderRadius: "10px",
                                                    overflowY: "hidden",
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
                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
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
                                            component="h2"
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
                                                alignItems: "center",
                                                justifyContent: "end",
                                                gap: 2,
                                                mt: 2,
                                            }}
                                        >
                                            <Button
                                                variant="contained"
                                                color="error"
                                                onClick={handleClose}
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
