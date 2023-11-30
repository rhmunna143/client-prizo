import { useQuery } from "@tanstack/react-query";
import DashHeading from "../../../../Components/DashHeading";
import LoaderComponent from "../../../../Components/LoaderComponent";
import useAllContext, { baseURL } from "../../../../Hooks/useAllContext";
import axios from "axios";
import MgtContestRow from "./MgtContestRow";
import { useEffect, useState } from "react";


const ManageContest = () => {
    const { setErr } = useAllContext();
    const [contests, setContests] = useState([])
    const { data = [], error, isLoading, refetch } = useQuery({
        queryKey: ["data"],
        queryFn: async () => {
            const res = await axios.get(`${baseURL}/contests`)

            return res.data;
        }
    })

    useEffect(() => {
        if (data && data.length > 0) {
            setContests(data)
        }
    }, [data])

    if (isLoading) {
        return <LoaderComponent />
    }

    if (error) {
        console.log(error);
        setErr(error)
    }

    return (
        <div>
            <div className="my-12">
                <DashHeading heading={"Manage Contests"} />
            </div>

            <div>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-white">
                            <th>Name</th>
                            <th>Update Contest</th>
                            <th>Status</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>

                        {/* row */}

                        {
                            contests?.map(contest => <MgtContestRow key={contest._id} contest={contest} refetch={refetch} />)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageContest;