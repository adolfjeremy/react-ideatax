import { useState, useEffect, useRef } from "react";

const Counter = ({ target, duration = 2000 }) => {
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

    return <div ref={counterRef}>{Math.floor(count)}</div>;
};

export default Counter;
