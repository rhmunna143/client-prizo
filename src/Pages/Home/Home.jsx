import About from "./About";
import Banner from "./Banner";
import Insights from "./Insights/Insights";
import PopularContests from "./PopularContest/PopularContests";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <PopularContests></PopularContests>
            <Insights></Insights>
        </div>
    );
};

export default Home;