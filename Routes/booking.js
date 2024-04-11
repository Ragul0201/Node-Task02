const express = require('express')
const router = express.Router()

const bookedRoom = []

router.post('/',(req,res) => {
    bookedRoom.push(req.body)
    // console.log(req.body)
    // console.log(bookedRoom)
    res
    .status(201)
    .send({
        message : "Room booked Successfully"
    })
})

router.get('/booked-rooms',(req,res) => {
    res
    .status(201)
    .send({
        data: bookedRoom
    })
})

router.get('/all-customers',(req,res) => {
    res
    .status(201)
    .send({
        data: bookedRoom
    })
})

module.exports = router