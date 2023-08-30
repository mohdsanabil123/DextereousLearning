import React from 'react'

const Footer = () => {
    return (
        <div className="container-xxxl bg-light border-top mt-5">
            <footer className="py-3 mt-3">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Home</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Features</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Pricing</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">FAQs</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About</a></li>
                </ul>
                <p className="text-center text-muted">&copy; 2023 <span className='text-danger'>Dextereous</span> Learnings, Inc. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default Footer
