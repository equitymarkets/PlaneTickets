import {useState} from 'react'




const TicketForm = () => {
    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    return (
        <form className='create'>
            <h1>Add a New Ticket</h1>
        </form>
    )
}