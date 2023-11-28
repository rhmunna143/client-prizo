
import DashHeading from "../../../../Components/DashHeading";
import MgtUserRow from "./MgtUserRow";


const ManageUser = () => {


   
    return (
        <div className="">
            <div className="my-10">
                <DashHeading
                    heading="All Users"
                />
            </div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-white">
                            <th>Name</th>
                            <th>Role</th>
                            <th>Update Role</th>
                        </tr>
                    </thead>
                    <tbody>

                        {/* row 1 */}

                        <MgtUserRow  />

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUser;