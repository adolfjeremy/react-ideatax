import { useState, useEffect, useRef } from "react";
import { Typography, useTheme } from "@mui/material";

const Counter = ({ target, duration = 3000 }) => {
    const theme = useTheme();
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const counterRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (counterRef.current) {
                observer.unobserve(counterRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let currentCount = 0;
        const increment = target / (duration / 100); // Menentukan increment per interval
        const interval = setInterval(() => {
            currentCount += increment;
            if (currentCount >= target) {
                setCount(target); // Berhenti pada target
                clearInterval(interval);
            } else {
                setCount(Math.floor(currentCount));
            }
        }, 100);

        return () => clearInterval(interval);
    }, [isVisible, target, duration]);

    return (
        <div className="mt-4" ref={counterRef}>
            <Typography
                sx={{
                    color: theme.palette.custom.darkBlue,
                    fontSize: "3.9502rem",
                    lineHeight: "1.390625em",
                    textAlign: "center",
                    fontWeight: "800",
                    [theme.breakpoints.down("md")]: {
                        fontSize: "1.8rem",
                    },
                }}
                className="stat m-0"
            >
                {Math.floor(count)} +
            </Typography>
        </div>
    );
};

export default Counter;
