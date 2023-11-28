import { useContext } from "react";
import { AllContext } from "./ContestProvider";

export const baseURL = import.meta.env.VITE_BASE_URL;

const useAllContext = () => {
    const all = useContext(AllContext);

    return all;
};

export default useAllContext;