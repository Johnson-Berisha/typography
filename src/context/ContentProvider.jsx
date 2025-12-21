"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const ContentContext = createContext({ actions: { getContent: () => [] } });

export function ContentProvider({ children }) {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const fileNames = ["test", "colors3", "scale"];
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
          // Map 'body' to 'content' array format
          content: post.content || (post.body ? [post.body] : []),
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
