"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useContent } from "../context/ContentProvider";

export default function Home() {

    const navRef = useRef(null);
  const pillRef = useRef(null);
  const { actions } = useContent();
  const content = actions.getContent();

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
     <nav ref={navRef} className="nav">
      <span ref={pillRef} className="pill" />
      <section className="nav-section">
        <h2>typo.graphy</h2>
        <p>Documentation and guide on typography.</p>
      </section>
      <section className="nav-section">
        <p>Foundation</p>
        <Link href="#">
        <Image
          src="/home-alt.svg"
          alt="Introduction"
          width={20}
          height={20}
        />
        <span>Introduction</span>
        </Link>
        <Link href="#">
        <Image
          src="/color-bucket.svg"
          alt="Introduction"
          width={20}
          height={20}
        />
        <span>Colors</span>
        </Link>
        <Link href="#">
        <Image
          src="/ruler.svg"
          alt="Introduction"
          width={20}
          height={20}
        />
        <span>Scale</span>
        </Link>
      </section>
      <section className="nav-section">
        <p>Structure</p>
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
          src="/edit-contrast.svg"
          alt="Introduction"
          width={20}
          height={20}
        />
        <span>Contrast</span>
        </Link>
      </section>
    </nav>
      <div className="content">
      
      <div className="guides-demo">
        <div className="guides" style={{marginTop: 12}}>
          {content && content[0] && (
            <article key={content[0].id} className="guide-card">
              <div className="guide-header">
                <h1 style={{margin:0}}>{content[0].title}</h1>
                <span className="tag">{content[0].category}</span>
              </div>
              <p className="guide-intro">{content[0].excerpt}</p>
              {content[0].content.map((p, i) => {
                if (typeof p === "string") return <p key={i}>{p}</p>;
                if (Array.isArray(p)) {
                  return (
                    <p key={i}>
                      {p.map((node, j) => {
                        if (node.type === "code") return <code key={j}>{node.text}</code>;
                        if (node.type === "text") return <span key={j}>{node.text}</span>;
                        return null;
                      })}
                    </p>
                  );
                }
                return null;
              })}
            </article>
          )}
        </div>
      </div>

      <div className="videos">
      <div className="video video1">
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
        <div className="guides" style={{marginTop: 12}}>
          {content && content.slice(1).map(item => (
            <article key={item.id} id={item.id} className="guide-card">
              <div className="guide-header">
                <h1 style={{margin:0}}>{item.title}</h1>
                <span className="tag">{item.category}</span>
              </div>
              <p className="guide-intro">{item.excerpt}</p>
              {item.content.map((p, i) => {
                if (typeof p === "string") return <p key={i}>{p}</p>;
                if (Array.isArray(p)) {
                  return (
                    <p key={i}>
                      {p.map((node, j) => {
                        if (node.type === "code") return <code key={j}>{node.text}</code>;
                        if (node.type === "text") return <span key={j}>{node.text}</span>;
                        return null;
                      })}
                    </p>
                  );
                }
                return null;
              })}

            </article>
          ))}
        </div>
      </div>

      {/* css.gg ad */}
      <div className="cssgg">Icons by <Link href={"https://css.gg/"}>css.gg</Link></div>
      {/* everthing goes up /\ */}
      </div>
    </div>
  );
}
