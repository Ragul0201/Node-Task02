const express =  require('express')
const router = express.Router()

const details = {
    "number of seats available" : "25",
    "amenitites in room":"TV,WiFi,Fridge,AC,Cusion Bed",
    "Price for a hour" : "1000"
}

router.get('/',(req,res) => {
    res
    .status(201)
    .send({
        message:"Room details",
        details
    })
})

module.exports = router