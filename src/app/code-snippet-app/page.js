"use client";

import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import "./codeSnippetApp.css";
import { SnippetProvider } from './snippets-content/SnippetsProvider';
import SnippetList from './snippets-content/SnippetList';

export default function CodeSnippetApp() {

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
          {["allSnippets", "headers", "bodyText"].map(type => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              className={activeType === type ? "active" : ""}
            >{type.toUpperCase()}</button>
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
            <input type="text" id="searchInput" placeholder="Search by name or property..."></input>
          </div>
          <div className="new-snippet-btn">

            <button>
              <Image
                src={"/math-plus.svg"}
                height={19}
                width={19}
                alt='add-snippet'
              />
              New Snippet
            </button>
          </div>
        </header>
        <div className="stats">
          <div className="total-snippets">0 Snippets</div>
          <div className="view-toggle">
            <span>List</span>
            <span className="active">Grid</span>
          </div>
        </div>
        <div className="snippets-grid-container">
          <SnippetProvider>
            <SnippetList />
          </SnippetProvider>
        </div>
      </main>
    </div>
  )
}
