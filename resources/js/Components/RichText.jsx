function RichText({ htmlContent, className = "" }) {
    return (
        <div
            className={className}
            dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
    );
}

export default RichText;
