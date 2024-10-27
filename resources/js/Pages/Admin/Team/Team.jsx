import { usePage } from "@inertiajs/react";
import { Button } from "@mui/material";
import AuthLayout from "@/Layout/AuthLayout";
import TableList from "@/Components/TableList";
import ActionButton from "@/Components/ActionButton";

function Team() {
    const { teams } = usePage().props;
    const columns = [
        {
            field: "name",
            headerName: "Name",
            flex: 0.6,
            headerAlign: "center",
            align: "center",
        },
        {
            field: "position",
            headerName: "Position",
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
                    destination={route("team.edit", params.row.id)}
                    deleteRoute={route("team.destroy", params.row.id)}
                />
            ),
            headerAlign: "center",
            align: "center",
        },
    ];
    return (
        <AuthLayout sectionHeading="Teams">
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex align-items-center justify-content-end">
                        <Button
                            sx={{
                                textTransform: "none",
                                fontSize: "0.8rem",
                                fontWeight: 500,
                            }}
                            href={route("team.create")}
                            variant="contained"
                        >
                            Create Team
                        </Button>
                    </div>
                </div>
                <div className="row mt-5">
                    <TableList rows={teams} columns={columns} />
                </div>
            </div>
        </AuthLayout>
    );
}

export default Team;
