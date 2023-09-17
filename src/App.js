import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { AuthContext } from "./Contexts/AuthContext";
import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
  
  return (
    <AuthContext.Provider value={{}}>
      <div className="container-xxxl">
        <Navbar />
        <Outlet/>
        <Footer />
        <ToastContainer />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
