const express = require("express");
const router = express.Router();
const User = require('../controller/user')
const Room = require('../controller/room')
const Reservation = require('../controller/reservation')

router.use("/user", User);
router.use("/room" , Room)
router.use('/booking' , Reservation)

module.exports = router;