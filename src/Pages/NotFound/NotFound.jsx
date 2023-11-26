import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";


const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-secondary text-white">
            <h1 className="text-5xl font-bold mb-4">404 - Not Found</h1>
            <p className="text-lg mb-8">Oops! The page you're looking for doesn't exist.</p>
            <Link to={"/"} className="bg-primary text-tertiary text-lg font-medium px-6 py-2 rounded-lg hover:bg-white hover:text-black flex items-center gap-2"> <FaHome /> Go Home</Link>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-40 w-40 text-forth"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                {/* Insert your "not found" SVG path */}
                <path
                    fillRule="evenodd"
                    d="M10 2C5.8 2 2 5.8 2 10c0 2.4 1 4.6 2.6 6.1L4 17l2.9-1.5C8.1 17.8 9.9 18 10 18c4.2 0 8-3.8 8-8 0-2.4-1-4.6-2.6-6.1L16 3l-2.9 1.5C11.9 2.2 11 2 10 2zM7 10.5l-1.5-1L7 8.5l-1-1.5 1-1L8 7l1.5-1L9 8l1 1.5-1 1 1 1.5L8 12l-1.5-1-1 1.5z"
                    clipRule="evenodd"
                />
            </svg>
        </div>
    );
};

export default NotFoundPage;
