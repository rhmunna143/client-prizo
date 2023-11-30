import Container from "../../Components/Container";
import "./Banner.css"
import bannerImg from "../../assets/images/banner-illus.png"
import { FaSearch } from 'react-icons/fa';
import axios from "axios";
import { baseURL } from "../../Hooks/useAllContext";
import ContestCard from "../AllContests/ContestCard";
import { useState } from "react";


const Banner = () => {
    const [searchText, setSearchTest] = useState("")
    const [contests, setContests] = useState([])


    const handleSearchChange = (e) => {
        const text = e.target.value

        setSearchTest(text)
    }

    const handleSearch = (e) => {
        e.preventDefault()

        fetchContests();
        console.log(searchText);
    }

    const fetchContests = async () => {
        await axios.get(`${baseURL}/search?tag=${searchText}`)
            .then(res => {
                console.log(res.data);
                setContests(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <div className="banner-bg py-[200px]">
            <Container>
                <div className="flex flex-col-reverse md:flex-row items-center text-white">
                    <div className="text space-y-3 lg:w-3/4">
                        <h4 className="text-3xl  font-semibold text-primary uppercase">Where Passion Meets Competition</h4>
                        <h2 className="text-6xl  font-bold uppercase leading-[70px]">Explore, Compete <br /> and Win Prizes</h2>

                        <p className="text-3xl font-medium">
                            Feel free to modify and adapt this text to suit the tone, style, and specifics of your contest hub platform!
                        </p>

                        <div className="search pt-5 relative">
                            <input onChange={handleSearchChange} placeholder="Search Contest tag here..." type="text" name="search" id="search" className="lg:w-4/5 w-full pl-12 pr-4 py-5 text-lg border border-primary border-solid bg-transparent" />

                            <FaSearch className="text-2xl text-primary absolute top-[45px] left-4" />

                            <button onClick={handleSearch} className="text-lg font-medium bg-primary hover:bg-white text-secondary px-5 py-2 rounded-lg absolute right-3 lg:right-[135px] top-8 uppercase">Find Now</button>
                        </div>

                    </div>

                    <div className="img">
                        <img src={bannerImg} alt="" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

                    {
                        contests && contests.length > 0 ? contests?.map(item => <ContestCard item={item} key={item?._id} />)
                            :
                            ""
                    }
                </div>
            </Container>
        </div>
    );
};

export default Banner;