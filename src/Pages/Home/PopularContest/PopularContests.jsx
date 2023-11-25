import { Link } from "react-router-dom";
import Container from "../../../Components/Container";
import PrimaryBtn from "../../../Components/PrimaryBtn";
import SectionHeading from "../../../Components/SectionHeading";


const PopularContests = () => {
    return (
        <div className="bg-tertiary">
            <Container>
                <div className="w-fit mx-auto pb-20">
                    <SectionHeading
                        subHeading="Join the Contesting Revolution"
                        heading="Popular Contests"
                        text="'Prizo' could involve more details and an immersive narrative."
                        align="center"
                    />
                </div>

                <div className="popular py-20">
                    {/* add popular cards here.... */}
                    {/* add popular cards here.... */}
                    {/* add 6666 popular cards here.... */}


                    <div className="btn w-fit mx-auto">
                        <Link to={"/all"}>
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