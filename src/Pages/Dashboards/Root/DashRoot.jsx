
const DashRoot = () => {
    return (
        <div className="text-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <h1 className="text-3xl font-bold  mb-6">Dashboard Home</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-gray-700 mb-4">Total Users</h2>
                        <p className="text-3xl font-bold text-primary">250</p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-gray-700 mb-4">Revenue</h2>
                        <p className="text-3xl font-bold text-primary">$10,000</p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-gray-700 mb-4">Recent Activity</h2>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <span className="bg-green-500 w-2 h-2 rounded-full mr-2"></span>
                                <p className="text-sm text-gray-600">New user registered</p>
                            </li>
                            <li className="flex items-center">
                                <span className="bg-blue-500 w-2 h-2 rounded-full mr-2"></span>
                                <p className="text-sm text-gray-600">Product added</p>
                            </li>
                            {/* Add more activity items */}


                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashRoot;