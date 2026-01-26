"use client";

import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef } from "react"

const navLinks = {
    "Introduction": "/docs-pages",
    "Colors": "/colors",
    "Scaling": "/scaling",
    "Hierarchy": "/hierarchy",
    "Spacing": "/spacing",
    "Contrast": "/contrast",
    "Clamps": "/clamps",
}



export function Header() {
    const navRef = useRef(null);
    const hamburgerRef = useRef(null);
    const openedNavRef = useRef(false);
    const linkRef = useRef([]);
    // making nav responsive
    useEffect(() => {
        const hamburger = hamburgerRef.current;
        const nav = navRef.current;

        if (!hamburger || !nav) return;

        const isHamburgerVisible = () => window.getComputedStyle(hamburger).display !== 'none';

        const toggleNav = () => {
            // Only toggle on mobile when hamburger is visible
            if (!isHamburgerVisible()) return;
            if (!nav) return;

            if (openedNavRef.current === false) {
                nav.style.left = "0";
                openedNavRef.current = true;
            } else {
                nav.style.left = "-100%";
                openedNavRef.current = false;
            }
        }

        hamburger.addEventListener("click", toggleNav);

        const links = Array.from(nav.querySelectorAll('a'));
        links.forEach(el => el.addEventListener("click", toggleNav));

        // clean up after yo things
        return () => {
            hamburger.removeEventListener("click", toggleNav);
            links.forEach(el => el.removeEventListener("click", toggleNav));
        }
    }, []);
    return (
        <aside className="sidebar" ref={navRef}>
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
                {Object.entries(navLinks).map(([type, href]) => (
                    <Link href={href} key={type}>
                        {type}
                    </Link>
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
            <div className="nav-hamburger docs-hamburger" ref={hamburgerRef}>
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
            </div>
        </aside>
    )
}