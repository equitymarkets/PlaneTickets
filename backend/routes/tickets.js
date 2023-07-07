const express = require('express')
const {
    createTicket,
    getTickets,
    getTicket
} = require('../controllers/ticketController')

//create router
const router = express.Router()

//get all tickets
router.get('/', getTickets)

//get a single workout
router.get('/:id', getTicket)

// Note dummy values, change appropriately
router.post('/', createTicket)

router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a ticket'})
})

router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a new ticket'})
})


module.exports = router 