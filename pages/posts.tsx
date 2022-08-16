import { useEffect, useState } from "react";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        let isCancelled = false;

        console.log({ isCancelled });

        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => {
                if (!isCancelled) {
                    alert("ready");
                    console.log(data);
                    setPosts(data);
                }
            })
            .catch((err) => console.log(err));

        return () => {
            isCancelled = true;
        };
    }, []);

    return (
        <div>
            {posts.map((v: any) => (
                <p key={v.id}>{v.body}</p>
            ))}
        </div>
    );
};

export default Posts;
