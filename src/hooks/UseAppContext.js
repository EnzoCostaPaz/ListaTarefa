import { useContext } from "react";

import { AppContext } from "../Context";

const UseAppContext = () => {
    const Contexto =  useContext(AppContext);
 
    return Contexto;
};
export { UseAppContext }