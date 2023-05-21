import { createContext, useReducer, useEffect} from "react";

export const PurchasedContext = createContext();

const userReducer = (state, action)=> {
    switch(action.type){
        case "TOTAL":
            return {...state, total: action.payload}
        case "CARTDETAILS":
            return {...state, cartDetails: action.payload}
        default:
            return state;
    }
}

export function PurchasedProvider({ children }){ 

    const [state, dispatch] = useReducer(userReducer,{
        total:null,
        cartDetails:null,
    })
    const csetTotal = (total)=>{
        dispatch({type: "TOTAL", payload: total})
    }
    const csetCartDetails = (cartDetails)=>{
        dispatch({type: "CARTDETAILS", payload: cartDetails})
    }
    return (
            <PurchasedContext.Provider value={{...state, csetTotal, csetCartDetails}}>
                {children}
            </PurchasedContext.Provider>)
    }