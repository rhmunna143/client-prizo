import { Link, NavLink, Outlet } from "react-router-dom";
import Container from "../../Components/Container";
import { FaRunning, FaTrophy } from "react-icons/fa"
import LogoutBtn from "../../Components/MenuItems/LogoutBtn";
import { CgProfile } from "react-icons/cg";

const DashboardRoot = () => {
    return (
        <div className="bg-secondary py-20">
            <Container>
                <div className="flex flex-col lg:flex-row gap-6 min-h-full text-white">
                    <div className="lg:w-96 flex flex-col gap-6">
                        <div className="user bg-forth p-6 rounded-lg">
                            <div className="w-fit mx-auto">
                                <Link to={"/"} className="text-5xl font-merinda text-center">Prizo</Link>
                            </div>
                        </div>



                        {/* user info */}
                        <div className="user bg-forth p-6 rounded-lg text-white font-bold capitalize">
                            <div className="cont w-fit mx-auto">
                                <div className="pp w-40 h-40 aspect-square rounded-full bg-primary">
                                    <img src="" alt="" className="w-40 h-40 aspect-square rounded-full" />
                                </div>

                                <div className="text-center">
                                    <h2 className="text-2xl my-4">User name</h2>
                                    <LogoutBtn />
                                </div>
                            </div>
                        </div>



                        {/* users menus */}
                        <div className="user bg-forth px-2 py-5 rounded-lg text-lg font-medium space-y-3">

                            <div className="bg-tertiary py-2 px-2 rounded-lg">
                                <NavLink
                                    to="/dashboard/joined"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending flex items-center gap-2" : isActive ? "active py-1 rounded-lg bg-black px-4 text-white y flex items-center gap-2" : " px-4  py-1 flex items-center gap-2"
                                    }
                                >
                                    <FaRunning />  Participated Contests
                                </NavLink>
                            </div>

                            <div className="bg-tertiary py-2 px-2 rounded-lg">
                                <NavLink
                                    to="/dashboard/wined"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "active py-1 rounded-lg bg-black px-4 flex items-center gap-2" : " px-4 py-1 flex items-center gap-2"
                                    }
                                >
                                    <FaTrophy />  Wining Contests
                                </NavLink>
                            </div>

                            <div className="bg-tertiary py-2 px-2 rounded-lg">
                                <NavLink
                                    to="/dashboard/profile"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "active py-1 rounded-lg bg-black px-4 flex items-center gap-2" : " px-4 py-1 flex items-center gap-2"
                                    }
                                >
                                    <CgProfile />  Profile
                                </NavLink>
                            </div>


                        </div>




                        {/* creator menus */}












                        {/* admin menus */}









                        <div className="user bg-forth p-6 rounded-lg">
                            dash
                        </div>
                        <div className="user bg-forth p-6 rounded-lg">
                            dash
                        </div>
                    </div>

                    <div className="bg-forth h-screen p-6 rounded-lg w-full py-96">
                        <Outlet />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default DashboardRoot;