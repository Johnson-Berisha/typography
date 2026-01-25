"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const SnippetContext = createContext({ actions: { getSnippets: () => [] } });

export function SnippetProvider({ children }) {
    const [snippets, setSnippets] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSnippets = async () => {
            try {
                const start = Date.now();
                const fileNames = ["elegantheader", "fake-snippet", "basic-config", "gradient-header", "readablep", "letterspacing", "responsive-header"];
                const fetchedSnippets = await Promise.all(
                    fileNames.map(fileName =>
                        fetch(
                            `https://johnson-berisha.github.io/typography-snippets/content/snippets/${fileName}.json`
                        ).then(res => res.json())
                    )
                );
                const cleaned = fetchedSnippets.map(snippet => ({
                    ...snippet,
                    code: snippet.code
                        ? snippet.code.replace(/```[\w]*\n?|```/g, "").trim()
                        : ""
                }));



                setSnippets(cleaned);

                const elapsed = Date.now() - start;
                const minTime = 500; // 500ms minimum
                setTimeout(() => setLoading(false), Math.max(0, minTime - elapsed));
            } catch (err) {
                console.error("Failed to fetch snippets:", err);
                setSnippets([]);
                setLoading(false);
            }
        };

        fetchSnippets();
    }, []);

    const actions = {
        getSnippets: () => snippets,
    };

    return (
        <SnippetContext.Provider value={{ actions, loading }}>
            {children}
        </SnippetContext.Provider>
    );
}

export function useSnippets() {
    return useContext(SnippetContext);
}

export default SnippetContext;
