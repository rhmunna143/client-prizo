
import useAllContext from "../../Hooks/useAllContext";


const LogoutBtn = () => {
    const { logout } = useAllContext();

    const handleLogout = () => {

        logout()
    }

    return (
        <button onClick={handleLogout} className="bg-primary px-8 py-2 rounded-lg text-secondary border border-transparent hover:border-primary hover:bg-transparent hover:text-white">
            Logout
        </button>
    );
};

export default LogoutBtn;