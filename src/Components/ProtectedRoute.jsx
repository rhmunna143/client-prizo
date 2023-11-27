/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAllContext from "../Hooks/useAllContext";
import LoaderComponent from "./LoaderComponent";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
    const { user, loading, setPath } = useAllContext();

    const location = useLocation()

    useEffect(() => {
        setPath(location.pathname);
    }, [location.pathname, setPath]);

    if (loading) {
        return <LoaderComponent />
    }

    if (!user) {
        return <Navigate to={"/login"} />
    }

    return (
        <>
            {children}
        </>
    );
};

export default ProtectedRoute;