
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Container from "./components/Container";
import Login from "./components/Login";
import Header from "./components/Header";
import Signup from "./components/Signup";
import Booking from "./components/Booking";

function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <Routes>
        <Route path='/' element={<Container />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Signup />} />
        <Route path="/book/:bookingid" element={<Booking/>}/>
      </Routes>
    </>
  );
}

export default App;
