/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { MdDelete } from "react-icons/md";
import useAllContext, { baseURL } from "../../../../Hooks/useAllContext";
import axios from "axios";
import toast from "react-hot-toast";
import swal from "sweetalert";

const MgtUserRow = ({ user, fetch }) => {
    const { setErr } = useAllContext();

    const handleUpdateRole = (selectedRole) => {

        swal({
            title: "Are you sure?",
            text: `Do you want to assign ${user?.displayName} as the ${selectedRole} ?`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.patch(`${baseURL}/users/update/${user.uid}`, { role: selectedRole },
                        {
                            withCredentials: true
                        }
                    ).then(res => {
                        if (res?.data?._id) {
                            toast.success("Role updated in: " + res?.data?.role);
                        }

                        if (!res?.data?._id) {
                            return;
                        }

                        fetch();
                    }).catch(err => {
                        console.log(err);
                        toast.error(err.message);
                        setErr(err)
                    })
                } else {
                    swal("The user role is not updated.");
                }
            });

    };

    const handleDelete = async () => {
        await swal({
            title: "Are you sure?",
            text: "Once deleted, the user have to recreate account!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.delete(`${baseURL}/users/delete/${user.uid}`, { withCredentials: true })
                        .then(res => {
                            if (res?.data?._id) {
                                swal("The user is deleted!", {
                                    icon: "success",
                                });
                            }

                            if (!res?.data?._id) {
                                window.location.reload();
                            }
                        })
                } else {
                    swal("The user account is not deleted.");
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
                            <img src={user?.photoURL} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>

                    <div className="text-white">
                        <div className="font-bold">{user?.displayName}</div>
                        <div className="text-sm opacity-50">{user?.email}</div>
                    </div>
                </div>
            </td>

            <td>{user?.role}</td>

            <th>
                <select value={user.role}
                    onChange={(event) => handleUpdateRole(event.target.value)}
                    className="select select-bordered w-fit max-w-xs bg-tertiary text-white"
                >
                    <option value="User">User</option>
                    <option value="Creator">Creator</option>
                    <option value="Admin">Admin</option>
                </select>
            </th>

            <th>
                <button onClick={handleDelete} className="btn btn-ghost btn-lg text-red-600"><MdDelete /></button>
            </th>
        </tr>
    );
};

export default MgtUserRow;
