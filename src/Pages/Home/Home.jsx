import About from "./About";
import Banner from "./Banner";
import BestCreator from "./BestCreator/BestCreator";
import Insights from "./Insights/Insights";
import PopularContests from "./PopularContest/PopularContests";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <PopularContests></PopularContests>
            <Insights></Insights>
            <BestCreator></BestCreator>
        </div>
    );
};

export default Home;