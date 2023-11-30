/* eslint-disable react/prop-types */

import useRoleCheck from "../Hooks/useCreatorCheck";
import toast from "react-hot-toast";


const CreatorProtected = ({ children }) => {
    const userRole = useRoleCheck();

    if (userRole === "user" || !userRole) {

        return toast.error("Access Denied!")
    }

    return (
        <>
            {children}
        </>
    );
};

export default CreatorProtected;