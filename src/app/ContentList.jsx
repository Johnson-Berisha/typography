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
              {(() => {
                const out = [];
                const content = item.content;
                let idx = 0;
                while (idx < content.length) {
                  const node = content[idx];
                  // render plain string
                  if (typeof node === 'string') {
                    out.push(<p key={`p-${idx}`}>{node}</p>);
                    idx++;
                    continue;
                  }

                  // render code block
                  if (node.type === 'codeblock') {
                    out.push(
                      <pre key={`code-${idx}`} className="code-container">
                        <code>{node.code}</code>
                      </pre>
                    );
                    idx++;
                    continue;
                  }

                  // render arrays of mixed parts
                  if (Array.isArray(node)) {
                    out.push(
                      <p key={`mix-${idx}`}>
                        {node.map((ex, j) => (
                          <React.Fragment key={j}>
                            {ex.type === 'code' && <code>{ex.text}</code>}
                            {ex.type === 'text' && <span>{ex.text}</span>}
                          </React.Fragment>
                        ))}
                      </p>
                    );
                    idx++;
                    continue;
                  }

                  // collect consecutive li nodes
                  if (node.type === 'li') {
                    const items = [];
                    while (idx < content.length && content[idx] && content[idx].type === 'li') {
                      items.push(content[idx].content);
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
              })()}
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
