import { useQuery } from "@tanstack/react-query";
import Container from "../../Components/Container";
import SectionHeading from "../../Components/SectionHeading";
import axios from "axios";
import { baseURL } from "../../Hooks/useAxiosSecure";
import LoaderComponent from "../../Components/LoaderComponent";
import useAllContext from "../../Hooks/useAllContext";
import ContestCard from "./ContestCard";


const AllContests = () => {
    const { setErr } = useAllContext();

    const { data: contests = [], errors: err, isLoading } = useQuery({
        queryKey: ["contests"],
        queryFn: async () => {
            const res = await axios.get(`${baseURL}/contests`, { withCredentials: true })

            return res.data;
        },
        initialData: []
    })

    if (isLoading) {
        return <LoaderComponent />
    }

    if (err) {
        console.log(err);
        setErr(err)
    }


    return (
        <div className="bg-tertiary py-20">
            <div className="w-fit mx-auto">
                <Container>
                    <SectionHeading
                        heading="All Contests"
                        align="center"
                    />

                    <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {
                            contests?.map(item => <ContestCard key={item._id} item={item} />)
                        }
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default AllContests;