import { useEffect, useState } from "react"
import TicketDetails from '../components/TicketDetails'

const Home = () => {
    const [tickets, setTickets] = useState(null)

    useEffect(() => {
        const fetchTickets = async () => {
            const response = await fetch('/api/tickets')
            const json = await response.json()

            if (response.ok) {
                setTickets(json)
            }
        }

        fetchTickets()


    }, [])

    return (
        <div className="home">
            <div className="tickets">
                {tickets && tickets.map((ticket) => (
                    // <p key={ticket._id}>{ticket.title}</p>
                    <TicketDetails key={ticket._id} ticket={ticket}/>
                ))}
            </div>
        </div>
    )
}

export default Home