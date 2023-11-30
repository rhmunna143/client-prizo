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
import ProtectedRoute from "../Components/ProtectedRoute";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { baseURL } from "../Hooks/useAllContext";
import SubmitTask from "../Pages/SubmitTask/SubmitTask";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUB_API_KEY);

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
                element: <ProtectedRoute><DetailsPage></DetailsPage></ProtectedRoute>
            },

            {
                path: "/pay/:id",
                loader: async ({ params }) => await fetch(`${baseURL}/contests/${params?.id}`),
                element: <Elements stripe={stripePromise}><PaymentsPage></PaymentsPage></Elements>
            },

            {
                path: "/submit/:id",
                loader: async ({ params }) => await fetch(`${baseURL}/contests/${params?.id}`),
                element: <SubmitTask></SubmitTask>
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
        element: <ProtectedRoute><DashboardRoot /></ProtectedRoute>,
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
                loader: async () => await fetch(`${baseURL}/submitted`),
                element: <Participated></Participated>
            },

            {
                path: "wined",
                loader: async () => await fetch(`${baseURL}/submitted`),
                element: <Wined></Wined>
            },

            {
                path: "profile",
                loader: async () => await fetch(`${baseURL}/submitted`),
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
                loader: async () => await fetch(`${baseURL}/submitted`),
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