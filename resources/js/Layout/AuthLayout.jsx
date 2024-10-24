import { useState, useContext } from "react";
import { router } from "@inertiajs/react";
import { SpinnerContext } from "@/Context/SpinnerContext";
import { AlertContext } from "@/Context/AlertContext";
import {
    AppBar,
    Box,
    CssBaseline,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
    Typography,
    ListItemIcon,
    useTheme,
} from "@mui/material";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrHeroku } from "react-icons/gr";
import { IoIosStats } from "react-icons/io";
import { FaSuitcase } from "react-icons/fa";
import Spinner from "@/Components/Spinner";
import AlertBar from "@/Components/AlertBar";

const drawerWidth = 240;

function AuthLayout({ children, sectionHeading }) {
    const theme = useTheme();

    const [mobileOpen, setMobileOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };

    const { spinnerState } = useContext(SpinnerContext);
    const { alertState } = useContext(AlertContext);

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List
                sx={{
                    ".active": {
                        backgroundColor: "rgba(0, 0, 0, 0.04)",
                    },
                }}
            >
                <ListItem
                    disablePadding
                    onClick={() => router.visit(route("hero.index"))}
                    className={`${
                        route().current("hero.index") ? "active" : ""
                    }`}
                >
                    <ListItemButton>
                        <ListItemIcon>
                            <GrHeroku />
                        </ListItemIcon>
                        <ListItemText primary="Hero" />
                    </ListItemButton>
                </ListItem>
                <ListItem
                    disablePadding
                    onClick={() => router.visit(route("stat.index"))}
                    className={`${
                        route().current("stat.index") ? "active" : ""
                    }`}
                >
                    <ListItemButton>
                        <ListItemIcon>
                            <IoIosStats />
                        </ListItemIcon>
                        <ListItemText primary="Statistic" />
                    </ListItemButton>
                </ListItem>
                <ListItem
                    disablePadding
                    onClick={() => router.visit(route("services.index"))}
                    className={`${
                        route().current("services*") ? "active" : ""
                    }`}
                >
                    <ListItemButton>
                        <ListItemIcon>
                            <FaSuitcase />
                        </ListItemIcon>
                        <ListItemText primary="Services" />
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />
        </div>
    );

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: "none" } }}
                    >
                        <RxHamburgerMenu />
                    </IconButton>
                    <Typography
                        sx={{ fontSize: "1.2rem", fontWeight: 500 }}
                        variant="h2"
                        noWrap
                        component="div"
                    >
                        {sectionHeading}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: "none", sm: "block" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    minHeight: "100vh",
                }}
            >
                <Toolbar />
                {alertState && <AlertBar />}
                {spinnerState && <Spinner />}
                {children}
            </Box>
        </Box>
    );
}

export default AuthLayout;
