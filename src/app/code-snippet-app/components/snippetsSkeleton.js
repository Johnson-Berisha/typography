export default function SnippetSkeleton() {
    return (
        <div className="snippet skeleton">
            <div className="card-preview shimmer" />
            <div className="card-body">
                <div className="line shimmer" />
                <div className="line short shimmer" />
            </div>
        </div>
    );
}
