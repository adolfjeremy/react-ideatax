import { usePage } from "@inertiajs/react";
import AuthLayout from "@/Layout/AuthLayout";
import TableList from "@/Components/TableList";
import ActionButton from "@/Components/ActionButton";

function Subscribe() {
    const { subs } = usePage().props;
    const columns = [
        {
            field: "name",
            headerName: "Name",
            flex: 0.6,
            headerAlign: "center",
            align: "center",
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1,
            headerAlign: "center",
            align: "center",
        },
        {
            field: "actions",
            headerName: "Action",
            type: "actions",
            renderCell: (params) => (
                <ActionButton
                    param={params}
                    needEdit={false}
                    deleteRoute={route(
                        "consultation-meeting.destroy",
                        params.row.id
                    )}
                />
            ),
            headerAlign: "center",
            align: "center",
        },
    ];
    return (
        <AuthLayout sectionHeading="Subscriber">
            <div className="container">
                <div className="row mt-2">
                    <TableList rows={subs} columns={columns} />
                </div>
            </div>
        </AuthLayout>
    );
}

export default Subscribe;
