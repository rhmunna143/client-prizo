/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import Container from "../../Components/Container";
import "./login.css";
import Continue from "../../Components/Continue";
import { Link, Navigate } from "react-router-dom";
import useAllContext from "../../Hooks/useAllContext";
import { useState } from "react";
import toast from "react-hot-toast";

const Login = () => {
    const { loginAccount, path } = useAllContext();
    const [currentUser, setCurrenUser] = useState(null)

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        const { email, password } = data;

        loginAccount(email, password)
            .then(res => {
                const user = res?.user;
                setCurrenUser(user);
                toast.success(user?.displayName + " Welcome! Now explore contests.")

            })
            .catch(err => {
                toast.error(err.message);
                console.error(err);
            })
    }

    return (
        <div className="register-bg py-32">
            <Container>
                <div className="flex flex-col justify-center items-center bg-tertiary w-96 mx-auto border border-primary rounded-lg px-4 py-10 space-y-2 text-white">
                    <h1 className="text-3xl font-bold text-center text-white">Login Account</h1>
                    <p className="text-lg text-center text-white">Login to participate</p>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input type="email" placeholder="Email" {...register("email", { required: true })} className="mt-5 w-80 h-10 px-4 bg-secondary border-primary border-[0.5px] rounded-lg" />

                        <br /> <br />

                        {errors.email && <span className="text-red-600">This field is required</span>}
                        <input type="password" placeholder="Password" {...register("password", { required: true })} className="w-80 h-10 px-4 bg-secondary border-primary border-[0.5px] rounded-lg" />

                        <br />

                        {errors.password && <span className="text-red-600">This field is required</span>}

                        <input type="submit" value="Login" className="bg-primary text-tertiary px-6 py-2 rounded-lg mt-5 font-medium text-lg w-full hover:bg-transparent hover:border-primary border-transparent border hover:text-white uppercase cursor-pointer" />
                    </form>

                    <div className="social">
                        <Continue />
                    </div>
                </div>

                <div className="go w-fit mx-auto mt-5">
                    <p className="text-lg font-medium uppercase text-white">
                        Don't Have account? <Link to={"/register"} className="text-primary"><span>Register</span></Link>
                    </p>
                </div>
            </Container>

            {
                currentUser && <Navigate to={path || "/"} />
            }
        </div>
    );
};

export default Login;