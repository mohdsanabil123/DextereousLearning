import React from 'react'
import note from '../Images/note.png'
import physics from '../Images/physics.png'
import chemistry from '../Images/Chemistry.png'
import math from '../Images/math.png'

const Notes = () => {
    return (
        <>
        <div className='container my-5'>
            <h2 className='text-center my-5'>All Your Notes Here</h2>
            <div className="row my-3">
                <div className="col-lg-3 col-md-4 col-sm-6 col-6 mb-3">
                    <div className="card mx-auto" style={{ width: "auto" }} >
                        <img src={physics} height='120px' className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Physics Notes</h5>
                            <p className="card-text">Some quick example text.</p>
                            <a href="/" className="btn btn-sm btn-primary">See Notes</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-6 mb-3">
                    <div className="card mx-auto" style={{ width: "auto" }} >
                        <img src={chemistry} height='120px' className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Physics Notes</h5>
                            <p className="card-text">Some quick example text.</p>
                            <a href="/" className="btn btn-sm btn-primary">See Notes</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-6 mb-3">
                    <div className="card mx-auto" style={{ width: "auto" }} >
                        <img src={math} height='120px' className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Physics Notes</h5>
                            <p className="card-text">Some quick example text.</p>
                            <a href="/" className="btn btn-sm btn-primary">See Notes</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-6 mb-3">
                    <div className="card mx-auto" style={{ width: "auto" }} >
                        <img src={note} height='120px' className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Physics Notes</h5>
                            <p className="card-text">Some quick example text.</p>
                            <a href="/" className="btn btn-sm btn-primary">See Notes</a>
                        </div>
                    </div>
                </div>

            </div>            
        </div>
    </>
    )
}

export default Notes
