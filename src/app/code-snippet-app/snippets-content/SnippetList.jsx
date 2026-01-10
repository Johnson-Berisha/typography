"use client";

import React from "react";
import { useSnippets } from "./SnippetsProvider";

export default function SnippetList() {
    const { actions, loading } = useSnippets();
    const snippets = actions.getSnippets() || [];

    if (loading) return <p>Loading snippets...</p>;

    return (
        <div className="snippets-grid">
            {snippets.map((snippet) => (
                <div key={snippet.title} className="snippet">
                    {/* Preview / Title */}
                    <div className="card-preview">
                        {snippet.example}
                    </div>

                    {/* Body */}
                    <div className="card-body">
                        <div className="card-header">
                            <h3>{snippet.title}</h3>
                        </div>

                        {/* Code block */}
                        <div className="code-block">
                            <pre>
                                <code>{snippet.code}</code>
                            </pre>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
