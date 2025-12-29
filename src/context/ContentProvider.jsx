"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const ContentContext = createContext({ actions: { getContent: () => [] } });

export function ContentProvider({ children }) {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const fileNames = ["test", "colors3", "scale", "hierarchy2", "spacing", "contrast", "clamps"];
        const posts = await Promise.all(
          fileNames.map(fileName =>
            fetch(
              `https://johnson-berisha.github.io/typography-content/content/posts/${fileName}.json`
            ).then(res => res.json())
          )
        );
        
        // Transform PagesCMS data to app format
        const transformed = posts.map(post => ({
          ...post,
          // Map 'body' to 'content' array format and split on "\n\n"
          content: (post.content || (post.body ? [post.body] : [])).flatMap(item => {
            if (typeof item === 'string') {
              // Helper: parse a paragraph into strings and `li` objects
              const parseParagraph = (paragraph) => {
                const lines = paragraph.split('\n').map(l => l.trim()).filter(Boolean);
                const isBullet = (l) => /^([-*•]\s+|\d+[.)]\s+)/.test(l);
                const out = [];
                let i = 0;
                while (i < lines.length) {
                  if (isBullet(lines[i])) {
                    const items = [];
                    while (i < lines.length && isBullet(lines[i])) {
                      items.push(lines[i].replace(/^([-*•]\s+|\d+[.)]\s+)/, '').trim());
                      i++;
                    }
                    for (const it of items) out.push({ type: 'li', content: it });
                  } else {
                    const textLines = [];
                    while (i < lines.length && !isBullet(lines[i])) {
                      textLines.push(lines[i]);
                      i++;
                    }
                    out.push(textLines.join(' '));
                  }
                }
                return out.length ? out : [paragraph];
              };

              // First split on code blocks ```...```
              const parts = [];
              let lastIndex = 0;

              // Find all code blocks
              const matches = [];
              const codeBlockRegex = /```([\s\S]*?)```/g;
              let match;
              while ((match = codeBlockRegex.exec(item)) !== null) {
                matches.push({ index: match.index, end: codeBlockRegex.lastIndex, code: match[1].trim() });
              }

              if (matches.length === 0) {
                // No code blocks: split on "\n\n" and parse paragraphs for bullets
                return item
                  .split('\n\n')
                  .filter(paragraph => paragraph.trim())
                  .flatMap(paragraph => parseParagraph(paragraph));
              }

              // Process text and code blocks
              for (const codeMatch of matches) {
                // Add text before code block (parsed)
                if (codeMatch.index > lastIndex) {
                  const textBefore = item.substring(lastIndex, codeMatch.index).trim();
                  if (textBefore) {
                    parts.push(...textBefore.split('\n\n').filter(p => p.trim()).flatMap(p => parseParagraph(p)));
                  }
                }
                // Add code block
                parts.push({ type: 'codeblock', code: codeMatch.code });
                lastIndex = codeMatch.end;
              }

              // Add remaining text after last code block (parsed)
              if (lastIndex < item.length) {
                const textAfter = item.substring(lastIndex).trim();
                if (textAfter) {
                  parts.push(...textAfter.split('\n\n').filter(p => p.trim()).flatMap(p => parseParagraph(p)));
                }
              }

              return parts.length > 0 ? parts : [item];
            }
            return item;
          }),
          // Set default excerpt if missing
          excerpt: post.excerpt || post.title || "",
          // Set default id if missing
          id: post.id || post.slug || Date.now(),
          // Set default category
          category: post.category || "Post",
        }));
        
        setContent(transformed);
      } catch (err) {
        console.error("Failed to fetch content:", err);
        setContent([]);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  const actions = {
    getContent: () => content,
  };

  return (
    <ContentContext.Provider value={{ actions }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  return useContext(ContentContext);
}

export default ContentContext;
