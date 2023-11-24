/* eslint-disable react/prop-types */

const PrimaryBtn = ({text, Fn}) => {
    return (
        <button onClick={Fn} className="bg-primary text-secondary font-medium hover:bg-white px-6 py-2 text-lg uppercase rounded-lg">
            {text}
        </button>
    );
};

export default PrimaryBtn;