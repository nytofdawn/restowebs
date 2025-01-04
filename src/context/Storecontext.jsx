import { createContext } from "react";
import { food_list } from "../assets/assets";

export const Storecontext = createContext(null)

const StorecontextPovider =(props) =>{



    const contextValue={
        food_list

    }
    return(
        <Storecontext.Provider value={contextValue}>
            {props.children}
        </Storecontext.Provider>
    )
}

export default StorecontextPovider