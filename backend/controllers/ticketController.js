const Ticket = require('../models/ticketModel')
const mongoose = require('mongoose')
// get all tickets
const getTickets = async (req, res) => {
    const tickets = await Ticket.find({}).sort({createdAt: -1})

    res.status(200).json(tickets)
}
// get single ticket
const getTicket = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such workout'})
    }
    const ticket = await Ticket.findById(id)

    if(!ticket) {
        return res.status(404).json({error: 'No such workout'})
    }
    res.status(200).json(ticket)
}
// create a new ticket
const createTicket = async (req, res) => {
    const {title, load, reps} = req.body
    // add doc to db
    try {
        const ticket = await Ticket.create({title, load, reps}) 
        res.status(200).json(ticket)  
        }
    catch (error) {
        res.status(400).json({error: error.message})
    }
}
// update a ticket
const updateTicket = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such workout'})
    }
    const ticket = await Ticket.findOneAndUpdate({ _id: id }, {
        ...req.body
    })
    if(!ticket) {
        return res.status(400).json({error: 'No such workout'})
    }
    res.status(200).json(ticket)

}
// delete a ticket
const deleteTicket = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such workout'})
    }

    const ticket = await Ticket.findOneAndDelete({ _id: id })
    
    if(!ticket) {
        return res.status(400).json({error: 'No such workout'})
    }

    res.status(200).json(ticket)

}


module.exports = {
    getTickets,
    getTicket,
    createTicket,
    deleteTicket,
    updateTicket
}