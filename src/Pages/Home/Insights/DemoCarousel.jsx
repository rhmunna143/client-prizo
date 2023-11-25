import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./carousel.css";
import adImg from "../../../assets/images/ads.jpg"
import PrimaryBtn from "../../../Components/PrimaryBtn";
import demoWinner from "../../../assets/images/community-01.png"


const DemoCarousel = () => {
    const [sliderRef] = useKeenSlider(
        {
            loop: true,
        },
        [
            (slider) => {
                let timeout
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 2000)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    )

    return (
        <>
            <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide number-slide1  bg-[080536] text-white slide">
                    <img src={adImg} alt="ads" />
                </div>
                <div className="keen-slider__slide number-slide2 slide  winner-bg text-white">
                
                    <h2 className="text-4xl font-bold">Latest Winner</h2>
                    <div className="img w-64 h-64 rounded-full aspect-square bg-tertiary my-5">
                        <img src={demoWinner} alt="winner" className="w-60 h-60 rounded-full aspect-square" />
                    </div>

                    <h4 className="text-3xl font-bold capitalize">Arnold Denim</h4>

                </div>
                <div className="keen-slider__slide number-slide3 slide motivation-bg text-white">
                    <h1 className="text-4xl uppercase font-bold my-6 text-center">Become a part of something extraordinary. <br /> Enter the contest!</h1>
                    <div className="rounded-md overflow-hidden shadow-lg bg-gradient-to-r from-blue-500 to-slate-600 p-6 text-white">
                        <h2 className="text-2xl font-bold mb-2">Join our Contest Today!</h2>
                        <p className="text-lg mb-4">Showcase your talent and win exciting rewards.</p>
                        <br />

                        <PrimaryBtn 
                            text="Get Started"
                        />
                    </div>
                </div>
            </div>
        </>
    )
};

export default DemoCarousel;