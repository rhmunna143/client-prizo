/* eslint-disable react/prop-types */
import { useLoaderData } from "react-router-dom";
import DashHeading from "../../../Components/DashHeading";
import useAllContext from "../../../Hooks/useAllContext";

const TableRow = ({ wined }) => {

    return (
        <tr>

            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={wined?.image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{wined?.contestName}</div>
                        <div className="text-sm opacity-50">United States</div>
                    </div>
                </div>
            </td>
            <td>
                Won
                <br />
                <span className="badge badge-ghost badge-sm">{wined?.task}</span>
            </td>
        </tr>
    )
}

const Wined = () => {
    const data = useLoaderData();
    const { user } = useAllContext();

    const filteredData = data?.filter(contest => contest?.uid === user?.uid)
    const winedFilter = filteredData.filter(wined => wined?.winner !== "not decided");


    return (
        <div>
            <div className="head">
                <DashHeading heading={"My Wined Contests"} />
            </div>

            <div className="data">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="text-white">
                                <th>Name</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}

                            {
                                winedFilter?.map(wined => <TableRow wined={wined} key={wined?._id} />)
                            }

                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
};

export default Wined;