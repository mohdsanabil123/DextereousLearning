import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import FeeDash from './FeeDash';
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
            <ul className=''>
              <li><i className="fa-solid fa-house"></i><Link style={{display: isOpen ? "block" : "none" }} className='link'>Home</Link></li>
              <li><i className="fa-solid fa-list"></i> <Link style={{display: isOpen ? "block" : "none" }} className='link'>Fees</Link></li>
              <li><i className="fa-solid fa-chart-line"></i> <Link style={{display: isOpen ? "block" : "none" }} className='link'>Analytics</Link></li>
              <li><i className="fa-solid fa-user"></i> <Link style={{display: isOpen ? "block" : "none" }} className='link'>Account</Link></li>
              <li><i className="fa-solid fa-gear"></i><Link style={{display: isOpen ? "block" : "none" }} className='link'>Settings</Link></li>
              <li><i className="fa-solid fa-calendar-days"></i><Link style={{display: isOpen ? "block" : "none" }} className='link'>Events</Link></li>  
              <li><i className="fa-solid fa-building-columns"></i><Link style={{display: isOpen ? "block" : "none" }} className='link'>Payment</Link></li>  
              <li><i className="fa-solid fa-right-to-bracket"></i><Link style={{display: isOpen ? "block" : "none" }} className='link'>Logout</Link></li>  
            </ul>
        </div>

        <div className='col-lg-10 col-10 mx-auto'>
          <FeeDash />
        </div>
        
      </div>
    </div>
  )
}

export default Dashboard
