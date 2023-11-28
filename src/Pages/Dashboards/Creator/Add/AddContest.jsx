/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react';
import { RiContractUpDownLine } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import useAllContext from "../../../../Hooks/useAllContext";
import axios from "axios";
import { baseURL } from "../../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

/**
 * {
    "contestName": "game",
    "image": "https://i.ibb.co/4F812XJ/mahdi-aminrad-91-KH4-Fun9lc-unsplash.jpg",
    "description": "Sprite is a lemon-lime flavored soda known for its crisp and refreshing taste. It's caffeine-free and offers a clear, bubbly experience with a zesty citrus twist.",
    "prize": "44",
    "prizeMoney": "555",
    "submissionDetails": "hmm",
    "deadline": "2023-11-30"
}
 */



const people = [
    { name: 'Select A Tag' },
    { name: 'Business Contest' },
    { name: 'Medical Contest' },
    { name: 'Article Writing' },
    { name: 'Gaming' },
]


const AddContest = () => {
    const [selected, setSelected] = useState(people[0])

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { user, setErr } = useAllContext();



    const contestCreator = user?.displayName;
    const creatorUid = user?.uid;
    const status = "pending";
    const participants = 0;
    const tag = selected;



    /**
     * TODO: 
     * add---- creatorUsername, 
     * creatorUid, 
     * participants count: 0
     * 
     */


    const onSubmit = data => {

        axios.post(`${baseURL}/contests`, {
            ...data,
            contestCreator,
            creatorUid,
            status,
            participants,
            tag
        }, { withCredentials: true })
            .then(res => {

                if (res?.data?._id) {
                    toast.success("New contest added successfully.")
                }
            })
            .catch(err => {
                console.log(err);
                setErr(err)
            })
    }

    return (
        <div className="mt-20">
            <div className="mx-auto bg-tertiary w-96 px-4 py-6 rounded-lg border-primary border">
                <h2 className="text-3xl font bold uppercase my-5 text-center">Add New Contest</h2>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <input type="text" placeholder="Contest Name" {...register("contestName", { required: true })} className="px-4 py-2 bg-forth h-12 text-lg text-white w-full rounded-lg border-[0.5px] border-primary " />

                    <br />

                    {errors.contestName && <span className="text-red-600">This field is required</span>}

                    <br />



                    <input type="text" placeholder="Image URL" {...register("image", { required: true })} className="px-4 py-2 bg-forth h-12 text-lg text-white w-full rounded-lg border-[0.5px] border-primary " />

                    <br />

                    {errors.image && <span className="text-red-600">This field is required</span>}

                    <br />




                    <input type="text" placeholder="Description" {...register("description", { required: true })} className="px-4 py-2 bg-forth h-28 text-lg text-white w-full rounded-lg border-[0.5px] border-primary " />

                    <br />

                    {errors.description && <span className="text-red-600">This field is required</span>}

                    <br />





                    <input type="text" placeholder="Prize" {...register("prize", { required: true })} className="px-4 py-2 bg-forth h-12 text-lg text-white w-full rounded-lg border-[0.5px] border-primary " />

                    <br />

                    {errors.prize && <span className="text-red-600">This field is required</span>}

                    <br />



                    <input type="number" placeholder="Prize Money" {...register("prizeMoney", { required: true })} className="px-4 py-2 bg-forth h-12 text-lg text-white w-full rounded-lg border-[0.5px] border-primary " />

                    <br />

                    {errors.prizeMoney && <span className="text-red-600">This field is required</span>}

                    <br />



                    <input type="text" placeholder="Task Submission Info" {...register("submissionDetails", { required: true })} className="px-4 py-2 bg-forth h-12 text-lg text-white w-full rounded-lg border-[0.5px] border-primary " />

                    <br />

                    {errors.submissionDetails && <span className="text-red-600">This field is required</span>}

                    <br />






                    {/* headless select */}
                    <div className="bg-tertiary mb-5 w-full">
                        <Listbox value={selected} defaultValue={people[0]} onChange={setSelected}>
                            <div className="relative mt-1">
                                <Listbox.Button className="relative w-full cursor-default rounded-lg bg-forth border-[0.5px] border-primary h-12 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                    <span className="block truncate">{selected.name}</span>
                                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                        <RiContractUpDownLine
                                            className="h-5 w-5 text-gray-400"
                                            aria-hidden="true"
                                        />
                                    </span>
                                </Listbox.Button>
                                <Transition
                                    as={Fragment}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-secondary text-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                        {people.map((person, personIdx) => (
                                            <Listbox.Option
                                                key={personIdx}
                                                className={({ active }) =>
                                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-white'
                                                    }`
                                                }
                                                value={person}
                                            >
                                                {({ selected }) => (
                                                    <>
                                                        <span
                                                            className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                                }`}
                                                        >
                                                            {person.name}
                                                        </span>
                                                        {selected ? (
                                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                                <FaCheck className="h-5 w-5" aria-hidden="true" />
                                                            </span>
                                                        ) : null}
                                                    </>
                                                )}
                                            </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </Transition>
                            </div>
                        </Listbox>
                    </div>





                    <p className="my-2">Deadline:</p>
                    <input type="date" placeholder="Contest Deadline" {...register("deadline", { required: true })} className="px-4 py-2 bg-forth h-12 text-lg text-white w-full rounded-lg border-[0.5px] border-primary " />

                    <br />

                    {errors.deadline && <span className="text-red-600">This field is required</span>}

                    <br />


                    <input type="submit" value="Add Contest" className="bg-primary border border-transparent hover:border-primary text-tertiary hover:text-white px-4 py-2 w-full text-lg font-medium rounded-lg hover:bg-transparent cursor-pointer" />

                </form>

            </div>
        </div>
    );
};

export default AddContest;