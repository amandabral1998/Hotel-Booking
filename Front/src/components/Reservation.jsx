import axios from 'axios'
import '../css/Reservation.css'
import  {useEffect, useState } from 'react'
const Reservation = () => {
  const [reservationData , setReservationData] = useState()
  const userDet= JSON.parse(localStorage.getItem('user'))
  const userDetails = userDet.user.id
  
  useEffect(()=>{
    try {
      const axiosInstance = axios.create({
        withCredentials: true ,
       })
       axiosInstance.get("http://localhost:3000/api/booking" , { user:`${userDetails}`} )
       .then((res)=>{
        setReservationData(res.data)
       })
    } catch (error) {
      console.log('Error Occured Fetching Reservation Data' , error.name);
    }

  })
  return (
   
    <div className='room-details-container'>
     { console.log(userDetails)}
      <div className='room-image'>
        <img src='' alt='Room' />
      </div>
      <div className='room-details'>
        <h2>Name </h2>
        <p>Type: Type</p>
        <p>Price: Rs.100</p>
        <p>Days: 4</p>
        <p>Amount: Price* days</p>
        {/* Add other room details here */}
        {console.log(reservationData)}
      </div>
    </div>
  )
}
export default Reservation