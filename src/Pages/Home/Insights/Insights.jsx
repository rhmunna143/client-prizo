/* eslint-disable no-unused-vars */
import Container from "../../../Components/Container";
import SectionHeading from "../../../Components/SectionHeading";
import DemoCarousel from "./DemoCarousel";

const Insights = () => {
    return (
        <div data-aos="fade-left" className="bg-secondary pt-20">
            <Container>
                <div className="heading w-fit mx-auto pb-10">
                    <SectionHeading
                        subHeading="participate Now and take your rewards"
                        heading="Insights"
                        text="Explore Your Possibilities."
                        align="center"
                    />
                </div>
            </Container >

            <div className="inside-slider">
                <DemoCarousel></DemoCarousel>
            </div>
        </div >
    );
};

export default Insights;