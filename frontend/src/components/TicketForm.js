// import { useState } from 'react'

// const TicketForm = () => {
//     const [title, setTitle] = useState('')
//     const [load, setLoad] = useState('')
//     const [reps, setReps] = useState('')
//     const [error, setError] = useState(null)

//     const handleSubmit = async (e) => {
//         e.PreventDefault()

//         const ticket = { title, load, reps}

//         const response = await fetch('/api/tickets', {
//             method: 'POST',
//             body: JSON.stringify(ticket),
//             headers: {
//                 "Content-type": "application/json"
//             }
//         })
//         const json = await response.json()

//         if (!response.ok) {
//             setError(json.error)
//         }

//         if (response.ok) {
//             setError(null)
//             setTitle("")
//             setLoad("")
//             setReps("")
//             console.log("new ticket added", json)
//         }
//     }
//     return (
//         <form className='create' onSubmit={handleSubmit}>
//             <h1>Add a New Ticket</h1>
//             <label>Exercise Type</label>
//             <input 
//                 type='text'
//                 onChange={(e) => setTitle(e.target.value)}
//                 value={title}
//             />
//             <label>Load (kg): </label>
//             <input 
//                 type='number'
//                 onChange={(e) => setLoad(e.target.value)}
//                 value={load}
//             />

//             <label>Reps </label>
//             <input 
//                 type='number'
//                 onChange={(e) => setReps(e.target.value)}
//                 value={reps}
//             />
//             <button>Add Ticket</button>
//             {error && <div className='error'>{error}</div>}
//         </form>
        
        
//     )
// }

// export default TicketForm

import { useState } from 'react'

const TicketForm = () => {
  const [title, setTitle] = useState('')
  const [load, setLoad] = useState('')
  const [reps, setReps] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const ticket = {title, load, reps}
    
    const response = await fetch('/api/Tickets', {
      method: 'POST',
      body: JSON.stringify(ticket),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      setError(null)
      setTitle('')
      setLoad('')
      setReps('')
      console.log('new Ticket added:', json)
    }

  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New Ticket</h3>

      <label>Excersize Title:</label>
      <input 
        type="text" 
        onChange={(e) => setTitle(e.target.value)} 
        value={title}
      />

      <label>Load (in kg):</label>
      <input 
        type="number" 
        onChange={(e) => setLoad(e.target.value)} 
        value={load}
      />

      <label>Number of Reps:</label>
      <input 
        type="number" 
        onChange={(e) => setReps(e.target.value)} 
        value={reps} 
      />

      <button>Add Ticket</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default TicketForm