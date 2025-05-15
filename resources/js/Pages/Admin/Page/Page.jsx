import { usePage } from "@inertiajs/react";
import { Button } from "@mui/material";
import AuthLayout from "@/Layout/AuthLayout";
import TableList from "@/Components/TableList";
import ActionButton from "@/Components/ActionButton";

function Page() {
    const { pages } = usePage().props;
    const columns = [
        {
            field: "title",
            headerName: "Title",
            flex: 0.6,
            headerAlign: "center",
            align: "center",
        },
        {
            field: "SEO_title_eng",
            headerName: "SEO Title",
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
                    destination={route("page.edit", params.row.id)}
                    deleteRoute={route("page.destroy", params.row.id)}
                />
            ),
            headerAlign: "center",
            align: "center",
        },
    ];
    return (
        <AuthLayout sectionHeading="Page">
            <div className="container">
                <div className="row mt-5">
                    <TableList rows={pages} columns={columns} />
                </div>
            </div>
        </AuthLayout>
    );
}

export default Page;
