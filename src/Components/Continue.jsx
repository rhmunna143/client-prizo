/* eslint-disable no-unused-vars */
import { FaGoogle } from "react-icons/fa"
import useAllContext from "../Hooks/useAllContext";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";
import { useState } from "react";
const Continue = () => {
    const { socialSignIn, path } = useAllContext();
    const [currentUser, setCurrentUser] = useState("");

    const handleSocial = () => {

        socialSignIn()
            .then(res => {
                const user = res?.user;

                if (user) {
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