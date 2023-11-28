const mongoose = require('mongoose')
const express = require('express')
const Room = require('../models/room')
const router = express.Router()


router.get('/get-rooms' , async (req , res)=>{
    try {
        const result = await Room.find();
        res.send(result);
      } catch (error) {
        console.log(error);
      }
})

router.post('/get-rooms', async (req, res) => {
  const {_id} = req.body
  const roomid = new mongoose.Types.ObjectId(_id);


  try {

    const room = await Room.findOne({_id:roomid});
    if (room) {
      res.send(room);
    } else {
      res.status(404).json({ message: 'Room not found' });
    }
  } catch (error) {
    console.error(error); 
    res.status(500).json({ message: 'Internal server error' });
  }
});



module.exports = router