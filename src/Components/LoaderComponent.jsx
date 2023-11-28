import img from "../assets/images/preloader.gif"

const LoaderComponent = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-tertiary">
            <img src={img} alt="loader img" />
        </div>
    );
};

export default LoaderComponent;