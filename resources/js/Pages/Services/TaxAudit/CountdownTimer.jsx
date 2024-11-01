import { useState, useEffect, useRef } from "react";
import { Box, Typography, useTheme } from "@mui/material";

const CountdownTimer = () => {
    const theme = useTheme();
    const initialTime = 5 * 60 * 60; // 5 jam dalam detik
    const [timeLeft, setTimeLeft] = useState(initialTime);
    const timerRef = useRef(null);
    const [hasStarted, setHasStarted] = useState(false); // Menyimpan status apakah timer sudah mulai

    useEffect(() => {
        // Mengatur observer untuk memeriksa visibilitas elemen
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !hasStarted) {
                    setHasStarted(true); // Tandai bahwa timer telah dimulai
                }
            });
        });

        if (timerRef.current) {
            observer.observe(timerRef.current); // Mulai mengamati elemen
        }

        // Hapus observer saat komponen di-unmount
        return () => {
            if (timerRef.current) {
                observer.unobserve(timerRef.current);
            }
        };
    }, [hasStarted]);

    useEffect(() => {
        let timerInterval;

        if (hasStarted && timeLeft > 0) {
            // Mulai interval jika timer sudah dimulai
            timerInterval = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);
        }

        // Hapus interval saat komponen di-unmount
        return () => clearInterval(timerInterval);
    }, [hasStarted, timeLeft]);

    // Hitung jam, menit, dan detik dari sisa waktu
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;

    return (
        <Box
            ref={timerRef}
            sx={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Box
                sx={{
                    border: `3px solid ${theme.palette.custom.darkBlue}`,
                    padding: 2,
                    borderRadius: "15px",
                    backgroundColor: "rgb(230, 230, 230)",
                }}
            >
                <Typography
                    sx={{
                        fontSize: "2rem",
                        letterSpacing: "0.009em",
                        lineHeight: "1.01561707em",
                        color: theme.palette.custom.darkBlue,
                        fontWeight: "400",
                        [theme.breakpoints.down("sm")]: {
                            fontSize: "0.8rem",
                        },
                    }}
                >
                    {String(hours).padStart(2, "0")}
                </Typography>
            </Box>
            <span>:</span>
            <Box
                sx={{
                    border: `3px solid ${theme.palette.custom.darkBlue}`,
                    padding: 2,
                    borderRadius: "15px",
                    backgroundColor: "rgb(230, 230, 230)",
                }}
            >
                <Typography
                    sx={{
                        fontSize: "2rem",
                        letterSpacing: "0.009em",
                        lineHeight: "1.01561707em",
                        color: theme.palette.custom.darkBlue,
                        fontWeight: "400",
                        [theme.breakpoints.down("sm")]: {
                            fontSize: "0.8rem",
                        },
                    }}
                >
                    {String(minutes).padStart(2, "0")}
                </Typography>
            </Box>
            <span>:</span>
            <Box
                sx={{
                    border: `3px solid ${theme.palette.custom.darkBlue}`,
                    padding: 2,
                    borderRadius: "15px",
                    backgroundColor: "rgb(230, 230, 230)",
                }}
            >
                <Typography
                    sx={{
                        fontSize: "2rem",
                        letterSpacing: "0.009em",
                        lineHeight: "1.01561707em",
                        color: theme.palette.custom.darkBlue,
                        fontWeight: "400",
                        [theme.breakpoints.down("sm")]: {
                            fontSize: "0.8rem",
                        },
                    }}
                >
                    {String(seconds).padStart(2, "0")}
                </Typography>
            </Box>
        </Box>
    );
};

export default CountdownTimer;
