const mongoose = require('mongoose')

const Schema = mongoose.Schema

// change these accordingly

const ticketSchema = new Schema( {
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
}, { timestamps: true})

module.exports = mongoose.model('Ticket', ticketSchema)
