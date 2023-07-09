const TicketDetails = ({ ticket }) => {
    return (
        <div className="ticket-details"> 
            <h4>{ticket.title}</h4>

            <p><strong>Load (kg): </strong>{ticket.load}</p>
            <p><strong>Reps: </strong>{ticket.reps}</p>
            <p>{ticket.createdAt}</p>
        </div>
    )
}
export default TicketDetails