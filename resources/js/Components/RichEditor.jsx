import { useTheme, Box } from "@mui/material";
import "@/assets/sass/editor.scss";

function RichEditor({ handleInput, value, placeholder }) {
    const theme = useTheme();
    return (
        <Box
            sx={{
                border: "1px solid rgba(0, 0, 0, 0.3)",
                borderRadius: "5px",
                minHeight: "200px",
                maxHeight: "350px",
                marginBottom: "15px",
                padding: "15px",
                overflowY: "auto",
            }}
        >
            <div
                className="form_div"
                data-placeholder={`${placeholder}. Paste your content here`}
                contentEditable
                onInput={handleInput}
                value={value}
            >
                {value}
            </div>
        </Box>
    );
}

export default RichEditor;
