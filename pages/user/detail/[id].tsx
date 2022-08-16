import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import User from ".";

const SingleUser = () => {
    const [user, setUser] = useState<any>({});
    const router = useRouter();

    useEffect(() => {
        let isCancelled = false;

        console.log({ isCancelled });
        fetch(`https://jsonplaceholder.typicode.com/users/${router.query.id}`)
            .then((res) => res.json())
            .then((data) => {
                if (!isCancelled) {
                    console.log(data);
                    setUser(data);
                }
            })
            .catch((err) => console.log(err));

        return () => {
            isCancelled = true;
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
