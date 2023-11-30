import { useLoaderData } from "react-router-dom";
import DashHeading from "../../../../Components/DashHeading";
import useAllContext from "../../../../Hooks/useAllContext";
import SubmittedContestRow from "./SubmittedContestRow";


const SubmittedContest = () => {
    const { user } = useAllContext()
    const submitted = useLoaderData();

    const submittedByUser = submitted?.filter(submit => submit?.creatorId == user?.uid)

    return (
        <div>
            <div className="heading">
                <DashHeading heading={"Submitted Contests"} />
            </div>

            <div className="data">
                <div className="overflow-x-auto">
                    <table className="table text-white">
                        {/* head */}
                        <thead>
                            <tr className="text-white">
                                <th>Contest Name & Participants</th>
                                <th>Task & Email</th>
                                <th>Winner</th>
                                <th>Select as Winner</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}

                            {
                                submittedByUser?.map(contest => <SubmittedContestRow uid={user?.uid} contest={contest} key={contest?._id} />)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default SubmittedContest;