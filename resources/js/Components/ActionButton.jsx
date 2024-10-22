import { useState } from "react";
import { router } from "@inertiajs/react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { BsThreeDotsVertical } from "react-icons/bs";

function ActionButton({ param }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    console.log(param);

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
                <MenuItem
                    onClick={() => router.visit("services.edit", param.row.id)}
                >
                    Edit
                </MenuItem>
                <MenuItem
                    onClick={() =>
                        router.visit("services.destroy", param.row.id)
                    }
                >
                    Delete
                </MenuItem>
            </Menu>
        </div>
    );
}

export default ActionButton;
