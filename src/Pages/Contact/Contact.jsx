

const Contact = () => {
    return (
        <div className="">
            <div className="bg-secondary text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-center">
                        <div className="w-full">
                            <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
                            <form className="max-w-lg mx-auto">
                                <div className="mb-4">
                                    <label htmlFor="name" className="block mb-1">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Enter your name"
                                        className="w-full px-4 py-2 bg-secondary border border-primary rounded-lg focus:outline-none focus:border-primary"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block mb-1">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        className="w-full px-4 py-2 bg-secondary border border-primary rounded-lg focus:outline-none focus:border-primary"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="message" className="block mb-1">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        placeholder="Type your message here"
                                        className="w-full px-4 py-2 bg-secondary border border-primary rounded-lg focus:outline-none focus:border-primary"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="bg-primary text-tertiary py-2 px-6 rounded-lg uppercase font-medium hover:bg-transparent hover:border-primary border border-transparent hover:text-white focus:outline-none"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;