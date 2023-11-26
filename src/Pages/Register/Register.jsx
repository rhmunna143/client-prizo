/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import Container from "../../Components/Container";
import "./register.css";
import Continue from "../../Components/Continue";
import { Link } from "react-router-dom";

const Register = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
    }

    return (
        <div className="register-bg py-20">
            <Container>
                <div className="flex flex-col justify-center items-center bg-tertiary w-96 mx-auto border border-primary rounded-lg px-4 py-10 space-y-2 text-white">
                    <h1 className="text-3xl font-bold text-center text-white">Register Account</h1>
                    <p className="text-lg text-center text-white">Register to participate</p>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" placeholder="Your Name" {...register("name", { required: true })} className="mt-5 w-80 h-10 px-4 bg-secondary border-primary border-[0.5px] rounded-lg" />

                        <br /> <br />

                        {errors.name && <span className="text-red-600">This field is required</span>}

                        <input type="email" placeholder="Email" {...register("email", { required: true })} className="w-80 h-10 px-4 bg-secondary border-primary border-[0.5px] rounded-lg" />

                        <br /> <br />

                        {errors.email && <span className="text-red-600">This field is required</span>}
                        <input type="password" placeholder="Password" {...register("password", { required: true })} className="w-80 h-10 px-4 bg-secondary border-primary border-[0.5px] rounded-lg" />

                        <br /> <br />

                        {errors.password && <span className="text-red-600">This field is required</span>}
                        <input type="text" placeholder="DP URL" {...register("image", { required: true })} className="w-80 h-10 px-4 bg-secondary border-primary border-[0.5px] rounded-lg" />

                        <br />

                        {errors.image && <span className="text-red-600">This field is required</span>}

                        <input type="submit" value="Register" className="bg-primary text-tertiary px-6 py-2 rounded-lg mt-5 font-medium text-lg w-full hover:bg-transparent hover:border-primary border-transparent border hover:text-white uppercase cursor-pointer" />
                    </form>

                    <div className="social">
                        <Continue />
                    </div>
                </div>

                <div className="go w-fit mx-auto mt-5">
                    <p className="text-lg font-medium uppercase text-white">
                        Have account? <Link to={"/login"} className="text-primary"><span>Login</span></Link>
                    </p>
                </div>
            </Container>
        </div>
    );
};

export default Register;