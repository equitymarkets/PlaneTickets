import { TicketsContext } from "../context/TicketContext"
import { useContext } from "react"

export const useTicketsContext = () => {
  const context = useContext(TicketsContext)

  if(!context) {
    throw Error('useWorkoutsContext must be used inside an WorkoutsContextProvider')
  }

  return context
}