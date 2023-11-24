import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layouts/Root/RootLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                path: '/',
                element:<Home></Home>
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
                
            }
        ]
    }
])

export default router;