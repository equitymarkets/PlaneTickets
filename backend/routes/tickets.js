const express = require('express')

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

router.post('/', (req, res) => {
    res.json({mssg: 'POST a new ticket'})
})

router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a ticket'})
})

router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a new ticket'})
})


module.exports = router 