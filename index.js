const express = require('express')
const app = express()
const roomRouter = require('./Routes/room')
const bookRouter = require('./Routes/booking')
const allRouter = require('./Routes/allRoom')

const port = process.env.PORT || 9000
app.use(express.json())

app.use('/',roomRouter)
app.use('/booking-room',bookRouter)
app.use('/allrooms', allRouter)

app.listen(port,()=>console.log(`App is listening port ${port}`))