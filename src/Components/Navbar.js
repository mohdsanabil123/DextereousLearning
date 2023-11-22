import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import avatar from '../Images/profile.jpg'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import axios from "axios";


const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token')
    toast('Logged out!', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    navigate('/DextereousLearning/login')
  }

  const [ user, setUser ] = useState({});               // Now using useState() and later we will use context api.

  const token = localStorage.getItem('token')

  useEffect(()=>{
    if ( token ) {
      getUserProfile();
    }
  }, [token]);

  const getUserProfile = async () => {
    try {
      const user = await axios.get(`${process.env.REACT_APP_API_URL}/api/profile/`, {
        headers:{
          "Content-Type": "text/json",
          "Authorization": localStorage.getItem('token')
      }
    })
    setUser(user.data);

    } catch (error) {
      console.log("Somethong is wrong!")
    }
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark" style={{backgroundColor: "#001a33"}}>
        <div className="container-fluid mx-lg-2">
          <Link className="navbar-brand" to="/DextereousLearning">
            <span style={{color: "#FF030D"}}>Dextereous</span> Learning
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars-staggered"></i>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-lg-5 gap-2">
              <li className="nav-item">
                <NavLink className="nav-link" to="/DextereousLearning/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/DextereousLearning/contact">
                  Contact Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/DextereousLearning/team">
                  Team
                </NavLink>
              </li>

              { ! localStorage.getItem('token') ?
              <>
              <li className="nav-item"><NavLink className="nav-link" to="/DextereousLearning/registration">Registration</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/DextereousLearning/login">Login</NavLink></li>
              </>
              :
              <div className="dropdown ms-4">
                <Link
                  className="dropdown-toggle d-flex align-items-center hidden-arrow"
                  id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"
                >
                  <img
                    src={ user.profile_pic ? `${process.env.REACT_APP_API_URL}/${user.profile_pic}` : avatar }
                    className="rounded-circle my-2"
                    width="25"
                    height="25"
                    alt="User profile pic"
                    loading="lazy"
                  />
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <Link className="dropdown-item" to='/DextereousLearning/dashboard/profile'>
                      My profile
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/DextereousLearning/dashboard/fees">
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" onClick={handleLogout} >
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
              }
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
