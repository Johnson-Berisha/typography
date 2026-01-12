"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import "./codeSnippetApp.css";
import { SnippetProvider, useSnippets } from "./snippets-content/SnippetsProvider";
import SnippetList from "./snippets-content/SnippetList";

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

  return (
    <div className="container snippets-container">
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
          {["All Snippets", "Header", "test", "Config"].map(type => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              className={activeType === type ? "active" : ""}
            >
              {type}
            </button>
          ))}
        </nav>
        <div className="sidebar-footer">
          <p>I havent decided what to put here yet</p>
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
        </header>
        <div className="stats">
          <div className="total-snippets">{total} Snippets</div>
        </div>

        {loading ? (
          <p>Loading snippets...</p>
        ) : (
          <SnippetList snippets={filteredSnippets} />
        )}
      </main>
    </div>
  );
}
