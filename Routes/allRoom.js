const express = require('express')
const router = express.Router()
// const fs = require('fs')


const allRooms =[];



router.get('/',(req,res) => {
    res
    .status(201)
    .send({
        message:"All rooms",
        allRooms
    })
})

router.post('/add-details',(req,res) => {
    allRooms.push(req.body)
    res
    .status(201)
    .send({
        message:"room details added",
        // arr
    })

})

router.get("all-customer",(req,res) => {

})

module.exports = router