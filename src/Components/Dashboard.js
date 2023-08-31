import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {

  const [isOpen, setOpen] = useState(true);
  const toggle = () => {
    setOpen( ! isOpen );
  }

  return (
    <div className='container-xxl mt-5'>
      <div className="row">
        <div style={{width: isOpen ? "200px" : "50px" }} className="col-lg-2 col-2 bg-dark sidebar">
          <div className='d-flex mt-3'>
            <h5 style={{display: isOpen ? "block" : "none" }}>Dashboard</h5>
            <i class="fa-solid fa-bars toggle" onClick={toggle}></i>
          </div>
            <ul className=''>
              <li><i className="fa-solid fa-house"></i><Link style={{display: isOpen ? "block" : "none" }} className='link'>Home</Link></li>
              <li><i className="fa-solid fa-list"></i> <Link style={{display: isOpen ? "block" : "none" }} className='link'>Dashboard</Link></li>
              <li><i className="fa-solid fa-chart-line"></i> <Link style={{display: isOpen ? "block" : "none" }} className='link'>Analytics</Link></li>
              <li><i className="fa-solid fa-user"></i> <Link style={{display: isOpen ? "block" : "none" }} className='link'>Account</Link></li>
              <li><i className="fa-solid fa-gear"></i><Link style={{display: isOpen ? "block" : "none" }} className='link'>Settings</Link></li>
              <li><i className="fa-solid fa-calendar-days"></i><Link style={{display: isOpen ? "block" : "none" }} className='link'>Events</Link></li>  
              <li><i className="fa-solid fa-building-columns"></i><Link style={{display: isOpen ? "block" : "none" }} className='link'>Payment</Link></li>  
              <li><i className="fa-solid fa-right-to-bracket"></i><Link style={{display: isOpen ? "block" : "none" }} className='link'>Logout</Link></li>  
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
