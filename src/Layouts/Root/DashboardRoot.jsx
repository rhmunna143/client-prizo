import { Link, NavLink, Outlet } from "react-router-dom";
import Container from "../../Components/Container";
import { FaFlipboard, FaRunning, FaTrophy } from "react-icons/fa"
import LogoutBtn from "../../Components/MenuItems/LogoutBtn";
import { CgProfile } from "react-icons/cg";
import { MdBookmarkAdded, MdDashboardCustomize, MdManageAccounts, MdOutlineManageHistory } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { VscFileSubmodule } from "react-icons/vsc";
import useAllContext from "../../Hooks/useAllContext";
import useRoleCheck from "../../Hooks/useCreatorCheck";

const DashboardRoot = () => {
    const { user } = useAllContext();
    const userRole = useRoleCheck();

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
                            <div className="cont w-fit mx-auto flex flex-col items-center justify-center">
                                <Link to={"/dashboard/profile"}>
                                    <div className="pp w-40 h-40 aspect-square rounded-full bg-primary">
                                        <img src={user?.photoURL} alt="User DP" className="w-40 h-40 aspect-square rounded-full" />
                                    </div>
                                </Link>

                                <div className="text-center flex flex-col items-center justify-center">
                                    <Link to={"/dashboard/profile"}><h2 className="text-2xl mt-4">{user?.displayName}</h2></Link>
                                    <h6 className="mt-2 mb-4">{userRole}</h6>
                                    <LogoutBtn />
                                </div>
                            </div>
                        </div>





                        {/* dashboard + Leaderboard */}
                        <div className="user bg-forth px-2 py-5 rounded-lg text-lg font-medium space-y-3">

                            <div className="bg-tertiary py-2 px-2 rounded-lg">
                                <NavLink
                                    to="/dashboard/home"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending flex items-center gap-2" : isActive ? "active py-1 rounded-lg bg-black px-4 text-white y flex items-center gap-2" : " px-4  py-1 flex items-center gap-2"
                                    }
                                >
                                    <MdDashboardCustomize />  Dashboard
                                </NavLink>
                            </div>

                            <div className="bg-tertiary py-2 px-2 rounded-lg">
                                <NavLink
                                    to="/dashboard/leaderboard"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "active py-1 rounded-lg bg-black px-4 flex items-center gap-2" : " px-4 py-1 flex items-center gap-2"
                                    }
                                >
                                    <FaFlipboard />  Leaderboard
                                </NavLink>
                            </div>


                        </div>






                        {/* admin menus */}
                        {
                            userRole == "Admin" && <div className="user bg-forth px-2 py-5 rounded-lg text-lg font-medium space-y-3">

                                <div className="bg-tertiary py-2 px-2 rounded-lg">
                                    <NavLink
                                        to="/dashboard/manage-users"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending flex items-center gap-2" : isActive ? "active py-1 rounded-lg bg-black px-4 text-white y flex items-center gap-2" : " px-4  py-1 flex items-center gap-2"
                                        }
                                    >
                                        <MdManageAccounts />  Manage Users
                                    </NavLink>
                                </div>

                                <div className="bg-tertiary py-2 px-2 rounded-lg">
                                    <NavLink
                                        to="/dashboard/manage-contests"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "active py-1 rounded-lg bg-black px-4 flex items-center gap-2" : " px-4 py-1 flex items-center gap-2"
                                        }
                                    >
                                        <MdOutlineManageHistory />  Manage Contests
                                    </NavLink>
                                </div>
                            </div>
                        }






                        {/* creator menus */}

                        {
                            userRole == "Creator" || userRole == "Admin" ? <div className="user bg-forth px-2 py-5 rounded-lg text-lg font-medium space-y-3">

                                <div className="bg-tertiary py-2 px-2 rounded-lg">
                                    <NavLink
                                        to="/dashboard/add"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending flex items-center gap-2" : isActive ? "active py-1 rounded-lg bg-black px-4 text-white y flex items-center gap-2" : " px-4  py-1 flex items-center gap-2"
                                        }
                                    >
                                        <IoIosAddCircle />  Add Contest
                                    </NavLink>
                                </div>

                                <div className="bg-tertiary py-2 px-2 rounded-lg">
                                    <NavLink
                                        to="/dashboard/created"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "active py-1 rounded-lg bg-black px-4 flex items-center gap-2" : " px-4 py-1 flex items-center gap-2"
                                        }
                                    >
                                        <MdBookmarkAdded />  Created Contests
                                    </NavLink>
                                </div>

                                <div className="bg-tertiary py-2 px-2 rounded-lg">
                                    <NavLink
                                        to="/dashboard/submitted"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "active py-1 rounded-lg bg-black px-4 flex items-center gap-2" : " px-4 py-1 flex items-center gap-2"
                                        }
                                    >
                                        <VscFileSubmodule />  Submitted Contests
                                    </NavLink>
                                </div>
                            </div>
                                :
                                ""
                        }






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




                    </div>

                    <div className="bg-forth min-h-full px-6 py-8 rounded-lg w-full">
                        <Outlet />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default DashboardRoot;