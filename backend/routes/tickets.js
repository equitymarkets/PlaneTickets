const express = require('express')
const Ticket = require('../models/ticketModel')

//create router
const router = express.Router()

//get all tickets
router.get('/', (req, res) => {
    res.json({mssg: 'GET all tickets'})
} )

//get a single workout
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single ticket'})
})

// Note dummy values, change appropriately
router.post('/', async (req, res) => {
    const {title, load, reps} = req.body
    try {
        const ticket = await Ticket.create({title, load, reps}) 
        res.status(200).json(ticket)  
        }
    catch (error) {
        res.status(400).json({error: error.message})
    }
})

router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a ticket'})
})

router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a new ticket'})
})


module.exports = router 