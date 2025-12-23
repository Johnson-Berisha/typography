"use client";

import React from "react";
import { useContent } from "../context/ContentProvider";

export default function ContentList() {
  const { actions } = useContent();
  const items = actions.getContent() || [];

  return (
    <div className="guides">
      {items.map((item) => (
        <article key={item.id} id={item.id} className="guide-card">
          <div className="guide-header">
            <h2>{item.title}</h2>
            <span className="tag">{item.category}</span>
          </div>
          <p className="guide-intro">{item.excerpt}</p>

          {item.content && (
            <div>
              {item.content.map((contentItem, i) => (
                typeof contentItem === 'string' ? (
                  <p key={i}>{contentItem}</p>
                ) : (
                  <div key={i} className="code-block">
                    {Array.isArray(contentItem) && contentItem.map((ex, j) => (
                      <div key={j}>
                        {ex.type === 'code' && <code>{ex.text}</code>}
                        {ex.type === 'text' && <span>{ex.text}</span>}
                      </div>
                    ))}
                  </div>
                )
              ))}
            </div>
          )}

          {item.examples && (
            <div className="code-block">
              {item.examples.map((ex, i) => (
                <div key={i} style={{marginBottom: 12}}>
                  <strong style={{color: 'var(--primary-light)'}}>{ex.label}</strong>
                  <pre style={{margin: '6px 0 0', overflowX: 'auto'}}>
                    <code>{ex.code}</code>
                  </pre>
                </div>
              ))}
            </div>
          )}
        </article>
      ))}
    </div>
  );
}
