/* eslint-disable react/prop-types */



const CreatedTableRow = ({ data }) => {
    const { contestName, image, status } = data;


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
                <button className="btn btn-ghost btn-xs">Edit</button>
            </th>
            <th>
                <button className="btn btn-ghost btn-xs">Delete</button>
            </th>
            <th>
                <button className="btn btn-ghost btn-xs">Submission</button>
            </th>
        </tr>
    );
};

export default CreatedTableRow;