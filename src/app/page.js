"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Home() {

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
     <nav ref={navRef} className="nav">
      <span ref={pillRef} className="pill" />
      <section className="nav-section">
        <h2>typo.graphy</h2>
        <p>Documentation and guide on typography.</p>
      </section>
      <section className="nav-section">
        <Link href="#">Home</Link>
        <Link href="#">Colors</Link>
        <Link href="#">Hierarchy</Link>
      </section>
      <section className="nav-section">
        <Link href="#">Demo</Link>
        <Link href="#">More text</Link>
        <Link href="#">Demo Next</Link>
      </section>
    </nav>
      <div className="content">
      
      <div className="desc">
      <h1>Look down!</h1>
      <p>Compare the thumbnails above. Which one catches your eye?</p>
      <p>You probably said the left one haven't you? So can you tell how much typography can make UI look sooo much better! Here we will talk more about how You can make UI's 10x better.</p>
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
      <p>By just adding some <code>color</code>, <code>font-weight</code> and <code>line-height</code> you can make text look a lot better, e.g:</p>
      
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
      </div>

      {/* everthing goes up /\ */}
      </div>
    </div>
    </div>
  );
}
