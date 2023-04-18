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
                    <Link href="/">
                        COLLABORATE
                    </Link>
                </h3>
                <h3 id="nav-item">
                    <Link href="/Initial-Faculty-Ranking">
                        MOTIVATION...
                    </Link>
                </h3>
            </div>
        </nav>
    )
}