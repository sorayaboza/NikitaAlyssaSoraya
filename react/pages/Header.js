import Link from "next/link"

export default function Header() {
    return (
        <nav className="nav-bar">
            <div className="nav-items">
                <h3 id="nav-item">
                    <Link href="/Task-Page/tasks">
                        <span id="nav-text">TASKBOARD</span>
                    </Link>
                </h3>
                <h3 id="nav-item">
                    <Link href="/Collaborate">
                        <span id="nav-text">COLLABORATE</span>
                    </Link>
                </h3>
                <h3 id="nav-item">
                    <Link href="/Motivation">
                        <span id="nav-text">MOTIVATION...</span>
                    </Link>
                </h3>
                <h3 id="nav-item">
                    <Link href="/">
                    <span id="nav-text">Log out</span>
                    </Link>
                </h3>
            </div>
        </nav>
    )
}