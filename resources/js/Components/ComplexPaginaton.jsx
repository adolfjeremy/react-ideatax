import { Box, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

function ComplexPaginaton({ currentPage, lastPage, onPageChange }) {
    let startPage = currentPage - 1;

    // Kasus awal (jangan negatif)
    if (currentPage <= 2) {
        startPage = 1;
    }

    // Kasus akhir (jangan lebih dari lastPage - 2)
    if (currentPage >= lastPage - 1) {
        startPage = Math.max(lastPage - 2, 1);
    }

    // Buat 3 angka: [start, start+1, start+2]
    const visiblePages = Array.from(
        { length: 3 },
        (_, i) => startPage + i
    ).filter((page) => page >= 1 && page <= lastPage);

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
                onClick={() => onPageChange(1)}
                disabled={currentPage === 1}
                className="px-3 py-1 border rounded disabled:opacity-50"
            >
                First
            </Button>

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
            <Button
                onClick={() => onPageChange(lastPage)}
                disabled={currentPage === lastPage}
                className="px-3 py-1 border rounded disabled:opacity-50"
            >
                Last
            </Button>
        </Box>
    );
}

export default ComplexPaginaton;
