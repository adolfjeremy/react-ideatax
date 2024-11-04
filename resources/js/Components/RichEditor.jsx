import { useState, useEffect } from "react";
import { useTheme, Box } from "@mui/material";
import "@/assets/sass/editor.scss";
import "ckeditor5/ckeditor5.css";

function RichEditor({ handleInput, value, placeholder }) {
    const theme = useTheme();
    const [Editor, setEditor] = useState(null);

    useEffect(() => {
        // Hanya load CKEditor di lingkungan klien
        if (typeof window !== "undefined") {
            Promise.all([
                import("@ckeditor/ckeditor5-react").then(
                    ({ CKEditor }) => CKEditor
                ),
                import("ckeditor5").then(
                    ({
                        ClassicEditor,
                        Bold,
                        Essentials,
                        Italic,
                        Paragraph,
                        Undo,
                    }) => ({
                        ClassicEditor,
                        Bold,
                        Essentials,
                        Italic,
                        Paragraph,
                        Undo,
                    })
                ),
            ]).then(
                ([
                    CKEditor,
                    {
                        ClassicEditor,
                        Bold,
                        Essentials,
                        Italic,
                        Paragraph,
                        Undo,
                    },
                ]) => {
                    ClassicEditor.builtinPlugins = [
                        Essentials,
                        Bold,
                        Italic,
                        Paragraph,
                        Undo,
                    ];
                    setEditor({ CKEditor, ClassicEditor });
                }
            );
        }
    }, []);

    if (!Editor) return null; // Kembalikan null jika Editor belum siap
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                justifyContent: "center",
                gap: 1,
                mb: 3,
                ".ck.ck-editor": {
                    width: "100%",
                },
            }}
        >
            <label>{placeholder}</label>
            <Editor.CKEditor
                editor={Editor.ClassicEditor}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    handleInput(data);
                }}
                config={{
                    toolbar: {
                        items: ["undo", "redo", "|", "bold", "italic"],
                    },
                    initialData: value,
                }}
            />
        </Box>
    );
}

export default RichEditor;
