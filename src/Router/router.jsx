import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layouts/Root/RootLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllContests from "../Pages/AllContests/AllContests";
import DetailsPage from "../Pages/Details/DetailsPage";
import PaymentsPage from "../Pages/Payments/PaymentsPage";
import DashboardRoot from "../Layouts/Root/DashboardRoot";
import DashRoot from "../Pages/Dashboards/Root/DashRoot";
import Participated from "../Pages/Dashboards/Participated/Participated";
import Wined from "../Pages/Dashboards/Wined/Wined";
import Profile from "../Pages/Dashboards/Profile/Profile";
import Leaderboard from "../Pages/Dashboards/Leaderboard/Leaderboard";
import CreatedContest from "../Pages/Dashboards/Creator/Created/CreatedContest";
import SubmittedContest from "../Pages/Dashboards/Creator/Submitted/SubmittedContest";
import ManageUser from "../Pages/Dashboards/Admin/ManageUser/ManageUser";
import ManageContest from "../Pages/Dashboards/Admin/ManageContest/ManageContest";
import UpdateContests from "../Pages/Dashboards/Admin/UpdateContests/UpdateContests";
import AddContest from "../Pages/Dashboards/Creator/Add/AddContest";
import NotFoundPage from "../Pages/NotFound/NotFound";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <NotFoundPage />,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },

            {
                path: "/about",
                element: <About></About>,
            },

            {
                path: "/contact",
                element: <Contact></Contact>
            },

            {
                path: "/all",
                element: <AllContests></AllContests>
            },

            {
                path: "/details/:id",
                element: <DetailsPage></DetailsPage>
            },

            {
                path: "/pay",
                element: <PaymentsPage></PaymentsPage>
            }
        ]
    },


    // different layout

    {
        path: "login",
        element: <Login></Login>
    },

    {
        path: "register",
        element: <Register></Register>
    },


    // dashboard layout

    {
        path: "dashboard",
        element: <DashboardRoot />,
        children: [

            // common routes
            {
                path: "home",
                element: <DashRoot></DashRoot>
            },

            {
                path: "leaderboard",
                element: <Leaderboard></Leaderboard>
            },


            // users routes
            {
                path: "joined",
                element: <Participated></Participated>
            },

            {
                path: "wined",
                element: <Wined></Wined>
            },

            {
                path: "profile",
                element: <Profile></Profile>
            },


            // creator routes
            {
                path: "add",
                element: <AddContest></AddContest>
            },

            {
                path: "created",
                element: <CreatedContest></CreatedContest>
            },

            {
                path: "submitted",
                element: <SubmittedContest></SubmittedContest>
            },


            // admin routes
            {
                path: "manage-users",
                element: <ManageUser></ManageUser>
            },

            {
                path: "manage-contests",
                element: <ManageContest></ManageContest>
            },

            {
                path: "update/:id",
                element: <UpdateContests></UpdateContests>
            }
        ]
    },
])

export default router;