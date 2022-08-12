import React, { useEffect, useState } from "react";

const Basic = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    useEffect(() => {
        console.log("use Effect runs");
        document.title = `you have clicked ${count} times`;
    }, [count]);

    console.count("rendered");
    return (
        <div>
            <span>you have clicked {count} times</span>
            <button onClick={() => setCount((p) => p + 1)}>Increase</button>
            <input type="text" onChange={(e) => setName(e.target.value)} />
        </div>
    );
};

export default Basic;
