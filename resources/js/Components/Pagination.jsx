import { Box, Button } from "@mui/material";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

function Pagination({ prev, next }) {
    return (
        <Box
            className="col-12"
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
            }}
        >
            <Button href={prev} variant="outlined">
                <MdKeyboardDoubleArrowLeft />
                Previous
            </Button>
            <Button href={next} variant="outlined">
                Next <MdKeyboardDoubleArrowRight />
            </Button>
        </Box>
    );
}

export default Pagination;
