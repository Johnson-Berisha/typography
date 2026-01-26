import Link from "next/link"
import Image from "next/image"

export function Header() {
    return (
        <aside className="sidebar">
            <div className="brand">
                <div className="brand-title">
                    <Image
                        src="/logo-32-transparent.svg"
                        alt="Typography Logo"
                        width={32}
                        height={32}
                    />{" "}
                    <h1>Fontiq</h1>
                </div>
                <p className="brand-subtext">Code Snippets App</p>
            </div>
            <nav className="snippets-nav">
                <p className="nav-label">Library</p>
                {["Introduction", "Colors", "Scaling", "Hierarchy", "Spacing", "Contrast", "Clamps"].map((type, index) => (
                    <button key={type}>
                        {type}
                    </button>
                ))}
            </nav>
            <div className="sidebar-footer">
                <Link href={"/"}>
                    <Image
                        src={"/home-alt.svg"}
                        alt="go home"
                        width={23}
                        height={23}
                    />Home</Link>
            </div>
        </aside>
    )
}