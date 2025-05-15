import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import NoSSR from "./NoSSR";

import "ckeditor5/ckeditor5.css";

function RichEditor({ handleInput, value, placeholder }) {
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
        <NoSSR>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    justifyContent: "center",
                    gap: 1,
                    my: 2,
                    ".editor-container_classic-editor .editor-container__editor":
                        {
                            maxWidth: "calc(100vw - 358px)",
                        },
                }}
            >
                <div className="main-container w-100">
                    <div className="editor-container editor-container_classic-editor editor-container_include-style">
                        <div className="editor-container__editor">
                            <label>{placeholder}</label>
                            <CKEditor
                                editor={ClassicEditor}
                                data={value}
                                onChange={(event, editor) => {
                                    const data = editor.getData();
                                    handleInput(data);
                                }}
                            />
                        </div>
                    </div>
                </div>
            </Box>
        </NoSSR>
    );
}

export default RichEditor;
