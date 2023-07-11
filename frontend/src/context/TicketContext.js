import { createContext, useReducer } from 'react'

export const TicketsContext = createContext()

export const ticketsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_WORKOUTS':
      return { 
        tickets: action.payload 
      }
    case 'CREATE_WORKOUT':
      return { 
        tickets: [action.payload, ...state.tickets] 
      }
    case 'DELETE_WORKOUT':
      return { 
        tickets: state.tickets.filter(w => w._id !== action.payload._id) 
      }
    default:
      return state
  }
}

export const TicketsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ticketsReducer, { 
    tickets: null
  })
  
  return (
    <TicketsContext.Provider value={{ ...state, dispatch }}>
      { children }
    </TicketsContext.Provider>
  )
}