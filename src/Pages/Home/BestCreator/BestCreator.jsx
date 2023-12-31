import Container from "../../../Components/Container";
import SectionHeading from "../../../Components/SectionHeading";
import CreatorSlider from "./CreatorSlider";

const BestCreator = () => {
    return (
        <div className="bg-tertiary py-20">
            <Container>
                <div className="w-fit mx-auto py-10">
                    <SectionHeading
                        align="center"
                        subHeading="Top contest creators"
                        heading="best creators"
                        text="The surprising all time best contest creators"
                    />
                </div>
            </Container>

            <div className="slider pb-64">
                <CreatorSlider />
            </div>
        </div>
    );
};

export default BestCreator;