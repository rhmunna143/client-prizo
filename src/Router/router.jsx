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
                path: "/login",
                element: <Login></Login>
            },

            {
                path: "/register",
                element: <Register></Register>
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
    }
])

export default router;