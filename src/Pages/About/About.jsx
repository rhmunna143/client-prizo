

const About = () => {
    return (
        <div className="bg-secondary text-white py-40">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center">
                    <div className="lg:w-1/2 mr-4">
                        <img
                            src="https://i.ibb.co/LJDJ4SB/carl-raw-m3hn2-Kn5-Bns-unsplash.jpg"
                            alt="Illustration"
                            className="w-full h-auto"
                        />
                    </div>
                    <div className="lg:w-1/2 py-12">
                        <h1 className="text-4xl font-bold mb-4">About Us</h1>
                        <p className="text-lg mb-4">
                            Welcome to our website! We strive to offer innovative solutions...
                        </p>
                        <p className="text-base mb-4">
                            Our team consists of passionate individuals dedicated to...
                        </p>
                        {/* Add more content here */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;