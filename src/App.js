import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import AuthProvider from './store/AuthProvider';

import { Outlet } from "react-router-dom";

function App() {
  return (
    <AuthProvider>
    <div className="container-xxxl">
    <Navbar />
    <Outlet/>
    <Footer />
    </div>
    </AuthProvider>
  );
}

export default App;
