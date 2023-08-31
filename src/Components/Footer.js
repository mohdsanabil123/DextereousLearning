import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <div className="container-xxxl bg-light border-top">
            <footer className="py-3 mt-3">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><Link to="/" className="nav-link px-2 text-muted">Home</Link></li>
                    <li className="nav-item"><Link to="/about" className="nav-link px-2 text-muted">About</Link></li>
                    <li className="nav-item"><Link to="/contact" className="nav-link px-2 text-muted">Contact</Link></li>
                    <li className="nav-item"><Link to="" className="nav-link px-2 text-muted">Pricing</Link></li>
                    <li className="nav-item"><Link to="" className="nav-link px-2 text-muted">FAQs</Link></li>
                </ul>
                <p className="text-center text-muted">&copy; 2023 <span className='text-danger'>Dextereous</span> Learning, Inc. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default Footer
