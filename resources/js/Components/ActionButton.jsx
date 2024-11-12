import { useState, useContext } from "react";
import { router } from "@inertiajs/react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { BsThreeDotsVertical } from "react-icons/bs";
import { SpinnerContext } from "@/Context/SpinnerContext";
import { AlertContext } from "@/Context/AlertContext";

function ActionButton({
    destination,
    deleteRoute,
    needEdit = true,
    method = "delete",
}) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const { toggleSpinner } = useContext(SpinnerContext);
    const { toggleAlert } = useContext(AlertContext);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDelete = (e) => {
        e.preventDefault();
        router.delete(deleteRoute, {
            onBefore: () => confirm("Are you sure you want to delete this?"),
            onStart: () => {
                toggleSpinner(true);
            },
            onSuccess: () => {
                toggleSpinner(false);
                toggleAlert(true);
            },
            preserveScroll: true,
        });
    };
    const handleDeletePost = () =>
        router.post(deleteRoute, {
            onBefore: () => confirm("Are you sure you want to delete this?"),
            onStart: () => {
                toggleSpinner(true);
            },
            onSuccess: () => {
                toggleSpinner(false);
                toggleAlert(true);
            },
        });

    return (
        <div>
            <IconButton
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
            >
                <BsThreeDotsVertical />
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}
            >
                {needEdit && (
                    <MenuItem onClick={() => router.visit(destination)}>
                        Edit
                    </MenuItem>
                )}
                {method == "delete" ? (
                    <MenuItem onClick={handleDelete}>Delete</MenuItem>
                ) : (
                    <MenuItem onClick={handleDeletePost}>Delete</MenuItem>
                )}
            </Menu>
        </div>
    );
}

export default ActionButton;
