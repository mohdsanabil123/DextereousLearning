import React, { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

const Registration = () => {

    const navigate = useNavigate();
    const [studentDetails, setStudentDetails] = useState({
        first_name: "",
        last_name: "",
        phone_number: "",
        password: "",
        email: "",
        address: "",
        school_name: "",
        std: ""
    });

    const inputHandler = (e) => {
        setStudentDetails({
            ...studentDetails,
            [e.target.name]: e.target.value
        })  
    }

    // const inputFileHandler = (e) => {
    //     setStudentDetails({
    //         student_picture: e.target.files[0]
    //     })
    // }


    async function formHandler(e) {
        e.preventDefault()
        // Validation
        if (studentDetails.first_name === '') {
            Swal.fire({
                title: 'Validation error!',
                text: 'Please Enter Your First Name',
                icon: 'warning',
            })
        }
        else if (studentDetails.std === '') {
            Swal.fire({
                title: 'Validation error!',
                text: 'Please Enter Student Class',
                icon: 'warning',
            })
        }
        else if (studentDetails.school_name === '') {
            Swal.fire({
                title: 'Validation error!',
                text: 'Please Provide School Name',
                icon: 'warning',
            })
        }
        else if (studentDetails.email === '') {
            Swal.fire({
                title: 'Validation error!',
                text: 'Please Provide Unique Email',
                icon: 'warning',
            })
        }
        else if (studentDetails.password === '') {
            Swal.fire({
                title: 'Validation error!',
                text: 'Please Choose a strong password',
                icon: 'warning',
            })
        }
        else if (studentDetails.phone_number === '') {
            Swal.fire({
                title: 'Validation error!',
                text: 'Please Provide Unique phone number',
                icon: 'warning',
            })
        }
        
        else {
            try {
                await axios.post( `http://mohdsanabil.pythonanywhere.com/api/users/`, studentDetails )
                Swal.fire({
                    title: 'Registration Successful!',
                    text: 'You have successfully created your account',
                    icon: 'success',
                    timer: 1500,
                    confirmButtonText: 'ok'
                })
                navigate('/login')
    
            } catch (error) {
                Swal.fire({
                    title: 'Error!',
                    text: 'Email or Phone already taken!',
                    icon: 'error'
                })
            }
        }
    }


    return (
        <div className='container custom-margin'>
            <div className="col-lg-5 mx-auto border rounded">
                <div className="col-lg-10 mx-auto p-3">
                <h6 className="mt-0 text-center"><span className='text-danger'>Dextereous</span> Learning</h6>
                    <h2 className="my-3 text-center">Student Registration</h2>
                    <form>
                        <div className="row">
                            <div className="col-md-6 mt-md-0 mt-3">
                                <label>First Name</label>
                                <input type="text" name="first_name" className="form-control" onChange={inputHandler} />
                            </div>
                            <div className="col-md-6 mt-md-0 mt-3">
                                <label>Last Name</label>
                                <input type="text" name="last_name" className="form-control" onChange={inputHandler} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Phone Number</label>
                            <input type="tel" name="phone_number" pattern="[6-9]{1}[0-9]{9}" required className="form-control" onChange={inputHandler} />
                        </div>
                        <div className="row">
                            <div className="col-md-6 mt-md-0 mt-3">
                                <label>Password</label>
                                <input type="password" name="password" className="form-control" autoComplete="current-password" onChange={inputHandler} />
                            </div>
                            <div className="col-md-6 mt-md-0 mt-3">
                                <label>Email</label>
                                <input type="email" name="email" className="form-control" onChange={inputHandler} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mt-md-0 mt-3">
                                <label>School</label>
                                <input type="text" name="school_name" className="form-control" onChange={inputHandler} />
                            </div>
                            <div className="col-md-6 mt-md-0 mt-3">
                                <label>Class</label>
                                <select name="std" className="form-select" onChange={inputHandler}>
                                    <option value=''>Choose class</option>
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
                            <label>Address</label>
                            <input type="text" name="address" className="form-control" onChange={inputHandler} />
                        </div>
                        {/* <div className="form-group">
                            <label>Profile Photo</label>
                            <input type="file" name="student_picture" className="form-control" onChange={inputFileHandler}/>
                        </div> */}

                        <div className="form-group">
                            <input type="submit" onClick={formHandler} className="btn btn-success form-control my-3" value="Create An Account" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Registration
