/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import useRoleCheck from "../Hooks/useCreatorCheck";
import toast from "react-hot-toast";


const AdminProtected = ({ children }) => {
    const userRole = useRoleCheck();
    const navigate = useNavigate();

    if (userRole !== "Admin") {
        return toast.error("Access Denied!")
    }

    return (
        <>
            {children}
        </>
    );
};

export default AdminProtected;