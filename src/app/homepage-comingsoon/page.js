import Image from "next/image";
import Link from "next/link";
import "./styles.css"

export default function ComingSoonPage() {
    return (
        <div className="container">
            <nav className="homepage-nav">
                <div className="nav-container">
                <div className="hn-title">
                <Image
                 src="/logo-32-transparent.svg"
                 alt="Typography Logo"
                 width={32}
                 height={32} 
                 /> <span>Fontiq</span>
                 </div>
                 <div className="links">
                    <ul>
                        <li><Link href={"#"} className="nav-link">Home</Link></li>
                        <li><Link href={"#"}className="nav-link">Docs</Link></li>
                        <li><Link href={"#"}className="nav-link">Github</Link></li>
                        <li><Link href={"#"} className="nav-link highlight">Code Snippets</Link></li>
                    </ul>
                 </div>
                 <div className="cta">
                    <Link href={"#"} className="getStartedBtn">Get Started</Link>
                 </div>
                 </div>
            </nav>
        </div>
    );
}