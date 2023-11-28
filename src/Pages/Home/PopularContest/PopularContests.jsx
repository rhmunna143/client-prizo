import { Link } from "react-router-dom";
import Container from "../../../Components/Container";
import PrimaryBtn from "../../../Components/PrimaryBtn";
import SectionHeading from "../../../Components/SectionHeading";
import { baseURL } from "../../../Hooks/useAxiosSecure";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import useAllContext from "../../../Hooks/useAllContext";
import LoaderComponent from "../../../Components/LoaderComponent";
import ContestCard from "../../AllContests/ContestCard";


const PopularContests = () => {
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
        <div className="bg-tertiary">
            <Container>
                <div className="w-fit mx-auto">
                    <SectionHeading
                        subHeading="Join the Contesting Revolution"
                        heading="Popular Contests"
                        text="'Prizo' could involve more details and an immersive narrative."
                        align="center"
                    />
                </div>

                <div className="popular pb-20">
                    {/* add popular cards here.... */}
                    {/* add popular cards here.... */}
                    {/* add 6666 popular cards here.... */}

                    <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-20">
                        {
                            contests?.map(item => <ContestCard key={item._id} item={item} />)
                        }
                    </div>



                    <div className="w-fit mx-auto">
                        <Link to={"/all"} className="w-fit mx-auto text-center">
                            <PrimaryBtn
                                text="See All Contest"
                            />
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default PopularContests;