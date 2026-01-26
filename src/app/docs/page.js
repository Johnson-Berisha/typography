"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useContent } from "../../context/ContentProvider";
import { Header } from "./components/header";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const navRef = useRef(null);
  const hamburgerRef = useRef(null);
  const openedNavRef = useRef(false);
  const linkRef = useRef([]);
  const { actions } = useContent();
  const content = actions.getContent();

  const renderContent = (arr) => {
    if (!arr) return null;
    const out = [];
    let idx = 0;
    while (idx < arr.length) {
      const node = arr[idx];
      if (typeof node === 'string') {
        out.push(<p key={`p-${idx}`}>{node}</p>);
        idx++;
        continue;
      }
      if (node.type === 'codeblock') {
        out.push(
          <pre className="code-container" key={`code-${idx}`}>
            <code>{node.code}</code>
          </pre>
        );
        idx++;
        continue;
      }
      if (Array.isArray(node)) {
        out.push(
          <p key={`mix-${idx}`}>
            {node.map((n, j) => {
              if (n.type === 'code') return <code key={j}>{n.text}</code>;
              if (n.type === 'text') return <span key={j}>{n.text}</span>;
              return null;
            })}
          </p>
        );
        idx++;
        continue;
      }
      if (node.type === 'li') {
        const items = [];
        while (idx < arr.length && arr[idx] && arr[idx].type === 'li') {
          items.push(arr[idx].content);
          idx++;
        }
        out.push(
          <ul key={`list-${idx}`}>
            {items.map((it, j) => (
              <li key={j}>{it}</li>
            ))}
          </ul>
        );
        continue;
      }
      idx++;
    }
    return out;
  }; //end

  useEffect(() => {
    setIsLoading(false); // content is ready
  }, []);



  return (
    <div className="container docs-body">
      <Header />
      {/* <aside className="sidebar" ref={navRef}>
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
          {["Introduction", "Colors", "Scaling", "Hierarchy", "Spacing", "Contrast", "Clamps"].map((type, index) => (
            <button key={type} ref={el => linkRef.current[index] = el}>
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
      </aside> */}
      <main className="content">


        <div className="guides-demo">
          <div className="guides" style={{ marginTop: 12 }}>
            {content && content[0] && (
              <article key={content[0].id} id={content[0].id} className="guide-card intro">
                <div className="guide-header">
                  <h1 style={{ margin: 0 }}>{content[0].title}</h1>
                  <span className="tag">{content[0].category}</span>
                </div>
                <p className="guide-intro">{content[0].excerpt}</p>
                {renderContent(content[0].content)}
              </article>
            )}
          </div>
        </div>

        <div className="videos example">
          <div className="video video1">
            <div className="do">Do!</div>
            <div className="img"></div>
            <div className="text">
              <div className="text-img">
                <span className="circle"></span>
              </div>
              <div className="text-info">
                <h3>Check out my crazyy video now!!!!!</h3>
                <p>Mr. Random</p>
                <p>23.4M views  3 months ago</p>
              </div>
            </div>
          </div>

          <div className="video video2">
            <div className="dont">Don't!</div>
            <div className="img"></div>
            <div className="text">
              <div className="text-img">
                <span className="circle"></span>
              </div>
              <div className="text-info">
                <h3>Check out my crazyy video now!!!!!</h3>
                <p>Mr. Random</p>
                <p>23.4M views  3 months ago</p>
              </div>
            </div>
          </div>
        </div>

        {/* <p>By just adding some <code>color</code>, <code>font-weight</code> and <code>line-height</code> you can make text look a lot better, e.g:</p>
      
      <div className="flex">
        <div className="card before">
          <span>Before</span>
          <h1>typo.graphy</h1>
          <p>Documentation</p>
        </div>
        <div className="card after">
          <span>After</span>
          <h1>typo.graphy</h1>
          <p>Documentation</p>
        </div>
      </div> */}
        <div className="guides-demo">
          <div className="guides" style={{ marginTop: 12 }}>
            {content && content[1] && (
              <article key={content[1].id} id={content[1].id} className="guide-card">
                <div className="guide-header">
                  <h2 style={{ margin: 1 }}>{content[1].title}</h2>
                  <span className="tag">{content[1].category}</span>
                </div>
                <p className="guide-intro">{content[1].excerpt}</p>
                {renderContent(content[1].content)}
              </article>
            )}
          </div>
        </div>
        <div className="colors-example example">
          <div className="color-card good">
            <div className="do">Do!</div>
            <h1>typo.graphy</h1>
            <p>Documentation</p>
            <span>Foundation</span>
          </div>
          <div className="color-card bad">
            <div className="dont">Don't!</div>
            <h1>typo.graphy</h1>
            <p>Documentation</p>
            <span>Foundation</span>
          </div>
        </div>
        <div className="guides-demo">
          <div className="guides" style={{ marginTop: 12 }}>
            {content && content[2] && (
              <article key={content[2].id} id={content[2].id} className="guide-card">
                <div className="guide-header">
                  <h2 style={{ margin: 1 }}>{content[2].title}</h2>
                  <span className="tag">{content[2].category}</span>
                </div>
                <p className="guide-intro">{content[2].excerpt}</p>
                {renderContent(content[2].content)}
              </article>
            )}
          </div>
        </div>
        <div className="scale-example example">
          <p>Keep identical elements the same <code>font-size</code>.</p>
          <h1>Heading <span>- 1.325rem</span></h1>
          <h2>Heading 2 <span>- 1rem</span></h2>
          <h3>Heading 3 <span>- 1rem</span></h3>
          <p>Paragraph <span>- 1rem</span></p>
          <p className="p2">Paragraph 2 <span>- 0.875rem</span></p>
        </div>
        <div className="codeSnippetAd code-snippets">The code for this is in the <Link href="/code-snippet-app"> Code Snippets</Link></div>




        <div className="guides-demo">
          <div className="guides" style={{ marginTop: 12 }}>
            {content && content.slice(3).map(item => (
              <article key={item.id} id={item.id} className="guide-card">
                <div className="guide-header">
                  <h2 style={{ margin: 0 }}>{item.title}</h2>
                  <span className="tag">{item.category}</span>
                </div>
                <p className="guide-intro">{item.excerpt}</p>
                {renderContent(item.content)}

              </article>
            ))}
          </div>
        </div>

        {/* css.gg ad */}
        <div className="cssgg">Icons by <Link href={"https://css.gg/"} target="_blank">css.gg</Link></div>
        {/* everthing goes up /\ */}
      </main>
    </div>
  );
}