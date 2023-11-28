import { useState } from "react";
import PropTypes from "prop-types";

const MgtUserRow = ({ name, email, role }) => {
    const [userRole, setUserRole] = useState(role);

    const handleUpdateRole = (selectedRole) => {
        setUserRole(selectedRole);
    };

    console.log(userRole);

    return (
        <tr>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            {/* update img */}
                            <img src="" alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>

                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">{email}</div>
                    </div>
                </div>
            </td>

            <td>{userRole}</td>

            <th>
                <select value={userRole}
                    onChange={(event) => handleUpdateRole(event.target.value)}
                    className="select select-bordered w-fit max-w-xs bg-tertiary text-white"
                >
                    <option value="User">User</option>
                    <option value="Creator">Creator</option>
                    <option value="Admin">Admin</option>
                </select>
            </th>
        </tr>
    );
};

MgtUserRow.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
};

export default MgtUserRow;
