import Container from "../../Components/Container";
import PrimaryBtn from "../../Components/PrimaryBtn";
import SectionHeading from "../../Components/SectionHeading";
import Feather from "./Feature/Feather";
import "./Features.css";

const Features = () => {
    return (
        <div className="features-bg text-white py-40">
            <Container>
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="text lg:w-3/5">
                        <SectionHeading
                            subHeading="Ignite Your Contesting Spirit"
                            heading="Prizo - Where Passion Meets Competition and Triumph Leads to Rewards!"
                            text="Feel free to modify and adapt this text to suit the tone, style, and specifics of your contest hub platform!"
                        />

                        <div className="btn mt-5">
                            <PrimaryBtn
                                text="Join Now"
                            />
                        </div>
                    </div>

                    <div className="features">
                        <Feather />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Features;