import { usePage } from "@inertiajs/react";
import { Button } from "@mui/material";
import AuthLayout from "@/Layout/AuthLayout";
import TableList from "@/Components/TableList";
import ActionButton from "@/Components/ActionButton";

function Advisory() {
    const { advisories } = usePage().props;
    const columns = [
        {
            field: "title_eng",
            headerName: "Title",
            flex: 0.6,
            headerAlign: "center",
            align: "center",
        },
        {
            field: "team_name_eng",
            headerName: "Team name",
            renderCell: (params) => `${params.row.team?.name } - ${params.row.team?.position }`|| "-",
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
                    destination={route("advisories.edit", params.row.id)}
                    deleteRoute={route("advisories.destroy", params.row.id)}
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
                            href={route("advisories.create")}
                            variant="contained"
                        >
                            Create new Advisory
                        </Button>
                    </div>
                </div>
                <div className="row mt-5">
                    <TableList rows={advisories} columns={columns} />
                </div>
            </div>
        </AuthLayout>
    );
}

export default Advisory;
