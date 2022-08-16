import Link from "next/link";

const User = () => {
    return (
        <div>
            <div>
                <Link href="/user/1">goto user - 1 Page</Link>
            </div>
            <div>
                <Link href="/user/2">goto user - 2 Page</Link>
            </div>
            <div>
                <Link href="/user/3">goto user - 3 Page</Link>
            </div>
        </div>
    );
};

export default User;
