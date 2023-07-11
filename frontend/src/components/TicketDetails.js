import { useTicketsContext } from '../hooks/useTicketsContext'

const TicketDetails = ({ ticket }) => {
  const { dispatch } = useTicketsContext()

  const handleClick = async () => {
    const response = await fetch('/api/tickets/' + ticket._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_WORKOUT', payload: json})
    }
  }

  return (
    <div className="ticket-details">
      <h4>{ticket.title}</h4>
      <p><strong>Load (kg): </strong>{ticket.load}</p>
      <p><strong>Number of reps: </strong>{ticket.reps}</p>
      <p>{ticket.createdAt}</p>
      <span onClick={handleClick}>delete</span>
    </div>
  )
}

export default TicketDetails