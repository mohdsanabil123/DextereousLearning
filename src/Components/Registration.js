import React from 'react'

const Registration = () => {
    return (
        <div className='container custom-margin'>
            <div className="col-lg-5 mx-auto border rounded">
                <div className="col-lg-10 mx-auto p-3">
                <h6 className="mt-0 text-center"><span className='text-danger'>Dextereous</span> Learning</h6>
                    <h2 className="my-3 text-center">Student Registration</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="">Student Full Name</label>
                            <input type="text" name="name" required className="form-control" />
                        </div>
                        <div className="row">
                            <div className="col-md-6 mt-md-0 mt-3">
                                <label>Phone</label>
                                <input type="text" className="form-control" required />
                            </div>
                            <div className="col-md-6 mt-md-0 mt-3">
                                <label>Gender</label>
                                <select id="inputState" className="form-select">
                                    <option selected>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mt-md-0 mt-3">
                                <label>Email</label>
                                <input type="email" className="form-control" required />
                            </div>
                            <div className="col-md-6 mt-md-0 mt-3">
                                <label>Password</label>
                                <input type="password" className="form-control" required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mt-md-0 mt-3">
                                <label>School</label>
                                <input type="text" className="form-control" required />
                            </div>
                            <div className="col-md-6 mt-md-0 mt-3">
                                <label>Class</label>
                                <select id="inputState" className="form-select">
                                    <option>Choose class</option>
                                    <option>1st</option>
                                    <option>2nd</option>
                                    <option>3rd</option>
                                    <option>4th</option>
                                    <option>5th</option>
                                    <option>6th</option>
                                    <option>7th</option>
                                    <option>8th</option>
                                    <option>9th</option>
                                    <option>10th</option>
                                    <option>11th</option>
                                    <option>12th</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Address</label>
                            <input type="text" name="phone" required className="form-control " />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Profile Photo</label>
                            <input type="file" name="email" required className="form-control " placeholder="example@gmail.com" />
                        </div>

                        <div className="form-group">
                            <input type="submit" className="btn btn-success form-control my-3" value="Create An Account" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Registration
