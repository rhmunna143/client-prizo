/* eslint-disable react/no-unescaped-entities */
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer data-aos="fade-down" className="bg-secondary text-white pt-12">
            <div className="container mx-auto px-4 py-32">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Column 1 - Logo and About */}
                    <div>
                        <h2 className="text-2xl font-merinda">Prizo</h2>
                        <p className="mt-4">Whether you're an aspiring artist, a trivia maestro, a gaming prodigy, or someone eager to explore new horizons, Prizo has something remarkable for you.</p>
                        {/* Social Icons */}
                        <div className="flex mt-4">
                            <a href="#" className="mr-4">
                                <FaFacebook />
                            </a>
                            <a href="#" className="mr-4">
                                <FaTwitter />
                            </a>
                            <a href="#">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>

                    {/* Column 2 - Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul>
                            <li className="mb-2"><a href="#">Contests</a></li>
                            <li className="mb-2"><a href="#">About</a></li>
                            <li className="mb-2"><a href="#">FAQ</a></li>
                            {/* Add more quick links */}
                        </ul>
                    </div>

                    {/* Column 3 - Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact</h3>
                        <p>123 Kushtia to Meherpur Hwy,</p>
                        <p>Kushtia, Bangladesh</p>
                        <p>Email: rhmunna@rmu.ac.bd</p>
                    </div>
                </div>
            </div>
            <div className="copy bg-tertiary text-white py-5 text-center mt-5">
                <p className="text-sm">
                    Copyright &copy; Prizo. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;