import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";


import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="container-xxxl">
    <Navbar />
    <Outlet/>
    <Footer />
    </div>
  );
}

export default App;
