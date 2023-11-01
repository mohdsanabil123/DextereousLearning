import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
// import OtpLogin from "./Components/OtpLogin";
import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
  
  return (
    <div className="container-xxxl">
      <Navbar />
      <Outlet/>
      {/* <OtpLogin /> */}
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
