import { Link } from "react-router-dom";


const RegisterMenu = () => {
    return (
        <Link to={"/register"} className="text-white hover:text-gray-300 font-medium">
            Register
        </Link>
    );
};

export default RegisterMenu;