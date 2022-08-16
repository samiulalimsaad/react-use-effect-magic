import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import User from ".";

const SingleUser = () => {
    const [user, setUser] = useState<any>({});
    const router = useRouter();

    // useEffect(() => {
    //     const controller = new AbortController();
    //     const signal = controller.signal;

    //     fetch(`https://jsonplaceholder.typicode.com/users/${router.query.id}`, {
    //         signal,
    //     })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data);
    //             setUser(data);
    //         })
    //         .catch((err) => console.log(err));

    //     return () => {
    //         controller.abort();
    //     };
    // }, [router.query.id]);

    useEffect(() => {
        const cancelToken = axios.CancelToken.source();
        axios
            .get(
                `https://jsonplaceholder.typicode.com/users/${router.query.id}`,
                { cancelToken: cancelToken.token }
            )
            .then(({ data }) => {
                console.log(data);
                setUser(data);
            })
            .catch((err) => {
                if (axios.isCancel(err)) {
                    console.log("cancel");
                }
                console.log(err);
            });

        return () => {
            cancelToken.cancel();
        };
    }, [router.query.id]);

    return (
        <div>
            <div>name:{user.name}</div>
            <div>name:{user.email}</div>
            <div>name:{user.website}</div>
            <User />
        </div>
    );
};

export default SingleUser;
