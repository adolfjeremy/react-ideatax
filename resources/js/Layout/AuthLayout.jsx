import { useState, useContext } from "react";
import { router, Head } from "@inertiajs/react";
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
import { RiArticleLine } from "react-icons/ri";
import { BiSolidCategory } from "react-icons/bi";
import { MdEventAvailable } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { RiPagesFill } from "react-icons/ri";
import { MdWork } from "react-icons/md";
import { FaStarOfLife } from "react-icons/fa";
import { RiProfileFill } from "react-icons/ri";
import { SiGooglemeet } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
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
                    a: {
                        color: theme.palette.text.primary,
                    },
                }}
            >
                <ListItem
                    disablePadding
                    component="a"
                    href={route("page.index")}
                    className={`${route().current("page*") ? "active" : ""}`}
                >
                    <ListItemButton>
                        <ListItemIcon>
                            <RiPagesFill />
                        </ListItemIcon>
                        <ListItemText primary="Page" />
                    </ListItemButton>
                </ListItem>
                <ListItem
                    disablePadding
                    component="a"
                    href={route("hero.index")}
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
                    component="a"
                    href={route("stat.index")}
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
                    component="a"
                    href={route("services.index")}
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
                <ListItem
                    disablePadding
                    component="a"
                    href={route("articles.index")}
                    className={`${
                        route().current("articles*") ? "active" : ""
                    }`}
                >
                    <ListItemButton>
                        <ListItemIcon>
                            <RiArticleLine />
                        </ListItemIcon>
                        <ListItemText primary="Articles" />
                    </ListItemButton>
                </ListItem>
                <ListItem
                    disablePadding
                    component="a"
                    href={route("article-category.index")}
                    className={`${
                        route().current("article-category*") ? "active" : ""
                    }`}
                >
                    <ListItemButton>
                        <ListItemIcon>
                            <BiSolidCategory />
                        </ListItemIcon>
                        <ListItemText primary="Articles Category" />
                    </ListItemButton>
                </ListItem>
                <ListItem
                    disablePadding
                    component="a"
                    href={route("tax-event.index")}
                    className={`${
                        route().current("tax-event*") ? "active" : ""
                    }`}
                >
                    <ListItemButton>
                        <ListItemIcon>
                            <MdEventAvailable />
                        </ListItemIcon>
                        <ListItemText primary="Tax Event" />
                    </ListItemButton>
                </ListItem>
                <ListItem
                    disablePadding
                    component="a"
                    href={route("team.index")}
                    className={`${route().current("team*") ? "active" : ""}`}
                >
                    <ListItemButton>
                        <ListItemIcon>
                            <RiTeamFill />
                        </ListItemIcon>
                        <ListItemText primary="Team" />
                    </ListItemButton>
                </ListItem>
                <ListItem
                    disablePadding
                    component="a"
                    href={route("career.index")}
                    onClick={() => router.visit(route("career.index"))}
                    className={`${route().current("career*") ? "active" : ""}`}
                >
                    <ListItemButton>
                        <ListItemIcon>
                            <MdWork />
                        </ListItemIcon>
                        <ListItemText primary="Career" />
                    </ListItemButton>
                </ListItem>
                <ListItem
                    disablePadding
                    component="a"
                    href={route("photo-galery.index")}
                    className={`${
                        route().current("photo-galery*") ? "active" : ""
                    }`}
                >
                    <ListItemButton>
                        <ListItemIcon>
                            <FaStarOfLife />
                        </ListItemIcon>
                        <ListItemText primary="Life at Ideatax" />
                    </ListItemButton>
                </ListItem>
                <ListItem
                    disablePadding
                    component="a"
                    href={route("company-profile.index")}
                    className={`${
                        route().current("company-profile*") ? "active" : ""
                    }`}
                >
                    <ListItemButton>
                        <ListItemIcon>
                            <RiProfileFill />
                        </ListItemIcon>
                        <ListItemText primary="Company Profile" />
                    </ListItemButton>
                </ListItem>
                <ListItem
                    component="a"
                    disablePadding
                    href={route("consultation-meeting.index")}
                    className={`${
                        route().current("consultation-meeting*") ? "active" : ""
                    }`}
                >
                    <ListItemButton>
                        <ListItemIcon>
                            <SiGooglemeet />
                        </ListItemIcon>
                        <ListItemText primary="Consultation Meeting" />
                    </ListItemButton>
                </ListItem>
                <ListItem
                    component="a"
                    disablePadding
                    href={route("subscriber.index")}
                    className={`${
                        route().current("subscriber*") ? "active" : ""
                    }`}
                >
                    <ListItemButton>
                        <ListItemIcon>
                            <MdSubscriptions />
                        </ListItemIcon>
                        <ListItemText primary="Subscriber" />
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />
        </div>
    );

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <Head>
                <title>Admin Page - Ideatax</title>
            </Head>
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
