import Link from "next/link";

function Navigation() {
    return (
        <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/about">about</Link>
            </li>
            <li>
                <Link href="/services">services</Link>
            </li>
        </ul>
    );
}

export default Navigation;
