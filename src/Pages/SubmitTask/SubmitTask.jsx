import { useForm } from "react-hook-form";
import Container from "../../Components/Container";
import SectionHeading from "../../Components/SectionHeading";
import { useLoaderData, useParams } from "react-router-dom";
import axios from "axios";
import useAllContext, { baseURL } from "../../Hooks/useAllContext";
import toast from "react-hot-toast";


const SubmitTask = () => {
    const contest = useLoaderData()
    const { setErr } = useAllContext();
    const { register, handleSubmit } = useForm()
    const params = useParams()
    const id = params.id;

    console.log(contest);

    const onSubmitTask = data => {
        const task = data.task
        const update = {
            task: task
        }
        axios.patch(`${baseURL}/registered?id=${id}`, update, { withCredentials: true })
            .then(res => {
                if (res.data._id) {
                    toast.success("You Submitted your tasks successfully.")
                }
            })
            .catch(err => {
                console.log(err);
                setErr(err)
                toast.error(err.message)
            })
    }
    return (
        <div className="bg-secondary text-white py-20">
            <Container>
                <div className="w-fit mx-auto">
                    <SectionHeading heading={"Submit Task"} />

                    <div className="form my-12">
                        <form onSubmit={handleSubmit(onSubmitTask)}>
                            <input type="text" placeholder="Submit your Task. Add links or text for codes." {...register("task", { required: true })} className="h-40 w-96 px-4 rounded-lg bg-forth text-white" />
                            <br /> <br />

                            <input type="submit" value="Submit" className="px-12 text-lg font-medium hover:bg-black hover:border-primary border border-transparent cursor-pointer py-2 bg-primary rounded-lg float-right" />
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default SubmitTask;