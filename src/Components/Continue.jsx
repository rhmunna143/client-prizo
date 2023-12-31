/* eslint-disable no-unused-vars */
import { FaGoogle } from "react-icons/fa"
import useAllContext from "../Hooks/useAllContext";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { baseURL } from "../Hooks/useAxiosSecure";
const Continue = () => {
    const { socialSignIn, path, setErr } = useAllContext();
    const [currentUser, setCurrentUser] = useState("");

    const handleSocial = () => {

        socialSignIn()
            .then(res => {
                const user = res?.user;

                if (user) {

                    const displayName = user?.displayName;
                    const photoURL = user?.photoURL;
                    const role = "user";
                    const uid = user?.uid;
                    const email = user?.email;

                    const userData = {
                        displayName,
                        photoURL,
                        role,
                        uid,
                        email,
                    }

                    axios.post(`${baseURL}/users`, userData, { withCredentials: true })
                        .then(res => {
                            const savedUser = res.data;
                        })
                        .catch(err => {
                            console.log(err);
                            setErr(err);
                        })

                    setCurrentUser(user)
                }
            })

            .catch(err => {
                toast.error(err.message)
                console.log(err);
            })
    }

    return (
        <div className="">

            <div className="divider">OR</div>
            <hr />
            <button onClick={handleSocial} className="flex items-center mt-4 bg-transparent border border-primary hover:bg-secondary px-4 py-2 text-lg font-medium rounded-lg text-white"> <FaGoogle />oogle </button>

            {
                currentUser && <Navigate to={path || "/"} />
            }
        </div>
    );
};

export default Continue;