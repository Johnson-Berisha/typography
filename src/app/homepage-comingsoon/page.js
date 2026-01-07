"use client";

import Image from "next/image";
import Link from "next/link";
import "./styles.css";
import { useEffect, useState, useRef } from "react";

export default function ComingSoonPage() {
  const [scrolled, setScrolled] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const panelsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
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
            />{" "}
            <span>Fontiq</span>
          </div>
          <div className="links">
            <ul>
              <li>
                <Link href={"#"} className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link href={"/"} className="nav-link">
                  Docs
                </Link>
              </li>
              <li>
                <Link href={"https://github.com/Johnson-Berisha/typography"} className="nav-link">
                  Github ↗
                </Link>
              </li>
              <li>
                <Link href={"/code-snippets-app"} className="nav-link highlight">
                  Code Snippets
                </Link>
              </li>
            </ul>
          </div>
          <div className="cta">
            <Link href={"/"} className="getStartedBtn">
              Get Started
            </Link>
          </div>
        </div>
      </nav>
      <header className="hero">
        <div className="hero-content">
          <div className="badge">SCSS guide coming soon!</div>
          <h1>
            Typography guide for the
            <br /> <span className="gradient-text">modern web developer.</span>
          </h1>
          <p className="hero-subtext">
            Fontiq helps developers learn how to and improve their UIs by only using typography.
          </p>
          <div className="hero-buttons">
            <Link href={"/"} className="btn btn-secondary">
              Read Documentation
            </Link>
            <Link href={"/code-snippet-app"} className="btn btn-primary">
              Check out Code Snippets
            </Link>
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
              <span style={{ color: "var(--primary)" }}>"font"</span>: "Roboto
              Mono",
              <br />
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
          <h1>
            Learn. <span className="gradient-text">Everything.</span>
          </h1>
          <p className="facts-subtext">
            Learn how to improve your UI only using typography.
          </p>
        </div>
        <div className="facts-grid">
          <div className="fact-card large example">
            <span className="fact-icon">1</span>
            <h1>⚡</h1>
            <h3>Learn Typography basics, fast!</h3>
            <p>
              Font-size, line-height, letter-spacing. The rules that actually affect readability.
            </p>
          </div>
          <div className="fact-card small example">
            <span className="fact-icon">2</span>
            <h1>📱</h1>
            <h3>Responsive Typography in UI</h3>
            <p>
              Copy-paste ready snippets for React, Vue, and plain HTML/CSS.
              Optimized for performance and zero Layout Shift.
            </p>
          </div>
          <div className="fact-card small example">
            <span className="fact-icon">3</span>
            <h1>🧩</h1>
            <h3>Quick Code Snippets</h3>
            <p>
              Copy-paste ready snippets for React, Vue, and plain HTML/CSS.
              Optimized for performance and zero Layout Shift.
            </p>
          </div>
          <div className="fact-card small example">
            <span className="fact-icon">4</span>
            <h1>✅</h1>
            <h3>Learn Best Practices</h3>
            <p>
              Copy-paste ready snippets for React, Vue, and plain HTML/CSS.
              Optimized for performance and zero Layout Shift.
            </p>
          </div>
          <div className="fact-card small example">
            <span className="fact-icon">5</span>
            <h1>🔍</h1>
            <h3>Accesability Tips</h3>
            <p>
              Copy-paste ready snippets for React, Vue, and plain HTML/CSS.
              Optimized for performance and zero Layout Shift.
            </p>
          </div>
        </div>
      </section>
      <section className="section faq faq-container">
        <div className="faq-title">
          <h2>FAQ</h2>
          <p className="faq-subtext">
            Everything you need to know about Fontiq.
          </p>
        </div>

        <div className="faq-items">
          {[
            {
              q: "When will the SCSS guide be available?",
              a: "Our SCSS guide is currently in development and is expected to be released in Q4 2024. Stay tuned for updates! will include practical code examples and patterns to help you apply the concepts.",
            },
            {
              q: "Will there be code examples included?",
              a: "Yes — the guide will include practical code examples and patterns to help you apply the concepts. will include practical code examples and patterns to help you apply the concepts. will include practical code examples and patterns to help you apply the concepts.",
            },
            {
              q: "Can I get notified when it's released?",
              a: "You can will include practical code examples and patterns to help you apply the concepts. sign up for notifications on the homepage (coming soon). We'll send an update when it's live.",
            },
            {
              q: "Can I get notified when it's released?",
              a: "You can will include practical code examples and patterns to help you apply the concepts. sign up for notifications on the homepage (coming soon). We'll send an update when it's live.",
            },
          ].map((item, index) => (
            <div className="faq-item" key={index}>
              <button
                className={`acc ${openIndex === index ? "active" : ""}`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {item.q}
              </button>
              <div
                className="panel"
                ref={(el) => (panelsRef.current[index] = el)}
                style={{
                  maxHeight:
                    openIndex === index && panelsRef.current[index]
                      ? Math.max(panelsRef.current[index].scrollHeight, 100) +
                        "px"
                      : "0px",
                  overflow: "hidden",
                  transition: "max-height 0.3s ease",
                }}
              >
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="final-cta">
        <div className="container cta-box">
          <h2>Ready to master your type?</h2>
          <p>
            Join over 2,000+ developers building beautiful interfaces with Fontiq.
          </p>
          <Link href="/" className="btn btn-primary">
            Get Started
          </Link>
        </div>
      </section>
      <footer>
        <div className="copyright">&copy; Fontiq</div>
        <div className="footer-links">
          <Link href={"/"}>Docs</Link>
          <Link href={"https://github.com/Johnson-Berisha/typography"}>Github ↗</Link>
          <Link href={"/code-snippets-app"}>Code Snippets</Link>
        </div>
      </footer>
    </div>
  );
}
