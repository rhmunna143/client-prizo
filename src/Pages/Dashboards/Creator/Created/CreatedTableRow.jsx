/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { LuView } from "react-icons/lu";
import { Link } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../../../../Hooks/useAxiosSecure";
import useAllContext from "../../../../Hooks/useAllContext";
import swal from "sweetalert";

const CreatedTableRow = ({ data, refetch }) => {
    const { contestName, image, status, _id } = data;
    const { setErr } = useAllContext();

    const handleDelete = () => {

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this contest!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {



                    axios.delete(`${baseURL}/contests/delete/${_id}`, { withCredentials: true })
                        .then(res => {
                            if (res?.data?._id) {
                                swal("Poof! Your imaginary file has been deleted!", {
                                    icon: "success",
                                });

                                refetch()
                            }
                        })
                        .catch(err => {
                            console.log(err);
                            setErr(err)
                        })

                } else {
                    swal("Your contest is safe!");
                }
            });
    }

    return (
        <tr>
            {/* name and image */}
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div className="name">
                        {contestName}
                    </div>
                </div>
            </td>

            {/* status */}
            <td>
                {status}
            </td>


            <th>
                <Link to={`/dashboard/update/${_id}`}><button disabled={status === "accepted"} className="btn btn-ghost btn-lg"><FaRegEdit /></button></Link>
            </th>
            <th>
                <button onClick={handleDelete} disabled={status === "accepted"} className="btn btn-ghost btn-lg text-red-600"><MdDeleteOutline /></button>
            </th>
            <th>
                <Link to={"/dashboard/submitted"}><button className="btn btn-ghost btn-lg"><LuView /></button></Link>
            </th>
        </tr>
    );
};

export default CreatedTableRow;