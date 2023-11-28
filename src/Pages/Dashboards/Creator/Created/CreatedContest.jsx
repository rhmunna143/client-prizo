
import DashHeading from "../../../../Components/DashHeading";
import CreatedTableRow from "./CreatedTableRow";
import useAllContext from "../../../../Hooks/useAllContext";
import { baseURL } from "../../../../Hooks/useAxiosSecure";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import LoaderComponent from "../../../../Components/LoaderComponent";


const CreatedContest = () => {
    const { user, setErr } = useAllContext();

    const uid = user.uid;

    const { data, isLoading, errors, refetch } = useQuery({
        queryKey: ["data"],
        queryFn: async () => {
            const res = await axios.get(`${baseURL}/contest?uid=${uid}`, { withCredentials: true })

            return res.data;
        }
    })

    if (isLoading) {
        return <LoaderComponent />
    }

    if (errors) {
        console.log(errors);
        setErr(errors)
    }

    return (
        <div>
            <DashHeading heading="Created Contests" />

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-white">
                            <th>Name</th>
                            <th>Status</th>
                            <th>Edit</th>
                            <th>Delete</th>
                            <th>Submission</th>
                        </tr>
                    </thead>

                    <tbody>
                        {/* row 1 */}

                        {
                            data?.map(row => <CreatedTableRow key={row._id} data={row} refetch={refetch} />)
                        }


                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default CreatedContest;