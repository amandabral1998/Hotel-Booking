const mongoose = require('mongoose')
const express = require('express')
const Reservation = require('../models/reservation')
const router = express.Router()

router.post('/' , async(req, res)=>{
    try {
        const {user , price , days , from , to , name}= req.body;
        const newBooking = new Reservation({
            user: user ,
            price: price ,
            days: days ,
            from: from ,
            to: to ,
            name: name
            
        })
        const savedBooking = await newBooking.save()
        res.status(201).json(savedBooking)
    } catch (error) {
     console.log('Error Occured' , error.name);   
     res.status(500).json('Error Creating Booking')
    }
})

module.exports = router