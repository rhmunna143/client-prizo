import axios from "axios";
import { useEffect } from "react";

export const baseURL = import.meta.env.VITE_BASE_URL;

const instance = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true,
})

const useAxiosSecure = () => {
    useEffect(() => {
        instance.interceptors.response.use(res => {

            return res?.data;
        }, error => {
            console.error("err in axios instance", error);


            // jwt auth here


            // with logout function
        })
    }, [])

    return instance;
};

export default useAxiosSecure;