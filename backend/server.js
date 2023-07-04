require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const ticketRoutes = require('./routes/tickets')

// Express app
const app = express()


//middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})


app.use('/api/tickets', ticketRoutes)

//connect to db
mongoose.connect(process.env.MONG_URI)
    .then(() => {
        // Listen for requests
        app.listen(process.env.PORT, () => {
            console.log('connected to db and listening on port', process.env.PORT)
})
    })
    .catch((error) => {
        console.log(error)
    })



// process.env