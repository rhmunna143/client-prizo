import { useState } from "react";
import DashHeading from "../../../../Components/DashHeading";
import CreatedTableRow from "./CreatedTableRow";
import useAllContext from "../../../../Hooks/useAllContext";
import { baseURL } from "../../../../Hooks/useAxiosSecure";
import axios from "axios";


const CreatedContest = () => {
    const [data, setData] = useState([])
    const { user, setErr } = useAllContext();

    const uid = user.uid;

    axios.get(`${baseURL}/contests?uid=${uid}`, { withCredentials: true })
        .then(res => {
            setData(res.data)
        })
        .catch(err => {
            console.log(err);
            setErr(err);
        })

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
                            data?.map(row => <CreatedTableRow key={row._id} data={row} />)
                        }


                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default CreatedContest;