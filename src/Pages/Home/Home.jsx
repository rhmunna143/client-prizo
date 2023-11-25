import About from "./About";
import Banner from "./Banner";
import PopularContests from "./PopularContest/PopularContests";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <PopularContests></PopularContests>
        </div>
    );
};

export default Home;