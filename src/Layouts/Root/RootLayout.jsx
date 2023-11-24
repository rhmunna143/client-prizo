import { Outlet } from "react-router-dom";
import Navbar from "../../Components/NavBar";

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>

            <Outlet />
        </div>
    );
};

export default RootLayout;