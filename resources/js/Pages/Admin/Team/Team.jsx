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
            renderCell: (params) => params.row.position?.name || "-",
            headerAlign: "center",
            align: "center",
        },
        {
            field: "department",
            headerName: "Department",
            flex: 1,
            renderCell: (params) => params.row.department?.name_eng || "-",
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
                    <div className="col-12 d-flex align-items-center justify-content-between">
                        <div className="d-flex flex-column align-items-start gap-3">
                            <Button
                                sx={{
                                    textTransform: "none",
                                    fontSize: "0.8rem",
                                    fontWeight: 500,
                                }}
                                href={route("department.index")}
                                variant="contained"
                            >
                                Department List
                            </Button>
                            <Button
                                sx={{
                                    textTransform: "none",
                                    fontSize: "0.8rem",
                                    fontWeight: 500,
                                }}
                                href={route("position.index")}
                                variant="contained"
                            >
                                Position List
                            </Button>
                        </div>
                        <div className="d-flex flex-column align-items-end gap-3">
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
                            <Button
                                sx={{
                                    textTransform: "none",
                                    fontSize: "0.8rem",
                                    fontWeight: 500,
                                }}
                                href={route("award.index")}
                                variant="contained"
                            >
                                Award List
                            </Button>
                        </div>
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
