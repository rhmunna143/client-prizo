/* eslint-disable react/prop-types */


const SectionHeading = ({ subHeading, heading, text, align }) => {
    return (
        <div className={`text-${align} text-white space-y-4`}>
            <h4 className="text-3xl  font-semibold text-primary uppercase">{subHeading}</h4>
            <h2 className="text-6xl  font-bold uppercase leading-[70px]">{heading}</h2>

            <p className="text-xl">
                {text}
            </p>
        </div>
    );
};

export default SectionHeading;