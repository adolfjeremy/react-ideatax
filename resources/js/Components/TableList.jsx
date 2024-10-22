import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

function TableList({ columns, rows }) {
    const [pageSize, SetPageSize] = useState(5);
    return (
        <DataGrid
            columns={columns}
            rows={rows}
            getRowId={(row) => row.id}
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => SetPageSize(newPageSize)}
            rowsPerPageOptions={[5, 10, 50, 100]}
            getRowClassName={(params) =>
                params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
            }
        />
    );
}

export default TableList;
