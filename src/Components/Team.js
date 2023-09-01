import React from 'react'
import image from '../Images/team-1.jpg'
import { Link } from 'react-router-dom'

const Team = () => {
  return (
    <div className='container custom-margin'>
      <h2 className='text-center my-5'>Meet our highly skilled tutors</h2>
            <div className="row my-3 text-center">

                <div className="col-lg-3 col-md-4 col-sm-6 col-6 mb-3">
                <div className="card mx-auto" style={{ width: "auto" }} >
                    <img src={image}  className="img-fluid rounded-circle mx-auto mt-3" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-center">Mohd Sanabil</h5>
                        <p className="card-text">An Engineer</p>
                    </div>
                    <div>
                    <Link to="/" ><i class="fa-brands fa-facebook"></i></Link>
                    <Link to="/" ><i class="fa-brands fa-linkedin-in"></i></Link>
                    <Link to="/" ><i class="fa-brands fa-twitter"></i></Link>
                    </div>
                </div>
                </div>


                <div className="col-lg-3 col-md-4 col-sm-6 col-6 mb-3">
                <div className="card mx-auto" style={{ width: "auto" }} >
                    <img src={image}  className="img-fluid rounded-circle mx-auto mt-3" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-center">Abdul Qadir</h5>
                        <p className="card-text">An Engineer</p>
                    </div>
                    <div>
                    <Link to="/" ><i class="fa-brands fa-facebook"></i></Link>
                    <Link to="/" ><i class="fa-brands fa-linkedin-in"></i></Link>
                    <Link to="/" ><i class="fa-brands fa-twitter"></i></Link>
                    </div>
                </div>
                </div>

                <div className="col-lg-3 col-md-4 col-sm-6 col-6 mb-3">
                <div className="card mx-auto" style={{ width: "auto" }} >
                    <img src={image} className="img-fluid rounded-circle mx-auto mt-3" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-center">Nihal Ahmad</h5>
                        <p className="card-text">A Doctor</p>
                    </div>
                    <div>
                    <Link to="/" ><i class="fa-brands fa-facebook"></i></Link>
                    <Link to="/" ><i class="fa-brands fa-linkedin-in"></i></Link>
                    <Link to="/" ><i class="fa-brands fa-twitter"></i></Link>
                    </div>
                </div>
                </div>

                <div className="col-lg-3 col-md-4 col-sm-6 col-6 mb-3">
                <div className="card mx-auto" style={{ width: "auto" }} >
                    <img src={image} className="img-fluid rounded-circle mx-auto mt-3" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-center">Mohd Mumtaz</h5>
                        <p className="card-text">An Engineer</p>
                    </div>
                    <div>
                    <Link to="/" ><i class="fa-brands fa-facebook"></i></Link>
                    <Link to="/" ><i class="fa-brands fa-linkedin-in"></i></Link>
                    <Link to="/" ><i class="fa-brands fa-twitter"></i></Link>
                    </div>
                </div>
                </div>
                
                
            </div>
    </div>
  )
}

export default Team