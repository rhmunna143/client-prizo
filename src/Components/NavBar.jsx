import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Define your menu items in an array
    const menuItems = [
        { id: 1, title: 'Home', link: '/' },
        { id: 2, title: 'About', link: '/about' },
        { id: 3, title: 'Contact', link: '/contact' },
        // Add or remove menu items as needed
    ];

    return (
        <nav className="bg-tertiary py-2">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="text-white text-lg font-bold font-merinda lg:text-4xl">
                            Prizo
                        </Link>
                    </div>

                    {/* Menu Items for LG devices */}
                    <div className="hidden md:flex md:space-x-4">
                        {menuItems.map(item => (
                            <Link key={item.id} to={item.link} className="text-white hover:text-gray-300 font-medium">
                                {item.title}
                            </Link>
                        ))}
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
                <div className="px-4 pt-2 pb-3 space-y-1">
                    {/* Map through the same menu items array for smaller devices */}
                    {menuItems.map(item => (
                        <Link key={item.id} to={item.link} className="block hover:text-gray-300">
                            {item.title}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;