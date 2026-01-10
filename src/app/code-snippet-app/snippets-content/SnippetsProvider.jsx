"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const SnippetContext = createContext({ actions: { getSnippets: () => [] } });

export function SnippetProvider({ children }) {
    const [snippets, setSnippets] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSnippets = async () => {
            try {
                const fileNames = ["elegantheader", "test"];
                const fetchedSnippets = await Promise.all(
                    fileNames.map(fileName =>
                        fetch(
                            `https://johnson-berisha.github.io/typography-snippets/content/snippets/${fileName}.json`
                        ).then(res => res.json())
                    )
                );

                setSnippets(fetchedSnippets);
            } catch (err) {
                console.error("Failed to fetch snippets:", err);
                setSnippets([]);
            } finally {
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
