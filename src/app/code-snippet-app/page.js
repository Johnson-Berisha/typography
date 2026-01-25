"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import "./codeSnippetApp.css";
import { SnippetProvider, useSnippets } from "./snippets-content/SnippetsProvider";
import SnippetList from "./snippets-content/SnippetList";
import Link from "next/link";
import SnippetSkeleton from "./components/snippetsSkeleton";

export default function CodeSnippetApp() {
  const [activeType, setActiveType] = useState("All Snippets");


  return (
    <SnippetProvider>
      <PageContent activeType={activeType} setActiveType={setActiveType} />
    </SnippetProvider>
  );
}

function PageContent({ activeType, setActiveType }) {
  const { actions, loading } = useSnippets();
  const snippets = actions.getSnippets() || [];
  // search bar
  const [query, setQuery] = useState("");
  const navRef = useRef(null);
  const hamburgerRef = useRef(null);
  const openedNavRef = useRef(false);
  const linkRef = useRef([])

  const filteredSnippets = snippets.filter(s => {
    const matchesType = activeType === "All Snippets" || s.type === activeType;

    const matchesSearch =
      s.title.toLowerCase().includes(query.toLowerCase()) ||
      s.code.toLowerCase().includes(query.toLowerCase());

    return matchesType && matchesSearch;
  }
  );

  const total = filteredSnippets.length;

  useEffect(() => {
    const searchBar = document.getElementById("searchInput");
    const handler = (e) => {
      if (e.key === "/" && searchBar && document.activeElement !== searchBar) {
        e.preventDefault();
        searchBar.focus();
      }

      if (e.key === "Escape" && document.activeElement === searchBar) {
        searchBar.blur();
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // making nav responsive

  useEffect(() => {
    const hamburger = hamburgerRef.current;
    const link = linkRef.current;
    const nav = navRef.current;

    const isHamburgerVisible = () => {
      return hamburger && window.getComputedStyle(hamburger).display !== 'none';
    };

    const toggleNav = () => {
      // Only toggle on mobile when hamburger is visible
      if (!isHamburgerVisible()) return;

      if (openedNavRef.current === false) {
        nav.style.left = "0";
        openedNavRef.current = true;
      } else {
        nav.style.left = "-100%";
        openedNavRef.current = false;
      }
    }

    hamburger.addEventListener("click", toggleNav);
    link.forEach(el => {
      if (el) el.addEventListener("click", toggleNav)
    })

    // clean up after yo things
    return () => {
      hamburger.removeEventListener("click", toggleNav);
      link.forEach(el => {
        if (el) el.removeEventListener("click", toggleNav)
      })
    }
  }, []);

  useEffect(() => {
    const linkCSS = document.createElement("link");
    linkCSS.rel = "stylesheet";
    linkCSS.href = "https://johnson-berisha.github.io/typography-snippets/snippets.css";
    document.head.appendChild(linkCSS);
  }, []);



  return (
    <div className="container snippets-container">
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
          {["All Snippets", "Header", "Config", "Body Text", "UI"].map((type, index) => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              className={activeType === type ? "active" : ""}
              ref={el => linkRef.current[index] = el}
            >
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

      <main className="main-content">
        <header className="top-bar">
          <div className="search-bar">
            <Image
              src={"/search.svg"}
              width={19}
              height={19}
              alt='search-icon'
            />
            <input type="text" id="searchInput" value={query} placeholder="Search by name or code..." onChange={e => setQuery(e.target.value)} />
            <span className="keyboard-shortcut">/</span>
          </div>
          <div className="nav-hamburger" ref={hamburgerRef}>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
          </div>
        </header>
        <div className="stats">
          <div className="total-snippets">{total} Snippets</div>
        </div>

        {loading ? (
          Array.from({ length: 3 }).map((_, i) => <SnippetSkeleton key={i} />)
        ) : (
          <SnippetList snippets={filteredSnippets} />
        )}

      </main>
    </div>
  );
}
