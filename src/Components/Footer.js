import React from 'react'
import { NavLink } from 'react-router-dom'
const Footer = () => {
    return (
        <div data-bs-theme="dark" className="container-xxxl border-top" style={{backgroundColor: "#001a33"}}>
            <footer className="py-3 mt-3">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><NavLink to="/DextereousLearning" className="nav-link px-2 text-muted">Home</NavLink></li>
                    <li className="nav-item"><NavLink to="/DextereousLearning/about" className="nav-link px-2 text-muted">About</NavLink></li>
                    <li className="nav-item"><NavLink to="/DextereousLearning/contact" className="nav-link px-2 text-muted">Contact</NavLink></li>
                    <li className="nav-item"><NavLink to="" className="nav-link px-2 text-muted">Pricing</NavLink></li>
                    <li className="nav-item"><NavLink to="" className="nav-link px-2 text-muted">FAQs</NavLink></li>
                </ul>
                <p className="text-center text-muted">&copy; 2023 <span style={{color: "#FF030D"}}>Dextereous</span> Learning, Inc. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default Footer
