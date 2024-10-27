import { DataGrid } from "@mui/x-data-grid";

function TableList({ columns, rows }) {
    return (
        <DataGrid
            columns={columns}
            rows={rows}
            getRowId={(row) => row.id}
            pageSize={10}
            getRowClassName={(params) =>
                params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
            }
        />
    );
}

export default TableList;
