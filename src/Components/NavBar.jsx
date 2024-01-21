/* eslint-disable no-unused-vars */
import { useContext, useState } from 'react';
import { Link, NavLink, Navigate } from 'react-router-dom';
import RegisterMenu from './MenuItems/RegisterMenue';
import LoginBtn from './MenuItems/LoginBtn';
import LogoutBtn from './MenuItems/LogoutBtn';
import useAllContext from '../Hooks/useAllContext';
import { AllContext } from '../Hooks/ContestProvider';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user, loading } = useContext(AllContext);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Define your menu items in an array
    const menuItems = [
        { id: 1, title: 'Home', link: '/' },
        { id: 4, title: 'All Contests', link: '/all' },
        { id: 2, title: 'About', link: '/about' },
        { id: 3, title: 'Contact', link: '/contact' },

        // Add or remove menu items as needed
    ];

    return (
        <nav data-aos="fade-down" className="bg-tertiary py-4 shadow-md">
            <div className="container mx-auto px-4 sm:px-6 lg:px-0">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="text-white text-2xl font-bold font-merinda lg:text-4xl">
                            Prizo
                        </Link>
                    </div>

                    {/* Menu Items for LG devices */}
                    <div className="hidden md:flex md:space-x-4 items-center">
                        {menuItems.map(item => (
                            <NavLink key={item.id} to={item.link} className={({ isActive, isPending }) =>
                                isPending ? "pending py-2 px-4" : isActive ? "active bg-forth rounded-lg py-2 px-4 text-white font-medium" : "block py-2 px-4 hover:text-gray-300 text-white font-medium rounded-lg"
                            }>
                                {item.title}
                            </NavLink>
                        ))}

                        {!user && <RegisterMenu />}

                        {/* user */}

                        {
                            !user ? ""
                                :
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="bg-primary w-12 h-12 aspect-square rounded-full m-1 flex items-center justify-center">
                                        <img src={user?.photoURL} alt="dp" className='w-12 h-12 aspect-square rounded-full' />
                                    </div>
                                    <ul className="dropdown-content z-[1] menu p-2 text-base shadow text-white rounded-lg bg-tertiary w-52">
                                        <li className='cursor-text'><p className="font-semibold text-base cursor-text">User Name</p></li>
                                        <li>
                                            <NavLink
                                                to="/dashboard/home"
                                                className={({ isActive, isPending }) =>
                                                    isPending ? "pending" : isActive ? "active bg-forth py-2 px-4 hover:text-gray-300 text-white font-medium rounded-lg" : "py-2 px-4 hover:text-gray-300 text-white font-medium rounded-lg"
                                                }
                                            >
                                                Dashboard
                                            </NavLink>
                                        </li>
                                        <li className='font-medium w-1/2 mb-4 ml-3 mt-4'><LogoutBtn /></li>
                                    </ul>
                                </div>


                        }


                        {!user && <LoginBtn />}

                    </div>

                    {/* Hamburger Menu (for smaller devices) */}
                    <div className="flex md:hidden">
                        <button onClick={toggleMenu} className="text-white p-2 focus:outline-none">
                            <svg
                                className="h-6 w-6 fill-current"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {isOpen ? (
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M6 18H18V16H6v2zm0-5h12v-2H6v2zm0-7v2h12V6H6z"
                                    />
                                ) : (
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Responsive Menu */}
            <div className={`${isOpen ? 'block absolute right-4 px-4 pb-2' : 'hidden'} md:hidden bg-tertiary text-white font-medium`}>
                <div className="px-4 pt-2 pb-3 flex flex-col items-center space-y-1">

                    {/* Map through the same menu items array for smaller devices */}
                    {menuItems.map(item => (
                        <NavLink key={item.id} to={item.link} className={({ isActive, isPending }) =>
                            isPending ? "pending py-2 px-4" : isActive ? "active rounded-lg bg-forth py-2 px-4 text-white font-medium" : "block py-2 px-4 hover:text-gray-300 text-white font-medium rounded-lg"
                        }>
                            {item.title}
                        </NavLink>
                    ))}

                    {!user && <RegisterMenu />}

                    {/* user */}

                    {
                        user && <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="bg-primary w-12 h-12 aspect-square rounded-full m-1 flex items-center justify-center">
                                <img src={user?.photoURL} alt="dp" className='w-12 h-12 aspect-square rounded-full' />
                            </div>
                            <ul className="dropdown-content z-[1] menu p-2 text-base shadow text-white rounded-lg bg-tertiary w-52">
                                <li className='cursor-text'><p className="font-semibold text-base cursor-text">User Name</p></li>

                                <li>
                                    <NavLink
                                        to="/dashboard"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "active bg-forth py-2 px-4 hover:text-gray-300 text-white font-medium rounded-lg" : "py-2 px-4 hover:text-gray-300 text-white font-medium rounded-lg"
                                        }
                                    >
                                        Dashboard
                                    </NavLink>
                                </li>
                                <li className='font-medium w-1/2 mb-4 ml-3 mt-4'><LogoutBtn /></li>
                            </ul>
                        </div>
                    }

                    <br />
                    <hr className='' />
                    <br />

                    {!user && <LoginBtn />}

                </div>
            </div>
        </nav>
    );
};

export default Navbar;