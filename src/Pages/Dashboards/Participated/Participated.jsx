/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useLoaderData, useNavigate } from "react-router-dom";
import DashHeading from "../../../Components/DashHeading";
import useAllContext from "../../../Hooks/useAllContext";
import dayjs from "dayjs";
import useDeadlineCheck from "../../../Hooks/useDeadlineCheck";

const Row = ({ contest }) => {
    const formattedDate = dayjs(contest?.deadline).format("MMM DD, YYYY").toUpperCase();
    const isExpired = useDeadlineCheck(formattedDate)
    const navigate = useNavigate();

    return (
        <tr>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={contest?.image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{contest?.contestName}</div>
                        <div className="text-sm opacity-50">Paid: $ {(contest?.amount / 100).toFixed(2)}</div>
                    </div>
                </div>
            </td>

            <td>
                {formattedDate}
                <br />
                <span className="badge badge-ghost badge-sm">{contest?.task === "not submitted" ? "Not Submitted" : "Submitted"}</span>
            </td>

            <td>{isExpired ? "Expired" : "Upcoming"}</td>

            <th>
                <button onClick={() => navigate(`/submit/${contest?._id}`)} disabled={isExpired} className="btn btn-primary btn-sm">Submit</button>
            </th>
        </tr>
    )
}

const Participated = () => {
    const { user } = useAllContext();
    const data = useLoaderData();

    const userFilter = data?.filter(contest => contest?.uid == user?.uid);


    return (
        <div>
            <div className="heading py-10">
                <DashHeading heading={"My Registered Contests"} />
            </div>

            <div className="participated">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="text-white">

                                <th>Name</th>
                                <th>Deadline</th>
                                <th>Status</th>
                                <th>Submit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}


                            {
                                userFilter?.map(filter => <Row contest={filter} key={filter?._id} />)
                            }

                        </tbody>



                    </table>
                </div>
            </div>
        </div>
    );
};

export default Participated;