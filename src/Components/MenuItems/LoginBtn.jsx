import { Link } from "react-router-dom";

const LoginBtn = () => {
    return (
        <Link to={"/login"} className="text-secondary font-medium">
            <button className="bg-primary px-8 py-3 rounded-lg hover:bg-white">Login</button>
        </Link>
    );
};

export default LoginBtn;