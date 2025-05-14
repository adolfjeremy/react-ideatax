import React, { useState, useEffect } from "react";

let CKEditor;
let ClassicEditor;

function TesEditor({ value, onChange }) {
    const [editorLoaded, setEditorLoaded] = useState(false);
    const [CKEditor, setCKEditor] = useState(null);
    const [ClassicEditor, setClassicEditor] = useState(null);

    useEffect(() => {
        let isMounted = true;

        const loadEditor = async () => {
            const { CKEditor } = await import("@ckeditor/ckeditor5-react");
            const ClassicEditor = (
                await import("@ckeditor/ckeditor5-build-classic")
            ).default;

            if (isMounted) {
                setCKEditor(() => CKEditor);
                setClassicEditor(() => ClassicEditor);
                setEditorLoaded(true);
            }
        };

        if (typeof window !== "undefined") {
            loadEditor();
        }

        return () => {
            isMounted = false;
        };
    }, []);

    if (!editorLoaded || !CKEditor || !ClassicEditor) {
        return <div>Loading editor...</div>;
    }
    return (
        <CKEditor
            editor={ClassicEditor}
            data={value}
            onChange={(event, editor) => {
                const data = editor.getData();
                onChange(data);
            }}
        />
    );
}

export default TesEditor;
