import Link from "next/link"

export default function Header() {
    return (
        <nav className="nav-bar">
            <h1 className="ucm-logo">
                TASKBOARD WEBSITE!
            </h1>
            <div className="nav-items">
                <h3 id="nav-item">
                    <Link href="/Task-Page/tasks">
                        TASKBOARD
                    </Link>
                </h3>
                <h3 id="nav-item">
                    <Link href="/Collaborate">
                        COLLABORATE
                    </Link>
                </h3>
                <h3 id="nav-item">
                    <Link href="/Motivation">
                        MOTIVATION...
                    </Link>
                </h3>
                <h3 id="nav-item">
                    <Link href="/">
                        Log out
                    </Link>
                </h3>
            </div>
        </nav>
    )
}