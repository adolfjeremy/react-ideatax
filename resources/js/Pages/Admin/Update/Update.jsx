import { usePage } from "@inertiajs/react";
import { Button } from "@mui/material";
import AuthLayout from "@/Layout/AuthLayout";
import TableList from "@/Components/TableList";
import ActionButton from "@/Components/ActionButton";

function Update() {
    const { updates } = usePage().props;

    const columns = [
        {
            field: "title_eng",
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
                    destination={route("updates.edit", params.row.id)}
                    deleteRoute={route("updates.destroy", params.row.id)}
                />
            ),
            headerAlign: "center",
            align: "center",
        },
    ];
    return (
        <AuthLayout sectionHeading="Tax Updates">
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex align-items-center justify-content-end">
                        <Button
                            sx={{
                                textTransform: "none",
                                fontSize: "0.8rem",
                                fontWeight: 500,
                            }}
                            href={route("updates.create")}
                            variant="contained"
                        >
                            Create new Tax Update
                        </Button>
                    </div>
                </div>
                <div className="row mt-5">
                    <TableList rows={updates} columns={columns} />
                </div>
            </div>
        </AuthLayout>
    );
}

export default Update;
