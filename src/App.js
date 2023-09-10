import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
// import AuthProvider from './store/AuthProvider';
import {AuthContext} from './Contexts/AuthContext'

import { Outlet } from "react-router-dom";

function App() {
  const [token, setToken] = useState('')
  return (
    <AuthContext.Provider value={{setToken, token}}>
      <div className="container-xxxl">
      <Navbar />
      <Outlet/>
      <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
