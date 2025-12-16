"use client";

import React, { createContext, useContext } from "react";
import content from "../data/content.json";

const ContentContext = createContext({ actions: { getContent: () => [] } });

export function ContentProvider({ children }) {
  const actions = {
    // returns the full content array (sync). Use actions.getContent() in client components.
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
