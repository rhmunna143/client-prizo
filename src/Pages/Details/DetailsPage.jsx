import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { baseURL } from "../../Hooks/useAxiosSecure";
import LoaderComponent from "../../Components/LoaderComponent";
import useAllContext from "../../Hooks/useAllContext";
import SectionHeading from "../../Components/SectionHeading";
import Container from "../../Components/Container";
import dayjs from "dayjs";
import useDeadlineCheck from "../../Hooks/useDeadlineCheck";
import { useEffect } from "react";

export let price = 0;
let formattedDate;

const DetailsPage = () => {
    const params = useParams();
    const id = params.id;
    const { setErr, setPrice } = useAllContext();
    const isExpired = useDeadlineCheck(formattedDate);

    const { data = {}, isLoading, errors } = useQuery({
        queryKey: ["data"],
        queryFn: async () => {
            const res = await axios.get(`${baseURL}/contests/${id}`, { withCredentials: true })

            return res.data;
        }
    });

    useEffect(() => {
        if (price > 0) {
            setPrice(price)
        }
    }, [setPrice])

    if (isLoading) {
        return <LoaderComponent />
    }

    if (errors) {
        console.error(errors);
        setErr(errors)
    }

    price = data?.prizeMoney / 3;
    const deadline = data?.deadline;
    formattedDate = dayjs(deadline).format('YYYY-MM-DD');
    const monthDate = dayjs(deadline).format('MMM DD, YYYY').toUpperCase();

    return (
        <div className="bg-tertiary text-white py-20">
            <div className="w-fit mx-auto mb-12">
                <SectionHeading
                    align={"center"}
                    heading={`Details of ${data?.contestName}`}
                />
            </div>

            <Container>
                <div className="details flex flex-col md:flex-row items-center gap-8 bg-forth p-4 rounded-lg">
                    <div className="img lg:w-2/5 lg:h-1/2 w-full h-auto">
                        <img src={data?.image} alt="" className="w-full h-auto rounded-lg" />
                    </div>

                    <div className="text-white font-medium">
                        <h2 className="my-3 uppercase text-5xl font-bold">{data?.contestName}</h2>
                        <p className="my-3 font-medium text-2xl">Participants: {data?.participants}</p>

                        <p className="my-3 text-xl">Registration Fee: $ {price}</p>
                        <p className="my-3 font-merinda">{data?.description}</p>

                        <h4 className="my-3 text-2xl">Prize: {data?.prize}</h4>
                        <h4 className="my-3 text-2xl">Prize Money: $ {data?.prizeMoney}</h4>

                        <h6 className="my-4">Deadline: {monthDate}</h6>


                        <Link to={`/pay/${id}`} className="my-4">
                            <button disabled={isExpired} className="bg-primary text-secondary font-medium hover:bg-white px-6 py-2 text-lg uppercase rounded-lg">
                                {!isExpired ?
                                    "Checkout to registration"
                                    :
                                    "Deadline Finished"
                                }
                            </button>
                        </Link>


                    </div>
                </div>
            </Container>
        </div>
    );
};

export default DetailsPage;