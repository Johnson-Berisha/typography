"use client";

import Image from "next/image";
import Link from "next/link";
import "./styles.css"
import { useEffect, useState } from "react";

export default function ComingSoonPage() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else{
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="container">
            <nav className={`homepage-nav ${scrolled ? "scrolled" : ""}`}>
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
            <header className="hero">
                <div className="hero-content">
                    <h1>Typography guide for the<br /> <span className="gradient-text">modern web developer.</span></h1>
                    <p className="hero-subtext">
                        Fontiq helps developers and designers test, pair, and deploy fonts 10x faster. 
                Stop guessing and start designing with precision. (fake text)
                    </p>
                    <div className="hero-buttons">
                        <Link href={"#"} className="btn btn-primary">Check out Code Snippets</Link>
                        <Link href={"#"} className="btn btn-secondary">Read Documentation</Link>
                    </div>
                </div>
            </header>
            
        </div>
    );
}