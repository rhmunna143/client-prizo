/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import axios from "axios";
import useAllContext, { baseURL } from "../../../../Hooks/useAllContext";
import toast from "react-hot-toast";


const SubmittedContestRow = ({ contest }) => {
    const { setErr } = useAllContext();

    const handleSelectWinner = (winnerId, contestId) => {
        const UpdateWinner = {
            winner: winnerId
        }

        axios.patch(`${baseURL}/registered?id=${contestId}`, UpdateWinner, { withCredentials: true })
            .then(res => {
                if (res.data._id) {
                    toast.success("Winner selected success.")

                    window.location.reload();
                }
            })
            .catch(err => {
                console.log(err);
                toast.error(err.message)
                setErr(err)
            })
    }

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
                        <div className="text-sm opacity-50">{contest?.userName}</div>
                    </div>
                </div>
            </td>


            <td>
                task
                <br />
                {contest?.email ? <span className="badge badge-ghost badge-sm">{contest?.email}</span> : <span className="badge badge-ghost badge-sm">Email not provided</span>}
            </td>


            <td className="capitalize">{contest?.winner === "not decided" ? "not decided" : "winner"}</td>


            <th>
                <button onClick={() => handleSelectWinner(contest?.uid, contest?.contestId)} disabled={contest?.winner !== "not decided"} className="btn btn-primary btn-sm">Select as Winner</button>
            </th>
        </tr>
    );
};

export default SubmittedContestRow;