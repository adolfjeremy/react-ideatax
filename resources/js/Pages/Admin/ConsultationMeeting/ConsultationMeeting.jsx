import { useState } from "react";
import { usePage } from "@inertiajs/react";
import AuthLayout from "@/Layout/AuthLayout";
import TableList from "@/Components/TableList";
import ActionButton from "@/Components/ActionButton";
import formatDate from "@/utils/formatDate";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Grid, Box } from "@mui/material";

function ConsultationMeeting() {
    const { meetings } = usePage().props;
    const [viewData, setViewData] = useState(null);
    const modifiedMeetings = meetings.map((item) => {
        return {
            ...item,
            inputDate: formatDate(item.created_at),
            scheduleDate: formatDate(item.schedule),
            serviceTitle: item.service?.title_eng,
        };
    });

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
            field: "inputDate",
            headerName: "Input Date",
            flex: 0.4,
            headerAlign: "center",
            align: "center",
        },
        {
            field: "scheduleDate",
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
                    needView={true}
                    onView={() => setViewData(params.row)}
                    deleteRoute={route(
                        "consultation-meeting.destroy",
                        params.row.id,
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

            <Dialog open={!!viewData} onClose={() => setViewData(null)} maxWidth="md" fullWidth>
                <DialogTitle sx={{ fontWeight: 'bold' }}>Contact Detail</DialogTitle>
                <DialogContent dividers>
                    {viewData && (
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="subtitle2" color="textSecondary">Name</Typography>
                                <Typography variant="body1" gutterBottom>{viewData.name}</Typography>
                                
                                <Typography variant="subtitle2" color="textSecondary">Email</Typography>
                                <Typography variant="body1" gutterBottom>{viewData.email}</Typography>
                                
                                <Typography variant="subtitle2" color="textSecondary">Phone</Typography>
                                <Typography variant="body1" gutterBottom>{viewData.phone}</Typography>
                                
                                <Typography variant="subtitle2" color="textSecondary">Company</Typography>
                                <Typography variant="body1" gutterBottom>{viewData.company}</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="subtitle2" color="textSecondary">Input Date</Typography>
                                <Typography variant="body1" gutterBottom>{viewData.inputDate}</Typography>

                                <Typography variant="subtitle2" color="textSecondary">Schedule</Typography>
                                <Typography variant="body1" gutterBottom>{viewData.scheduleDate}</Typography>
                                
                                <Typography variant="subtitle2" color="textSecondary">Service Needed</Typography>
                                <Typography variant="body1" gutterBottom>{viewData.serviceTitle}</Typography>
                                
                                <Typography variant="subtitle2" color="textSecondary">Source</Typography>
                                <Typography variant="body1" gutterBottom>{viewData.source || '-'}</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="subtitle2" color="textSecondary">Needs / Description</Typography>
                                <Box sx={{ p: 2, bgcolor: '#f5f5f5', borderRadius: 1 }}>
                                    <Typography variant="body1" style={{ whiteSpace: 'pre-wrap' }}>
                                        {viewData.description}
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setViewData(null)} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </AuthLayout>
    );
}

export default ConsultationMeeting;
