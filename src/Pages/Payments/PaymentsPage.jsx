/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import Container from "../../Components/Container";
import SectionHeading from "../../Components/SectionHeading";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const PaymentsPage = () => {
    const { handleSubmit, formState: { errors } } = useForm();
    const stripe = useStripe();
    const elements = useElements();
    const { prizeMoney } = useLoaderData();

    const price = prizeMoney / 3;

    const onSubmit = async (data) => {

        if (!stripe || !elements) {

            return;
        }

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: cardElement,
        })

        if (error) {
            console.log("payment failed: ", error);
            return toast.error(error.message);
        } else {
            // successful payment statements

            


            console.log("payment success: ", paymentMethod)
        }
    }


    return (
        <div className="bg-secondary text-white py-20">
            <Container>
                <div className="heading w-fit mx-auto">
                    <SectionHeading heading={"Payment"} align={"center"} />

                    <p className="text-2xl text-center mt-10">Registration Fee: $ {price}</p>
                </div>

                <div className="pay text-black w-full lg:w-2/5 lg:p-12 p-4  mx-auto bg-white my-20 rounded-lg shadow-lg ">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <CardElement />
                        <input type="submit" value="Pay now" className="mt-12 bg-primary px-12 py-2 rounded-lg border border-transparent hover:border-primary text-tertiary font-medium uppercase hover:bg-forth hover:text-white cursor-pointer" />
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default PaymentsPage;