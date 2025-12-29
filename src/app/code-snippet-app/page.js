"use client";

import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import "./codeSnippetApp.css";

export default function CodeSnippetApp() {
    const navRef = useRef(null);
    const pillRef = useRef(null);
    const [activeSnippet, setActiveSnippet] = useState(null);

    // testing out the ui
    const codeSnippet = `:root {
  --font-size-h1: 1.325rem;
  --font-size-h2: 1rem;
  --font-size-h3: 1rem;
  --font-size-p:  1rem;
  --font-size-p2: 0.875rem;
}

/* Usage Example */
h1 { font-size: var(--font-size-h1); }
p  { font-size: var(--font-size-p); }`;


    useEffect(() => {
    const nav = navRef.current;
    const pill = pillRef.current;
    const links = nav.querySelectorAll("section.nav-section a");
    const active = links[0]; // first link active by default
    const move = (el) => {
      const offsetTop = el.offsetTop;
      const offsetLeft = el.offsetLeft;
      const width = el.offsetWidth;
      const height = el.offsetHeight;

      pill.style.width = `${width}px`;
      pill.style.height = `${height}px`;
      pill.style.top = `${offsetTop}px`;
      pill.style.left = `${offsetLeft}px`;
    };

    move(active);

    links.forEach(link => {
      link.addEventListener("mouseenter", () => move(link));
    });

    // Only move back to active when leaving the entire nav
    nav.addEventListener("mouseleave", () => move(active));
      }, []);
  return (
    <div className="container">
        <nav ref={navRef} className={`nav code-snippet-nav example ${activeSnippet !== null ? 'has-active' : ''}`}>
      <span ref={pillRef} className="pill" />
      <section className="nav-section">
        <h2><Image
                  src="/logo-32-transparent.svg"
                  alt="Typography Logo"
                  width={32}
                  height={32} 
                /> Fontiq</h2>
        <p>Code Snippets</p>
      </section>
      <section className="nav-section">
        <Link href="/" className='home-link'>
        <Image
          src="/home-alt.svg"
          alt="Introduction"
          width={20}
          height={20}
        />
        <span>Home</span>
        </Link>
      </section>
      <section className="nav-section">
        <p>Categories</p>
        <Link href="#scale">
        <Image
          src="/format-text.svg"
          alt="Introduction"
          width={20}
          height={20}
        />
        <span>Font Setup</span>
        </Link>
        <Link href="#">
        <Image
          src="/ruler.svg"
          alt="Introduction"
          width={20}
          height={20}
        />
        <span>Scale & Sizing</span>
        </Link>
        <Link href="#">
        <Image
          src="/push-up.svg"
          alt="Introduction"
          width={20}
          height={20}
        />
        <span>Hierarchy</span>
        </Link>
        <Link href="#">
        <Image
          src="/font-spacing.svg"
          alt="Introduction"
          width={20}
          height={20}
        />
        <span>Spacing</span>
        </Link>
        <Link href="#">
        <Image
          src="/eye.svg"
          alt="Introduction"
          width={20}
          height={20}
        />
        <span>Readability</span>
        </Link>
        <Link href="#">
        <Image
          src="/edit-contrast.svg"
          alt="Introduction"
          width={20}
          height={20}
        />
        <span>Emphasis</span>
        </Link>
      </section>

      {/* code snippet info */}
      <section className="snippet-info" style={{marginTop: 25 + `px`}}>
        <pre className='code-container'><code>{codeSnippet}</code></pre>
        <Link href="#">Copy</Link>
      </section>
    </nav>

    <div className="content">
        <div className="snippets-grid">
            {[...Array(16)].map((_, index) => (
              <div
                key={index}
                className={`snippet ${activeSnippet === index ? 'active' : ''}`}
                onClick={() => setActiveSnippet(activeSnippet === index ? null : index)} >
                  <h1>Heading <span>- 1.325rem</span></h1>
                  <h2>Heading 2 <span>- 1rem</span></h2>
                  <h3>Heading 3 <span>- 1rem</span></h3>
                  <p>Paragraph <span>- 1rem</span></p>
                  <p className="p2">Paragraph 2 <span>- 0.875rem</span></p>

                  <span className="cto">Click to get code!</span>
                </div>
            ))}
        </div>
    </div>
    </div>
  )
}
