"use client";

export default function SnippetList({ snippets }) {
    if (!snippets.length) return <p>No snippets found</p>;

    return (
        <div className="snippets-grid">
            {snippets.map(snippet => (
                <div key={snippet.title} className="snippet">
                    <div className="card-preview">{snippet.example}</div>

                    <div className="card-body">
                        <div className="card-header">
                            <h3>{snippet.title}</h3>
                        </div>
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
