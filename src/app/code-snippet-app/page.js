"use client";

import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import "./codeSnippetApp.css";

export default function CodeSnippetApp() {

  return (
    <div className="container">
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
          <ul>
            <li className="active">All Snippets</li>
            <li>Favorites</li>
          </ul>

          <p className="nav-label">Categories</p>
          <ul>
            <li>Headings</li>
            <li>Body Text</li>
            <li>Utilities</li>
          </ul>
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
      </main>
    </div>
  )
}
