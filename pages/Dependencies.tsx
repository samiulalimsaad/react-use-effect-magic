import React, { useEffect, useMemo, useState } from "react";

const Dependencies = () => {
    const [name, setName] = useState("");
    const [state, setState] = useState({
        name: "aaa",
        selected: false,
    });

    // useEffect(() => {
    //     console.log("useEffect runs");
    // }, [state.name, state.selected]);

    const user = useMemo(
        () => ({ name: state.name, selected: state.selected }),
        [state.name, state.selected]
    );
    useEffect(() => {
        console.log("useEffect runs");
    }, [user]);

    console.count("rendered");
    return (
        <div>
            <input type="text" onChange={(e) => setName(e.target.value)} />
            <button onClick={() => setState((p) => ({ ...p, name }))}>
                Add Name
            </button>
            <button
                onClick={() =>
                    setState((p) => ({ ...p, selected: !p.selected }))
                }
            >
                Select
            </button>
            {`
            {
                name:${state.name},
                selected:${state.selected}
            }
            `}
        </div>
    );
};

export default Dependencies;
