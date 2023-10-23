import React from 'react'
import shamail from '../Images/shamail-img.jpeg'
import sanabil from '../Images/sanabil-img.jpg'

const Team = () => {
    return (
        <div className='container-xxxl custom-margin'>
            <section style={{ color: "#000", backgroundColor: "#f3f2f2" }}>
                <div className="container pt-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-10 col-xl-8 text-center">
                            <h2 className="fw-bold mb-4">Meet Our Highly skilled Tutors</h2>
                            <p className="mb-4 pb-2 mb-md-5 pb-md-0">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet
                                numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum
                                quisquam eum porro a pariatur veniam.
                            </p>
                        </div>
                    </div>

                    <div className="row ms-4 me-4 text-center gx-lg-5">
                        <div className="col-md-4 mb-4 mb-md-0">
                            <div className="card">
                                <div className="card-body py-4 mt-2">
                                    <div className="d-flex justify-content-center mb-4">
                                        <img src={shamail}
                                            className="rounded-circle shadow-1-strong" width="100" height="100" alt='Tutor' />
                                    </div>
                                    <h5 className="font-weight-bold">Mohd Shamail</h5>
                                    <h6 className="font-weight-bold my-3">Founder of Dextereous Learning</h6>
                                    <ul className="list-unstyled d-flex justify-content-center">
                                        <li>
                                            <i className="fas fa-star fa-sm text-warning"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star fa-sm text-warning"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star fa-sm text-warning"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star fa-sm text-warning"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star-half-alt fa-sm text-warning"></i>
                                        </li>
                                    </ul>
                                    <p className="mb-2">
                                        <i className="fas fa-quote-left pe-2"></i>Lorem ipsum dolor sit amet,
                                        consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat
                                        ad velit ab hic tenetur.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4 mb-md-0">
                            <div className="card">
                                <div className="card-body py-4 mt-2">
                                    <div className="d-flex justify-content-center mb-4">
                                        <img src={sanabil}
                                            className="rounded-circle shadow-1-strong" width="100" height="100" alt='Tutor' />
                                    </div>
                                    <h5 className="font-weight-bold">Mohd Sanabil</h5>
                                    <h6 className="font-weight-bold my-3">Co-Founder At Dextereous Learning</h6>
                                    <ul className="list-unstyled d-flex justify-content-center">
                                        <li>
                                            <i className="fas fa-star fa-sm text-warning"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star fa-sm text-warning"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star fa-sm text-warning"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star fa-sm text-warning"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star fa-sm text-warning"></i>
                                        </li>
                                    </ul>
                                    <p className="mb-2">
                                        <i className="fas fa-quote-left pe-2"></i>Full stack developer React Js & Django.
                                        magnam officiis quaerat necessitatibus odio assumenda perferendis
                                        labore.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-0">
                            <div className="card">
                                <div className="card-body py-4 mt-2">
                                    <div className="d-flex justify-content-center mb-4">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(17).webp"
                                            className="rounded-circle shadow-1-strong" width="100" height="100" alt='Tutor'/>
                                    </div>
                                    <h5 className="font-weight-bold">Alexa Horwitz</h5>
                                    <h6 className="font-weight-bold my-3">Front-end Developer in NY</h6>
                                    <ul className="list-unstyled d-flex justify-content-center">
                                        <li>
                                            <i className="fas fa-star fa-sm text-warning"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star fa-sm text-warning"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star fa-sm text-warning"></i>
                                        </li>
                                        <li>
                                            <i className="fas fa-star fa-sm text-warning"></i>
                                        </li>
                                        <li>
                                            <i className="far fa-star fa-sm text-warning"></i>
                                        </li>
                                    </ul>
                                    <p className="mb-2">
                                        <i className="fas fa-quote-left pe-2"></i>Cras sit amet nibh libero, in gravida
                                        nulla metus scelerisque ante sollicitudin commodo cras purus odio,
                                        vestibulum in tempus viverra turpis.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Team