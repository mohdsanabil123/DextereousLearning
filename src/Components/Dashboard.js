import React, { useState } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import FeeDash from './FeeDash';
import Profile from './Profile';
// import CardPlaceholder from './CardPlaceholder';

const Dashboard = () => {

  const [isOpen, setOpen] = useState(false);
  const toggle = () => {
    setOpen( ! isOpen );
  }

  return (
    <div className='container-xxl mt-5'>
      <div className="row d-flex">
        <div style={{width: isOpen ? "200px" : "50px" }} className="col-lg-2 col-2 bg-dark sidebar">
          <div className='d-flex mt-3' onClick={toggle}>
            <i className="fa-solid fa-bars toggle"></i>
            <h5 style={{display: isOpen ? "block" : "none" }}>Dashboard</h5>
          </div>
            <ul>
              <Link className='link' to='/DextereousLearning/dashboard'><li><i className="fa-solid fa-house"></i><div style={{display: isOpen ? "block" : "none" }}>Home</div></li></Link>
              <Link className='link' to='/DextereousLearning/dashboard/profile'><li><i className="fa fa-user-circle"></i><div style={{display: isOpen ? "block" : "none" }}>Profile</div></li></Link>
              <Link className='link' to='/DextereousLearning/dashboard/fees'><li><i className="fa-solid fa-list"></i><div style={{display: isOpen ? "block" : "none" }}>Fees</div></li></Link>
              <Link className='link' to='/DextereousLearning/dashboard/fees'><li><i className="fa-solid fa-chart-line"></i><div style={{display: isOpen ? "block" : "none" }}>Analytics</div></li></Link>
              <Link className='link' to='/DextereousLearning/dashboard/fees'><li><i className="fa-solid fa-gear"></i><div style={{display: isOpen ? "block" : "none" }}>Settings</div></li></Link>
              <Link className='link' to='/DextereousLearning/dashboard/fees'><li><i className="fa-solid fa-calendar-days"></i><div style={{display: isOpen ? "block" : "none" }}>Events</div></li></Link>
              <Link className='link' to='/DextereousLearning/dashboard/fees'><li><i className="fa-solid fa-building-columns"></i><div style={{display: isOpen ? "block" : "none" }}>Payment</div></li></Link>
              <Link className='link' to='/DextereousLearning/dashboard/fees'><li><i className="fa-solid fa-right-to-bracket"></i><div style={{display: isOpen ? "block" : "none" }}>Logout</div></li></Link>
            </ul>
          </div>

        <div className='col-lg-10 col-10 mx-auto'>
         <Routes>
          <Route path='/fees' 
          element={<FeeDash/>} />

          <Route path='/profile' 
          element={<Profile/>} />
         </Routes>
        </div>
        
      </div>
    </div>
  )
}

export default Dashboard
