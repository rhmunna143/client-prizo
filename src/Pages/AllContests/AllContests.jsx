import { useQuery } from "@tanstack/react-query";
import Container from "../../Components/Container";
import SectionHeading from "../../Components/SectionHeading";
import axios from "axios";
import { baseURL } from "../../Hooks/useAxiosSecure";
import LoaderComponent from "../../Components/LoaderComponent";
import useAllContext from "../../Hooks/useAllContext";
import ContestCard from "./ContestCard";
import { useEffect, useState } from "react";


const AllContests = () => {
    const [contests, setContests] = useState([])
    const [contestsTagsArray, setContestsTagsArray] = useState([])
    const { setErr } = useAllContext();
    const filteredContest = contests.filter(contest => contest?.status !== "pending");

    const { data = [], errors: err, isLoading } = useQuery({
        queryKey: ["contests"],
        queryFn: async () => {
            const res = await axios.get(`${baseURL}/contests`, { withCredentials: true })

            return res.data;
        },
        initialData: []
    })

    useEffect(() => {
        if (data && data.length > 0) [
            setContests(data)
        ]
    }, [data])

    useEffect(() => {
        const tagsArray = ["All", "Business Contest", "Medical Contest", "Article Writing", "Gaming", "Select A Tag"];

        if (tagsArray.length > 0) {
            setContestsTagsArray(tagsArray)
        }

    }, [])

    if (isLoading) {
        return <LoaderComponent />
    }

    if (err) {
        console.log(err);
        setErr(err)
    }

    const handleTab = (tag) => {
        const filter = contests?.filter(item => item.tag === tag);
        setContests(data)
        if (filter.length > 0) {
            setContests(filter)
        }
    }


    return (
        <div className="bg-tertiary py-20">
            <div className="w-fit mx-auto">
                <Container>
                    <SectionHeading
                        heading="All Contests"
                        align="center"
                    />

                    <div role="tablist" className="tabs tabs-boxed w-fit mx-auto my-10">
                        {
                            contestsTagsArray?.map(tag => <button onClick={() => handleTab(tag)} key={tag} role="tab" className={`tab w-fit focus:tab-active`}>{tag === "Select A Tag" ? "Untitled" : tag}</button>)
                        }

                        {/* <a role="tab" className="tab">Tab 1</a>
                        <a role="tab" className="tab tab-active">Tab 2</a>
                        <a role="tab" className="tab">Tab 3</a> */}
                    </div>

                    <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {
                            filteredContest?.map(item => <ContestCard key={item._id} item={item} />)
                        }
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default AllContests;