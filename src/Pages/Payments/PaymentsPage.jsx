/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import Container from "../../Components/Container";
import SectionHeading from "../../Components/SectionHeading";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import useAllContext, { baseURL } from "../../Hooks/useAllContext";

const PaymentsPage = () => {
    const { handleSubmit, formState: { errors } } = useForm();
    const stripe = useStripe();
    const elements = useElements();
    const { prizeMoney, _id, contestName, image } = useLoaderData();
    const { user } = useAllContext();

    const uid = user?.uid;

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
            const chargeSave = {
                amount: price * 100,
                currency: "usd",
                source: paymentMethod.id,
                description: "payment for contest registration",
                uid: uid,
                photoURL: user?.photoURL,
                contestId: _id,
                winner: "not decided",
                userName: user?.displayName,
                chargeId: paymentMethod.id,
                contestName: contestName,
                image: image
            }

            axios.post(`${baseURL}/create-charge?uid=${uid}`, chargeSave, {
                withCredentials: true,
                headers: {
                    Authorization: `Bearer ${import.meta.env.VITE_SK_TEST_API_KEY}`
                }
            })
                .then(res => {

                    console.log("payment response intent: ", res.data);
                })
                .catch(error => {
                    console.log(error);
                })

            console.log("payment success payment method: ", paymentMethod)
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