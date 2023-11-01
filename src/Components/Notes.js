import React from 'react'
import physics from '../Images/physics.gif'
import chemistry from '../Images/Chemistry.gif'
import math from '../Images/math.gif'
import biology from '../Images/biology.gif'
import { Link } from 'react-router-dom'

const Notes = () => {
    return (
        <>
        <div className='container custom-margin'>
            <h2 className='text-center my-5'><strong>All Your Notes Here</strong></h2>
            <div className="row my-3 gx-lg-5">

                <div className="col-lg-3 col-md-4 col-sm-6 col-6 mb-3">
                    <Link className='note-link' to='/DextereousLearning/Notes/Physics/6'>
                    <div className="card mx-auto" style={{ width: "auto" }} >
                        <img src={physics} height='200px' alt="..." />
                        <div className="card-footer text-center fs-5 py-0">Physics</div>
                    </div>
                    </Link>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-6 mb-3">
                    <Link className='note-link' to='/DextereousLearning/Notes/Chemistry/6'>
                    <div className="card mx-auto" style={{ width: "auto" }} >
                        <img src={chemistry} height='200px' alt="..." />
                        <div className="card-footer text-center fs-5 py-0">Chemistry</div>
                    </div>
                    </Link>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-6 mb-3">
                    <Link className='note-link' to='/DextereousLearning/Notes/Biology/6'>
                    <div className="card mx-auto" style={{ width: "auto" }} >
                        <img src={biology} height='200px' alt="..." />
                        <div className="card-footer text-center fs-5 py-0">Biology</div>
                    </div>
                    </Link>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-6 mb-3">
                    <Link className='note-link' to='/DextereousLearning/Notes/Math/6'>
                    <div className="card mx-auto" style={{ width: "auto" }} >
                        <img src={math} height='200px' alt="..." />
                        <div className="card-footer text-center fs-5 py-0">Mathematics</div>
                    </div>
                    </Link>
                </div>
                
            </div>            
        </div>
    </>
    )
}

export default Notes
