import type { NextPage } from "next";
import Link from "next/link";
import UpdateState from "./UpdateState";

const Home: NextPage = () => {
    return (
        <>
            <Link href="/posts">goto Post Page</Link>
            <Link href="/user">goto Post Page</Link>
            <UpdateState />
        </>
    );
};

export default Home;
