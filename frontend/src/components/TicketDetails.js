import { useTicketsContext } from '../hooks/useTicketsContext'

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
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
      <p><strong>Fuel Price (L): </strong>{ticket.load}</p>
      <p><strong>Number of reps: </strong>{ticket.reps}</p>
      <p>{formatDistanceToNow(new Date(ticket.createdAt), { addSuffix: true })}</p>
      <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
    </div>
  )
}

export default TicketDetails