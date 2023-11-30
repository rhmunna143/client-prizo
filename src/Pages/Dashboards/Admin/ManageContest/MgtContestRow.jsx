/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from "axios";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import useAllContext, { baseURL } from "../../../../Hooks/useAllContext";
import toast from "react-hot-toast";
import swal from "sweetalert";

const MgtContestRow = ({ contest, refetch }) => {
    const { setErr } = useAllContext();

    const handleDelete = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this contest.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {

                    axios.delete(`${baseURL}/contests/delete?id=${id}`, { withCredentials: true })
                        .then(res => {

                            console.log(res.data);
                            if (res.data._id) {
                                swal("Poof! Your contest has been deleted!", {
                                    icon: "success",
                                });

                                refetch()
                            }
                        })
                        .catch(err => {
                            console.log(err);
                            setErr(err)
                            toast.error(err.message)
                        })


                } else {
                    swal("Your contest is safe!");
                }
            });


    }

    return (
        <tr>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            {/* update img */}
                            <img src={contest?.image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>

                    <div className="text-white">
                        <div className="font-bold">{contest?.contestName}</div>
                        <div className="text-sm opacity-50"></div>
                    </div>
                </div>
            </td>

            <th>
                <Link to={`/dashboard/update/${contest?._id}`}><button className="btn btn-ghost btn-lg"><FaRegEdit /></button></Link>
            </th>

            <th>
                <button onClick={() => handleDelete(contest?._id)} className="btn btn-ghost btn-lg text-red-600"><MdDeleteOutline /></button>
            </th>
        </tr>
    );
};

export default MgtContestRow;