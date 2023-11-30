import DashHeading from "../../../Components/DashHeading";


const Profile = () => {
    return (
        <div>
            <div>
                <DashHeading heading={"Profile"} />
            </div>

            <div className="bg-forth p-8">
                <p className="text-lg">Win percentage: </p>
            </div>
        </div>
    );
};

export default Profile;