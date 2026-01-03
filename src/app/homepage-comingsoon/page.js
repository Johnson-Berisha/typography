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
                    <div className="badge">SCSS guide coming soon!</div>
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
            <div className="hero-cards-container">
                
                <div className="visual-card card-side card-left">
                    <div className="card-header">
                        <div className="window-controls">
                            <div className="dot bg-red"></div>
                            <div className="dot bg-yellow"></div>
                            <div className="dot bg-green"></div>
                        </div>
                    </div>
                    <div className="card-body minimal-ui">
                        <div className="ui-group">
                            <span className="ui-label">Font Family</span>
                            <div className="ui-input">Inter Tight</div>
                        </div>
                        
                        <div className="ui-group">
                            <span className="ui-label">Weight</span>
                            <div className="ui-slider-track">
                                <div className="ui-slider-thumb"></div>
                            </div>
                        </div>
                    </div>
                </div>

                 <div className="visual-card card-side card-right">
                    <div className="card-header">
                        <div className="dot bg-muted"></div>
                    </div>
                    <div className="card-body minimal-ui">
                        <div className="ui-block">JSON Output</div>
                        <div className="ui-code">
                            <span style={{ color: "var(--primary)" }}>"font"</span>: "Roboto Mono",<br />
                            <span style={{ color: "var(--primary)" }}>"weight"</span>: 500
                        </div>
                    </div>
                </div>

                <div className="visual-card card-main">
                    <div className="card-header">
                        <span>Preview: Heading 1</span>
                        <span className="badge-sm">Live</span>
                    </div>
                    <div className="card-body main-preview">
                        <h3>Design with speed.</h3>
                        <p>The quick brown fox jumps over the lazy dog.</p>
                        
                        <div className="ui-controls-row">
                            <div className="ui-pill active">Aa 700</div>
                            <div className="ui-pill">48px</div>
                            <div className="ui-pill color-pill"></div>
                        </div>
                    </div>
                </div>

            </div>
            <section className="facts facts-container">
                <div className="facts-title">
                    <h1>Learn. <span className="gradient-text">Everything.</span></h1>
                    <p className="facts-subtext">Learn how to improve your UI only using typography.</p>
                </div>
                <div className="facts-grid">
                    <div className="fact-card">
                        <h2>01</h2>
                        <h3>Font Pairing</h3>
                        <p>Discover the art of combining fonts to create visually appealing and harmonious designs that captivate your audience.</p>
                    </div>
                    <div className="fact-card">
                        <h2>01</h2>
                        <h3>Font Pairing</h3>
                        <p>Discover the art of combining fonts to create visually appealing and harmonious designs that captivate your audience.</p>
                    </div>
                    <div className="fact-card">
                        <h2>01</h2>
                        <h3>Font Pairing</h3>
                        <p>Discover the art of combining fonts to create visually appealing and harmonious designs that captivate your audience.</p>
                    </div>
                    <div className="fact-card">
                        <h2>01</h2>
                        <h3>Font Pairing</h3>
                        <p>Discover the art of combining fonts to create visually appealing and harmonious designs that captivate your audience.</p>
                    </div>
                    <div className="fact-card">
                        <h2>01</h2>
                        <h3>Font Pairing</h3>
                        <p>Discover the art of combining fonts to create visually appealing and harmonious designs that captivate your audience.</p>
                    </div>
                    <div className="fact-card">
                        <h2>01</h2>
                        <h3>Font Pairing</h3>
                        <p>Discover the art of combining fonts to create visually appealing and harmonious designs that captivate your audience.</p>
                    </div>
                </div>
            </section>
            </div>
            
    );
}