require('dotenv').config()

const express = require('express')
const ticketRoutes = require('./routes/tickets')

// Express app
const app = express()


//middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// route
// app.get('/', (req, res) => {
//     res.json({mssg: 'Welcome?'})
// })
app.use('/api/tickets', ticketRoutes)

// Listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port one million ')
})

process.env