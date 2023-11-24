import Container from "../../Components/Container";
import PrimaryBtn from "../../Components/PrimaryBtn";
import SectionHeading from "../../Components/SectionHeading";
import img from "../../assets/images/about-us-img.png"

const About = () => {
    return (
        <div className="bg-tertiary pt-52 pb-96">
            <Container>
                <div className="flex flex-col gap-5 items-center md:flex-row">
                    <div className="img">
                        <img src={img} alt="" />
                    </div>

                    <div className="text lg:w-3/5">
                        <SectionHeading
                            subHeading="Empowering Your Winning Journey"
                            heading="Dive into a World of Thrilling Challenges and Exclusive Rewards!"
                            text="Engage with fellow contenders in thrilling showdowns, test your expertise, and bask in the thrill of victory. Whether you're an aspiring artist, a trivia maestro, a gaming prodigy, or someone eager to explore new horizons, Prizo has something remarkable for you."
                        />

                        <div className="mt-5">
                            <PrimaryBtn
                                text="Learn More"
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default About;