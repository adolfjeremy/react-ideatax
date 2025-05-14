import React, { useEffect, useState } from "react";

const NoSSR = ({ children, fallback = null }) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return fallback;

    return typeof children === "function" ? children() : children;
};

export default NoSSR;
