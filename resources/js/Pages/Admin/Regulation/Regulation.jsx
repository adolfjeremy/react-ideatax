import { usePage } from "@inertiajs/react";
import { Button } from "@mui/material";
import AuthLayout from "@/Layout/AuthLayout";
import TableList from "@/Components/TableList";
import ActionButton from "@/Components/ActionButton";

function Regulation() {
    const { regulations } = usePage().props;
    const columns = [
        {
            field: "title_eng",
            headerName: "Title",
            flex: 0.6,
            headerAlign: "center",
            align: "center",
        },
        {
            field: "document",
            headerName: "Document",
            renderCell: (params) => <a href={`/storage/${params.row.document}`} target="_blank">Regulation PDF</a>,
            flex: 1,
            headerAlign: "center",
            align: "center",
        },
        {
            field: "actions",
            headerName: "Actions",
            type: "actions",
            renderCell: (params) => (
                <ActionButton
                    param={params}
                    destination={route("regulations.edit", params.row.id)}
                    deleteRoute={route("regulations.destroy", params.row.id)}
                />
            ),
            headerAlign: "center",
            align: "center",
        },
    ];
    return (
        <AuthLayout sectionHeading="Advisories">
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex align-items-center justify-content-end">
                        <Button
                            sx={{
                                textTransform: "none",
                                fontSize: "0.8rem",
                                fontWeight: 500,
                            }}
                            href={route("regulations.create")}
                            variant="contained"
                        >
                            Create new Library
                        </Button>
                    </div>
                </div>
                <div className="row mt-5">
                    <TableList rows={regulations} columns={columns} />
                </div>
            </div>
        </AuthLayout>
    );
}

export default Regulation;
