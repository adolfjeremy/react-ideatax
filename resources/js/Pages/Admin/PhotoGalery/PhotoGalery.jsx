import { usePage } from "@inertiajs/react";
import { Button } from "@mui/material";
import AuthLayout from "@/Layout/AuthLayout";
import TableList from "@/Components/TableList";
import ActionButton from "@/Components/ActionButton";

function PhotoGalery() {
    const { galeries } = usePage().props;

    const columns = [
        {
            field: "title_eng",
            headerName: "Title English",
            flex: 0.6,
            headerAlign: "center",
            align: "center",
        },
        {
            field: "title",
            headerName: "Title Indonesia",
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
                    destination={route("photo-galery.edit", params.row.id)}
                    deleteRoute={route("photo-galery.destroy", params.row.id)}
                />
            ),
            headerAlign: "center",
            align: "center",
        },
    ];
    return (
        <AuthLayout sectionHeading="Life at Ideatax">
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex align-items-center justify-content-end">
                        <Button
                            sx={{
                                textTransform: "none",
                                fontSize: "0.8rem",
                                fontWeight: 500,
                            }}
                            href={route("photo-galery.create")}
                            variant="contained"
                        >
                            Add Image
                        </Button>
                    </div>
                </div>
                <div className="row mt-5">
                    <TableList rows={galeries} columns={columns} />
                </div>
            </div>
        </AuthLayout>
    );
}

export default PhotoGalery;
