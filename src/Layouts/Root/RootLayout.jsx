import { Outlet } from "react-router-dom";
import Navbar from "../../Components/NavBar";
import Footer from "../../Components/Footer/Footer";

const RootLayout = () => {
    return (
        <div style={{ overflowX: "hidden" }}>
            <Navbar></Navbar>

            <Outlet />

            <Footer />
        </div>
    );
};

export default RootLayout;