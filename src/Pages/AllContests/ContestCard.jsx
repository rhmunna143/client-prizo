/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const ContestCard = ({ item }) => {

    const { _id, contestName, image, participants, description } = item;

    return (
        <div data-aos="fade-up-left" className="text-white bg-forth p-4 rounded-lg group flex flex-col justify-center">
            <div className="img max-h-fit">
                <img src={image} alt="" className="lg:w-80 h-80 object-cover rounded-lg group-hover:scale-110 transition" style={{ overflow: "hidden" }} />
            </div>

            <div className="text mt-5 flex flex-col justify-center h-30">
                <h2 className="text-2xl font-semibold uppercase">{contestName.slice(0, 20)}</h2>
                <h4 className="font-medium mt-2">Participants: {participants}</h4>
                <p className="mt-2">{description.slice(0, 30)}</p>

                <Link to={`/details/${_id}`}><button className="uppercase text-lg bg-primary w-full py-2 rounded-lg font-medium text-tertiary hover:border-primary border border-transparent hover:bg-transparent hover:text-white mt-4">Details</button></Link>
            </div>
        </div>
    );
};

export default ContestCard;