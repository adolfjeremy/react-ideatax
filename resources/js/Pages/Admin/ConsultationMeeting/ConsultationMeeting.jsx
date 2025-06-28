import { usePage } from "@inertiajs/react";
import AuthLayout from "@/Layout/AuthLayout";
import TableList from "@/Components/TableList";
import ActionButton from "@/Components/ActionButton";

function ConsultationMeeting() {
    const { meetings } = usePage().props;
    const modifiedMeetings = meetings.map((item) => {
        return {
            ...item,
            serviceTitle: item.service?.title_eng,
        };
    });

    console.log(modifiedMeetings);

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
            flex: 0.8,
            headerAlign: "center",
            align: "center",
        },
        {
            field: "phone",
            headerName: "Phone",
            flex: 0.5,
            headerAlign: "center",
            align: "center",
        },
        {
            field: "company",
            headerName: "Company",
            flex: 0.8,
            headerAlign: "center",
            align: "center",
        },
        {
            field: "schedule",
            headerName: "Schedule",
            flex: 0.4,
            headerAlign: "center",
            align: "center",
        },
        {
            field: "serviceTitle",
            headerName: "Service Needed",
            flex: 0.6,
            headerAlign: "center",
            align: "center",
        },
        {
            field: "description",
            headerName: "Needs",
            flex: 0.5,
            headerAlign: "center",
            align: "center",
        },
        {
            field: "actions",
            headerName: "",
            type: "actions",
            flex: 0.05,
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
        <AuthLayout sectionHeading="Consultation Meetings">
            <div className="container">
                <div className="row mt-2">
                    <TableList rows={modifiedMeetings} columns={columns} />
                </div>
            </div>
        </AuthLayout>
    );
}

export default ConsultationMeeting;
