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

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
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

    {
        path: "login",
        element: <Login></Login>
    },

    {
        path: "register",
        element: <Register></Register>
    },

    {
        path: "dashboard",
        element: <DashboardRoot />,
        children: [
            {
                path: "home",
                element: <DashRoot></DashRoot>
            },

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
            }
        ]
    },

    
])

export default router;