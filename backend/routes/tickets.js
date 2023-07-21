const express = require('express')
const {
    createTicket,
    getTickets,
    getTicket,
    deleteTicket,
    updateTicket
} = require('../controllers/ticketController')

//create router
const router = express.Router()

//get all tickets
router.get('/', getTickets)

//get a single workout
router.get('/:id', getTicket)


router.post('/', createTicket)

router.delete('/:id', deleteTicket)

router.patch('/:id', updateTicket)

module.exports = router 