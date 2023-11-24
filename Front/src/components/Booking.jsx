import "../css/Booking.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import {toast} from 'react-toastify'

const Booking = () => {
  const [bookingdata, setBookingData] = useState("");
  const id = useParams();
  const { bookingid } = id;
  const navigate = useNavigate()
 
  useEffect(() => {
    try {
      const axiosInstance = axios.create({
        withCredentials: true,
      });
      axiosInstance
        .post("http://localhost:3000/api/room/get-rooms", {
          _id: `${bookingid}`,
        })
        .then((res) => {
          setBookingData(res.data);
        });
    } catch (error) {
      console.log("Error Occured", error.name);
    }
  }, [bookingid]);

  // Booking Room 
  const handleBooking = async () => {
    const userDetail = JSON.parse(localStorage.getItem('user'));
    const userDetails = userDetail.user;

    const bookingObj = {
      user: userDetails.id,
      name: bookingdata.name,
      price: bookingdata.price,
      from: '27/12/2023',
      to: '28/12/2023',
      days: 4
    };
    

    try {
      const axiosInstance = axios.create({
        withCredentials: true,
      });
      const response = await axiosInstance.post("http://localhost:3000/api/booking", bookingObj);
      toast.success("Successfully Room Booked", {
        position: "top-right",
        autoClose: 3000,
      });
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      console.log("Error Occurred", error.name);
    }
  };


 
 
  return (
    <div className='booking-page'>
      <div className='booking-image'>
        <img src={bookingdata.img} alt='Room Image' width='400' height='300' />
      </div>
      <div className='booking-details'>
        <h2>Booking Details</h2>
        <p>
          <strong>Name:</strong> {bookingdata.name}
        </p>
        <p>
          <strong>From:</strong> 2023-11-15
        </p>
        <p>
          <strong>To:</strong> 2023-11-20
        </p>
        <p>
          <strong>Days:</strong>4
        </p>
        <p>
          <strong>Price:</strong> Rs.
          {bookingdata.price}
        </p>
        <button className=' btn-book' onClick={()=>handleBooking()}>Book Now</button>
        {/* {console.log(bookingdata)}
        {console.log(userDetails)} */}
      </div>
    </div>
  );
};

export default Booking;
