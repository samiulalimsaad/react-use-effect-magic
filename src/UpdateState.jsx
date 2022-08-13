import React, { useEffect, useState } from "react";

const UpdateState = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("use Effect runs");
        const interval = setInterval(() => {
            setCount((p) => p + 1);
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    console.count("rendered");
    return (
        <div>
            <span>{count}aasdasd</span>
        </div>
    );
};

export default UpdateState;
