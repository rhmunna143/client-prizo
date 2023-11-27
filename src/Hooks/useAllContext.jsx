import { useContext } from "react";
import { AllContext } from "./ContestProvider";


const useAllContext = () => {
    const all = useContext(AllContext);

    return all;
};

export default useAllContext;