"use client";

import React from "react";
import { useSnippets } from "../context/SnippetProvider";

export default function SnippetList() {
    const { actions, loading } = useSnippets();
    const snippets = actions.getSnippets() || [];

    if (loading) return <p>Loading snippets...</p>;

    return (
        <div className="snippets">
            {snippets.map((snippet) => (
                <div key={snippet.title} className="snippet">
                    {/* Preview / Title */}
                    <div className="card-preview">
                        {snippet.title}
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

                        {/* Example if exists */}
                        {snippet.example && (
                            <div className="snippet-example">
                                <strong>Example:</strong> {snippet.example}
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}
