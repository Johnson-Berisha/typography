"use client";

import { useState } from "react";

export default function SnippetList({ snippets }) {
    const [copied, setCopied] = useState(null);
    if (!snippets.length) return <p>No snippets found</p>;

    const copy = async (text) => {
        await navigator.clipboard.writeText(text);
        setCopied(id);
        setTimeout(() => setCopied(null), 1000);
    };
    return (
        <div className="snippets-grid">
            {snippets.map(snippet => (
                <div key={snippet.title} className="snippet">
                    <div className="card-preview" data-snippet={snippet.id}><h1>{snippet.example}</h1></div>

                    <div className="card-body">
                        <div className="card-header">
                            <h3>{snippet.title}</h3>
                        </div>
                        <div className="code-block">
                            <pre onClick={() => copy(snippet.code)}>
                                <code>{snippet.code}</code>
                            </pre>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
