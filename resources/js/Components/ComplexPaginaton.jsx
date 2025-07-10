import { Box, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

function ComplexPaginaton({ currentPage, lastPage, onPageChange }) {
    let startPage = currentPage;

    if (currentPage <= 2) {
        startPage = 1;
    }
    const visiblePages = Array.from(
        { length: 3 },
        (_, i) => startPage + i
    ).filter((p) => p <= lastPage);

    const { t } = useTranslation();

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
            <Button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                variant="outlined"
            >
                <MdKeyboardDoubleArrowLeft />
                {t("prev")}
            </Button>
            {visiblePages.map((page) => (
                <Button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`px-3 py-1 border rounded ${
                        page === currentPage ? "bg-black text-white" : ""
                    }`}
                >
                    {page}
                </Button>
            ))}
            <Button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === lastPage}
                variant="outlined"
            >
                {t("next")} <MdKeyboardDoubleArrowRight />
            </Button>
        </Box>
    );
}

export default ComplexPaginaton;
