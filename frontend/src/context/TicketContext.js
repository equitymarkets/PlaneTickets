import { createContext, useReducer } from "react";

export const TicketsContext = createContext()

export const ticketsReducer = () => {
    
}

export const TicketsContextProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(ticketsReducer, {
        tickets: null
    })

    // dispatch({type: 'SET_WORKOUTS', payload: [{}, {}]})

    return (
        <TicketsContext.Provider value={}>
           { children }
        </TicketsContext.Provider>
    )
}