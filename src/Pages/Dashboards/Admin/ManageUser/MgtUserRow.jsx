/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { MdDelete } from "react-icons/md";

const MgtUserRow = ({ user, refetch }) => {
    const [userRole, setUserRole] = useState(user.role);

    const { displayName, role, uid, photoURL, email } = user;


    const handleUpdateRole = (selectedRole) => {
        setUserRole(selectedRole);


        refetch()
    };



    return (
        <tr>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            {/* update img */}
                            <img src={photoURL} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>

                    <div className="text-white">
                        <div className="font-bold">{displayName}</div>
                        <div className="text-sm opacity-50">{email}</div>
                    </div>
                </div>
            </td>

            <td>{userRole}</td>

            <th>
                <select defaultValue={role}
                    onChange={(event) => handleUpdateRole(event.target.value)}
                    className="select select-bordered w-fit max-w-xs bg-tertiary text-white"
                >
                    <option value="User">User</option>
                    <option value="Creator">Creator</option>
                    <option value="Admin">Admin</option>
                </select>
            </th>

            <th>
                <button className="btn btn-ghost btn-lg text-red-600"><MdDelete /></button>
            </th>
        </tr>
    );
};

export default MgtUserRow;
