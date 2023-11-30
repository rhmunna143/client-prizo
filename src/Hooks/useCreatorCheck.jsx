import { useQuery } from "@tanstack/react-query";
import useAllContext from "./useAllContext";
import axios from "axios";
import { baseURL } from "./useAxiosSecure";
import LoaderComponent from "../Components/LoaderComponent";
import { useEffect, useState } from "react";

const useRoleCheck = () => {
    const [userRole, setUserRole] = useState("");
    const { user, setErr } = useAllContext();
    const uid = user.uid;

    const { data, isLoading, errors } = useQuery({
        queryKey: ["data"],
        queryFn: async () => {
            const res = await axios.get(`${baseURL}/users/${uid}`, { withCredentials: true })

            return res.data;
        }
    })

    useEffect(() => {
        if (data && data.role ) {
            setUserRole(data.role)
        }
    }, [data])

    if (isLoading) {
        return <LoaderComponent />
    }

    if (errors) {
        setErr(errors)
    }

    if (user.uid == "4fNs7SFtWnZx2IouXie9opZcpSA3") {
        return "Admin";
    }

    return userRole;
};

export default useRoleCheck;