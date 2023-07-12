const Ticket = require('../models/ticketModel')
const mongoose = require('mongoose')

// get all workouts
const getTickets = async (req, res) => {
  const tickets = await Ticket.find({}).sort({createdAt: -1})

  res.status(200).json(tickets)
}

// get a single workout
const getTicket = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such workout'})
  }

  const ticket = await Ticket.findById(id)

  if (!ticket) {
    return res.status(404).json({error: 'No such workout'})
  }

  res.status(200).json(ticket)
}

// create a new workout
const createTicket = async (req, res) => {
  const {title, load, reps} = req.body

  let emptyFields = []

  if (!title) {
    emptyFields.push('title')
  }
  if (!load) {
    emptyFields.push('load')
  }
  if (!reps) {
    emptyFields.push('reps')
  }
  if (emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
  }

  // add to the database
  try {
    const ticket = await Ticket.create({ title, load, reps })
    res.status(200).json(ticket)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// delete a workout
const deleteTicket = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such workout'})
  }

  const ticket = await Ticket.findOneAndDelete({_id: id})

  if(!ticket) {
    return res.status(400).json({error: 'No such workout'})
  }

  res.status(200).json(ticket)
}

// update a workout
const updateTicket = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such workout'})
  }

  const workout = await Ticket.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!workout) {
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