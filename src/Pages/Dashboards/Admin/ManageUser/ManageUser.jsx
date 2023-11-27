/* eslint-disable no-unused-vars */

import { useQuery } from "@tanstack/react-query";
import DashHeading from "../../../../Components/DashHeading";
import MgtUserRow from "./MgtUserRow";
import axios from "axios";
import useAllContext, { baseURL } from "../../../../Hooks/useAllContext";
import { useEffect, useState } from "react";
import LoaderComponent from "../../../../Components/LoaderComponent";


const ManageUser = () => {
    const [users, setUsers] = useState([])
    const { setErr } = useAllContext();

    const { data, refetch, isLoading, errors } = useQuery({
        queryKey: ["data"],
        queryFn: async () => {
            const res = await axios.get(`${baseURL}/users`, { withCredentials: true })

            return res.data;
        }
    })

    useEffect(() => {
        if (data && data.length > 0) {
            setUsers(data)
        }
    }, [data])

    if (errors) {
        console.log(errors);
        setErr(errors)
    }

    if (isLoading) {
        return <LoaderComponent />
    }

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
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {/* row 1 */}

                        {
                            users?.map(user => <MgtUserRow key={user._id} user={user} fetch={refetch} />)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUser;