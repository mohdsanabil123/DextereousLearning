import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { AuthContext } from "./Contexts/AuthContext";
import { Outlet } from "react-router-dom";

function App() {
  
  const [ token, setToken ] = useState(null);
  
  return (
    <AuthContext.Provider value={{token, setToken}}>
      <div className="container-xxxl">
        <Navbar />
        <Outlet/>
        <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
