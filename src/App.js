import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { AuthContext } from "./Contexts/AuthContext";
import { Outlet } from "react-router-dom";

function App() {
  
  return (
    <AuthContext.Provider value={{}}>
      <div className="container-xxxl">
        <Navbar />
        <Outlet/>
        <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
