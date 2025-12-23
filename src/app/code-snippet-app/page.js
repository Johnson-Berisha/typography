"use client";

import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import "./codeSnippetApp.css";

export default function CodeSnippetApp() {
    const navRef = useRef(null);
    const pillRef = useRef(null);

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
        <nav ref={navRef} className="nav code-snippet-nav">
      <span ref={pillRef} className="pill" />
      <section className="nav-section">
        <h1>typo.graphy</h1>
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
    </nav>

    <div className="content">
        <div className="snippets-grid">
            <div className="snippet"></div>
            <div className="snippet"></div>
            <div className="snippet"></div>
            <div className="snippet"></div>
            <div className="snippet"></div>
            <div className="snippet"></div>
            <div className="snippet"></div>
            <div className="snippet"></div>
            <div className="snippet"></div>
            <div className="snippet"></div>
            <div className="snippet"></div>
            <div className="snippet"></div>
            <div className="snippet"></div>
            <div className="snippet"></div>
            <div className="snippet"></div>
            <div className="snippet"></div>
        </div>
    </div>
    </div>
  )
}
