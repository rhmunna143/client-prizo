/* eslint-disable react/prop-types */
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./style.css"
import { useEffect, useState } from "react"
import axios from "axios"
import { baseURL } from "../../../Hooks/useAllContext"

const carousel = (slider) => {
    const z = 300
    function rotate() {
        const deg = 360 * slider.track.details.progress
        slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`
    }
    slider.on("created", () => {
        const deg = 360 / slider.slides.length
        slider.slides.forEach((element, idx) => {
            element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`
        })
        rotate()
    })
    slider.on("detailsChanged", rotate)
}

const TopCreator = ({ top }) => {

    return (
        <div className="carousel__cell number-slide1 py-[200px] w-5/6 text-white slide text-2xl slide1-bg space-y-4">
            <h2 className="">{top?.contestCreator}</h2>
            <img className="w-20 h-20 aspect-square rounded-full" src={top?.creatorPhotoUrl} alt="creator img" />
            <h3>{top?.contestName}</h3>
            <h5 className="text-sm w-40">{top?.description.slice(0, 45)}</h5>
        </div>
    )
}

const CreatorSlider = () => {
    const [contests, setContests] = useState([])

    useEffect(() => {
        axios.get(`${baseURL}/contests/top`, { withCredentials: true })
            .then(res => {
                if (res.data && res.data.length > 0) {
                    setContests(res.data)
                }
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const tops = contests.slice(0, 3)

    const [sliderRef] = useKeenSlider(
        {
            loop: true,
            selector: ".carousel__cell",
            renderMode: "custom",
            mode: "free-snap",
        },
        [carousel]
    )

    return (
        <div className="wrapper">
            <div className="scene">
                <div className="carousel keen-slider" ref={sliderRef}>
                    {
                        tops.map(top => <TopCreator top={top} key={top._id} />)
                    }
                </div>
            </div>
        </div>
    )
};

export default CreatorSlider;