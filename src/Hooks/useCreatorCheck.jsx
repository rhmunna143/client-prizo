import { useQuery } from "@tanstack/react-query";
import useAllContext from "./useAllContext";
import axios from "axios";
import { baseURL } from "./useAxiosSecure";
import LoaderComponent from "../Components/LoaderComponent";


const useRoleCheck = () => {
    const { user, setErr } = useAllContext();
    const uid = user.uid;

    const { data, isLoading, errors } = useQuery({
        queryKey: ["data"],
        queryFn: async () => {
            const res = await axios.get(`${baseURL}/users/${uid}`, { withCredentials: true })

            return res.data;
        }
    })

    if (isLoading) {
        return <LoaderComponent />
    }

    if (errors) {
        setErr(errors)
    }

    return data.role;
};

export default useRoleCheck;