import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layouts/Root/RootLayout";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                path: '/',
                element:<Home></Home>
            }
        ]
    }
])

export default router;