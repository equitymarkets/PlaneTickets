import { useEffect } from "react"
import { useTicketsContext } from "../hooks/useTicketsContext"

// components
import TicketDetails from "../components/TicketDetails"
import TicketForm from "../components/TicketForm"

const Home = () => {
  const { tickets, dispatch } = useTicketsContext()

  useEffect(() => {
    const fetchTickets = async () => {
      const response = await fetch('/api/tickets')
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_WORKOUTS', payload: json})
      }
    }

    fetchTickets()
  }, [dispatch])

  return (
    <div className="home">
      <div className="tickets">
        {tickets && tickets.map(ticket => (
          <TicketDetails ticket={ticket} key={ticket._id} />
        ))}
      </div>
      <TicketForm />
    </div>
  )
}

export default Home